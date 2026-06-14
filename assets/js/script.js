const sitePages = [
    { title: 'Início', url: 'index.html', category: 'Geral', text: 'portal cultura gaúcha categorias história tradição gastronomia turismo' },
    { title: 'História do RS', url: 'historia.html', category: 'História', text: 'história fronteira guerras formação Rio Grande do Sul períodos missões estâncias escravidão imigração política' },
    { title: 'Cultura Gaúcha', url: 'cultura.html', category: 'Cultura', text: 'hub cultura tradições música literatura linguagem campo diversidade' },
    { title: 'Origens do Povo Gaúcho', url: 'origens-povo-gaucho.html', category: 'História', text: 'origens genealogia antepassados famílias IHGRGS APERS FamilySearch' },
    { title: 'Povos Originários', url: 'povos-originarios.html', category: 'História', text: 'guarani kaingang charrua minuano indígenas contemporaneidade territórios línguas' },
    { title: 'Missões Jesuíticas', url: 'missoes-jesuiticas.html', category: 'História', text: 'missões jesuíticas reduções sepé tiaraju guarani' },
    { title: 'Revolução Farroupilha', url: 'revolucao-farroupilha.html', category: 'História', text: 'farrapos farroupilha bento gonçalves lanceiros negros garibaldi' },
    { title: 'Maragatos e Chimangos', url: 'maragatos-chimangos.html', category: 'História', text: 'revolução federalista lenço vermelho branco política' },
    { title: 'Imigração', url: 'imigracao.html', category: 'História', text: 'alemães italianos açorianos imigração colônias serra' },
    { title: 'Diáspora Gaúcha pelo Brasil', url: 'diaspora-gaucha.html', category: 'Território', text: 'diáspora gaucha migração interna famílias terras trabalho expansão agrícola centro-oeste paraná santa catarina rondônia identidade' },
    { title: 'Tradições Orais', url: 'tradicoes-orais.html', category: 'Cultura', text: 'causos trovas pajadas oralidade memória' },
    { title: 'Lendas e Mitos', url: 'lendas.html', category: 'Cultura', text: 'negrinho pastoreio salamanca jarau boitatá lobisomem' },
    { title: 'Música e Danças', url: 'musica.html', category: 'Cultura', text: 'música dança vaneira chamamé milonga bugio festivais pajada trova rádio disco' },
    { title: 'Teixeirinha', url: 'paginas/personalidades/teixeirinha.html', category: 'Cultura', text: 'música gaúcha canção regional cinema coração de luto' },
    { title: 'Gildo de Freitas', url: 'paginas/personalidades/gildo-de-freitas.html', category: 'Cultura', text: 'trova canção campeira humor música gaúcha' },
    { title: 'Jayme Caetano Braun', url: 'paginas/personalidades/jayme-caetano-braun.html', category: 'Cultura', text: 'pajada payador poesia missioneira declamação' },
    { title: 'Renato Borghetti', url: 'paginas/personalidades/renato-borghetti.html', category: 'Cultura', text: 'gaita ponto música instrumental regional' },
    { title: 'Yamandu Costa', url: 'paginas/personalidades/yamandu-costa.html', category: 'Cultura', text: 'violão milonga choro música instrumental' },
    { title: 'Elis Regina', url: 'paginas/personalidades/elis-regina.html', category: 'Cultura', text: 'cantora porto alegre mpb intérprete' },
    { title: 'Kleiton & Kledir', url: 'paginas/personalidades/kleiton-kledir.html', category: 'Cultura', text: 'pelotas música urbana pop mpb' },
    { title: 'Luiz Marenco', url: 'paginas/personalidades/luiz-marenco.html', category: 'Cultura', text: 'nativista milonga campanha música gaúcha' },
    { title: 'Culinária', url: 'culinaria.html', category: 'Gastronomia', text: 'churrasco chimarrão carreteiro charque culinária matrizes indígena afro alemã italiana campeira' },
    { title: 'Churrasco Gaúcho', url: 'paginas/gastronomia/churrasco-gaucho.html', category: 'Gastronomia', text: 'churrasco fogo de chão sal grosso costela picanha vazio' },
    { title: 'Arroz de Carreteiro', url: 'paginas/gastronomia/arroz-carreteiro.html', category: 'Gastronomia', text: 'arroz carreteiro charque receita tropeiros panela de ferro' },
    { title: 'Charque', url: 'paginas/gastronomia/charque.html', category: 'Gastronomia', text: 'charque charqueadas carne seca salgada carreteiro' },
    { title: 'Chimarrão', url: 'paginas/gastronomia/chimarrao.html', category: 'Gastronomia', text: 'erva mate cuia bomba roda mate' },
    { title: 'Cuca Gaúcha', url: 'paginas/gastronomia/cuca-gaucha.html', category: 'Gastronomia', text: 'cuca colonial alemã banana uva farofa doce' },
    { title: 'Sagu com Vinho', url: 'paginas/gastronomia/sagu-vinho.html', category: 'Gastronomia', text: 'sagu vinho sobremesa colonial creme' },
    { title: 'Ambrosia', url: 'paginas/gastronomia/ambrosia.html', category: 'Gastronomia', text: 'ambrosia doce leite ovos açúcar colonial' },
    { title: 'Galeto, Polenta e Massa', url: 'paginas/gastronomia/galeto-polenta.html', category: 'Gastronomia', text: 'galeto polenta massa imigração italiana serra' },
    { title: 'Matambre Recheado', url: 'paginas/gastronomia/matambre-recheado.html', category: 'Gastronomia', text: 'matambre recheado carne festa churrasco' },
    { title: 'Pinhão', url: 'paginas/gastronomia/pinhao.html', category: 'Gastronomia', text: 'pinhão araucária inverno serra entrevero' },
    { title: 'Vestimenta', url: 'vestimenta.html', category: 'Cultura', text: 'pilcha bombacha prenda lenço guaiaca' },
    { title: 'CTGs', url: 'ctgs.html', category: 'Cultura', text: 'centros tradição gaúcha invernadas tradicionalismo' },
    { title: 'Festas e Rodeios', url: 'festas.html', category: 'Cultura', text: 'semana farroupilha rodeio crioulo fandango' },
    { title: 'Lida Campeira', url: 'lida-campeira.html', category: 'Cultura', text: 'campo estância cavalo crioulo laço gado galpão arreios rodeio trabalho rural' },
    { title: 'Cavalo Crioulo', url: 'cavalo-crioulo.html', category: 'Cultura', text: 'cavalo crioulo rusticidade resistência lida campeira freio de ouro provas funcionais' },
    { title: 'Dicionário Gaúcho', url: 'dicionario.html', category: 'Linguagem', text: 'gauchês termos expressões vocabulário regional' },
    { title: 'Expressões Gauchescas', url: 'expressoes-gauchescas.html', category: 'Linguagem', text: 'expressões gauchescas faceiro lambari sanga ditos populares' },
    { title: 'Contos Gauchescos', url: 'paginas/contos/contos-gauchescos.html', category: 'Cultura', text: 'contos gauchescos simões lopes neto blau nunes literatura oralidade honra fronteira violência linguagem' },
    { title: 'Trezentas Onças', url: 'paginas/contos/conto-trezentas-oncas.html', category: 'Cultura', text: 'conto trezentas onças honra dinheiro confiança simões lopes neto' },
    { title: 'O Negro Bonifácio', url: 'paginas/contos/conto-negro-bonifacio.html', category: 'Cultura', text: 'conto negro bonifácio violência raça valentia simões lopes neto' },
    { title: 'No Manantial', url: 'paginas/contos/conto-no-manantial.html', category: 'Cultura', text: 'conto no manantial memória paisagem simões lopes neto' },
    { title: 'Melancia - Coco Verde', url: 'paginas/contos/conto-melancia-coco-verde.html', category: 'Cultura', text: 'conto melancia coco verde humor oralidade simões lopes neto' },
    { title: 'Contrabandista', url: 'paginas/contos/conto-contrabandista.html', category: 'Cultura', text: 'conto contrabandista fronteira contrabando simões lopes neto' },
    { title: 'Jogo do Osso', url: 'paginas/contos/conto-jogo-do-osso.html', category: 'Cultura', text: 'conto jogo do osso jogo tradicional galpão simões lopes neto' },
    { title: 'Personalidades Gaúchas', url: 'paginas/personalidades/personalidades-gauchas.html', category: 'Sociedade', text: 'política cultura esporte história personalidades' },
    { title: 'Esporte Gaúcho', url: 'esportes-jogos-tradicionais.html', category: 'Esporte', text: 'Grêmio Internacional futebol interior bocha judô ginástica' },
    { title: 'Geografia Regional', url: 'geografia.html', category: 'Território', text: 'pampa serra litoral hidrografia clima regiões' },
    { title: 'Território Gaúcho', url: 'territorio.html', category: 'Território', text: 'hub território municípios geografia economia pampas fronteira regiões' },
    { title: 'Turismo', url: 'turismo.html', category: 'Turismo', text: 'serra missões campanha litoral roteiros turismo' },
    { title: 'Municípios Gaúchos', url: 'paginas/municipios/municipios.html', category: 'Turismo', text: 'municípios cidades porto alegre pelotas rio grande serra campanha missões fronteira regiões culturais' },
    { title: 'Porto Alegre', url: 'paginas/municipios/porto-alegre.html', category: 'Turismo', text: 'capital cultura parques política rio grande do sul' },
    { title: 'Rio Grande', url: 'paginas/municipios/rio-grande.html', category: 'Turismo', text: 'porto litoral história forte cidade marítima' },
    { title: 'Pelotas', url: 'paginas/municipios/pelotas.html', category: 'Turismo', text: 'charqueadas doces patrimônio universidades' },
    { title: 'São Borja', url: 'paginas/municipios/sao-borja.html', category: 'Turismo', text: 'missões fronteira getúlio vargas joão goulart' },
    { title: 'São Miguel das Missões', url: 'paginas/municipios/sao-miguel-das-missoes.html', category: 'Turismo', text: 'ruínas missões guarani patrimônio unesco' },
    { title: 'Caxias do Sul', url: 'paginas/municipios/caxias-do-sul.html', category: 'Turismo', text: 'serra imigração italiana indústria festa da uva' },
    { title: 'Bagé', url: 'paginas/municipios/bage.html', category: 'Turismo', text: 'campanha pecuária cavalo fronteira' },
    { title: 'Santa Maria', url: 'paginas/municipios/santa-maria.html', category: 'Turismo', text: 'universitária ferroviária militar centro estado' },
    { title: 'Bento Gonçalves', url: 'paginas/municipios/bento-goncalves.html', category: 'Turismo', text: 'vinhos vale dos vinhedos imigração italiana' },
    { title: 'Uruguaiana', url: 'paginas/municipios/uruguaiana.html', category: 'Turismo', text: 'fronteira oeste califórnia canção nativa rio uruguai' },
    { title: 'Economia', url: 'economia.html', category: 'Economia', text: 'agro indústria serviços comércio exterior tecnologia' },
    { title: 'Arquitetura Gaúcha', url: 'arquitetura-gaucha.html', category: 'Patrimônio', text: 'estância enxaimel missioneira patrimônio arquitetura' },
    { title: 'Patrimônio e Memória', url: 'patrimonio.html', category: 'Patrimônio', text: 'hub patrimônio memória arquitetura artesanato fontes educação patrimonial' },
    { title: 'Artesanato', url: 'artesanato.html', category: 'Patrimônio', text: 'couro lã madeira cerâmica cutelaria artesanato' },
    { title: 'Tecnologia e Cultura', url: 'tecnologia-cultura.html', category: 'Tecnologia', text: 'acervos digitais mapas IA dados cultura' },
    { title: 'Sobre o Site', url: 'sobre-o-site.html', category: 'Geral', text: 'demonstrador tecnologia aulas graduação pós-graduação OpenCode IA' },
    { title: 'Mapa do Site', url: 'mapa-do-site.html', category: 'Geral', text: 'organização índice páginas categorias' },
    { title: 'Fontes e Bibliografia', url: 'fontes-bibliografia.html', category: 'Pesquisa', text: 'fontes bibliografia instituições pesquisa arquivo' },
    { title: 'Linha do Tempo Interativa', url: 'linha-do-tempo.html', category: 'História', text: 'linha do tempo interativa eventos história cultura política imigração esporte tecnologia' },
    { title: 'Diáspora Gaúcha no Paraná', url: 'diaspora-gaucha-parana.html', category: 'Território', text: 'famílias gaúchas no oeste e sudoeste paranaense, agricultura, cooperativas e novas comunidades.' },
    { title: 'Diáspora Gaúcha em Santa Catarina', url: 'diaspora-gaucha-santa-catarina.html', category: 'Território', text: 'oeste catarinense, colonização, agricultura familiar e circulação cultural sulista.' },
    { title: 'Diáspora Gaúcha em Mato Grosso', url: 'diaspora-gaucha-mato-grosso.html', category: 'Território', text: 'fronteira agrícola, soja, cidades novas e redes migratórias vindas do sul.' },
    { title: 'Diáspora Gaúcha em Mato Grosso do Sul', url: 'diaspora-gaucha-mato-grosso-do-sul.html', category: 'Território', text: 'migração sulista, agropecuária, fronteira e adaptação cultural no centro-oeste.' },
    { title: 'Diáspora Gaúcha em Rondônia', url: 'diaspora-gaucha-rondonia.html', category: 'Território', text: 'colonização, br-364, recomeço familiar e desafios amazônicos.' },
    { title: 'Diáspora Gaúcha em Goiás', url: 'diaspora-gaucha-goias.html', category: 'Território', text: 'cerrado, agricultura moderna, comércio e redes gaúchas no centro-oeste.' },
    { title: 'Diáspora Gaúcha no Pará', url: 'diaspora-gaucha-para.html', category: 'Território', text: 'migração sulista na amazônia, terra, trabalho e conflitos socioambientais.' },
    { title: 'Cooperativismo Gaúcho', url: 'cooperativismo-gaucho.html', category: 'Economia', text: 'agricultura familiar, crédito, agroindústria, confiança comunitária e expansão econômica.' },
    { title: 'Tropeirismo', url: 'tropeirismo.html', category: 'História', text: 'rotas de gado e muares, comércio, pousos, caminhos e formação regional.' },
    { title: 'Estâncias Gaúchas', url: 'estancias-gauchas.html', category: 'Cultura', text: 'pecuária, casa de campo, relações de trabalho, hierarquias e memória rural.' },
    { title: 'Charqueadas de Pelotas', url: 'charqueadas-pelotas.html', category: 'História', text: 'economia do charque, escravidão, patrimônio industrial e memória afro-gaúcha.' },
    { title: 'Fronteira Brasil-Uruguai-Argentina', url: 'fronteira-brasil-uruguai-argentina.html', category: 'Território', text: 'cidades-gêmeas, circulação familiar, comércio, música, línguas e identidades platinas.' },
    { title: 'Cultura Missioneira', url: 'cultura-missioneira.html', category: 'História', text: 'memória guarani-jesuítica, música, ruínas, sepé tiaraju e identidade regional.' },
    { title: 'Cultura do Vinho na Serra Gaúcha', url: 'cultura-vinho-serra.html', category: 'Gastronomia', text: 'vitivinicultura, imigração italiana, cantinas, cooperativas e turismo.' },
    { title: 'Erva-Mate', url: 'erva-mate.html', category: 'Gastronomia', text: 'história, produção, indústria, chimarrão e presença indígena.' },
    { title: 'Araucária e Pinhão', url: 'araucaria-pinhao.html', category: 'Meio Ambiente', text: 'ecologia, alimentação, povos originários, serra e preservação ambiental.' },
    { title: 'Rádio Gaúcho', url: 'radio-gaucho.html', category: 'Mídia', text: 'programas nativistas, futebol, música regional, notícias e formação de público.' },
    { title: 'Imprensa Regional no RS', url: 'imprensa-regional.html', category: 'Mídia', text: 'jornais, almanaques, política, literatura, comércio e memória local.' },
    { title: 'Universidades e Cultura no RS', url: 'universidades-cultura.html', category: 'Educação', text: 'pesquisa, extensão, museus, arquivos universitários e formação cultural.' },
    { title: 'Futebol Gaúcho do Interior', url: 'futebol-interior-gaucho.html', category: 'Esporte', text: 'clubes locais, rivalidades, estádios, rádio e identidade urbana.' },
    { title: 'Carnaval no Rio Grande do Sul', url: 'carnaval-rs.html', category: 'Cultura', text: 'porto alegre, pelotas, rio grande, uruguaiana, escolas de samba e presença afro-brasileira.' },
    { title: 'Cultura LGBTQIA+ no RS', url: 'cultura-lgbtqia-rs.html', category: 'Sociedade', text: 'memória urbana, movimentos sociais, arte, direitos e espaços de sociabilidade.' },
    { title: 'Cultura Indígena Contemporânea no RS', url: 'cultura-indigena-contemporanea.html', category: 'Sociedade', text: 'guarani, kaingang, charrua e presença indígena viva no presente.' },
    { title: 'Mudanças Climáticas no RS', url: 'mudancas-climaticas-rs.html', category: 'Meio Ambiente', text: 'enchentes, estiagens, pampa, agricultura, cidades e memória comunitária.' },
    { title: 'Enchentes e Reconstrução no RS', url: 'enchentes-reconstrucao.html', category: 'Meio Ambiente', text: 'memória das cheias, solidariedade, território urbano e reconstrução comunitária.' },
    { title: 'Cultura Digital Gaúcha', url: 'cultura-digital-gaucha.html', category: 'Tecnologia', text: 'acervos online, mapas, ia, memória, educação e preservação digital.' },
    { title: 'Semana Farroupilha', url: 'semana-farroupilha.html', category: 'Cultura', text: 'memória cívica, acampamentos, desfiles, ctgs e debates sobre tradição.' },
    { title: 'Rodeio Crioulo', url: 'rodeio-crioulo.html', category: 'Cultura', text: 'provas campeiras, laço, gineteada, sociabilidade, regras e controvérsias.' },
    { title: 'Pilcha Gaúcha', url: 'pilcha-gaucha.html', category: 'Cultura', text: 'indumentária tradicional, usos sociais, normas, memória e identidade.' },
    { title: 'Bombacha, Lenço e Guaiaca', url: 'bombacha-lenco-guaiaca.html', category: 'Cultura', text: 'simbologia das peças, usos cotidianos e tradição campeira.' },
    { title: 'Fandango Gaúcho', url: 'fandango-gaucho.html', category: 'Música', text: 'dança, baile, música, sociabilidade e tradição popular.' },
    { title: 'Pajada e Trova', url: 'pajada-trova.html', category: 'Música', text: 'improviso, oralidade, poesia campeira, disputa verbal e memória.' },
    { title: 'Milonga', url: 'milonga.html', category: 'Música', text: 'gênero musical de fronteira, poesia, violão, dança e identidade platina.' },
    { title: 'Chamamé', url: 'chamame.html', category: 'Música', text: 'ritmo missioneiro e platino, acordeon, dança e circulação fronteiriça.' },
    { title: 'Bugio', url: 'bugio.html', category: 'Música', text: 'ritmo regional, gaita, baile e identidade do interior.' },
    { title: 'Vaneira', url: 'vaneira.html', category: 'Música', text: 'baile, dança de salão, gaita e repertório popular gaúcho.' },
    { title: 'Gaita-Ponto', url: 'gaita-ponto.html', category: 'Música', text: 'instrumento, repertório, bailes, música instrumental e tradição regional.' },
    { title: 'Violão Gaúcho', url: 'violao-gaucho.html', category: 'Música', text: 'milonga, técnica, composição instrumental e diálogo com o prata.' },
    { title: 'Casa de Estância', url: 'casa-estancia.html', category: 'Patrimônio', text: 'arquitetura rural, galpão, mangueira, trabalho e vida familiar.' },
    { title: 'Arquitetura Enxaimel no RS', url: 'arquitetura-enxaimel-rs.html', category: 'Patrimônio', text: 'casas de imigração alemã, técnica construtiva e memória colonial.' },
    { title: 'Ruínas de São Miguel Arcanjo', url: 'ruinas-sao-miguel-arcanjo.html', category: 'Patrimônio', text: 'patrimônio missioneiro, arqueologia, turismo e memória guarani-jesuítica.' },
    { title: 'Sepé Tiaraju', url: 'sepe-tiaraju.html', category: 'História', text: 'liderança guarani, guerra guaranítica, mito político e memória missioneira.' },
    { title: 'Lanceiros Negros', url: 'lanceiros-negros.html', category: 'História', text: 'participação negra na revolução farroupilha, porongos, liberdade e memória.' },
    { title: 'Getúlio Vargas e o RS', url: 'getulio-vargas-rs.html', category: 'História', text: 'são borja, revolução de 1930, trabalhismo, estado novo e memória política.' },
    { title: 'João Goulart e São Borja', url: 'joao-goulart-sao-borja.html', category: 'História', text: 'jango, trabalhismo, reformas de base, golpe de 1964 e memória fronteiriça.' },
    { title: 'Mario Quintana', url: 'mario-quintana.html', category: 'Literatura', text: 'poesia, porto alegre, infância, humor e memória literária.' },
    { title: 'João Simões Lopes Neto', url: 'simoes-lopes-neto.html', category: 'Literatura', text: 'contos gauchescos, blau nunes, linguagem regional e memória oral.' },
    { title: 'Erico Verissimo', url: 'erico-verissimo.html', category: 'Literatura', text: 'romance histórico, o tempo e o vento, memória familiar e formação do rs.' },
    { title: 'Luis Fernando Verissimo', url: 'luis-fernando-verissimo.html', category: 'Literatura', text: 'crônica, humor, jornalismo, música e cultura urbana.' },
    { title: 'Doce de Pelotas', url: 'doce-pelotas.html', category: 'Gastronomia', text: 'patrimônio doceiro, receitas, economia doméstica e identidade urbana.' },
    { title: 'Café Colonial', url: 'cafe-colonial.html', category: 'Gastronomia', text: 'mesa farta da serra, imigração, turismo e sociabilidade familiar.' },
    { title: 'Entrevero de Pinhão', url: 'entrevero-pinhao.html', category: 'Gastronomia', text: 'prato de inverno com pinhão, carnes, legumes e memória serrana.' },
    { title: 'Costela no Fogo de Chão', url: 'costela-fogo-chao.html', category: 'Gastronomia', text: 'técnica do churrasco, tempo lento, brasa, campo e sociabilidade.' },
    { title: 'Regiões Culturais do RS', url: 'regioes-culturais-rs.html', category: 'Território', text: 'campanha, serra, missões, litoral, fronteira, metropolitana e seus contrastes.' },
    { title: 'Xote Gaúcho', url: 'xote-gaucho.html', category: 'Música', text: 'dança de par, balanço moderado e presença constante em fandangos. gaita, violão, baixo, bateria, voz e conjuntos regionais. aprox. 80 a 120 bpm, com andamento moderado e balanço regular.' },
    { title: 'Rancheira', url: 'rancheira.html', category: 'Música', text: 'dança popular de salão ligada ao repertório regional e fronteiriço. gaita/acordeom, violão, baixo, bateria, voz e conjuntos de baile. aprox. 90 a 130 bpm, geralmente em levada ternária ou valseada.' },
    { title: 'Chamarrita', url: 'chamarrita.html', category: 'Dança', text: 'dança tradicional de origem luso-açoriana presente no folclore gaúcho. gaita, violão, rabeca em tradições antigas, percussão leve e canto em algumas versões. aprox. 100 a 140 bpm, com marcação viva e estrutura coreográfica coletiva.' },
    { title: 'Pezinho', url: 'pezinho.html', category: 'Dança', text: 'dança tradicional de pares, gestos marcados e caráter brincante. gaita, violão, canto, percussão leve e conjuntos tradicionalistas. aprox. 100 a 130 bpm, com marcação clara para passos e palmas.' },
    { title: 'Balaio', url: 'balaio.html', category: 'Dança', text: 'dança tradicional de conjunto, figuras coreográficas e memória folclórica. gaita, violão, canto e acompanhamento rítmico leve. aprox. 100 a 140 bpm, com pulso regular para deslocamentos coletivos.' },
    { title: 'Chula Gaúcha', url: 'chula.html', category: 'Dança', text: 'dança sapateada masculina, desafio rítmico e virtuosismo corporal. gaita, violão, percussão leve, palmas e marcação rítmica para sustentar o sapateado. aprox. 100 a 150 bpm, dependendo da execução; o foco está na precisão rítmica do sapateado.' },
    { title: 'Música Gaúcha Contemporânea', url: 'musica-gaucha-contemporanea.html', category: 'Música', text: 'nativismo, mpb, rock, pop, jazz, música instrumental e produção digital. gaita, violão, guitarra, baixo, bateria, piano, sintetizadores, cordas, sopros, percussões e recursos digitais de estúdio. variável; depende do diálogo com milonga, pop, rock, jazz, música instrumental, eletrônica ou canção nativista.' },
];

