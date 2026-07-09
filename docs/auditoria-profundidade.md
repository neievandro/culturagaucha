# Auditoria de Profundidade de Conteudo

Relatorio gerado automaticamente por `tools/audit-content-depth.js`. Mede palavras dentro de `<main>`, numero de `<section>` e presenca dos marcadores editoriais `para-saber-mais` e `aprofundamento-editorial` ja usados no projeto.

Para regerar este relatorio apos editar conteudo:

```powershell
node tools/audit-content-depth.js
```

## Resumo

- Total de paginas de conteudo analisadas: `142`.
- Media de palavras por pagina: `567`.
- Paginas classificadas como `rasa` (menos de 300 palavras): `7`.
- Paginas classificadas como `media` (300 a 599 palavras): `114`.
- Paginas classificadas como `aprofundada` (600 palavras ou mais): `21`.
- Paginas sem secao `para-saber-mais` (sem fontes/referencias fechadas): `0`.
- Paginas sem nenhum marcador `aprofundamento-editorial`: `88`.

## Prioridade De Aprofundamento

Paginas `rasa` sem secao `para-saber-mais` sao a prioridade mais alta: tem pouco conteudo e nenhuma fonte fechada.

Nenhuma pagina nessa condicao no momento desta auditoria.

## Todas As Paginas (Da Mais Rasa Para A Mais Aprofundada)

