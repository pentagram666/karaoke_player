# Relatório de limpeza de nomes do catálogo

Rodado com iTunes Search API (limiar de confiança 0.72) sobre os 576 arquivos
sem separador claro ("Artista - Musica") em `musicas/` e `assets/music/`.
Os ~9200 arquivos que já pareciam bem formatados **não foram verificados** —
checar todos exigiria ~9000 chamadas de API a ~20/min (várias horas), fora do
escopo desta passada.

- Renomeados (match confiável): **197**
- Sem match confiável, arquivo mantido como estava: **313**
- Nome resolvido já existe no catálogo (duplicata provável, não mexido): **66**

## Renomeados

| Pasta | Nome antigo | Nome novo | Confiança |
|---|---|---|---|
| assets/music | Alegria alegria_Caetano Veloso.kar | Caetano Veloso - Alegria, Alegria.kar | 0.73 |
| assets/music | Alex_Ubago_Cuanto_antes.kar | Alex Ubago - Cuanto Antes.kar | 1.0 |
| assets/music | Bezerra-da-Silva_Malandragem-da-um-tempo-d.kar | Bezerra da Silva - Malandragem Dá Um Tempo.kar | 0.843 |
| assets/music | Christina_Aguilera_Genio_atrapado.kar | Christina Aguilera - Genio Atrapado.kar | 1.0 |
| assets/music | Christina_Aguilera_feat_Ricky_Martin_Nobody_wants_to_be_lonely.kar | Ricky Martin - Nobody Wants to Be Lonely.kar | 0.73 |
| assets/music | Colori_del_vento.kar | Bebe - I colori del vento.kar | 0.785 |
| assets/music | Colors_of_the_wind.kar | Judy Kuhn - Colors of the Wind.kar | 0.725 |
| assets/music | Cowboy fora da lei.kar | Gabeu - Cowboy Fora da Lei.kar | 0.829 |
| assets/music | Eagles_Hotel_california.kar | Eagles - Hotel California.kar | 1.0 |
| assets/music | Eurythmics_I-saved-the-world.kar | Eurythmics - I Saved the World Today.kar | 0.803 |
| assets/music | Freddy-Fender_Wasted-days-and-wasted-nights.kar | Freddy Fender - Wasted Days And Wasted Nights.kar | 0.942 |
| assets/music | Jackie tequila.kar | Skank - Jackie Tequila.kar | 0.745 |
| assets/music | Jonny Alf Eu e a brisa_.kar | Johnny Alf - Eu e a Brisa.kar | 0.789 |
| assets/music | Journey_Wheel_in_the_sky.kar | Journey - Wheel in the Sky.kar | 1.0 |
| assets/music | Lenny_Kravitz_American_woman.kar | Lenny Kravitz - American Woman.kar | 1.0 |
| assets/music | Lenny_Kravitz_Are_you_gonna_go_my_way.kar | Lenny Kravitz - Are You Gonna Go My Way.kar | 1.0 |
| assets/music | Los-Bravos_Black-is-black.kar | Los Bravos - Black Is Black.kar | 0.94 |
| assets/music | Mary Chapin Carpenter - i feel lucky - .kar | Mary Chapin Carpenter - I Feel Lucky.kar | 0.972 |
| assets/music | Michael_-_Jackson_-_Give_in_to_me.kar | Michael Jackson - Give In to Me.kar | 0.968 |
| assets/music | Nelly_Furtado-Turn_Off_The_Light.kar | Nelly Furtado - Turn Off the Light.kar | 0.984 |
| assets/music | Ritchie_Transas.kar | Ritchie - Transas.kar | 1.0 |
| assets/music | Shania-Twain_Home-aint-where-his-heart-is.kar | Shania Twain - Home Ain't Where His Heart Is (Anymore).kar | 0.726 |
| assets/music | Shania-Twain_You-ve-got-a-way.kar | Shania Twain - You've Got A Way.kar | 0.914 |
| assets/music | Supertramp_Dreamer.kar | Supertramp - Dreamer.kar | 1.0 |
| assets/music | Tatu-Not_Gonna_Get_Us.mid | t.A.T.u. - Not Gonna Get Us.mid | 0.835 |
| assets/music | let me call you sweetheart.kar | Bette Midler - Let Me Call You Sweetheart.kar | 0.757 |
| assets/music | ritchie- menina veneno.mid | Ritchie - Menina Veneno.mid | 0.988 |
| musicas | 14Bis Bola de Meia Bola de Gude_.kar | 14 Bis - Bola de Meia, Bola de Gude.kar | 0.77 |
| musicas | Adilson Ramos-Sonhar Contigo.kar | Adilson Ramos - Sonhar Contigo.kar | 0.982 |
| musicas | Adoniran Barbosa Samba Do Arnesto.kar | Adoniran Barbosa - Samba do Arnesto.kar | 1.0 |
| musicas | Alcione Delírios de amor-.kar | Alcione - Delírios de Amor (Chamego).kar | 0.807 |
| musicas | Alegria alegria_Caetano Veloso.kar | Caetano Veloso - Alegria, Alegria.kar | 0.73 |
| musicas | Altemar-Dutra_O-trovador.kar | Altemar Dutra - O Trovador.kar | 0.958 |
| musicas | As dores do mundo_Jota Quest.kar | Jota Quest - As Dores do Mundo.kar | 0.804 |
| musicas | Asa morena-Zizi Possi.kar | Zizi Possi - Asa Morena.kar | 0.738 |
| musicas | Banda Eva Coleção-.kar | Banda Eva - Coleção.kar | 0.986 |
| musicas | Banda Eva Eva-.kar | Banda Eva - Eva (Eva).kar | 0.894 |
| musicas | Barão Vermelho Bete balanço.kar | Barão Vermelho - Bete Balanço.kar | 1.0 |
| musicas | Bezerra-da-Silva_Malandragem-da-um-tempo-d.kar | Bezerra da Silva - Malandragem Dá Um Tempo.kar | 0.843 |
| musicas | Biquini Cavadão Tedio.kar | Biquini Cavadão - Tédio.kar | 0.726 |
| musicas | Caetano Veloso Queixa.kar | Caetano Veloso - Queixa.kar | 1.0 |
| musicas | Caetano Veloso Sampa.kar | Caetano Veloso - Sampa.kar | 1.0 |
| musicas | Caetano Veloso-Trilhos_Urbanos.kar | Caetano Veloso - Trilhos Urbanos.kar | 0.983 |
| musicas | Caetano_Veloso-London_London.kar | Caetano Veloso - London London.kar | 0.982 |
| musicas | Caetano_Veloso-Um_Frevo_Novo.kar | Caetano Veloso - Um Frevo Novo.kar | 0.982 |
| musicas | Caetano_Veloso_De_Noite_na_Cama.kar | Caetano Veloso - De Noite Na Cama.kar | 1.0 |
| musicas | Carinhoso-Pixinguinha.kar | Pixinguinha - Carinhoso.kar | 0.762 |
| musicas | Casinha branca.kar | Gilson - Casinha Branca.kar | 0.733 |
| musicas | Catedral-Zélia Duncan.kar | Zélia Duncan - Catedral.kar | 0.786 |
| musicas | Cazuza Faz Parte Do Meu Show_.kar | Cazuza - Faz Parte do Meu Show.kar | 1.0 |
| musicas | Cerveja-Leandro e Leonardo.kar | Leandro & Leonardo - Cerveja.kar | 0.827 |
| musicas | Cheia de charme-Guilherme Arantes.kar | Guilherme Arantes - Cheia de Charme.kar | 0.758 |
| musicas | Cheiro de amor A dança da sensual-.kar | Banda Cheiro de Amor - A Dança da Sensual.kar | 0.881 |
| musicas | Cheiro_de_Amor-Pense_Em_Mim_1.mid | Cheiro De Amor - Pense em Mim.mid | 0.964 |
| musicas | Chico Buarque Apesar De Voce.kar | Chico Buarque - Apesar de Você.kar | 0.815 |
| musicas | Chico Buarque Festa Imodesta.kar | Chico Buarque - Festa Imodesta.kar | 1.0 |
| musicas | Chico Buarque Joana Francesa_.kar | Chico Buarque - Joana Francesa.kar | 1.0 |
| musicas | Chico Buarque Lagrima.kar | Chico Buarque - Lágrima.kar | 0.726 |
| musicas | Chico Buarque Partido Alto.kar | Chico Buarque - Partido Alto (Ao Vivo).kar | 0.753 |
| musicas | Chico_Cesar-A_Primeira_Vista.kar | Chico César - Á Primeira Vista.kar | 0.746 |
| musicas | Chitãozinho & Xororó Coracao sertanejo.kar | Chitãozinho & Xororó - Coração Sertanejo.kar | 0.774 |
| musicas | Chitãozinho & Xororó Fio De Cabelo.kar | Chitãozinho & Xororó - Fio de Cabelo.kar | 1.0 |
| musicas | Chitãozinho & Xororó Majestade.kar | Chitãozinho & Xororó - Majestade, O Sabia.kar | 0.81 |
| musicas | Chitãozinho & Xororó Nuvem de  lágrimas.kar | Chitãozinho & Xororó - Nuvem De Lágrimas.kar | 1.0 |
| musicas | Chitãozinho & Xororó Pura emocao.kar | Chitãozinho & Xororó - Pura Emoção.kar | 0.769 |
| musicas | Chitãozinho e Xororó Deixa_.kar | Chitãozinho & Xororó - Deixa (Deja).kar | 0.799 |
| musicas | Cidade Negra Aonde você mora-.kar | Cidade Negra - Onde Você Mora.kar | 0.807 |
| musicas | Cleiton e Camargo Agenda rabiscada-.kar | Cleiton e Camargo - Agenda Rabiscada.kar | 0.993 |
| musicas | Cleyton e Camargo Quando um grande amor se faz (Cantare é d.kar | Cleiton e Camargo - Quando um Grande Amor Se Faz (Cantare e D'Amore).kar | 0.82 |
| musicas | Daniela Mercury À primeira vista-.kar | Daniela Mercury - A Primeira Vista.kar | 0.977 |
| musicas | Danilo Caymmi Andanca_.kar | Danilo Caymmi - Andança.kar | 0.726 |
| musicas | Djavan Eu te devoro-.kar | Djavan - Eu Te Devoro.kar | 0.987 |
| musicas | Djavan Flor de liz-.kar | Djavan - Flor de Liz.kar | 0.986 |
| musicas | Djavan Serrado.kar | Djavan - Serrado.kar | 1.0 |
| musicas | Djavan Sina.kar | Djavan - Sina.kar | 1.0 |
| musicas | Djavan se.kar | Djavan - Se.kar | 1.0 |
| musicas | Elba Ramalho De Volta pro Aconchego.kar | Elba Ramalho - De Volta Pro Aconchego.kar | 1.0 |
| musicas | Elba_Ramalho-Ciranda_da_Rosa_Vermelha.kar | Elba Ramalho - Ciranda da Rosa Vermelha.kar | 0.986 |
| musicas | Elis Regina Alo Alo Marciano.kar | Elis Regina - Alô! Alô! Marciano.kar | 0.967 |
| musicas | Elis Regina Atrás da porta-.kar | Elis Regina - Atrás da Porta.kar | 0.991 |
| musicas | Elis Regina Fascinação-.kar | Elis Regina - Fascinação.kar | 0.989 |
| musicas | Exaltasamba Cartão postal-.kar | Exaltasamba - Cartão Postal.kar | 0.99 |
| musicas | Fabio Jr Caça E Caçador.KAR | Fábio Jr. - Caça e Caçador.KAR | 0.768 |
| musicas | Fagner Canteiros.kar | Fagner - Canteiros.kar | 1.0 |
| musicas | Fagner Deslizes-.kar | Fagner - Deslizes.kar | 0.984 |
| musicas | Falamansa_Rindo_a_toa.kar | Falamansa - Rindo a Toa.kar | 1.0 |
| musicas | Falamansa_Rindo_a_toa.mid | Falamansa - Rindo a Toa.mid | 1.0 |
| musicas | Flavio Venturini Espanhola_.kar | Flávio Venturini - Espanhola.kar | 0.731 |
| musicas | Flávio Venturini Criaturas da noite-.kar | Flávio Venturini - Criaturas da Noite.kar | 0.993 |
| musicas | Fricote-Art Popular.kar | Art Popular - Fricote.kar | 0.789 |
| musicas | Gal Costa Baby.kar | Gal Costa - Baby.kar | 1.0 |
| musicas | Gal Costa Bloco Do Prazer.kar | Gal Costa - Bloco do Prazer.kar | 1.0 |
| musicas | Gal Costa Festa do interior-.kar | Gal Costa - Festa Do Interior.kar | 0.991 |
| musicas | Gal Costa Meu Bem Meu Mal.kar | Gal Costa - Meu Bem Meu Mal.kar | 1.0 |
| musicas | Gal_Costa-Chuva_De_Prata.kar | Gal Costa - Chuva de Prata (Ao Vivo).kar | 0.754 |
| musicas | Garota nacional-Skank.kar | Skank - Garota Nacional.kar | 0.857 |
| musicas | Gaúcho da Fronteira É disso que o velho gosta-.kar | Gaúcho Da Fronteira - É Disso Que o Velho Gosta.kar | 0.995 |
| musicas | Gian & Giovanni Por telefone.kar | Gian & Giovani - Por Telefone.kar | 0.791 |
| musicas | Gilberto Gil Drao.kar | Gilberto Gil - Drão.kar | 0.721 |
| musicas | Gilberto Gil Palco.kar | Gilberto Gil - Palco.kar | 1.0 |
| musicas | Gilberto Gil Refazenda.kar | Gilberto Gil - Refazenda.kar | 1.0 |
| musicas | Gilberto Gil Super homem a Cancao.kar | Gilberto Gil - Super-Homem - a Canção.kar | 0.775 |
| musicas | Gonzaguinha Comecaria Tudo Outra Vez.kar | Canta Gonzaguinha - Comecaria Tudo Outra Vez.kar | 0.872 |
| musicas | Gonzaguinha Comportamento Geral.kar | Gonzaguinha - Comportamento Geral.kar | 1.0 |
| musicas | Gonzaguinha Espere Por Mim Morena_.kar | Gonzaguinha - Espere por Mim Morena.kar | 1.0 |
| musicas | Grupo Molejo Dança da vassoura_.kar | Molejo - Dança da vassoura.kar | 0.844 |
| musicas | Guilherme Arantes A cidade e a Neblina.kar | Guilherme Arantes - A Cidade e a Neblina.kar | 1.0 |
| musicas | Guilherme Arantes Antes da chuva chegar_.kar | Guilherme Arantes - Antes da Chuva Chegar.kar | 1.0 |
| musicas | Guilherme Arantes Aprendendo a jogar_.kar | Guilherme Arantes - Aprendendo A Jogar.kar | 1.0 |
| musicas | Guilherme Arantes Brincar De Viver.kar | Guilherme Arantes - Brincar De Viver.kar | 1.0 |
| musicas | Guilherme Arantes Coisas do Brasil-.kar | Guilherme Arantes - Coisas Do Brasil.kar | 0.993 |
| musicas | Guilherme Arantes Deixa Chover.kar | Guilherme Arantes - Deixa Chover.kar | 1.0 |
| musicas | Guilherme Arantes Descer a Serra_.kar | Guilherme Arantes - Descer a Serra (Sorocabana).kar | 0.816 |
| musicas | Guilherme Arantes Fã número um_.kar | Guilherme Arantes - Fã Número 1 (Remix).kar | 0.766 |
| musicas | Guilherme Arantes Lance Legal.kar | Guilherme Arantes - Lance Legal.kar | 1.0 |
| musicas | Guilherme Arantes Meu mundo E nada Mais_.kar | Guilherme Arantes - Meu Mundo e Nada Mais.kar | 1.0 |
| musicas | Guilherme_Arantes-Loucas_Horas.kar | Guilherme Arantes - Loucas Horas.kar | 0.983 |
| musicas | Guilherme_Arantes-Nave_Errante.kar | Guilherme Arantes - Nave Errante.kar | 0.983 |
| musicas | Guilherme_Arantes-Xixi_Nas_Estrelas.kar | Guilherme Arantes - Xixi nas Estrelas.kar | 0.986 |
| musicas | Hino a Bandeira do Brasil.kar | Ilton Saba - Hino a Bandeira do Brasil.kar | 0.743 |
| musicas | Hino do Corinthians.kar | Coro - Hino do Corinthians.kar | 0.817 |
| musicas | Hino do Flamengo.kar | Junior - Hino do Flamengo.kar | 0.785 |
| musicas | Hoje_Taiguara.kar | Taiguara - Hoje.kar | 0.808 |
| musicas | Há tempos-Legião Urbana.kar | Legião Urbana - Há Tempos.kar | 0.783 |
| musicas | Indiferença-Zezé di Camargo e Luciano.kar | Zezé Di Camargo & Luciano - Indiferença.kar | 0.824 |
| musicas | Infantil-Xuxa-Festa_do_Estica_e_Puxa.kar | Xuxa - Festa do Estica e Puxa.kar | 0.829 |
| musicas | Ivan Lins Começar de novo_.kar | Ivan Lins - Começar de Novo.kar | 1.0 |
| musicas | Ivan Lins Madalena.kar | Ivan Lins - Madalena.kar | 1.0 |
| musicas | Ivete sangalo Beleza rara.kar | Ivete Sangalo - Beleza Rara.kar | 1.0 |
| musicas | Ivete-Sangalo_A-festa.KAR | Ivete Sangalo - Festa.KAR | 0.95 |
| musicas | Jackie tequila.kar | Skank - Jackie Tequila.kar | 0.745 |
| musicas | Joao Mineiro e Marciano Ontem chorei de saudade.kar | João Mineiro & Marciano - Ainda Ontem Chorei de Saudade.kar | 0.783 |
| musicas | Jonny Alf Eu e a brisa_.kar | Johnny Alf - Eu e a Brisa.kar | 0.789 |
| musicas | José Augusto Aguenta coração-.kar | José Augusto - Aguenta Coração.kar | 0.991 |
| musicas | Kid Abelha Pintura intima.kar | Kid Abelha - Pintura Íntima.kar | 0.78 |
| musicas | Leandro & Leonardo Anarriê.kar | Leandro & Leonardo - Anarriê.kar | 1.0 |
| musicas | Leandro & Leonardo Cumade e cumpade.kar | Leandro & Leonardo - Cumade e Cumpade.kar | 1.0 |
| musicas | Leandro & Leonardo Deu medo.kar | Leandro & Leonardo - Deu Medo.kar | 1.0 |
| musicas | Leandro & Leonardo Doce mistério.kar | Leandro & Leonardo - Doce Mistério.kar | 1.0 |
| musicas | Leandro & Leonardo Eu juro (I swear).kar | Leandro & Leonardo - Eu Juro (I Swear).kar | 1.0 |
| musicas | Leandro & Leonardo Mexe mexe.kar | Leandro & Leonardo - Mexe Mexe.kar | 1.0 |
| musicas | Leandro & Leonardo Não aprendi dizer adeus.kar | Leandro & Leonardo - Não Aprendí a Dizer Adeus.kar | 0.834 |
| musicas | Leandro & Leonardo Pense Em Mim.kar | Leandro & Leonardo - Pense Em Mim.kar | 1.0 |
| musicas | Leandro & Leonardo Um sonhador.kar | Leandro & Leonardo - Um Sonhador.kar | 1.0 |
| musicas | Lulu Santos Dancin Days.kar | Lulu Santos - Dancin' Days.kar | 0.989 |
| musicas | Lulu Santos Descobridor Dos Sete Mares.kar | Lulu Santos - O Descobridor Dos Sete Mares.kar | 0.987 |
| musicas | Lulu Santos Um certo alguem.kar | Lulu Santos - Um Certo Alguém.kar | 0.815 |
| musicas | Lulu_Santos_De_repente_california.kar | Lulu Santos - De Repente Califórnia.kar | 0.818 |
| musicas | Mamonas Assassinas Pelados Em Santos.kar | Mamonas Assassinas - Pelados em Santos.kar | 1.0 |
| musicas | Maria Bethania Negue.kar | Maria Bethânia - Negue.kar | 0.725 |
| musicas | Maria Bethania Ronda.kar | Maria Bethânia - Ronda.kar | 0.725 |
| musicas | Milton Nascimento  Coracao De Estudante.kar | Milton Nascimento - Coração de Estudante.kar | 0.807 |
| musicas | Milton Nascimento Fe Cega Faca Amolada_.kar | Milton Nascimento - Fé Cega, Faca Amolada.kar | 0.838 |
| musicas | Milton Nascimento Nada Sera Como Antes.kar | Milton Nascimento - Nada Será Como Antes (Acústico).kar | 0.738 |
| musicas | Milton Nascimento Ponta De Areia.kar | Milton Nascimento - Ponta de Areia.kar | 1.0 |
| musicas | Milton Nascimento Travessia.kar | Milton Nascimento - Travessia.kar | 1.0 |
| musicas | Nelson Gonçalves A volta do boêmio.kar | Nelson Gonçalves - A Volta Do Boêmio.kar | 1.0 |
| musicas | Paralamas do Sucesso  Ela disse adeus.kar | Os Paralamas do Sucesso - Ela Disse Adeus.kar | 0.909 |
| musicas | Paralamas do Sucesso Meu Erro.kar | Os Paralamas do Sucesso - Meu Erro.kar | 0.892 |
| musicas | Rau Seixas Cowboy fora da lei.kar | Raul Seixas - Cowboy Fora da Lei.kar | 0.849 |
| musicas | Raul Seixas Medo da chuva.kar | Raul Seixas - Medo da Chuva.kar | 1.0 |
| musicas | Rick Rener Ela e demais.kar | Rick & Renner - Ela É Demais.kar | 0.749 |
| musicas | Ritchie_Transas.kar | Ritchie - Transas.kar | 1.0 |
| musicas | Roberta-Miranda_Atracao-fatal.kar | Roberta Miranda - Atração Fatal.kar | 0.731 |
| musicas | Roberto Carlos Amante a Moda Antiga.kar | Roberto Carlos - Amante a Moda Antiga.kar | 1.0 |
| musicas | Roberto Carlos Amigo.kar | Roberto Carlos - Amigo.kar | 1.0 |
| musicas | Roberto Carlos Cavalgada.kar | Roberto Carlos - Cavalgada.kar | 1.0 |
| musicas | Roberto Carlos Coimbra.kar | Roberto Carlos - Coimbra (Remasterizada).kar | 0.742 |
| musicas | Roberto Carlos Como é grande o meu amor por você.kar | Roberto Carlos - Como É Grande o Meu Amor por Você.kar | 1.0 |
| musicas | Roberto Carlos Debaixo Dos Caracois Dos Seus Cabelos.kar | Roberto Carlos - Debaixo dos Caracóis dos Seus Cabelos.kar | 0.865 |
| musicas | Roberto Carlos Detalhes.kar | Roberto Carlos - Detalhes.kar | 1.0 |
| musicas | Roberto Carlos Na Paz Do Seu Sorriso.kar | Roberto Carlos - Na Paz do Seu Sorriso (Versão Remasterizada).kar | 0.768 |
| musicas | Roberto Carlos Outra vez.kar | Roberto Carlos - Outra Vez.kar | 1.0 |
| musicas | Roberto-Carlos_Namoradinha-de-um-amigo-meu.kar | Roberto Carlos - Namoradinha de um Amigo Meu (Remasterizada).kar | 0.807 |
| musicas | Roupa_Nova-Bem_Simples.kar | Roupa Nova - Bem Simples.kar | 0.977 |
| musicas | Roupa_Nova-Comeco_Meio_e_Fim.kar | Roupa Nova - Começo, Meio e Fim.kar | 0.789 |
| musicas | Ruban-Vitrine .mid | Ruban - Vitrine.mid | 0.962 |
| musicas | Se você está contente.kar | Bob Zoom - Se Você Está Contente.kar | 0.745 |
| musicas | Taiguara-Hoje.mid | Taiguara - Hoje.mid | 0.962 |
| musicas | Toquinho Regra Tres.kar | Toquinho - Regra Três.kar | 0.724 |
| musicas | Toquinho-Samba_da_Volta.kar | Toquinho - Samba da Volta.kar | 0.978 |
| musicas | Toquinho-Samba_de_Orly.kar | Toquinho - Samba de Orly (Ao Vivo).kar | 0.722 |
| musicas | Vinicius De Moraes Bencao .kar | Vinicius de Moraes - Samba da Bencao.kar | 0.757 |
| musicas | Vinicius De Moraes Pela Luz Dos Olhos Teus.kar | Vinicius de Moraes - Pela Luz Dos Olhos Teus.kar | 1.0 |
| musicas | Vinicius de Moraes A casa.kar | Vinicius de Moraes - A Casa.kar | 1.0 |
| musicas | Xuxa Brincar De Indio.kar | Xuxa - Brincar de Índio.kar | 0.776 |
| musicas | Zeze de Camargo & Luciano Cada volta é um recomeço.kar | Zezé Di Camargo & Luciano - Cada Volta É Um Recomeço.kar | 0.78 |
| musicas | Zeze de Camargo & Luciano Menina veneno.kar | Zezé Di Camargo & Luciano - Menina Veneno.kar | 0.724 |
| musicas | Zeze de Camargo & Luciano Pra não pensar em você.kar | Zezé Di Camargo & Luciano - Pra Não Pensar Em Você.kar | 0.797 |
| musicas | Zeze de Camargo & Luciano Preciso ser amado.kar | Zezé Di Camargo & Luciano - Preciso Ser Amado.kar | 0.755 |
| musicas | belchior- como nossos pais.mid | Belchior - Como Nossos Pais.mid | 0.99 |
| musicas | benito di paula- vai ficar na saudade.mid | Benito Di Paula - Vai Ficar na Saudade.mid | 0.993 |
| musicas | elba ramalho-de volta pro meu aconchego.mid | Elba Ramalho - De Volta Pro Aconchego.mid | 0.888 |
| musicas | gilson -casinha branca.mid | Gilson - Casinha Branca.mid | 0.988 |
| musicas | ira- dias de luta.mid | Ira! - Dias de Luta.mid | 0.971 |
| musicas | paulo sergio- ultima cançao.mid | Paulo Sergio - Ultima Cancao.mid | 0.772 |
| musicas | skank- esmola.mid | Skank - Esmola.mid | 0.98 |

## Conflitos — nome resolvido já existe (candidatos a duplicata, revisar manualmente)

| Pasta | Nome atual (não mexido) | Já existe no catálogo como | Confiança |
|---|---|---|---|
| assets/music | Janaína-Biquini Cavadão.kar | Biquini Cavadão - Janaína | 0.826 |
| musicas | Amanhã-Guilherme Arantes.kar | Guilherme Arantes - Amanhã | 0.854 |
| musicas | Caetano-Trilhos_Urbanos.kar | Caetano Veloso - Trilhos Urbanos | 0.79 |
| musicas | Cazuza Exagerado-.kar | Cazuza - Exagerado | 0.985 |
| musicas | Cazuza Faz Parte do Meu Show.kar | Cazuza - Faz Parte do Meu Show | 1.0 |
| musicas | Cazuza Faz parte do meu show-.kar | Cazuza - Faz Parte do Meu Show | 0.991 |
| musicas | Chico_Buarque-Partido_Alto.kar | Chico Buarque - Partido Alto (Ao Vivo) | 0.737 |
| musicas | Chitãozinho & Xororó Nuvem de lágrimas.kar | Chitãozinho & Xororó - Nuvem De Lágrimas | 1.0 |
| musicas | Chitãozinho e Xororó Coração sertanejo-.kar | Chitãozinho & Xororó - Coração Sertanejo | 0.981 |
| musicas | Chitãozinho e Xororó Evidências-.kar | Chitãozinho & Xororó - Evidências | 0.976 |
| musicas | Djavan Eu te devoro_.kar | Djavan - Eu Te Devoro | 1.0 |
| musicas | Djavan Oceano.kar | Djavan - Oceano | 1.0 |
| musicas | Djavan-Serrado.kar | Djavan - Serrado | 0.964 |
| musicas | Eduardo e Mônica-Legião Urbana.kar | Legião Urbana - Eduardo e Mônica | 0.767 |
| musicas | Elba Ramalho De volta pro aconchego-.kar | Elba Ramalho - De Volta Pro Aconchego | 0.993 |
| musicas | Gal_Costa-Meu_Bem_Meu_Mal.kar | Gal Costa - Meu Bem Meu Mal | 0.98 |
| musicas | Gilberto Gil Drao_.kar | Gilberto Gil - Drão | 0.721 |
| musicas | Gita-Raul Seixas.kar | Raul Seixas - Gita | 0.844 |
| musicas | Gonzaguinha Espere por Mim Morena.kar | Gonzaguinha - Espere por Mim Morena | 1.0 |
| musicas | Gonzaguinha Espere por mim morena-.kar | Gonzaguinha - Espere por Mim Morena | 0.993 |
| musicas | Gonzaguinha-Comportamento_Geral.kar | Gonzaguinha - Comportamento Geral | 0.984 |
| musicas | Guilherme Arantes Amanha.kar | Guilherme Arantes - Amanhã | 0.729 |
| musicas | Guilherme Arantes Amanhã-.kar | Guilherme Arantes - Amanhã | 0.99 |
| musicas | Guilherme Arantes Brincar de viver-.kar | Guilherme Arantes - Brincar De Viver | 0.993 |
| musicas | Guilherme Arantes Meu mundo e nada mais.kar | Guilherme Arantes - Meu Mundo e Nada Mais | 1.0 |
| musicas | Guilherme_Arantes-A_Cidade_E_A_Neblina.kar | Guilherme Arantes - A Cidade e a Neblina | 0.987 |
| musicas | Guilherme_Arantes-Antes_Da_Chuva_Chegar.kar | Guilherme Arantes - Antes da Chuva Chegar | 0.987 |
| musicas | Guilherme_Arantes-Aprendendo_A_Jogar.kar | Guilherme Arantes - Aprendendo A Jogar | 0.986 |
| musicas | Guilherme_Arantes-Brincar_De_Viver.kar | Guilherme Arantes - Brincar De Viver | 0.985 |
| musicas | Guilherme_Arantes-Descer_A_Serra.kar | Guilherme Arantes - Descer a Serra (Sorocabana) | 0.803 |
| musicas | Hino_do_Corinthians.kar | Coro - Hino do Corinthians | 0.817 |
| musicas | Hino_do_Flamengo.kar | Junior - Hino do Flamengo | 0.785 |
| musicas | Iluminados_Ivan Lins.kar | Ivan Lins - Iluminados | 0.75 |
| musicas | Ivan Lins Madalena_.kar | Ivan Lins - Madalena | 1.0 |
| musicas | Ivan Lins Vitoriosa.kar | Ivan Lins - Vitoriosa | 1.0 |
| musicas | JOANA FRANCESA _Chico Buarque.kar | Chico Buarque - Joana Francesa | 0.75 |
| musicas | Janaína-Biquini Cavadão.kar | Biquini Cavadão - Janaína | 0.826 |
| musicas | Leandro & Leonardo Cerveja.kar | Leandro & Leonardo - Cerveja | 1.0 |
| musicas | Leandro _ Leonardo Anarriê.kar | Leandro & Leonardo - Anarriê | 0.98 |
| musicas | Leandro _ Leonardo Cerveja.kar | Leandro & Leonardo - Cerveja | 0.98 |
| musicas | Leandro _ Leonardo Cumade e cumpade.kar | Leandro & Leonardo - Cumade e Cumpade | 0.985 |
| musicas | Leandro _ Leonardo Deu medo.kar | Leandro & Leonardo - Deu Medo | 0.981 |
| musicas | Leandro _ Leonardo Doce mistério.kar | Leandro & Leonardo - Doce Mistério | 0.984 |
| musicas | Leandro _ Leonardo Eu juro (I swear).kar | Leandro & Leonardo - Eu Juro (I Swear) | 0.986 |
| musicas | Leandro _ Leonardo Mexe mexe.kar | Leandro & Leonardo - Mexe Mexe | 0.981 |
| musicas | Leandro _ Leonardo Não aprendi dizer adeus.kar | Leandro & Leonardo - Não Aprendí a Dizer Adeus | 0.821 |
| musicas | Leandro _ Leonardo Pense Em Mim.kar | Leandro & Leonardo - Pense Em Mim | 0.983 |
| musicas | Leandro _ Leonardo Um sonhador.kar | Leandro & Leonardo - Um Sonhador | 0.983 |
| musicas | Leandro_e_Leonardo-Pense_Em_Mim.kar | Leandro & Leonardo - Pense Em Mim | 0.968 |
| musicas | Lulu Santos Sereia.kar | Lulu Santos - Sereia | 1.0 |
| musicas | Lulu_Santos-Descobridor_dos_Sete_Mares.kar | Lulu Santos - O Descobridor Dos Sete Mares | 0.974 |
| musicas | Mamonas_Assassinas-Pelados_Em_Santos.kar | Mamonas Assassinas - Pelados em Santos | 0.986 |
| musicas | Maria Bethania Negue_.kar | Maria Bethânia - Negue | 0.725 |
| musicas | Maria Bethania Ronda_.kar | Maria Bethânia - Ronda | 0.725 |
| musicas | Milton Nascimento Coracao de Estudante.kar | Milton Nascimento - Coração de Estudante | 0.807 |
| musicas | Milton_Nascimento-Fe_Cega_Faca_Amolada.kar | Milton Nascimento - Fé Cega, Faca Amolada | 0.825 |
| musicas | Raul Seixas Gita.kar | Raul Seixas - Gita | 1.0 |
| musicas | Rick e Renner Ela e Demais.kar | Rick & Renner - Ela É Demais | 0.962 |
| musicas | Skank Jackie tequila.kar | Skank - Jackie Tequila | 1.0 |
| musicas | Toquinho Aquarela.kar | Toquinho - Aquarela | 1.0 |
| musicas | Xuxa Festa Do Estica E Puxa_.kar | Xuxa - Festa do Estica e Puxa | 1.0 |
| musicas | Xuxa-Brincar_de_Indio.kar | Xuxa - Brincar de Índio | 0.752 |
| musicas | Xuxa-Festa_do_Estica_e_Puxa.kar | Xuxa - Festa do Estica e Puxa | 0.981 |
| musicas | Zeze de Camargo _ Luciano Cada volta é um recomeço.kar | Zezé Di Camargo & Luciano - Cada Volta É Um Recomeço | 0.769 |
| musicas | Zeze de Camargo _ Luciano Pra não pensar em você.kar | Zezé Di Camargo & Luciano - Pra Não Pensar Em Você | 0.786 |
| musicas | Zeze de Camargo _ Luciano Preciso ser amado.kar | Zezé Di Camargo & Luciano - Preciso Ser Amado | 0.742 |

## Sem match confiável — precisa de revisão manual (ou ficam como estão)

| Pasta | Nome atual | Melhor palpite (não aplicado) | Confiança |
|---|---|---|---|
| assets/music | AMORHOM.KAR | Grupo Extra - Loco de Amor (Homenaje a Luis Vargas) | 0.125 |
| assets/music | AQUARIUS.KAR | Broadway Cast - Aquarius | 0.433 |
| assets/music | Ave_Maria_en_la_Monto.kar | Kbto Zuleta & Javier Matta - Benditas Mujeres | 0.203 |
| assets/music | Blink182 Stay tog. for the kids.mid | sem resultado | 0.0 |
| assets/music | Bobo-Seger_Turn-the-page.kar | Bobby V - Turn the Page | 0.583 |
| assets/music | Bose_-_Aldrighetti_y_Avosadro_-_Bandido.kar | sem resultado | 0.0 |
| assets/music | Brazila_nacia_Himno.kar | sem resultado | 0.0 |
| assets/music | Bryan_Adams_I_finally_found_someone.kar | Barbra Streisand - I Finally Found Someone (feat. Bryan Adams) | 0.618 |
| assets/music | Cancao_de_Natal_Portuguesa.kar | sem resultado | 0.0 |
| assets/music | Carolina_ChicoBuarque.kar | Chico Buarque - Carolina | 0.311 |
| assets/music | Chi_Land_la_Via.kar | Margherita De Risi, Franca D‘Amato & Encanto - Cast - La famiglia Madrigal | 0.176 |
| assets/music | Christian e Ralf Mia Gioconda.kar | Chrystian & Ralf - Minha Gioconda | 0.617 |
| assets/music | Christian e Ralph-Mia_Gioconda.kar | sem resultado | 0.0 |
| assets/music | Cinderela.kar | Lucas Mamede - Cinderela | 0.457 |
| assets/music | Cores do vento (Tema de Pocahontas).kar | Museek - Cores do Vento (from Pocahontas) | 0.642 |
| assets/music | Cores_do_vento_tema_de_pocahontas.kar | Banda da Varanda - Cores do Vento - De "Pocahontas" | 0.631 |
| assets/music | De Sao Paulo a Belem.kar | Rionegro & Solimões - De São Paulo a Belém | 0.425 |
| assets/music | Detaloj.kar | Sajeta - Detalj | 0.3 |
| assets/music | Dez Indiozinhos Infantil.kar | Bia & Nino - Dez Indiozinhos | 0.5 |
| assets/music | DonaBule ABelaEAFera_.kar | sem resultado | 0.0 |
| assets/music | ELDIAQUE.KAR | Paiko - El Día Que... | 0.259 |
| assets/music | Elton_John-Sacrificio.kar | Elton John - Your Song | 0.493 |
| assets/music | Exodus.kar | Ferrante & Teicher - Exodus | 0.36 |
| assets/music | Falesia do amor.kar | Santamaria - Falésia Do Amor | 0.541 |
| assets/music | FlyMeToTheMoon.kar | Tony Bennett - Fly Me to the Moon | 0.311 |
| assets/music | FoolSuchAsI.kar | OC Times - Fool Such As I | 0.324 |
| assets/music | GLORIA.KAR | Umberto Tozzi - Gloria | 0.397 |
| assets/music | Go back.kar | Tony Brown - Can't We Go Back | 0.373 |
| assets/music | Happy_Days_Are_Here_Again(Barbara_Streisand).kar | Barbra Streisand - Happy Days Are Here Again | 0.666 |
| assets/music | HelloLOVE.kar | Chris Tomlin - I Will Rise | 0.121 |
| assets/music | Hey_ya_brasil.mid | Simone - Hey | 0.255 |
| assets/music | Hieraw_Jhus.kar | sem resultado | 0.0 |
| assets/music | Himno_al_la_Amo.kar | Joan Sebastian - Eso y Más | 0.154 |
| assets/music | Ie_Trans_Chielarko.kar | sem resultado | 0.0 |
| assets/music | Indianino.kar | Dj Frej - Indiapiano | 0.296 |
| assets/music | Internlanda_Luno.kar | sem resultado | 0.0 |
| assets/music | Iru_chiu_al_infero.kar | sem resultado | 0.0 |
| assets/music | Kanto_de_Datreveno.kar | sem resultado | 0.0 |
| assets/music | Kanto_de_l_Adiawo.kar | sem resultado | 0.0 |
| assets/music | Kanto_de_l_Maristo.kar | sem resultado | 0.0 |
| assets/music | Karesema.kar | Akon & Hamsika Iyer - Chammak Challo | 0.119 |
| assets/music | Karin.kar | Rawmouth - Karin | 0.513 |
| assets/music | La_Espero.kar | Blue Penguin - La Espero | 0.54 |
| assets/music | La_Muzikistaro.kar | sem resultado | 0.0 |
| assets/music | La_Placo.kar | La Kompanoj - Sur La Placo | 0.5 |
| assets/music | Liberhorar_en_Itapoan.kar | sem resultado | 0.0 |
| assets/music | Love_story_theme_song_espanol.kar | 2CELLOS - Love Story | 0.379 |
| assets/music | Lovele~1.kar | sem resultado | 0.0 |
| assets/music | Lunfluvo.kar | sem resultado | 0.0 |
| assets/music | Madonna_Frozen_(DanceMix).kar | sem resultado | 0.0 |
| assets/music | Movie -  GREASE - Summer nights.kar | Rascal Flatts - Summer Nights | 0.482 |
| assets/music | Movie - Ghost - Unchained Melody (1).kar | The Righteous Brothers - Unchained Melody | 0.463 |
| assets/music | Ne_zorgu.kar | sem resultado | 0.0 |
| assets/music | Neck_Laura_no_esta.kar | Nek - Laura No Está | 0.624 |
| assets/music | NeverWalkAlone.KAR | Brian Free & Assurance - Never Walk Alone | 0.264 |
| assets/music | Nur_pro_am_mi_vin_alvokas.kar | sem resultado | 0.0 |
| assets/music | Nure_Vi.kar | Marina Staneva - Impressions, Op. 9: VI. Aveu (Confession) | 0.158 |
| assets/music | Olha O Passo Do Elefantinho.kar | Trio Esperança - O Passo do Elefantinho | 0.641 |
| assets/music | Piedirado.kar | sem resultado | 0.0 |
| assets/music | Pokemon.kar | Wet Leg - pokemon | 0.485 |
| assets/music | Por_ne_diri_ke_mi_parolis_pri_floroj.kar | sem resultado | 0.0 |
| assets/music | Saluton_suno.kar | sem resultado | 0.0 |
| assets/music | Sankta_nokto.kar | Ralph Glomp - La Sankta Nokto | 0.508 |
| assets/music | SiouxCitySue.kar | Moe Bandy - Sioux City Sue | 0.333 |
| assets/music | Solamente_una_vez.kar | Los Panchos - Solamente una Vez | 0.67 |
| assets/music | Tom-Samba_do_Aviao.kar | Antônio Carlos Jobim - Samba Do Avião | 0.427 |
| assets/music | Tom-Se_todos_Fossem_Iguais_a_Voce.kar | Antônio Carlos Jobim - Se Todos Fossem Iguais a Você | 0.573 |
| assets/music | Toni Braxton_How-could-an-angel-break-my-heart.kar | White Knight Instrumental - How Could an Angel Break My Heart | 0.615 |
| assets/music | Travis Tritt -countryclub.kar | Travis Tritt - Country Club | 0.68 |
| assets/music | Tupac-Made_Niggaz.mid | White Knight Instrumental - Made N****z | 0.269 |
| assets/music | Urbo_Mirinda.kar | sem resultado | 0.0 |
| assets/music | Valo_Rugha_Rivero.kar | sem resultado | 0.0 |
| assets/music | Vinicius A casa.kar | Vinicius De Moraes - A Casa | 0.625 |
| assets/music | Viva_Fisho.kar | Tunde Mabadu - Viva Disco (Instrumental) | 0.25 |
| assets/music | good_hearted_woman_by_willie_nelson_and_waylon_jennings.kar | Waylon Jennings & Willie Nelson - Good Hearted Woman | 0.56 |
| assets/music | grendelsjourney.kar | grendelsjourney - Clockwork | 0.625 |
| assets/music | heartaches_(the_number).kar | Ray Price - Heartaches By the Number | 0.618 |
| assets/music | ifyouwerethe.kar | sem resultado | 0.0 |
| assets/music | igottagetdrunk-(willynelson).kar | sem resultado | 0.0 |
| assets/music | ihaveasongtosing.kar | Ronnie - I Have a Song to Sing | 0.364 |
| assets/music | takemeouttotheballgame.kar | The Kids - Take Me Out To The Ball Game | 0.373 |
| assets/music | thebandp.kar | Symba - Birds In The Bando | 0.219 |
| assets/music | thebestthingsinlifearefree.kar | Luther Vandross & Janet Jackson - The Best Things In Life Are Free (K Klass 7") | 0.252 |
| assets/music | theholyground.kar | Mary Black - The Holy Ground | 0.333 |
| assets/music | threedays-(willynelson).kar | sem resultado | 0.0 |
| assets/music | watchwhathappens.kar | Kara Lindsay - Watch What Happens | 0.34 |
| assets/music | wayIam.kar | Lea Love - Way I Am | 0.261 |
| assets/music | wonderk.kar | Wonder K - Revenge | 0.304 |
| assets/music | youngandfoolish.kar | Loud Luxury - Young & Foolish (feat. charlieonnafriday) | 0.176 |
| musicas | 14 bis- uma velha cançao rock in row.mid | sem resultado | 0.0 |
| musicas | AMAGRACE.KAR | Amagrace - PRAY | 0.631 |
| musicas | AMORHOM.KAR | Novo Amor - Anchor | 0.261 |
| musicas | AQUARIUS.KAR | Galt MacDermot - Aquarius | 0.425 |
| musicas | Adivinha o que.kar | Lulu Santos - Adivinha O Quê | 0.425 |
| musicas | Adriana-Calcanhoto_Devolva-me.kar | Adriana Calcanhotto - Devolva-Me (Ao Vivo) | 0.62 |
| musicas | Alceu-Valenca_Tropicana.kar | Alceu Valença - Tropicana (Ao Vivo) | 0.542 |
| musicas | Alice (aquela carta de amor)-Kid Abelha.kar | Kid Abelha - Alice (Não Me Escreva Aquela Carta de Amor) | 0.651 |
| musicas | Angélica Vou de taxi.kar | Angélica - Vou de Taxi (Joe Le Taxi) | 0.704 |
| musicas | Ari Barroso AquarelaDoBrasil_.kar | Claudia Moreno - Aquarela do Brasil | 0.328 |
| musicas | Arrastão_Edu lobo e Vinicius.kar | Elis Regina - Arrastão | 0.25 |
| musicas | AsaBranca_LuísGonzaga.kar | sem resultado | 0.0 |
| musicas | Ave_Maria_en_la_Monto.kar | Ryan Castro & SOG - El Pichón | 0.146 |
| musicas | BabyConsuelo Brasileirinho_.kar | Baby Consuelo - Brasileirinho | 0.616 |
| musicas | Baby_Gal.kar | Gal Costa & Rubel - Baby (Ao Vivo) | 0.317 |
| musicas | Banda_Dejavu-Atracao_Pitbull.mid | Banda Djavu & DJ Juninho Portugal - Atração Pitbull | 0.423 |
| musicas | Bate_o_sino.kar | Família Lima - Bate O Sino | 0.564 |
| musicas | Biquini_Cavadao-Tedio.kar | Biquini Cavadão - Tédio | 0.529 |
| musicas | COPACOBA.KAR | Jovem Dionisio - Copacabana | 0.212 |
| musicas | Cada volta é um recomeço-Zezé  e Luciano.kar | Zezé Di Camargo & Luciano - Cada Volta É Um Recomeço | 0.645 |
| musicas | Caderninho_ErasmoCarlos.kar | Erasmo Carlos - O Caderninho | 0.329 |
| musicas | Caetano Veloso Felicidade_.kar | Caetano Veloso - Alegria, Alegria | 0.589 |
| musicas | CaetanoVeloso Felicidade_.kar | Caetano Veloso - Alegria, Alegria | 0.327 |
| musicas | Caetano_Veloso-Atras_do_Trio_Eletrico.kar | Caetano Veloso - Atrás do Trio Elétrico | 0.709 |
| musicas | Cancao_de_Natal_Portuguesa.kar | Jaime Dias - Portuguesa Bonita | 0.349 |
| musicas | Cançao da america.kar | João Gomes - Canção da América | 0.405 |
| musicas | Carlinhos Brown Avisala_.kar | sem resultado | 0.0 |
| musicas | Carolina_ChicoBuarque.kar | Chico Buarque - Carolina | 0.311 |
| musicas | Cavalgada_RobertoCarlos.kar | Roberto Carlos - Cavalgada | 0.316 |
| musicas | Cazusa Bete balanço.kar | sem resultado | 0.0 |
| musicas | CaçaECaçador_FabioJr.KAR | Fábio Jr. - Caça e Caçador (Ao Vivo) | 0.296 |
| musicas | Chega de saudade-Tom Jobim.kar | Antônio Carlos Jobim - Chega de Saudade (Ao Vivo) | 0.482 |
| musicas | Chico Buarque O quesera.kar | Chico Buarque & Milton Nascimento - Que Será (O Que Será) [À Flor da Terra] | 0.34 |
| musicas | ChicoBuarque ApesarDeVoce_.kar | Chico Buarque - Apesar de Você | 0.453 |
| musicas | ChicoBuarque FestaImodesta_.kar | Chico Buarque - Festa Imodesta | 0.481 |
| musicas | Chico_Buarque-Iolanda.kar | Chico Buarque - Iolanda (Yolanda) [Ao Vivo] | 0.573 |
| musicas | Chico_Buarque-Maninha.kar | Áurea Martins & Chico Buarque - Maninha | 0.645 |
| musicas | Chico_Buarque-Vai_Levando.kar | Chico Buarque & Maria Bethânia - Vai Levando | 0.692 |
| musicas | Chico_Buarque_e_Sivuca_--_Joao_e_Maria.kar | Arthur Moreira Lima - João E Maria | 0.327 |
| musicas | Chico_Cesar-Mama_Africa.kar | Chico César - Mama África | 0.601 |
| musicas | ChitaozinhoEXororo FioDeCabelo_.kar | sem resultado | 0.0 |
| musicas | Chitaozinho_e_Xororo-Fio_De_Cabelo.kar | Chitãozinho & Xororó - Fio de Cabelo | 0.655 |
| musicas | Chitaozinho_e_Xororo-Pensando_em_Minha_Amada.kar | Chitãozinho & Xororó - Pensando em Minha Amada | 0.705 |
| musicas | Chopis center.kar | Mamonas Assassinas - Chopis Centis | 0.344 |
| musicas | Chorando se foi-Kaoma.kar | Kaoma - Chorando Se Foi (Ao Vivo) | 0.66 |
| musicas | Christian_e_Ralph-Mia_Gioconda.kar | sem resultado | 0.0 |
| musicas | Cidade maravilhosa.kar | Banda Gol - Cidade Maravilhosa | 0.641 |
| musicas | Cores_do_vento_tema_de_pocahontas.kar | Banda da Varanda - Cores do Vento - De "Pocahontas" | 0.631 |
| musicas | Coresdovento_pocahontas.kar | Museek - Cores do Vento (from Pocahontas) | 0.442 |
| musicas | Cowboy fora da lei.kar | Raul Seixas - Cowboy Fora da Lei | 0.708 |
| musicas | Daniel Boone Theme.kar | Television's Greatest Hits Band - Daniel Boone | 0.336 |
| musicas | Daniela_Mercury-Atras_do_Trio_Eletrico.kar | Daniela Mercury - Axé Axé | 0.422 |
| musicas | Daniela_Mercury-Avisala.kar | sem resultado | 0.0 |
| musicas | De Sao Paulo a Belem.kar | Rionegro & Solimões - De São Paulo a Belém | 0.425 |
| musicas | Detalhes.kar | Roberto Carlos - Detalhes | 0.425 |
| musicas | Detaloj.kar | Kantoj de Espero - Perditaj en la Detaloj | 0.224 |
| musicas | Dez Indiozinhos Infantil.kar | Bia & Nino - Dez Indiozinhos | 0.5 |
| musicas | DezIndiozinhos_Infantil.kar | Bia & Nino - Dez Indiozinhos | 0.286 |
| musicas | Dia de domingo.kar | Tim Maia - Um Dia de Domingo | 0.6 |
| musicas | Djavan-Petala.kar | Djavan - Pétala | 0.59 |
| musicas | Doidinha.kar | DUDA BEAT - doidinha | 0.474 |
| musicas | DonaBule ABelaEAFera_.kar | sem resultado | 0.0 |
| musicas | Drao_Gil.kar | Gilberto Gil - Drão | 0.365 |
| musicas | ELDIAQUE.KAR | Dr. Grin - El Día Que | 0.259 |
| musicas | Ela disse adeus.kar | Os Paralamas do Sucesso - Ela Disse Adeus | 0.492 |
| musicas | Elba e Alceu Ciranda da rsa vermelha_.kar | Alceu Valença - Ciranda da Rosa Vermelha | 0.642 |
| musicas | Elis AloAloMarciano_.kar | Elis Regina - Alô! Alô! Marciano | 0.473 |
| musicas | Elis Regina Dois Pra La Dois Pra Ca.kar | Elis Regina - Dois pra Lá, Dois pra Cá | 0.715 |
| musicas | Elis Regina DoisPraLaDoisPraCa_.kar | Elis Regina - Dois pra Lá, Dois pra Cá | 0.567 |
| musicas | EmCadaSonho_SandyEJr.kar | sem resultado | 0.0 |
| musicas | EncostaTuaCabecinha.kar | Deliriuman - Encosta tua cabecinha | 0.373 |
| musicas | Era um garoto que como eu amava os Bea.kar | sem resultado | 0.0 |
| musicas | ErasmoCarlos FestaDeArromba_.kar | Erasmo Carlos - Festa de Arromba | 0.474 |
| musicas | EstradaDoSol_Tom.kar | Gal Costa - Estrada Do Sol (Ao Vivo) | 0.28 |
| musicas | Exodus.kar | EXO - EXODUS | 0.625 |
| musicas | Fabio_Jr-Caca_E_Cacador.KAR | Fábio Jr. - Caça e Caçador | 0.476 |
| musicas | Facil.kar | Jota Quest - Fácil | 0.19 |
| musicas | Falar a verdade.kar | Da Ghama - Falar a Verdade | 0.635 |
| musicas | Falesia do amor.kar | Santamaria - Falésia Do Amor | 0.541 |
| musicas | GLORIA.KAR | Patti Smith - Gloria | 0.417 |
| musicas | Gal Costa Folha Morta_.kar | Gal Costa - Folhas Mortas | 0.644 |
| musicas | GalCosta BlocoDoPrazer_.kar | Gal Costa - Bloco do Prazer | 0.468 |
| musicas | GalCosta ChuvaDePrata_.kar | Gal Costa - Chuva de Prata (Ao Vivo) | 0.382 |
| musicas | GalCosta FolhaMorta_.kar | Luiz Melodia & Wagner Tiso - Folha Morta | 0.228 |
| musicas | Gal_Costa-Baby.kar | Gal Costa & Tim Bernardes - Baby | 0.595 |
| musicas | Gal_Costa-Folha_Morta.kar | Gal Costa - Folhas Mortas | 0.621 |
| musicas | GarotaDeIpanema(I)_TomJobim.kar | Ituana - Garota de Ipanema | 0.294 |
| musicas | Garçom-Reginaldo Rossi.kar | Reginaldo Rossi - Garcon | 0.591 |
| musicas | Gian & Giovanni O grande amor da minha vida.kar | Gian & Giovanni - A Menina Da Loja | 0.473 |
| musicas | Gian & Giovanni Um dois três.kar | Gian & Giovanni - Te Amo | 0.503 |
| musicas | Gian _ Giovanni O grande amor da minha vida.kar | Gian & Giovanni - A Menina Da Loja | 0.454 |
| musicas | Gian _ Giovanni Por telefone.kar | sem resultado | 0.0 |
| musicas | Gian _ Giovanni Um dois três.kar | Gian & Giovanni - Te Amo | 0.476 |
| musicas | Gilberto_Gil_e_Joao_Donato-A_Paz.kar | Gilberto Gil & João Donato - Uma Coisa Bonitinha | 0.513 |
| musicas | Go back.kar | Titãs - Go Back | 0.683 |
| musicas | Godofredo Guedes Casinha de palha-.kar | Paulinho Pedra Azul & Wagner Tiso - Casinha De Palha | 0.4 |
| musicas | Gonzaguinha Comecaria Tudo Outra Vez1.kar | Gonzaguinha - Começaria Tudo Outra Vez | 0.694 |
| musicas | Gonzaguinha ComecariaTudoOutraVez_.kar | Gonzaguinha - Começaria Tudo Outra Vez | 0.547 |
| musicas | Gonzaguinha ComportamentoGeral_.kar | Gonzaguinha - Comportamento Geral | 0.617 |
| musicas | Gonzaguinha Eeh.kar | sem resultado | 0.0 |
| musicas | Gonzaguinha Explode coração-.kar | Marcos Lessa - Explode Coração | 0.521 |
| musicas | Gonzaguinha Sangrando.kar | Gonzaguinha - Sangrando (Ao Vivo) | 0.654 |
| musicas | Gonzaguinha É.kar | Gonzaguinha - O Que É O Que É? | 0.567 |
| musicas | Gospel_-_Cassiane_-_Por_amar_voce.kar | Cassiane e Jairinho - Por Amar Você | 0.548 |
| musicas | Gospel_-_Purifica_-_me.KAR | Kleber Lucas - Purifica-me | 0.483 |
| musicas | GuilhermeArantes Extase_.kar | Guilherme Arantes - Êxtase | 0.468 |
| musicas | Guilherme_Arantes-Extase.kar | Guilherme Arantes - Êxtase | 0.708 |
| musicas | Guilherme_Arantes-Pedacinhos.kar | Guilherme Arantes - Pedacinhos (Bye Bye So Long) | 0.615 |
| musicas | Hino Nacional Brasileiro.kar | Hinos Nacionais - Hino Nacional Brasileiro (Coral) | 0.583 |
| musicas | Hino da IndependOncia do Brasil.kar | sem resultado | 0.0 |
| musicas | Hino da Proclamatpo da Rep·blica do Brasil.kar | sem resultado | 0.0 |
| musicas | Hino do Palmeiras.kar | Banda Talmo - Hino do Palmeiras | 0.67 |
| musicas | Hino_Nacional_Brasileiro.kar | Hinos Nacionais - Hino Nacional Brasileiro (Coral) | 0.583 |
| musicas | Hino_de_Portugal.kar | The Great Band & Richi Harper - Hino De Portugal | 0.446 |
| musicas | Hino_do_Cruzeiro.kar | Rock Your Babies - Hino do Cruzeiro | 0.577 |
| musicas | Hino_do_Palmeiras.kar | Banda Talmo - Hino do Palmeiras | 0.67 |
| musicas | Hino_do_Vasco.kar | Rock Your Babies - Hino do Vasco | 0.552 |
| musicas | Ilarie_Xuxa.kar | Xuxa - Ilariê | 0.394 |
| musicas | Infanti-Peixe_Vivo.kar | sem resultado | 0.0 |
| musicas | Infantil-Cores_do_Vento_Pocahontas.kar | Museek - Cores do Vento (from Pocahontas) | 0.628 |
| musicas | Infantil-Parabens_A_Voce.kar | Danoninho - Parabéns a Você | 0.306 |
| musicas | Infantil-Xuxa-Brincar_De_Indio.kar | Xuxa - Brincar de Índio | 0.623 |
| musicas | Infantil-Xuxa-Ilarie.kar | Xuxa - Ilariê | 0.415 |
| musicas | Insensatez-Tom Jobim.kar | Antônio Carlos Jobim - Insensatez | 0.396 |
| musicas | Inutil_UltrageARigor.kar | sem resultado | 0.0 |
| musicas | JESUS.KAR | Arianne - Jesus | 0.528 |
| musicas | JoanaFrancesa_ChicoBuarque.kar | António Zambujo - Joana Francesa (feat. Chico Buarque) | 0.333 |
| musicas | Joao e maria_Chico e Sivuca.kar | Arthur Moreira Lima - João E Maria | 0.249 |
| musicas | Jorge_e_Matheus-Traz_Ela_de_Volta_Pra_Mim.mid | Matheus & Kauan - Antídoto (Na Praia 2 / Ao Vivo) | 0.218 |
| musicas | João P_ Daniel Ela tem o dom de me fazer chorar-.kar | Realidade Cruel - Dia de Visita | 0.183 |
| musicas | Leandro_e_Leonardo-Tapas.kar | Leandro & Leonardo - Entre Tapas e Beijos | 0.649 |
| musicas | Luiz_Bonfa_-_Manha_de_Carnaval_-_Orfeo.kar | Guido Rimonda - Manha De Carnaval (From "Orfeo Negro") | 0.544 |
| musicas | Lulu Santos O Ultimo Romantico.KAR | Lulu Santos - O Último Romântico | 0.633 |
| musicas | Maria Bethania Explode Coracao.kar | Maria Bethânia - Explode Coração | 0.617 |
| musicas | Maria Bethania So louco.kar | Maria Bethânia - É o Amor | 0.453 |
| musicas | Maria_Bethania-Ronda.kar | Maria Bethânia - Ronda | 0.7 |
| musicas | Milton Nascimento Cançao da america.kar | Milton Nascimento - Canção da America (Unencounter) | 0.69 |
| musicas | Milton_Nacimento-Vevecos_Panelas_e_Canelas.kar | sem resultado | 0.0 |
| musicas | Movie -  GREASE - Summer nights.kar | Van Halen - Summer Nights | 0.469 |
| musicas | Movie - Ghost - Unchained Melody (1).kar | The Righteous Brothers - Unchained Melody | 0.463 |
| musicas | Nelson Gonçlves A volta do boêmio.kar | sem resultado | 0.0 |
| musicas | Noite_Feliz.kar | Bob Zoom - Noite Feliz | 0.605 |
| musicas | Olha O Passo Do Elefantinho.kar | SNZ - O Passo do Elefantinho (Baby Elephant Walk) | 0.498 |
| musicas | Pokemon.kar | Rob Iyf - Pokemon | 0.485 |
| musicas | RIO negro e solimões_De Sao Paulo a Belem.kar | Rionegro & Solimões - De São Paulo a Belém | 0.607 |
| musicas | Raul_Seixas-Balada_do_Louco.kar | sem resultado | 0.0 |
| musicas | Rita Lee Banho de Espuma.kar | Rita Lee & Roberto de Carvalho - Banho de Espuma | 0.7 |
| musicas | Rita Lee Flagra.kar | Rita Lee - Flagra (Ao Vivo) | 0.675 |
| musicas | Rita Lee OvelhaNegra.kar | Rita Lee - Ovelha Negra (Ao Vivo) | 0.535 |
| musicas | Rita Lee Sóde Você.KAR | Cardi B - WAP (feat. Megan Thee Stallion) | 0.175 |
| musicas | Rita lee Flagra_.kar | Rita Lee - Flagra (Ao Vivo) | 0.675 |
| musicas | Rita_Lee-Balada_de_Louco.kar | Rita Lee - Balada Do Louco (Acústico Live) | 0.594 |
| musicas | Rita_Lee-Banho_de_Espuma.kar | Rita Lee & Roberto de Carvalho - Banho de Espuma | 0.686 |
| musicas | Rita_Lee-Caso_Serio.kar | Rita Lee - Caso Sério (Ao Vivo) | 0.568 |
| musicas | Rita_Lee-Flagra.kar | Rita Lee - Flagra (Ao Vivo) | 0.65 |
| musicas | Rita_Lee-Ovelha_Negra.kar | Rita Lee - Ovelha Negra (Ao Vivo) | 0.718 |
| musicas | Rita_Lee-So_de_Voce.kar | Rita Lee - Mania de Você | 0.58 |
| musicas | Roberto Carlos E QueTudo Mais Va Pro Inferno.kar | sem resultado | 0.0 |
| musicas | Roberto Carlos Ninguem Vai Tirar Voce De Mim.kar | Roberto Carlos - Ninguém Vai Tirar Você de Mim (Remasterizada) | 0.677 |
| musicas | Roberto Carlos Outravez.kar | Roberto Carlos - Outra Vez | 0.689 |
| musicas | Roberto Carlos Pode vir quente que eu estou fervendo.kar | Erasmo Carlos - Vem Quente Que Eu Estou Fervendo (2025 Remasterizado) | 0.575 |
| musicas | Roberto-Carlos_Aceito-seu-coracao.kar | Roberto Carlos - Aceito Seu Coração (Remasterizada) | 0.627 |
| musicas | Roberto-Carlos_Ninguem-vai-tirar-voce-de-mim.kar | Roberto Carlos - Ninguém Vai Tirar Você de Mim (Remasterizada) | 0.619 |
| musicas | Roberto-Carlos_Nossa-cancao.kar | Roberto Carlos - Nossa Canção (Remasterizada) | 0.579 |
| musicas | Roberto_Carlos-De_Tanto_Amor.kar | Roberto Carlos - De Tanto Amor (Versão Remasterizada) | 0.699 |
| musicas | Roberto_Carlos-El_Gato_Que_Esta_Triste_y_Azul.KAR | Roberto Carlos - El Gato Que Está Triste y Azul (Un Gato Nel Blu) | 0.69 |
| musicas | Roberto_Carlos-Ninguem_vai_tirar_voce_de_mim.kar | Roberto Carlos - Ninguém Vai Tirar Você de Mim (Remasterizada) | 0.667 |
| musicas | Sandy & Junior Em cada sonho.kar | Sandy e Junior - Em Cada Sonho (O Amor Feito Flecha) | 0.659 |
| musicas | Sandy E Jr Etc E Tal.kar | Sandy e Junior - Etc... E Tal (Any Man of Mine) | 0.474 |
| musicas | Sandy Jr  Em cada sonho.kar | Sandy e Junior - Em Cada Sonho (O Amor Feito Flecha) | 0.528 |
| musicas | Sandy Jr Com Voce.kar | Sandy e Junior - Com Você (I'll Be There) | 0.415 |
| musicas | Sandy _ Junior Em cada sonho.kar | Sandy e Junior - Em Cada Sonho (O Amor Feito Flecha) | 0.655 |
| musicas | Sandy e Jr NaoTer_.kar | Sandy e Junior - Não Ter (Live) | 0.419 |
| musicas | Sandy e Junior Etc e tal.kar | Sandy e Junior - Etc... e Tal (Any Man of Mine) | 0.598 |
| musicas | Sandy e Junior Nao Ter.kar | Sandy e Junior - Não Ter (Live) | 0.662 |
| musicas | Sandy-e-Junior_Olha-o-que-o-amor-me-faz.kar | Sandy e Junior - Olha O Que O Amor Me Faz / Citação: All By Myself | 0.619 |
| musicas | Se Voce Esta Contente Infantil.kar | A Turma da TV - Se Você Esta Contente | 0.474 |
| musicas | Tema_da_Selecao_Brasileira_de_futebol.kar | DJ C-TRON - Seleção Brasileira | 0.332 |
| musicas | Titas Go back.kar | Titãs - Go Back | 0.712 |
| musicas | Tom Jobim Chega De Saudade.kar | Antônio Carlos Jobim - Chega de Saudade (Ao Vivo) | 0.565 |
| musicas | Tom Jobim Corcovado(I).kar | Antônio Carlos Jobim - Corcovado | 0.546 |
| musicas | Tom Jobim Garota De Ipanema Ingles.kar | Antônio Carlos Jobim - Garota de Ipanema (Ao Vivo) | 0.541 |
| musicas | Tom Jobim Insensatez_.kar | Antônio Carlos Jobim - Insensatez | 0.573 |
| musicas | Tom Jobim So Danco Samba (I).kar | Stan Getz & João Gilberto - Só Danço Samba (feat. Antônio Carlos Jobim) | 0.298 |
| musicas | Tom Jobim-Samba nota so.kar | Antônio Carlos Jobim - Samba De Uma Nota Só | 0.463 |
| musicas | Tom Jobin Desafinado (I).kar | Antônio Carlos Jobim - Desafinado | 0.411 |
| musicas | Tom Jobin Estrada Do Sol.kar | Antônio Carlos Jobim - Estrada Do Sol | 0.56 |
| musicas | Tom Jobin Meditacao.kar | Antônio Carlos Jobim - Meditação | 0.306 |
| musicas | Tom Jobin O Amor Em Paz.kar | Antônio Carlos Jobim - O Amor Em Paz | 0.556 |
| musicas | Tom Jobin Samba De Uma Nota So (I).kar | Antônio Carlos Jobim - Samba do Avião | 0.303 |
| musicas | Tom Jobin Sambaviao.kar | sem resultado | 0.0 |
| musicas | Tom Jobin So Tinha De Ser Voce.kar | Antônio Carlos Jobim - Só Tinha De Ser Com Você | 0.462 |
| musicas | Tom Jobin Triste.kar | Antônio Carlos Jobim - Triste | 0.409 |
| musicas | Tom Jobin Wave (English).kar | Antônio Carlos Jobim - Wave (1987 Versão) | 0.325 |
| musicas | Tom-Chega_de_Saudade.kar | João Gilberto - Chega De Saudade | 0.61 |
| musicas | Tom-Desafinado.kar | Antônio Carlos Jobim - Desafinado | 0.389 |
| musicas | Tom-Samba_do_Aviao.kar | Antônio Carlos Jobim - Samba do Avião | 0.427 |
| musicas | Tom-Se_todos_Fossem_Iguais_a_Voce.kar | Antônio Carlos Jobim - Se Todos Fossem Iguais a Você | 0.573 |
| musicas | Tom_Jobin-So_em_Teus_Olhos.kar | Miúcha e Tom Jobim - Pela Luz dos Olhos Teus | 0.416 |
| musicas | Toquinho Era Uma Vez.kar | Sandy e Junior & Toquinho - Era Uma Vez... | 0.667 |
| musicas | Toquinho EraUmaVez.kar | Sandy e Junior & Toquinho - Era Uma Vez... | 0.382 |
| musicas | Toquinho Trocando em Miudos.kar | Brazilian Tropical Orchestra - Trocando Em Miudos | 0.525 |
| musicas | Vinicius A casa.kar | Vinicius de Moraes - A Casa | 0.625 |
| musicas | Vinicius De Moraes Voce E Eu.kar | Toquinho & Vinicius de Moraes - Onde Anda Você | 0.472 |
| musicas | Vinicius_de_Morais-Arrastao.kar | sem resultado | 0.0 |
| musicas | Vinicius_de_Morais-Porque_Sera.kar | Vinicius de Moraes - Minha Namorada | 0.442 |
| musicas | Vinicius_de_Morais-Pra_Que_Chorar.kar | Vinicius de Moraes - Eu Sei Que Vou Te Amar | 0.463 |
| musicas | Vinicius_de_Morais-Wave.kar | sem resultado | 0.0 |
| musicas | Xuxa Ilarie_.kar | Xuxa - Ilariê | 0.621 |
| musicas | Ze Ramalho Chao De Giz.kar | Zé Ramalho - Chão de Giz | 0.669 |
| musicas | Zeze de Camargo & Luciano Indiferença.kar | Zezé Di Camargo & Luciano - Indiferença | 0.687 |
| musicas | Zeze de Camargo & Luciano Pra Nao Pensar Em Voce.kar | Zezé Di Camargo & Luciano - Pra Não Pensar Em Você | 0.651 |
| musicas | Zeze de Camargo _ Luciano Indiferença.kar | Zezé Di Camargo & Luciano - Indiferença | 0.673 |
| musicas | Zeze de Camargo _ Luciano Menina veneno.kar | Zezé Di Camargo & Luciano - Menina Veneno | 0.711 |
| musicas | Zeze de Camargo _ Luciano Pra Nao Pensar Em Voce.kar | Zezé Di Camargo & Luciano - Pra Não Pensar Em Você | 0.639 |
| musicas | Zeze de Camargo e Luciano Pra Nao Pensar Em Voce.kar | Zezé Di Camargo & Luciano - Pra Não Pensar Em Você | 0.64 |
| musicas | Zeze_de_camargo_Antes_de_Voltar_P_Casa.kar | Sofia Camara - Do You Love Me | 0.169 |
| musicas | banda eva- amor perfeito.mid | Banda Eva - Me Abraça | 0.446 |
| musicas | diana.mid | Paul Anka - Diana | 0.417 |
| musicas | it_must_be_him_(vikky_carr).kar | Vikki Carr - It Must Be Him | 0.626 |
| musicas | moro onde mora ninquem.mid | sem resultado | 0.0 |
| musicas | roberto carlos- nao precisa chorar.mid | Tom Cleber - Não Precisa Chorar | 0.474 |
| musicas | sandra de sa- retratos e cançoes.mid | Sandra Sá - Retratos e Cançoes | 0.7 |
| musicas | wanderley cardozo- a namorada que sonhei.mid | sem resultado | 0.0 |