const timelineEvents = [
    { period: 'Antes do século XVI', category: 'História', title: 'Presença dos povos originários', text: 'Guarani, Kaingang, Charrua, Minuano e outros povos habitavam campos, matas, rios e áreas missioneiras antes da colonização europeia.', url: 'povos-originarios.html' },
    { period: 'Séculos XVII e XVIII', category: 'História', title: 'Missões Jesuíticas', text: 'Reduções missioneiras reuniram organização social, religiosidade, arte, música, agricultura e resistência guarani.', url: 'missoes-jesuiticas.html' },
    { period: '1750-1756', category: 'Política', title: 'Tratado de Madrid e Guerra Guaranítica', text: 'A redefinição territorial entre Portugal e Espanha levou a deslocamentos forçados e à resistência missioneira simbolizada por Sepé Tiaraju.', url: 'missoes-jesuiticas.html' },
    { period: 'Século XVIII', category: 'História', title: 'Estâncias, tropeirismo e fronteira', text: 'A criação de gado, as rotas de tropeiros e a militarização da fronteira ajudaram a formar modos de vida campeiros.', url: 'lida-campeira.html' },
    { period: '1737', category: 'Política', title: 'Fundação do forte de Rio Grande', text: 'A presença militar portuguesa consolidou uma base estratégica no extremo sul do Brasil colonial.', url: 'historia.html' },
    { period: 'Século XVIII', category: 'Imigração', title: 'Chegada de açorianos', text: 'Casais açorianos contribuíram para povoamentos, agricultura e formação de núcleos civis no território gaúcho.', url: 'origens-povo-gaucho.html' },
    { period: '1835-1845', category: 'Política', title: 'Revolução Farroupilha', text: 'Conflito longo envolvendo autonomia provincial, economia do charque, República Rio-Grandense e memória cívica regional.', url: 'revolucao-farroupilha.html' },
    { period: '1824 em diante', category: 'Imigração', title: 'Imigração alemã', text: 'Colônias alemãs transformaram agricultura, indústria, arquitetura, educação, religiosidade e sociabilidade em várias regiões.', url: 'imigracao.html' },
    { period: '1875 em diante', category: 'Imigração', title: 'Imigração italiana', text: 'A ocupação da Serra impulsionou vitivinicultura, agricultura familiar, gastronomia, festas e identidades locais.', url: 'imigracao.html' },
    { period: '1893-1895', category: 'Política', title: 'Revolução Federalista', text: 'O conflito entre maragatos e chimangos marcou a política republicana, os lenços partidários e a memória da violência regional.', url: 'maragatos-chimangos.html' },
    { period: 'Início do século XX', category: 'Cultura', title: 'Literatura regional e memória oral', text: 'Autores como João Simões Lopes Neto registraram causos, lendas, linguagem regional e imaginários campeiros.', url: 'literatura.html' },
    { period: '1930', category: 'Política', title: 'Getúlio Vargas chega ao poder nacional', text: 'A Revolução de 1930 projetou lideranças políticas gaúchas no cenário brasileiro.', url: 'paginas/personalidades/personalidades-gauchas.html#getulio-vargas' },
    { period: '1948', category: 'Cultura', title: 'Fundação do 35 CTG', text: 'O tradicionalismo organizado ganhou força com a criação do primeiro Centro de Tradições Gaúchas em Porto Alegre.', url: 'ctgs.html' },
    { period: 'Década de 1960', category: 'Cultura', title: 'Expansão dos festivais nativistas', text: 'Festivais de música valorizaram compositores, intérpretes e repertórios ligados à identidade regional.', url: 'secundarias/evolucao-musica.html' },
    { period: 'Século XX', category: 'Migração', title: 'Diáspora gaúcha pelo Brasil', text: 'Famílias gaúchas migraram para Santa Catarina, Paraná, Centro-Oeste e Amazônia Legal em busca de terras, trabalho e novas oportunidades.', url: 'diaspora-gaucha.html' },
    { period: '1971', category: 'Cultura', title: 'Califórnia da Canção Nativa', text: 'Festival de Uruguaiana tornou-se referência para a música nativista e para a circulação de novos artistas.', url: 'secundarias/evolucao-musica.html' },
    { period: '1983', category: 'Esporte', title: 'Grêmio campeão mundial', text: 'O título mundial projetou o futebol gaúcho internacionalmente e fortaleceu a memória esportiva gremista.', url: 'esportes-jogos-tradicionais.html' },
    { period: '1999', category: 'Esporte', title: 'Daiane dos Santos no cenário internacional', text: 'A ginasta porto-alegrense tornou-se referência da ginástica artística brasileira.', url: 'paginas/personalidades/personalidades-gauchas.html#daiane-dos-santos' },
    { period: '2006', category: 'Esporte', title: 'Internacional campeão mundial', text: 'O título mundial colorado consolidou outro marco internacional do futebol gaúcho.', url: 'esportes-jogos-tradicionais.html' },
    { period: 'Século XXI', category: 'Tecnologia', title: 'Acervos digitais e cultura', text: 'Arquivos, museus e projetos digitais passaram a ampliar o acesso a documentos, fotografias, mapas, genealogia e memória cultural.', url: 'tecnologia-cultura.html' },
    { period: 'Hoje', category: 'Tecnologia', title: 'Site como demonstrador didático', text: 'O projeto usa HTML, CSS, JavaScript e IA para demonstrar desenvolvimento web, gestão de TI, organização de conteúdo e cultura digital.', url: 'sobre-o-site.html' },
];

