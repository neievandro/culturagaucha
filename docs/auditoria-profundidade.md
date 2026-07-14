# Auditoria de Profundidade de Conteudo

Relatorio gerado automaticamente por `tools/audit-content-depth.js`. Mede palavras dentro de `<main>`, numero de `<section>` e presenca dos marcadores editoriais `para-saber-mais` e `aprofundamento-editorial` ja usados no projeto.

Para regerar este relatorio apos editar conteudo:

```powershell
node tools/audit-content-depth.js
```

## Resumo

- Total de paginas de conteudo analisadas: `144`.
- Media de palavras por pagina: `555`.
- Paginas classificadas como `rasa` (menos de 300 palavras): `3`.
- Paginas classificadas como `media` (300 a 599 palavras): `122`.
- Paginas classificadas como `aprofundada` (600 palavras ou mais): `19`.
- Paginas sem secao `para-saber-mais` (sem fontes/referencias fechadas): `0`.
- Paginas sem nenhum marcador `aprofundamento-editorial`: `90`.

## Prioridade De Aprofundamento

Paginas `rasa` sem secao `para-saber-mais` sao a prioridade mais alta: tem pouco conteudo e nenhuma fonte fechada.

Nenhuma pagina nessa condicao no momento desta auditoria.

## Todas As Paginas (Da Mais Rasa Para A Mais Aprofundada)