| Pagina | Titulo | Palavras | Secoes | Nivel | Para saber mais | Aprofundamento |
|---|---|---:|---:|---|:---:|:---:|
| `paginas/temas/linha-do-tempo.html` | Linha do Tempo Interativa | 256 | 5 | rasa | sim | nao |
| `paginas/musica-danca/pezinho.html` | Pezinho | 285 | 7 | rasa | sim | nao |
| `paginas/musica-danca/rancheira.html` | Rancheira | 285 | 7 | rasa | sim | nao |
| `paginas/musica-danca/chamarrita.html` | Chamarrita | 288 | 7 | rasa | sim | nao |
| `paginas/musica-danca/balaio.html` | Balaio | 291 | 7 | rasa | sim | nao |
| `paginas/linguagem/dicionario.html` | Dicionário de Gauchês | 293 | 5 | rasa | sim | sim |
| `paginas/musica-danca/bugio.html` | Bugio | 293 | 7 | rasa | sim | nao |
| `paginas/musica-danca/origens-historicas-musica-gaucha.html` | Origens Históricas da Música Gaúcha | 337 | 5 | media | sim | nao |
| `paginas/temas/cultura-urbana.html` | Cultura Urbana Gaúcha | 338 | 5 | media | sim | nao |
| `paginas/cultura/semana-farroupilha.html` | Semana Farroupilha | 349 | 4 | media | sim | sim |
| `paginas/personalidades/elis-regina.html` | Elis Regina | 350 | 7 | media | sim | nao |
| `paginas/personalidades/yamandu-costa.html` | Yamandu Costa | 350 | 7 | media | sim | nao |
| `paginas/territorio/diaspora-gaucha-para.html` | Diáspora Gaúcha no Pará | 350 | 4 | media | sim | nao |
| `paginas/personalidades/teixeirinha.html` | Teixeirinha | 352 | 7 | media | sim | nao |
| `paginas/personalidades/jayme-caetano-braun.html` | Jayme Caetano Braun | 353 | 7 | media | sim | nao |
| `paginas/personalidades/gildo-de-freitas.html` | Gildo de Freitas | 355 | 7 | media | sim | nao |
| `paginas/personalidades/luiz-marenco.html` | Luiz Marenco | 355 | 7 | media | sim | nao |
| `paginas/patrimonio/arquitetura-gaucha.html` | Arquitetura Gaúcha | 356 | 4 | media | sim | nao |
| `paginas/personalidades/renato-borghetti.html` | Renato Borghetti | 356 | 7 | media | sim | nao |
| `paginas/sociedade/afro-gauchidade.html` | Afro-Gauchidade | 359 | 7 | media | sim | sim |
| `paginas/literatura/simoes-lopes-neto.html` | João Simões Lopes Neto | 360 | 4 | media | sim | sim |
| `paginas/personalidades/kleiton-kledir.html` | Kleiton & Kledir | 360 | 7 | media | sim | nao |
| `paginas/musica-danca/chamame.html` | Chamamé | 363 | 8 | media | sim | sim |
| `paginas/cultura/o-gaucho.html` | O Gaúcho | 364 | 5 | media | sim | nao |
| `paginas/cultura/tradicionalismo-gaucho.html` | Tradicionalismo Gaúcho | 366 | 6 | media | sim | sim |
| `paginas/patrimonio/educacao-patrimonial.html` | Educação Patrimonial | 366 | 4 | media | sim | nao |
| `paginas/simbolos/simbolos-gauchos.html` | Símbolos Gaúchos | 366 | 7 | media | sim | sim |
| `paginas/territorio/cultura-fronteira.html` | Cultura de Fronteira | 366 | 5 | media | sim | nao |
| `paginas/territorio/diaspora-gaucha-santa-catarina.html` | Diáspora Gaúcha em Santa Catarina | 369 | 4 | media | sim | nao |
| `paginas/musica-danca/xote-gaucho.html` | Xote Gaúcho | 370 | 8 | media | sim | nao |
| `paginas/musica-danca/milonga.html` | Milonga | 371 | 8 | media | sim | sim |
| `paginas/simbolos/hino-rio-grandense.html` | Hino Rio-Grandense | 371 | 7 | media | sim | sim |
| `paginas/literatura/erico-verissimo.html` | Erico Verissimo | 375 | 4 | media | sim | sim |
| `paginas/cultura/rodeio-crioulo.html` | Rodeio Crioulo | 380 | 5 | media | sim | sim |
| `paginas/cultura/religiosidade-festas-populares.html` | Religiosidade e Festas Populares | 381 | 5 | media | sim | nao |
| `paginas/musica-danca/violao-gaucho.html` | Violão Gaúcho | 384 | 8 | media | sim | nao |
| `paginas/sociedade/carnaval-rs.html` | Carnaval no Rio Grande do Sul | 391 | 3 | media | sim | nao |
| `paginas/sociedade/povos-originarios.html` | Povos Originários do RS | 391 | 8 | media | sim | sim |
| `paginas/economia/tecnologia-cultura.html` | Tecnologia Aplicada à Cultura | 393 | 5 | media | sim | nao |
| `paginas/simbolos/bandeira-rio-grandense.html` | Bandeira Rio-Grandense | 394 | 5 | media | sim | sim |
| `paginas/meio-ambiente/mudancas-climaticas-rs.html` | Mudanças Climáticas no RS | 395 | 4 | media | sim | sim |
| `paginas/economia/cultura-digital-gaucha.html` | Cultura Digital Gaúcha | 397 | 5 | media | sim | sim |
| `paginas/literatura/mario-quintana.html` | Mario Quintana | 400 | 4 | media | sim | nao |
| `paginas/historia/lanceiros-negros.html` | Lanceiros Negros | 401 | 5 | media | sim | sim |
| `paginas/contos/contos-gauchescos.html` | Contos Gauchescos | 402 | 8 | media | sim | sim |
| `paginas/midia/imprensa-regional.html` | Imprensa Regional no RS | 402 | 5 | media | sim | sim |
| `paginas/musica-danca/musica-gaucha-contemporanea.html` | Música Gaúcha Contemporânea | 402 | 8 | media | sim | sim |
| `paginas/esporte/futebol-interior-gaucho.html` | Futebol Gaúcho do Interior | 404 | 5 | media | sim | sim |
| `paginas/economia/universidades-cultura.html` | Universidades e Cultura no RS | 405 | 5 | media | sim | sim |
| `paginas/territorio/diaspora-gaucha-parana.html` | Diáspora Gaúcha no Paraná | 405 | 4 | media | sim | nao |
| `paginas/territorio/diaspora-gaucha-goias.html` | Diáspora Gaúcha em Goiás | 406 | 4 | media | sim | nao |
| `paginas/territorio/diaspora-gaucha-mato-grosso.html` | Diáspora Gaúcha em Mato Grosso | 406 | 4 | media | sim | nao |
| `paginas/cultura/cavalo-crioulo.html` | Cavalo Crioulo | 409 | 7 | media | sim | sim |
| `paginas/literatura/luis-fernando-verissimo.html` | Luis Fernando Verissimo | 411 | 5 | media | sim | sim |
| `paginas/territorio/diaspora-gaucha-mato-grosso-do-sul.html` | Diáspora Gaúcha em Mato Grosso do Sul | 412 | 4 | media | sim | nao |
| `paginas/midia/radio-gaucho.html` | Rádio Gaúcho | 413 | 5 | media | sim | sim |
| `paginas/gastronomia/cafe-colonial.html` | Café Colonial | 414 | 5 | media | sim | sim |
| `paginas/midia/cinema-radio-tv.html` | Cinema, Rádio e Televisão no RS | 414 | 5 | media | sim | nao |
| `paginas/cultura/pilcha-gaucha.html` | Pilcha Gaúcha | 415 | 5 | media | sim | sim |
| `paginas/sociedade/cultura-indigena-contemporanea.html` | Cultura Indígena Contemporânea no RS | 417 | 5 | media | sim | sim |
| `paginas/patrimonio/casa-estancia.html` | Casa de Estância | 418 | 5 | media | sim | sim |
| `paginas/municipios/sao-miguel-das-missoes.html` | São Miguel das Missões | 420 | 9 | media | sim | nao |
| `paginas/patrimonio/arquitetura-enxaimel-rs.html` | Arquitetura Enxaimel no RS | 420 | 5 | media | sim | sim |
| `paginas/municipios/rio-grande.html` | Rio Grande | 421 | 9 | media | sim | nao |
| `paginas/territorio/diaspora-gaucha-rondonia.html` | Diáspora Gaúcha em Rondônia | 422 | 4 | media | sim | nao |
| `paginas/cultura/festas.html` | Festas, Acampamentos e Rodeios | 424 | 5 | media | sim | nao |
| `paginas/cultura/estancias-gauchas.html` | Estâncias Gaúchas | 426 | 5 | media | sim | sim |
| `paginas/cultura/bombacha-lenco-guaiaca.html` | Bombacha, Lenço e Guaiaca | 427 | 5 | media | sim | nao |
| `paginas/historia/cultura-missioneira.html` | Cultura Missioneira | 427 | 5 | media | sim | sim |
| `paginas/gastronomia/doce-pelotas.html` | Doce de Pelotas | 429 | 4 | media | sim | nao |
| `paginas/musica-danca/pajada-trova.html` | Pajada e Trova | 432 | 6 | media | sim | nao |
| `paginas/musica-danca/vaneira.html` | Vaneira | 432 | 8 | media | sim | nao |
| `paginas/territorio/fronteira-brasil-uruguai-argentina.html` | Fronteira Brasil-Uruguai-Argentina | 433 | 5 | media | sim | sim |
| `paginas/gastronomia/cultura-vinho-serra.html` | Cultura do Vinho na Serra Gaúcha | 438 | 5 | media | sim | sim |
| `paginas/simbolos/brasao-rio-grandense.html` | Brasão do Rio Grande do Sul | 440 | 5 | media | sim | sim |
| `paginas/historia/joao-goulart-sao-borja.html` | João Goulart e São Borja | 441 | 4 | media | sim | nao |
| `paginas/patrimonio/ruinas-sao-miguel-arcanjo.html` | Ruínas de São Miguel Arcanjo | 442 | 5 | media | sim | nao |
| `paginas/sociedade/mulheres-gauchas.html` | Mulheres na História Gaúcha | 445 | 5 | media | sim | sim |
| `paginas/meio-ambiente/araucaria-pinhao.html` | Araucária e Pinhão | 447 | 4 | media | sim | nao |
| `paginas/linguagem/linguagem-regional.html` | Linguagem e Variações Regionais | 448 | 5 | media | sim | nao |
| `paginas/patrimonio/fontes-bibliografia.html` | Fontes e Bibliografia | 448 | 7 | media | sim | nao |
| `paginas/gastronomia/costela-fogo-chao.html` | Costela no Fogo de Chão | 449 | 4 | media | sim | nao |
| `paginas/municipios/bento-goncalves.html` | Bento Gonçalves | 449 | 10 | media | sim | nao |
| `paginas/musica-danca/fandango-gaucho.html` | Fandango Gaúcho | 450 | 8 | media | sim | nao |
| `paginas/territorio/regioes-culturais-rs.html` | Regiões Culturais do RS | 450 | 5 | media | sim | nao |
| `paginas/linguagem/expressoes-gauchescas.html` | Expressões Gauchescas | 453 | 5 | media | sim | nao |
| `paginas/municipios/bage.html` | Bagé | 453 | 10 | media | sim | nao |
| `paginas/municipios/santa-maria.html` | Santa Maria | 453 | 10 | media | sim | nao |
| `paginas/historia/getulio-vargas-rs.html` | Getúlio Vargas e o RS | 455 | 4 | media | sim | nao |
| `paginas/economia/economia-contemporanea.html` | Economia Contemporânea do RS | 456 | 6 | media | sim | nao |
| `paginas/musica-danca/chula.html` | Chula Gaúcha | 456 | 8 | media | sim | nao |
| `paginas/municipios/uruguaiana.html` | Uruguaiana | 457 | 10 | media | sim | nao |
| `paginas/musica-danca/gaita-ponto.html` | Gaita-Ponto | 457 | 9 | media | sim | nao |
| `paginas/meio-ambiente/meio-ambiente-pampas.html` | Meio Ambiente e Pampas | 462 | 5 | media | sim | sim |
| `paginas/municipios/sao-borja.html` | São Borja | 463 | 10 | media | sim | nao |
| `paginas/gastronomia/ambrosia.html` | Ambrosia | 469 | 7 | media | sim | nao |
| `paginas/municipios/caxias-do-sul.html` | Caxias do Sul | 469 | 10 | media | sim | nao |
| `paginas/musica-danca/evolucao-musica.html` | Evolução da Música do Rio Grande do Sul | 471 | 8 | media | sim | nao |
| `paginas/municipios/municipios.html` | Municípios Gaúchos | 472 | 8 | media | sim | sim |
| `paginas/municipios/pelotas.html` | Pelotas | 472 | 10 | media | sim | nao |
| `paginas/gastronomia/entrevero-pinhao.html` | Entrevero de Pinhão | 477 | 4 | media | sim | nao |
| `paginas/historia/charqueadas-pelotas.html` | Charqueadas de Pelotas | 478 | 5 | media | sim | sim |
| `paginas/gastronomia/pinhao.html` | Pinhão | 479 | 8 | media | sim | nao |
| `paginas/musica-danca/musica.html` | Música e Danças Tradicionais | 479 | 8 | media | sim | sim |
| `paginas/economia/cooperativismo-gaucho.html` | Cooperativismo Gaúcho | 483 | 6 | media | sim | nao |
| `paginas/cultura/vestimenta.html` | Indumentária: A Pilcha | 486 | 5 | media | sim | nao |
| `paginas/historia/maragatos-chimangos.html` | Maragatos e Chimangos | 497 | 6 | media | sim | nao |
| `paginas/gastronomia/matambre-recheado.html` | Matambre Recheado | 498 | 8 | media | sim | nao |
| `paginas/gastronomia/sagu-vinho.html` | Sagu com Vinho | 499 | 7 | media | sim | nao |
| `paginas/gastronomia/cuca-gaucha.html` | Cuca Gaúcha | 506 | 8 | media | sim | nao |
| `paginas/gastronomia/erva-mate.html` | Erva-Mate | 507 | 4 | media | sim | nao |
| `paginas/esporte/esportes-jogos-tradicionais.html` | Esporte Gaúcho | 516 | 7 | media | sim | nao |
| `paginas/meio-ambiente/enchentes-reconstrucao.html` | Enchentes e Reconstrução no RS | 518 | 5 | media | sim | nao |
| `paginas/gastronomia/galeto-polenta.html` | Galeto, Polenta e Massa | 520 | 8 | media | sim | nao |
| `paginas/historia/sepe-tiaraju.html` | Sepé Tiaraju | 530 | 4 | media | sim | nao |
| `paginas/gastronomia/charque.html` | Charque | 557 | 9 | media | sim | sim |
| `paginas/historia/imigracao.html` | A Grande Imigração | 561 | 5 | media | sim | sim |
| `paginas/municipios/porto-alegre.html` | Porto Alegre | 564 | 11 | media | sim | sim |
| `paginas/gastronomia/churrasco-gaucho.html` | Churrasco Gaúcho | 565 | 9 | media | sim | sim |
| `paginas/historia/missoes-jesuiticas.html` | A Saga das Missões Jesuíticas | 587 | 7 | media | sim | sim |
| `paginas/historia/revolucao-farroupilha.html` | Revolução Farroupilha | 594 | 6 | media | sim | nao |
| `paginas/gastronomia/arroz-carreteiro.html` | Arroz de Carreteiro | 600 | 9 | aprofundada | sim | sim |
| `paginas/gastronomia/chimarrao.html` | O Ritual do Chimarrão | 604 | 6 | aprofundada | sim | sim |
| `paginas/cultura/lida-campeira.html` | A Lida Campeira e o Cavalo | 655 | 8 | aprofundada | sim | sim |
| `paginas/historia/origens-povo-gaucho.html` | Origens do Povo Gaúcho | 667 | 8 | aprofundada | sim | sim |
| `paginas/economia/economia.html` | Economia do Rio Grande do Sul | 694 | 7 | aprofundada | sim | nao |
| `paginas/cultura/tradicoes-orais.html` | Tradições Orais do Rio Grande do Sul | 766 | 8 | aprofundada | sim | nao |
| `paginas/territorio/geografia.html` | Geografia e Paisagens do Rio Grande do Sul | 780 | 8 | aprofundada | sim | sim |
| `paginas/cultura/ctgs.html` | CTGs - Centros de Tradição Gaúcha | 813 | 8 | aprofundada | sim | sim |
| `paginas/personalidades/personalidades-gauchas.html` | Personalidades Gaúchas | 921 | 10 | aprofundada | sim | nao |
| `paginas/historia/tropeirismo.html` | Tropeirismo | 942 | 9 | aprofundada | sim | sim |
| `paginas/economia/pecuaria-rs.html` | Pecuária no Rio Grande do Sul | 951 | 8 | aprofundada | sim | sim |
| `paginas/literatura/literatura.html` | A Literatura | 958 | 13 | aprofundada | sim | sim |
| `paginas/territorio/diaspora-gaucha.html` | Diáspora Gaúcha pelo Brasil | 1388 | 12 | aprofundada | sim | sim |
| `paginas/cultura/lendas.html` | Lendas e Mitos do Rio Grande do Sul | 1540 | 7 | aprofundada | sim | nao |
| `paginas/contos/conto-jogo-do-osso.html` | Jogo do Osso | 1571 | 3 | aprofundada | sim | nao |
| `paginas/contos/conto-trezentas-oncas.html` | Trezentas Onças | 1946 | 3 | aprofundada | sim | nao |
| `paginas/patrimonio/artesanato.html` | Artesanato e Arte do Rio Grande do Sul | 2045 | 7 | aprofundada | sim | nao |
| `paginas/contos/conto-contrabandista.html` | Contrabandista | 2077 | 3 | aprofundada | sim | nao |
| `paginas/contos/conto-negro-bonifacio.html` | O Negro Bonifácio | 2129 | 3 | aprofundada | sim | nao |
| `paginas/contos/conto-melancia-coco-verde.html` | Melancia - Coco Verde | 3207 | 3 | aprofundada | sim | nao |
| `paginas/contos/conto-no-manantial.html` | No Manantial | 4383 | 3 | aprofundada | sim | nao |