document.addEventListener('DOMContentLoaded', () => {
    const menuButton = document.querySelector('[data-nav-toggle]');
    const navLinks = document.querySelector('.nav-links');

    if (menuButton && navLinks) {
        menuButton.addEventListener('click', () => {
            const isOpen = navLinks.classList.toggle('is-open');
            menuButton.setAttribute('aria-expanded', String(isOpen));
        });

        navLinks.addEventListener('click', (event) => {
            if (event.target instanceof HTMLAnchorElement) {
                navLinks.classList.remove('is-open');
                menuButton.setAttribute('aria-expanded', 'false');
            }
        });

        document.addEventListener('click', (event) => {
            if (!navLinks.contains(event.target) && !menuButton.contains(event.target)) {
                navLinks.classList.remove('is-open');
                menuButton.setAttribute('aria-expanded', 'false');
            }
        });
    }

    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-links a').forEach((link) => {
        const linkPage = link.getAttribute('href')?.split('/').pop();
        if (linkPage === currentPage) {
            link.classList.add('active');
            link.setAttribute('aria-current', 'page');
        }
    });

    setupThemeToggle();
    setupBackToTop();
    setupSiteSearch();
    setupTimeline();
    setupRelatedLinks(currentPage);
});

function getCurrentDepth() {
    const path = window.location.pathname.replace(/\\/g, '/');
    if (path.includes('/paginas/')) {
        return path.split('/paginas/')[1].split('/').length;
    }
    if (path.includes('/secundarias/')) return 1;
    return 0;
}

