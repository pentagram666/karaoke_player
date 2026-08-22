# Karaoke Player — Documentação Técnica

Aplicação web de karaokê que toca arquivos `.KAR`/`.MID` no navegador (síntese via
WebAudioFont, sem plugins), exibe letras sincronizadas e roda um backend Flask
para upload e catalogação das músicas. Pensada para uso em TV/navegador em tela
cheia, com navegação por teclado/controle remoto.

Base original: fork de https://github.com/fraigo/karaoke-player (MIT, Francisco
Igor, 2018 — ver `LICENSE`), bastante reescrito desde então (backend, UI, fila,
upload, catálogo duplo).

## Sumário

- [Stack e execução](#stack-e-execução)
- [Estrutura de diretórios](#estrutura-de-diretórios)
- [Backend (`server.py`)](#backend-serverpy)
- [Catálogo de músicas](#catálogo-de-músicas)
- [Frontend — telas e navegação](#frontend--telas-e-navegação)
- [Player de áudio/MIDI](#player-de-áudiomidi)
- [Sincronização de letras (karaokê)](#sincronização-de-letras-karaokê)
- [Fila de reprodução](#fila-de-reprodução)
- [Upload de músicas](#upload-de-músicas)
- [Temas visuais](#temas-visuais)
- [Backgrounds do player](#backgrounds-do-player)
- [Deploy](#deploy)
- [Correções aplicadas](#correções-aplicadas)

## Stack e execução

- **Backend real:** Python 3.11 + Flask (`server.py`). Serve os arquivos estáticos
  e expõe as rotas de upload/catálogo.
- **Frontend:** HTML/CSS/JS puro, sem framework, sem build step.
- **Áudio:** WebAudioFontPlayer (soundfonts via Web Audio API) — não depende de
  MIDI de hardware nem de plugins do navegador.
- **`index.php`:** opção alternativa de deploy em host PHP, ver [Deploy](#deploy).

Não há dependência de Node.js/npm em runtime — o projeto rodou originalmente
como template Replit (que incluía `node`/`php` no ambiente por padrão), mas a
aplicação em si sempre foi só Python/Flask no backend. Os arquivos específicos
do Replit (`.replit`, `pyproject.toml`, `uv.lock`, `main.py`) e o `package.json`
do Node (sem dependências, não usado) foram removidos do repositório.

Rodar localmente:

```bash
pip install -r requirements.txt
python3 server.py
# abre em http://localhost:5000
```

Em produção, sobe via `gunicorn --bind=0.0.0.0:5000 server:app`.

## Estrutura de diretórios

```
index.html              tela única (SPA) — todas as telas em <div class="screen">
index.php                wrapper p/ deploy tipo Heroku/PHP, apenas inclui index.html
config.js                 caminho da playlist e tema padrão
server.py                 backend Flask (upload, sincronização de catálogo/backgrounds)
requirements.txt          dependências Python (flask, gunicorn)
themes/{basic,sunset,christmas}/theme.css   temas de fundo/cor
assets/css/karaoke.css    estilos principais (telas, HUD, fila, upload)
assets/css/range.css      estilo de slider (não referenciado no index.html atual)
assets/js/player.js       fundo aleatório, exibição/scroll de letras (karaokê)
assets/js/ui.js           navegação por teclado, foco, telas, ações
assets/js/KarFile.js      leitura/parse de arquivos .kar/.mid (extrai letras)
assets/js/midiplayer/     WebAudioFontPlayer + MIDIPlayer + MIDIFile — motor de reprodução
assets/js/midifile/       parser MIDI alternativo (MIDIFileHeader/MIDIEvents), usado pelo KarFile
assets/images/background/ imagens de fundo do player + backgrounds.json (gerado)
assets/music/             catálogo "Internacional" (.kar/.mid) + playlist.json (gerado)
musicas/                  catálogo "Nacional" (.kar/.mid) + playlist.json (gerado)
```

Catálogo atual no repo: ~6895 arquivos em `assets/music` (Internacional) e
~2379 em `musicas` (Nacional).

## Backend (`server.py`)

Framework: Flask. Sem banco de dados — tudo é arquivo em disco, os
`playlist.json` são **gerados**, não editados manualmente.

Rotas:

| Rota | Método | Função |
|---|---|---|
| `/` | GET | serve `index.html` |
| `/upload` | POST | recebe músicas (multipart `files[]` + campo `category`) |
| `/sync-backgrounds` | POST | reescaneia `assets/images/background` e regrava `backgrounds.json` |
| `/<path:path>` | GET | serve estático dentro de `assets/`, `themes/`, `musicas/` ou `config.js` (catch-all restrito por whitelist) |

Categorias de upload (`UPLOAD_DIRS`):
- `internacional` → `assets/music/`
- `nacional` → `musicas/`

**Deduplicação no upload** (`existing_hashes` + `file_hash`): calcula MD5 de
cada arquivo já existente na pasta e do arquivo enviado.
- Mesmo hash de conteúdo já existente → rejeitado como `dup_content` (mesmo
  áudio, nome pode ser diferente).
- Mesmo nome de arquivo já existente (mas conteúdo diferente) → rejeitado como
  `dup_name`.
- Só extensões em `AUDIO_EXTENSIONS = {.kar, .mid, .midi}` são aceitas.

Após qualquer upload bem-sucedido, `sync_playlist(category)` reconstrói o
`playlist.json` daquela categoria a partir do que está fisicamente na pasta
(lista de nomes sem extensão, ordenada case-insensitive). Isso também roda
uma vez na inicialização do servidor para as duas categorias, e para
`backgrounds.json` via `sync_backgrounds()`.

`sync_backgrounds()`: escaneia `assets/images/background`, filtra por
`IMAGE_EXTENSIONS = {.jpg, .jpeg, .png, .gif, .webp, .bmp}`, grava
`backgrounds.json` (lista ordenada de nomes de arquivo).

## Catálogo de músicas

Dois catálogos independentes, cada um com seu próprio `playlist.json`
(array de nomes de arquivo sem extensão):

- **Nacional** — `musicas/playlist.json`, path `musicas/`
- **Internacional** — `assets/music/playlist.json`, path `assets/music/`

No frontend (`index.html`), os dois são carregados juntos
(`loadBothPlaylists`) e recebem uma **numeração global única**: Nacional ocupa
os slots `1..N`, Internacional ocupa `N+1..N+M` (`resolveGlobalNumber`). É essa
numeração global que aparece na lista e é usada para adicionar músicas à fila
pelo teclado numérico.

Formatação de título (`formatSongTitle`): remove sufixo tipo `_1`, `_A`,
`_BR`, `_01` no fim do nome e troca `_` por espaço — os arquivos `.kar` do
catálogo costumam ter esses sufixos no nome de arquivo original.

## Frontend — telas e navegação

`index.html` é uma SPA de tela única: cada tela é uma `<div class="screen">`
e `showScreen(id)` alterna a classe `active` (`assets/js/ui.js`). Telas:

- `screen-home` — menu principal (Músicas / Adicionar / Tema)
- `screen-songs` — lista de músicas, com switcher de categoria
  (Internacional/Nacional) e busca por texto
- `screen-upload` — drag-and-drop / seleção de arquivos para upload
- `screen-themes` — seleção de tema visual
- `screen-player` — player com letras, HUD, fila, controles

Navegação é 100% orientada a teclado/controle remoto, pensada para TV:

- Setas: move foco entre elementos `.focusable` da tela atual
  (`moveFocus`/`applyFocus`); em `screen-songs`, esquerda/direita trocam de
  categoria em vez de mover foco.
- Enter/OK: ativa o item focado (`activateFocused`) — abre tela, aplica tema
  ou toca a música.
- Esc/Voltar/Backspace do controle remoto: volta pra Home (ou fecha
  painel/cancela countdown se estiver ativo).
- Teclas de mídia (play/pause/stop/next/prev, inclusive códigos de tecla de
  controle remoto tipo `179`/`178`/`176`/`177`) são tratadas dentro da tela do
  player.
- Dígitos `0`–`9` na tela do player abrem o painel de "adicionar à fila por
  número" (ver [Fila de reprodução](#fila-de-reprodução)).

## Player de áudio/MIDI

Motor de reprodução em `assets/js/midiplayer/`:

- `WebAudioFontPlayer.js` — sintetizador via Web Audio API usando soundfonts,
  não depende de dispositivo MIDI real.
- `MIDIFile.js` (dentro de `midiplayer/`) — parsing baixo nível do arquivo MIDI.
- `MIDIPlayer.js` — camada de controle: `play()`, `pause()`, `stop()`,
  `setPosition()`, `getPosition()`, eventos `onload`/`ontick`. Mantém estado
  `STOPPED`/`PLAYING`/`PAUSED`.

`KarFile.js` reaproveita a mesma classe `MIDIFile` (global definida por
`midiplayer/MIDIFile.js`) só para **extrair letras** dos eventos de texto,
usando também `assets/js/midifile/MIDIFileHeader.js` (redefine o global
`MIDIFileHeader` por cima da versão já carregada — redundante, mas equivalente).
Os outros dois arquivos em `assets/js/midifile/` (`MIDIFile.js` bundle
browserify e `MIDIEvents.js`) **não são carregados por `index.html`** — são
código morto, sobras de uma versão anterior da lib.

Carregamento de música: `playUrl(path, name)` em `player.js` busca
`path + name + '.kar'` via `KarFile`, extrai as letras (`loadKar`) e entrega o
buffer bruto pro `player.openFile(buffer)` tocar.

Arquivos `.kar`/`.mid` corrompidos (índice de fim de faixa MIDI ausente/
inválido) fazem o parser lançar exceção — `KarFile.readUrl` captura isso e
`playUrl` mostra um aviso rápido na tela do player em vez de travar
silenciosamente. No catálogo atual, uma amostra de ~420 arquivos achou 3 casos
assim (todos em `musicas/`).

## Sincronização de letras (karaokê)

`drawKaraoke()` em `player.js` roda em loop (`setTimeout`, ~100ms):

1. Pega a posição atual de playback (`player.getPosition()`).
2. Acha a linha de letra ativa comparando `lyrics[i].time` com o tempo atual.
3. Dentro da linha ativa, cada "parte" (`parts[]`, granularidade de sílaba/
   palavra conforme os eventos de lyrics do MIDI) é pintada como "cantada"
   (`.lyric-sung`) ou "pendente" (`.lyric-pending`) conforme seu `time`.
4. Ao trocar de linha, `transitionLyricLine` faz slide-out da linha atual e
   slide-in da próxima; a linha seguinte é sempre mostrada em preview
   (`lyricNextEl`).

Sem letras no arquivo → fallback `"Sem letra"`.

## Fila de reprodução

Estado global `songQueue` (array de `{path, filename, number}`).

- **Adicionar por número:** dígitos no teclado numérico enquanto na tela do
  player abrem um painel (`queue-number-panel`); `commitQueueNumber()` resolve
  o número global pra música (`resolveGlobalNumber`) e empilha na fila. Painel
  fecha sozinho após 3s de inatividade (`DIGIT_TIMEOUT`).
- **Fim de música:** `detectSongEnd` observa a posição de playback pra
  detectar quando ela "voltou pro início" (posição caiu de >85% pra <10% da
  duração) — não depende de evento nativo de fim de faixa.
- **Troca automática:** ao detectar fim, se a fila não estiver vazia,
  `startQueueCountdown()` mostra overlay com contagem regressiva de 10s antes
  de carregar a próxima música da fila (`ESC` durante o countdown cancela e
  descarta o próximo item).
- HUD da fila (`queue-hud`) mostra até 6 próximos itens + contador do
  restante.

## Upload de músicas

Tela `screen-upload`: drag-and-drop ou seleção manual, filtra client-side por
extensão (`.kar`/`.mid`/`.midi`), escolhe categoria (rádio Nacional/
Internacional) e envia via `fetch('/upload', {method:'POST', body:formData})`.

Resposta do backend traz `saved`, `dup_name`, `dup_content` e `total` — a UI
mostra essas listas separadamente pro usuário entender por que um arquivo não
entrou. Após sucesso, `refreshAllAndRender()` recarrega os dois
`playlist.json` pra manter a numeração global atualizada sem precisar dar
reload na página.

## Temas visuais

Três temas em `themes/{basic,sunset,christmas}/theme.css`, todos linkados
sempre no `<head>`; a classe no `<body>` (`sunset`/`basic`/`christmas`/`none`)
decide qual vale. Tema pode vir por:

- hash da URL (`#sunset`, `#basic`, `#christmas`, `#none`)
- `window.defaultTheme` em `config.js` (fallback `"sunset"`)
- seleção manual na tela `screen-themes` (`applyTheme`, grava no hash pra
  persistir em reload/bookmark)

## Backgrounds do player

`assets/images/background/backgrounds.json` (gerado por `sync_backgrounds()`
no backend) lista as imagens disponíveis. A cada `loadSong`,
`pickRandomBackground()` sorteia uma imagem e aplica como fundo da tela do
player (`player-bg-image`). Pra atualizar depois de adicionar imagens
manualmente na pasta sem reiniciar o servidor, chamar `POST /sync-backgrounds`.

## Deploy

Genérico, qualquer host com Python 3.11+:

```bash
pip install -r requirements.txt
gunicorn --bind=0.0.0.0:5000 --reuse-port server:app
```

`index.php` existe separadamente como opção de deploy em host PHP (Heroku
antigo), só faz `include("index.html")` — não interage com o backend Flask.

## Correções aplicadas

Achados da revisão de código, já corrigidos:

- **Vazamento de código-fonte via HTTP (segurança).** A rota catch-all
  `/<path:path>` usava `send_from_directory('.', path)` sem restrição —
  servia qualquer arquivo do diretório raiz do projeto, incluindo `server.py`
  e **`.git/config`** (repositório git inteiro navegável via HTTP, já que o
  próprio working tree é o webroot). Corrigido com whitelist de prefixos
  (`assets/`, `themes/`, `musicas/`, `config.js`); confirmado com testes
  antes/depois (`server.py`, `requirements.txt` e `.git/config` agora voltam
  404, os assets legítimos continuam 200).
- **XSS via nome de arquivo na tela de upload.** `index.html` montava a lista
  de arquivos selecionados e as mensagens de duplicidade com `innerHTML` +
  concatenação direta do nome do arquivo (sem escape) — um arquivo com nome
  tipo `<img src=x onerror=...>.kar` executava HTML/JS arbitrário na tela de
  upload. Trocado por `textContent`/DOM nodes na lista de arquivos e pela
  função `escHtml` (já existente em `player.js`) nas mensagens de duplicidade.
- **Typo `lenght` em `KarFile.js`** (`line.charAt(line.lenght-1)`) deixava um
  branch de quebra de linha de letra sempre morto. Corrigido para `length`;
  validado rodando o parser antes/depois contra `.kar` reais — saída de
  letras idêntica byte a byte, sem regressão.
- **Exceção não tratada em `.kar` corrompido travava a troca de música
  silenciosamente** (sem tela de erro, sem log visível pro usuário). Ver
  [Player de áudio/MIDI](#player-de-áudiomidi).

**Limpeza de nomes do catálogo** (2026-08-22): 576 arquivos sem separador
"Artista - Musica" claro foram checados contra a iTunes Search API
(`country=BR` pra `musicas/`, `US` pra `assets/music/`); 197 renomeados com
confiança ≥0.72, 313 mantidos como estavam por falta de match confiável, 66
apontaram pra um nome já existente no catálogo (duplicata provável, não
apagados). `playlist.json` das duas categorias foi regenerado depois. Lista
completa em [`docs/naming-cleanup-report.md`](naming-cleanup-report.md). Os
~9200 arquivos que já pareciam bem formatados não foram reverificados —
confirmar a ordem Artista/Musica de todo o catálogo exigiria ~9000 chamadas
de API a ~20/min (várias horas).

Pontos remanescentes, de baixo risco/baixa prioridade:

- **`assets/css/range.css`** não está referenciado em `index.html` (só os
  três `theme.css` + `karaoke.css` são carregados) — arquivo órfão.
- **`assets/js/midifile/MIDIFile.js`** e **`MIDIEvents.js`** são código morto
  (não carregados por `index.html`), ver [Player de áudio/MIDI](#player-de-áudiomidi).
- Fluxo de abrir `.kar` local direto (`readKar`/`readFileInput`, acionado por
  uma ação `open-upload` que não tem elemento correspondente em
  `index.html`) está inacessível pela UI atual — a tela de upload por
  servidor (`screen-upload`) é o caminho real.
