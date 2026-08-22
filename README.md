# 🎤 Karaoke Player Web

Aplicação web de karaokê com suporte a reprodução e gerenciamento de músicas, permitindo upload de arquivos `.KAR` e `.MIDI`, criação de playlists e execução diretamente no navegador.

---

## 🎯 Objetivo

Desenvolver uma aplicação web interativa para reprodução de karaokê, com suporte a catálogo personalizado de músicas e controle de execução em tempo real, inclusive em ambientes como TVs Smart com acesso web.

---

## 🧩 Tecnologias Utilizadas

* Python (Flask)
* HTML
* CSS
* JavaScript

---

## ⚙️ Funcionalidades

* 🎵 Reprodução de músicas nos formatos `.KAR` e `.MIDI`
* 📂 Upload múltiplo de arquivos de karaokê
* 🧠 Detecção automática de arquivos duplicados
* 🏷️ Tratamento automático de nomes (ex: "_" → espaço)
* 🌎 Classificação de músicas (Nacional / Internacional)
* 📋 Criação e gerenciamento de playlists
* 🔁 Execução automática de músicas em sequência
* ➕ Adição dinâmica de músicas à fila durante a reprodução (sem limite de itens)
* 🎹 Inserção rápida via número da música diretamente no player
* 📺 Interface otimizada para uso em TVs Smart ou dispositivos com navegador
* 🖥️ Interface interativa para controle de reprodução
* 📁 Organização de catálogo de músicas

---

## 🧠 Arquitetura

A aplicação utiliza uma estrutura híbrida:

* **Frontend:** Interface web para interação do usuário e controle da reprodução
* **Backend:** Processamento de arquivos e lógica de execução utilizando Python (Flask)
* **Integração:** Comunicação entre frontend e backend para gerenciamento de músicas e reprodução

---

## 📦 Como executar o projeto

### 1. Clone o repositório

```bash id="clone2"
git clone https://github.com/pentagram666/karaoke_player.git
```

---

### 2. Acesse a pasta do projeto

```bash id="cd2"
cd karaoke_player
```

---

### 3. Instale as dependências

```bash id="install2"
pip install -r requirements.txt
```

---

### 4. Execute o servidor

```bash id="run2"
python3 server.py
```

---

### 5. Acesse no navegador

```bash id="url2"
http://localhost:5000
```

---

## 🔀 Base do Projeto

Este projeto foi inicialmente baseado em um fork de:

🔗 https://github.com/fraigo/karaoke-player

A partir dessa base, foram realizadas diversas modificações e melhorias, incluindo:

* Implementação de backend com Python (Flask)
* Suporte a upload de arquivos `.KAR` e `.MIDI`
* Sistema de upload múltiplo com validação de duplicidade
* Tratamento automático de nomes de arquivos
* Classificação de músicas (Nacional / Internacional)
* Sistema de fila dinâmica com inserção durante execução
* Reestruturação da interface e adaptação para uso em TV
* Expansão das funcionalidades de reprodução

---

## 📌 Possíveis melhorias

* Integração com banco de dados
* Sistema de autenticação de usuários
* Upload com validações adicionais
* Interface mais avançada para playlists
* Deploy com armazenamento persistente

---

## 💡 Observações

Este projeto demonstra a evolução de uma base existente para uma aplicação completa, com foco em uso real, incluindo execução contínua de playlists, inserção dinâmica de músicas e compatibilidade com dispositivos de exibição como TVs.

---

## 👨‍💻 Autor

Desenvolvido por Anderson Vasconcellos
🔗 https://github.com/pentagram666