function withDepth(url, depth) {
    return '../'.repeat(depth) + url;
}

function setupThemeToggle() {
    const navWrapper = document.querySelector('.nav-wrapper');
    if (!navWrapper) return;

    const savedTheme = localStorage.getItem('site-theme');
    if (savedTheme === 'dark') document.documentElement.classList.add('dark-theme');

    const button = document.createElement('button');
    button.className = 'theme-toggle';
    button.type = 'button';
    button.textContent = document.documentElement.classList.contains('dark-theme') ? 'Tema claro' : 'Tema escuro';
    button.setAttribute('aria-label', 'Alternar tema claro e escuro');
    navWrapper.appendChild(button);

    button.addEventListener('click', () => {
        const isDark = document.documentElement.classList.toggle('dark-theme');
        localStorage.setItem('site-theme', isDark ? 'dark' : 'light');
        button.textContent = isDark ? 'Tema claro' : 'Tema escuro';
    });
}

function setupBackToTop() {
    const backToTop = document.createElement('button');
    backToTop.className = 'back-to-top';
    backToTop.type = 'button';
    backToTop.textContent = 'Topo';
    backToTop.setAttribute('aria-label', 'Voltar ao topo da página');
    document.body.appendChild(backToTop);

    const toggleBackToTop = () => {
        backToTop.classList.toggle('is-visible', window.scrollY > 400);
    };

    window.addEventListener('scroll', toggleBackToTop, { passive: true });
    toggleBackToTop();

    backToTop.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

function normalizeText(value) {
    return value.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
}

function setupSiteSearch() {
    const input = document.getElementById('site-search');
    const results = document.getElementById('site-search-results');
    if (!input || !results) return;

    const render = () => {
        const query = normalizeText(input.value.trim());
        const matches = query
            ? sitePages.filter((page) => normalizeText(`${page.title} ${page.category} ${page.text}`).includes(query))
            : sitePages;

        results.innerHTML = matches.map((page) => `
            <article class="search-result-card">
                <strong><a href="${withDepth(page.url, getCurrentDepth())}">${page.title}</a></strong>
                <span>${page.category}</span>
            </article>
        `).join('') || '<p>Nenhum resultado encontrado.</p>';
    };

    input.addEventListener('input', render);
    render();
}

function setupRelatedLinks(currentPage) {
    const main = document.querySelector('main');
    const footer = document.querySelector('footer');
    if (!main || !footer || currentPage === 'index.html' || currentPage === 'busca.html' || currentPage === 'mapa-do-site.html') return;

    const current = sitePages.find((page) => page.url.split('/').pop() === currentPage);
    if (!current) return;

    const related = sitePages
        .filter((page) => page.url !== current.url && page.category === current.category)
        .slice(0, 4);

    if (!related.length) return;

    const section = document.createElement('section');
    section.className = 'container related-links';
    section.innerHTML = `
        <h2>Leia também</h2>
        <div class="related-grid">
            ${related.map((page) => `<a href="${withDepth(page.url, getCurrentDepth())}">${page.title}</a>`).join('')}
        </div>
    `;
    footer.parentNode.insertBefore(section, footer);
}

function setupTimeline() {
    const list = document.getElementById('timeline-list');
    const count = document.getElementById('timeline-count');
    const buttons = document.querySelectorAll('[data-timeline-filter]');
    if (!list || !count || !buttons.length) return;

    const render = (filter) => {
        const events = filter === 'todos'
            ? timelineEvents
            : timelineEvents.filter((event) => event.category === filter);

        count.textContent = `${events.length} evento${events.length === 1 ? '' : 's'} exibido${events.length === 1 ? '' : 's'}.`;
        list.innerHTML = events.map((event) => `
            <article class="timeline-item">
                <div class="timeline-marker" aria-hidden="true"></div>
                <div class="timeline-card">
                    <span class="timeline-period">${event.period}</span>
                    <span class="timeline-category">${event.category}</span>
                    <h3>${event.title}</h3>
                    <p>${event.text}</p>
                    <a href="${withDepth(event.url, getCurrentDepth())}">Aprofundar tema</a>
                </div>
            </article>
        `).join('');
    };

    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            buttons.forEach((item) => item.classList.add('btn-secondary'));
            button.classList.remove('btn-secondary');
            render(button.dataset.timelineFilter);
        });
    });

    render('todos');
}