| Pagina | Titulo | Palavras | Secoes | Nivel | Para saber mais | Aprofundamento |
|---|---|---:|---:|---|:---:|:---:|
| `paginas/temas/linha-do-tempo.html` | Linha do Tempo Interativa | 235 | 5 | rasa | sim | nao |
| `paginas/linguagem/dicionario.html` | Dicionário de Gauchês | 274 | 5 | rasa | sim | sim |
| `paginas/patrimonio/instituicoes-tradicionalistas.html` | Instituições da Cultura e do Tradicionalismo Gaúcho | 285 | 5 | rasa | sim | nao |
| `paginas/musica-danca/origens-historicas-musica-gaucha.html` | Origens Históricas da Música Gaúcha | 314 | 5 | media | sim | nao |
| `paginas/temas/cultura-urbana.html` | Cultura Urbana Gaúcha | 319 | 5 | media | sim | nao |
| `paginas/personalidades/yamandu-costa.html` | Yamandu Costa | 333 | 7 | media | sim | nao |
| `paginas/personalidades/gildo-de-freitas.html` | Gildo de Freitas | 336 | 7 | media | sim | nao |
| `paginas/personalidades/teixeirinha.html` | Teixeirinha | 337 | 7 | media | sim | nao |
| `paginas/territorio/diaspora-gaucha-para.html` | Diáspora Gaúcha no Pará | 337 | 4 | media | sim | nao |
| `paginas/cultura/semana-farroupilha.html` | Semana Farroupilha | 338 | 4 | media | sim | sim |
| `paginas/personalidades/elis-regina.html` | Elis Regina | 338 | 7 | media | sim | nao |
| `paginas/personalidades/luiz-marenco.html` | Luiz Marenco | 338 | 7 | media | sim | nao |
| `paginas/patrimonio/arquitetura-gaucha.html` | Arquitetura Gaúcha | 339 | 4 | media | sim | nao |
| `paginas/personalidades/renato-borghetti.html` | Renato Borghetti | 339 | 7 | media | sim | nao |
| `paginas/personalidades/jayme-caetano-braun.html` | Jayme Caetano Braun | 340 | 7 | media | sim | nao |
| `paginas/personalidades/kleiton-kledir.html` | Kleiton & Kledir | 341 | 7 | media | sim | nao |
| `paginas/literatura/simoes-lopes-neto.html` | João Simões Lopes Neto | 346 | 4 | media | sim | sim |
| `paginas/sociedade/afro-gauchidade.html` | Afro-Gauchidade | 348 | 7 | media | sim | sim |
| `paginas/simbolos/simbolos-gauchos.html` | Símbolos Gaúchos | 349 | 7 | media | sim | sim |
| `paginas/cultura/o-gaucho.html` | O Gaúcho | 353 | 5 | media | sim | nao |
| `paginas/musica-danca/xote-gaucho.html` | Xote Gaúcho | 353 | 8 | media | sim | nao |
| `paginas/musica-danca/violao-gaucho.html` | Violão Gaúcho | 354 | 8 | media | sim | nao |
| `paginas/simbolos/hino-rio-grandense.html` | Hino Rio-Grandense | 354 | 7 | media | sim | sim |
| `paginas/territorio/cultura-fronteira.html` | Cultura de Fronteira | 354 | 5 | media | sim | nao |
| `paginas/cultura/tradicionalismo-gaucho.html` | Tradicionalismo Gaúcho | 355 | 6 | media | sim | sim |
| `paginas/musica-danca/balaio.html` | Balaio | 355 | 8 | media | sim | nao |
| `paginas/territorio/diaspora-gaucha-santa-catarina.html` | Diáspora Gaúcha em Santa Catarina | 355 | 4 | media | sim | nao |
| `paginas/patrimonio/educacao-patrimonial.html` | Educação Patrimonial | 360 | 4 | media | sim | nao |
| `paginas/literatura/erico-verissimo.html` | Erico Verissimo | 363 | 4 | media | sim | sim |
| `paginas/musica-danca/rancheira.html` | Rancheira | 365 | 8 | media | sim | nao |
| `paginas/sociedade/carnaval-rs.html` | Carnaval no Rio Grande do Sul | 366 | 3 | media | sim | nao |
| `paginas/cultura/religiosidade-festas-populares.html` | Religiosidade e Festas Populares | 368 | 5 | media | sim | nao |
| `paginas/cultura/rodeio-crioulo.html` | Rodeio Crioulo | 369 | 5 | media | sim | sim |
| `paginas/economia/tecnologia-cultura.html` | Tecnologia Aplicada à Cultura | 373 | 5 | media | sim | nao |
| `paginas/musica-danca/musica-gaucha-contemporanea.html` | Música Gaúcha Contemporânea | 377 | 8 | media | sim | sim |
| `paginas/simbolos/bandeira-rio-grandense.html` | Bandeira Rio-Grandense | 377 | 5 | media | sim | sim |
| `paginas/economia/cultura-digital-gaucha.html` | Cultura Digital Gaúcha | 379 | 5 | media | sim | sim |
| `paginas/meio-ambiente/mudancas-climaticas-rs.html` | Mudanças Climáticas no RS | 381 | 4 | media | sim | sim |
| `paginas/economia/universidades-cultura.html` | Universidades e Cultura no RS | 383 | 5 | media | sim | sim |
| `paginas/sociedade/povos-originarios.html` | Povos Originários do RS | 385 | 8 | media | sim | sim |
| `paginas/midia/imprensa-regional.html` | Imprensa Regional no RS | 386 | 5 | media | sim | sim |
| `paginas/historia/lanceiros-negros.html` | Lanceiros Negros | 387 | 5 | media | sim | sim |
| `paginas/midia/cinema-radio-tv.html` | Cinema, Rádio e Televisão no RS | 387 | 5 | media | sim | nao |
| `paginas/cultura/festas.html` | Festas, Acampamentos e Rodeios | 388 | 5 | media | sim | nao |
| `paginas/literatura/mario-quintana.html` | Mario Quintana | 388 | 4 | media | sim | nao |
| `paginas/esporte/futebol-interior-gaucho.html` | Futebol Gaúcho do Interior | 391 | 5 | media | sim | sim |
| `paginas/literatura/luis-fernando-verissimo.html` | Luis Fernando Verissimo | 392 | 5 | media | sim | sim |
| `paginas/territorio/diaspora-gaucha-mato-grosso.html` | Diáspora Gaúcha em Mato Grosso | 392 | 4 | media | sim | nao |
| `paginas/territorio/diaspora-gaucha-parana.html` | Diáspora Gaúcha no Paraná | 392 | 4 | media | sim | nao |
| `paginas/contos/contos-gauchescos.html` | Contos Gauchescos | 393 | 8 | media | sim | sim |
| `paginas/territorio/diaspora-gaucha-goias.html` | Diáspora Gaúcha em Goiás | 393 | 4 | media | sim | nao |
| `paginas/midia/radio-gaucho.html` | Rádio Gaúcho | 394 | 5 | media | sim | sim |
| `paginas/musica-danca/chamame.html` | Chamamé | 396 | 8 | media | sim | sim |
| `paginas/territorio/diaspora-gaucha-mato-grosso-do-sul.html` | Diáspora Gaúcha em Mato Grosso do Sul | 396 | 4 | media | sim | nao |
| `paginas/cultura/cavalo-crioulo.html` | Cavalo Crioulo | 398 | 7 | media | sim | sim |
| `paginas/gastronomia/cafe-colonial.html` | Café Colonial | 398 | 5 | media | sim | sim |
| `paginas/cultura/pilcha-gaucha.html` | Pilcha Gaúcha | 399 | 5 | media | sim | sim |
| `paginas/patrimonio/casa-estancia.html` | Casa de Estância | 399 | 5 | media | sim | sim |
| `paginas/musica-danca/pajada-trova.html` | Pajada e Trova | 405 | 6 | media | sim | nao |
| `paginas/cultura/bombacha-lenco-guaiaca.html` | Bombacha, Lenço e Guaiaca | 407 | 5 | media | sim | nao |
| `paginas/municipios/rio-grande.html` | Rio Grande | 408 | 9 | media | sim | nao |
| `paginas/territorio/diaspora-gaucha-rondonia.html` | Diáspora Gaúcha em Rondônia | 409 | 4 | media | sim | nao |
| `paginas/cultura/estancias-gauchas.html` | Estâncias Gaúchas | 410 | 5 | media | sim | sim |
| `paginas/sociedade/cultura-indigena-contemporanea.html` | Cultura Indígena Contemporânea no RS | 411 | 5 | media | sim | sim |
| `paginas/municipios/sao-miguel-das-missoes.html` | São Miguel das Missões | 413 | 9 | media | sim | nao |
| `paginas/patrimonio/arquitetura-enxaimel-rs.html` | Arquitetura Enxaimel no RS | 414 | 5 | media | sim | sim |
| `paginas/simbolos/brasao-rio-grandense.html` | Brasão do Rio Grande do Sul | 415 | 5 | media | sim | sim |
| `paginas/historia/joao-goulart-sao-borja.html` | João Goulart e São Borja | 416 | 4 | media | sim | nao |
| `paginas/gastronomia/doce-pelotas.html` | Doce de Pelotas | 418 | 4 | media | sim | nao |
| `paginas/historia/cultura-missioneira.html` | Cultura Missioneira | 419 | 5 | media | sim | sim |
| `paginas/territorio/fronteira-brasil-uruguai-argentina.html` | Fronteira Brasil-Uruguai-Argentina | 422 | 5 | media | sim | sim |
| `paginas/gastronomia/cultura-vinho-serra.html` | Cultura do Vinho na Serra Gaúcha | 423 | 5 | media | sim | sim |
| `paginas/musica-danca/fandango-gaucho.html` | Fandango Gaúcho | 425 | 8 | media | sim | nao |
| `paginas/musica-danca/chula.html` | Chula Gaúcha | 426 | 8 | media | sim | nao |
| `paginas/gastronomia/costela-fogo-chao.html` | Costela no Fogo de Chão | 427 | 4 | media | sim | nao |
| `paginas/musica-danca/gaita-ponto.html` | Gaita-Ponto | 430 | 9 | media | sim | nao |
| `paginas/municipios/bento-goncalves.html` | Bento Gonçalves | 431 | 10 | media | sim | nao |
| `paginas/sociedade/mulheres-gauchas.html` | Mulheres na História Gaúcha | 431 | 5 | media | sim | sim |
| `paginas/linguagem/linguagem-regional.html` | Linguagem e Variações Regionais | 434 | 5 | media | sim | nao |
| `paginas/meio-ambiente/araucaria-pinhao.html` | Araucária e Pinhão | 434 | 4 | media | sim | nao |
| `paginas/municipios/santa-maria.html` | Santa Maria | 435 | 10 | media | sim | nao |
| `paginas/linguagem/expressoes-gauchescas.html` | Expressões Gauchescas | 436 | 5 | media | sim | nao |
| `paginas/patrimonio/fontes-bibliografia.html` | Fontes e Bibliografia | 436 | 7 | media | sim | nao |
| `paginas/patrimonio/ruinas-sao-miguel-arcanjo.html` | Ruínas de São Miguel Arcanjo | 436 | 5 | media | sim | nao |
| `paginas/municipios/bage.html` | Bagé | 437 | 10 | media | sim | nao |
| `paginas/territorio/regioes-culturais-rs.html` | Regiões Culturais do RS | 437 | 5 | media | sim | nao |
| `paginas/historia/getulio-vargas-rs.html` | Getúlio Vargas e o RS | 438 | 4 | media | sim | nao |
| `paginas/musica-danca/chamarrita.html` | Chamarrita | 439 | 8 | media | sim | nao |
| `paginas/municipios/uruguaiana.html` | Uruguaiana | 441 | 10 | media | sim | nao |
| `paginas/musica-danca/evolucao-musica.html` | Evolução da Música do Rio Grande do Sul | 442 | 8 | media | sim | nao |
| `paginas/economia/economia-contemporanea.html` | Economia Contemporânea do RS | 443 | 6 | media | sim | nao |
| `paginas/municipios/sao-borja.html` | São Borja | 445 | 10 | media | sim | nao |
| `paginas/meio-ambiente/meio-ambiente-pampas.html` | Meio Ambiente e Pampas | 448 | 5 | media | sim | sim |
| `paginas/musica-danca/vaneira.html` | Vaneira | 448 | 8 | media | sim | nao |
| `paginas/cultura/vestimenta.html` | Indumentária: A Pilcha | 452 | 5 | media | sim | nao |
| `paginas/municipios/municipios.html` | Municípios Gaúchos | 454 | 8 | media | sim | sim |
| `paginas/gastronomia/ambrosia.html` | Ambrosia | 455 | 7 | media | sim | nao |
| `paginas/municipios/caxias-do-sul.html` | Caxias do Sul | 455 | 10 | media | sim | nao |
| `paginas/historia/maragatos-chimangos.html` | Maragatos e Chimangos | 458 | 6 | media | sim | nao |
| `paginas/gastronomia/entrevero-pinhao.html` | Entrevero de Pinhão | 459 | 4 | media | sim | nao |
| `paginas/municipios/pelotas.html` | Pelotas | 460 | 10 | media | sim | nao |
| `paginas/musica-danca/musica.html` | Música e Danças Tradicionais | 460 | 8 | media | sim | sim |
| `paginas/gastronomia/pinhao.html` | Pinhão | 469 | 8 | media | sim | nao |
| `paginas/historia/charqueadas-pelotas.html` | Charqueadas de Pelotas | 470 | 5 | media | sim | sim |
| `paginas/economia/cooperativismo-gaucho.html` | Cooperativismo Gaúcho | 472 | 6 | media | sim | nao |
| `paginas/musica-danca/bugio.html` | Bugio | 475 | 9 | media | sim | nao |
| `paginas/gastronomia/sagu-vinho.html` | Sagu com Vinho | 481 | 7 | media | sim | nao |
| `paginas/gastronomia/matambre-recheado.html` | Matambre Recheado | 482 | 8 | media | sim | nao |
| `paginas/musica-danca/pezinho.html` | Pezinho | 488 | 9 | media | sim | nao |
| `paginas/gastronomia/cuca-gaucha.html` | Cuca Gaúcha | 490 | 8 | media | sim | nao |
| `paginas/gastronomia/erva-mate.html` | Erva-Mate | 497 | 4 | media | sim | nao |
| `paginas/esporte/esportes-jogos-tradicionais.html` | Esporte Gaúcho | 500 | 7 | media | sim | nao |
| `paginas/gastronomia/galeto-polenta.html` | Galeto, Polenta e Massa | 500 | 8 | media | sim | nao |
| `paginas/meio-ambiente/enchentes-reconstrucao.html` | Enchentes e Reconstrução no RS | 503 | 5 | media | sim | nao |
| `paginas/musica-danca/milonga.html` | Milonga | 509 | 9 | media | sim | sim |
| `paginas/historia/sepe-tiaraju.html` | Sepé Tiaraju | 516 | 4 | media | sim | nao |
| `paginas/historia/imigracao.html` | A Grande Imigração | 522 | 5 | media | sim | sim |
| `paginas/musica-danca/musica-nativista.html` | Música Nativista | 535 | 8 | media | sim | nao |
| `paginas/gastronomia/charque.html` | Charque | 547 | 9 | media | sim | sim |
| `paginas/municipios/porto-alegre.html` | Porto Alegre | 551 | 11 | media | sim | sim |
| `paginas/gastronomia/churrasco-gaucho.html` | Churrasco Gaúcho | 554 | 9 | media | sim | sim |
| `paginas/historia/missoes-jesuiticas.html` | A Saga das Missões Jesuíticas | 568 | 7 | media | sim | sim |
| `paginas/historia/revolucao-farroupilha.html` | Revolução Farroupilha | 569 | 6 | media | sim | nao |
| `paginas/gastronomia/chimarrao.html` | O Ritual do Chimarrão | 575 | 6 | media | sim | sim |
| `paginas/gastronomia/arroz-carreteiro.html` | Arroz de Carreteiro | 586 | 9 | media | sim | sim |
| `paginas/cultura/lida-campeira.html` | A Lida Campeira e o Cavalo | 634 | 8 | aprofundada | sim | sim |
| `paginas/historia/origens-povo-gaucho.html` | Origens do Povo Gaúcho | 651 | 8 | aprofundada | sim | sim |
| `paginas/economia/economia.html` | Economia do Rio Grande do Sul | 658 | 7 | aprofundada | sim | nao |
| `paginas/territorio/geografia.html` | Geografia e Paisagens do Rio Grande do Sul | 736 | 8 | aprofundada | sim | sim |
| `paginas/cultura/tradicoes-orais.html` | Tradições Orais do Rio Grande do Sul | 740 | 8 | aprofundada | sim | nao |
| `paginas/cultura/ctgs.html` | CTGs - Centros de Tradição Gaúcha | 770 | 8 | aprofundada | sim | sim |
| `paginas/personalidades/personalidades-gauchas.html` | Personalidades Gaúchas | 904 | 10 | aprofundada | sim | nao |
| `paginas/literatura/literatura.html` | A Literatura | 930 | 13 | aprofundada | sim | sim |
| `paginas/historia/tropeirismo.html` | Tropeirismo | 934 | 9 | aprofundada | sim | sim |
| `paginas/economia/pecuaria-rs.html` | Pecuária no Rio Grande do Sul | 936 | 8 | aprofundada | sim | sim |
| `paginas/territorio/diaspora-gaucha.html` | Diáspora Gaúcha pelo Brasil | 1375 | 12 | aprofundada | sim | sim |
| `paginas/cultura/lendas.html` | Lendas e Mitos do Rio Grande do Sul | 1512 | 7 | aprofundada | sim | nao |
| `paginas/contos/conto-jogo-do-osso.html` | Jogo do Osso | 1555 | 3 | aprofundada | sim | nao |
| `paginas/contos/conto-trezentas-oncas.html` | Trezentas Onças | 1932 | 3 | aprofundada | sim | nao |
| `paginas/patrimonio/artesanato.html` | Artesanato e Arte do Rio Grande do Sul | 2016 | 7 | aprofundada | sim | nao |
| `paginas/contos/conto-contrabandista.html` | Contrabandista | 2065 | 3 | aprofundada | sim | nao |
| `paginas/contos/conto-negro-bonifacio.html` | O Negro Bonifácio | 2113 | 3 | aprofundada | sim | nao |
| `paginas/contos/conto-melancia-coco-verde.html` | Melancia - Coco Verde | 3189 | 3 | aprofundada | sim | nao |
| `paginas/contos/conto-no-manantial.html` | No Manantial | 4369 | 3 | aprofundada | sim | nao |
