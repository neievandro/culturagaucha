const sitePages = [
    { title: 'Início', url: 'index.html', category: 'Geral', text: 'portal cultura gaúcha categorias história tradição gastronomia turismo' },
    { title: 'História do RS', url: 'historia.html', category: 'História', text: 'história fronteira guerras formação Rio Grande do Sul períodos missões estâncias escravidão imigração política' },
    { title: 'Cultura Gaúcha', url: 'cultura.html', category: 'Cultura', text: 'hub cultura tradições música literatura linguagem campo diversidade' },
    { title: 'Origens do Povo Gaúcho', url: 'paginas/historia/origens-povo-gaucho.html', category: 'História', text: 'origens genealogia antepassados famílias IHGRGS APERS FamilySearch' },
    { title: 'Povos Originários', url: 'paginas/sociedade/povos-originarios.html', category: 'História', text: 'guarani kaingang charrua minuano indígenas contemporaneidade territórios línguas' },
    { title: 'Missões Jesuíticas', url: 'paginas/historia/missoes-jesuiticas.html', category: 'História', text: 'missões jesuíticas reduções sepé tiaraju guarani' },
    { title: 'Revolução Farroupilha', url: 'paginas/historia/revolucao-farroupilha.html', category: 'História', text: 'farrapos farroupilha bento gonçalves lanceiros negros garibaldi' },
    { title: 'Maragatos e Chimangos', url: 'paginas/historia/maragatos-chimangos.html', category: 'História', text: 'revolução federalista lenço vermelho branco política' },
    { title: 'Imigração', url: 'paginas/historia/imigracao.html', category: 'História', text: 'alemães italianos açorianos imigração colônias serra' },
    { title: 'Diáspora Gaúcha pelo Brasil', url: 'paginas/territorio/diaspora-gaucha.html', category: 'Território', text: 'diáspora gaucha migração interna famílias terras trabalho expansão agrícola centro-oeste paraná santa catarina rondônia identidade' },
    { title: 'Tradições Orais', url: 'paginas/cultura/tradicoes-orais.html', category: 'Cultura', text: 'causos trovas pajadas oralidade memória' },
    { title: 'Lendas e Mitos', url: 'paginas/cultura/lendas.html', category: 'Cultura', text: 'negrinho pastoreio salamanca jarau boitatá lobisomem' },
    { title: 'Música e Danças', url: 'paginas/musica-danca/musica.html', category: 'Cultura', text: 'música dança vaneira chamamé milonga bugio festivais pajada trova rádio disco' },
    { title: 'Origens Históricas da Música Gaúcha', url: 'paginas/musica-danca/origens-historicas-musica-gaucha.html', category: 'Música', text: 'origens históricas música gaúcha indígenas europeias platinas tropeiros reduções jesuíticas ritmos' },
    { title: 'Evolução da Música do Rio Grande do Sul', url: 'paginas/musica-danca/evolucao-musica.html', category: 'Música', text: 'evolução música gaúcha festivais nativistas rádio televisão tecnologia califórnia canção nativa artistas' },
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
    { title: 'Vestimenta', url: 'paginas/cultura/vestimenta.html', category: 'Cultura', text: 'pilcha bombacha prenda lenço guaiaca' },
    { title: 'CTGs', url: 'paginas/cultura/ctgs.html', category: 'Cultura', text: 'centros tradição gaúcha invernadas tradicionalismo' },
    { title: 'Festas e Rodeios', url: 'paginas/cultura/festas.html', category: 'Cultura', text: 'semana farroupilha rodeio crioulo fandango' },
    { title: 'Lida Campeira', url: 'paginas/cultura/lida-campeira.html', category: 'Cultura', text: 'campo estância cavalo crioulo laço gado galpão arreios rodeio trabalho rural' },
    { title: 'Cavalo Crioulo', url: 'paginas/cultura/cavalo-crioulo.html', category: 'Cultura', text: 'cavalo crioulo rusticidade resistência lida campeira freio de ouro provas funcionais' },
    { title: 'Dicionário Gaúcho', url: 'paginas/linguagem/dicionario.html', category: 'Linguagem', text: 'gauchês termos expressões vocabulário regional' },
    { title: 'Expressões Gauchescas', url: 'paginas/linguagem/expressoes-gauchescas.html', category: 'Linguagem', text: 'expressões gauchescas faceiro lambari sanga ditos populares' },
    { title: 'Contos Gauchescos', url: 'paginas/contos/contos-gauchescos.html', category: 'Cultura', text: 'contos gauchescos simões lopes neto blau nunes literatura oralidade honra fronteira violência linguagem' },
    { title: 'Trezentas Onças', url: 'paginas/contos/conto-trezentas-oncas.html', category: 'Cultura', text: 'conto trezentas onças honra dinheiro confiança simões lopes neto' },
    { title: 'O Negro Bonifácio', url: 'paginas/contos/conto-negro-bonifacio.html', category: 'Cultura', text: 'conto negro bonifácio violência raça valentia simões lopes neto' },
    { title: 'No Manantial', url: 'paginas/contos/conto-no-manantial.html', category: 'Cultura', text: 'conto no manantial memória paisagem simões lopes neto' },
    { title: 'Melancia - Coco Verde', url: 'paginas/contos/conto-melancia-coco-verde.html', category: 'Cultura', text: 'conto melancia coco verde humor oralidade simões lopes neto' },
    { title: 'Contrabandista', url: 'paginas/contos/conto-contrabandista.html', category: 'Cultura', text: 'conto contrabandista fronteira contrabando simões lopes neto' },
    { title: 'Jogo do Osso', url: 'paginas/contos/conto-jogo-do-osso.html', category: 'Cultura', text: 'conto jogo do osso jogo tradicional galpão simões lopes neto' },
    { title: 'Personalidades Gaúchas', url: 'paginas/personalidades/personalidades-gauchas.html', category: 'Sociedade', text: 'política cultura esporte história personalidades' },
    { title: 'Esporte Gaúcho', url: 'paginas/esporte/esportes-jogos-tradicionais.html', category: 'Esporte', text: 'Grêmio Internacional futebol interior bocha judô ginástica' },
    { title: 'Geografia Regional', url: 'paginas/territorio/geografia.html', category: 'Território', text: 'pampa serra litoral hidrografia clima regiões' },
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
    { title: 'Economia', url: 'paginas/economia/economia.html', category: 'Economia', text: 'agro indústria serviços comércio exterior tecnologia' },
    { title: 'Pecuária no Rio Grande do Sul', url: 'paginas/economia/pecuaria-rs.html', category: 'Economia', text: 'gado bovinocultura ovinocultura estâncias lã charque pecuária corte identidade gaúcha lida campeira economia rural' },
    { title: 'Arquitetura Gaúcha', url: 'paginas/patrimonio/arquitetura-gaucha.html', category: 'Patrimônio', text: 'estância enxaimel missioneira patrimônio arquitetura' },
    { title: 'Patrimônio e Memória', url: 'patrimonio.html', category: 'Patrimônio', text: 'hub patrimônio memória arquitetura artesanato fontes educação patrimonial' },
    { title: 'Artesanato', url: 'paginas/patrimonio/artesanato.html', category: 'Patrimônio', text: 'couro lã madeira cerâmica cutelaria artesanato' },
    { title: 'Tecnologia e Cultura', url: 'paginas/economia/tecnologia-cultura.html', category: 'Tecnologia', text: 'acervos digitais mapas IA dados cultura' },
    { title: 'Sobre o Site', url: 'sobre-o-site.html', category: 'Geral', text: 'demonstrador tecnologia aulas graduação pós-graduação OpenCode IA' },
    { title: 'Mapa do Site', url: 'mapa-do-site.html', category: 'Geral', text: 'organização índice páginas categorias' },
    { title: 'Política de Privacidade', url: 'privacidade.html', category: 'Geral', text: 'privacidade LGPD cookies Google Analytics dados pessoais consentimento' },
    { title: 'Governança e Documentação do Site', url: 'governanca.html', category: 'Geral', text: 'taxonomia guia editorial checklist de publicação roteiro didático governança' },
    { title: 'Licenciamento', url: 'licenca.html', category: 'Geral', text: 'licença MIT código-fonte CC BY-SA conteúdo textual imagens de terceiros direitos autorais' },
    { title: 'Fontes e Bibliografia', url: 'paginas/patrimonio/fontes-bibliografia.html', category: 'Pesquisa', text: 'fontes bibliografia instituições pesquisa arquivo' },
    { title: 'Linha do Tempo Interativa', url: 'paginas/temas/linha-do-tempo.html', category: 'História', text: 'linha do tempo interativa eventos história cultura política imigração esporte tecnologia' },
    { title: 'Diáspora Gaúcha no Paraná', url: 'paginas/territorio/diaspora-gaucha-parana.html', category: 'Território', text: 'famílias gaúchas no oeste e sudoeste paranaense, agricultura, cooperativas e novas comunidades.' },
    { title: 'Diáspora Gaúcha em Santa Catarina', url: 'paginas/territorio/diaspora-gaucha-santa-catarina.html', category: 'Território', text: 'oeste catarinense, colonização, agricultura familiar e circulação cultural sulista.' },
    { title: 'Diáspora Gaúcha em Mato Grosso', url: 'paginas/territorio/diaspora-gaucha-mato-grosso.html', category: 'Território', text: 'fronteira agrícola, soja, cidades novas e redes migratórias vindas do sul.' },
    { title: 'Diáspora Gaúcha em Mato Grosso do Sul', url: 'paginas/territorio/diaspora-gaucha-mato-grosso-do-sul.html', category: 'Território', text: 'migração sulista, agropecuária, fronteira e adaptação cultural no centro-oeste.' },
    { title: 'Diáspora Gaúcha em Rondônia', url: 'paginas/territorio/diaspora-gaucha-rondonia.html', category: 'Território', text: 'colonização, br-364, recomeço familiar e desafios amazônicos.' },
    { title: 'Diáspora Gaúcha em Goiás', url: 'paginas/territorio/diaspora-gaucha-goias.html', category: 'Território', text: 'cerrado, agricultura moderna, comércio e redes gaúchas no centro-oeste.' },
    { title: 'Diáspora Gaúcha no Pará', url: 'paginas/territorio/diaspora-gaucha-para.html', category: 'Território', text: 'migração sulista na amazônia, terra, trabalho e conflitos socioambientais.' },
    { title: 'Cooperativismo Gaúcho', url: 'paginas/economia/cooperativismo-gaucho.html', category: 'Economia', text: 'agricultura familiar, crédito, agroindústria, confiança comunitária e expansão econômica.' },
    { title: 'Tropeirismo', url: 'paginas/historia/tropeirismo.html', category: 'História', text: 'rotas de gado e muares, comércio, pousos, caminhos e formação regional.' },
    { title: 'Estâncias Gaúchas', url: 'paginas/cultura/estancias-gauchas.html', category: 'Cultura', text: 'pecuária, casa de campo, relações de trabalho, hierarquias e memória rural.' },
    { title: 'Charqueadas de Pelotas', url: 'paginas/historia/charqueadas-pelotas.html', category: 'História', text: 'economia do charque, escravidão, patrimônio industrial e memória afro-gaúcha.' },
    { title: 'Fronteira Brasil-Uruguai-Argentina', url: 'paginas/territorio/fronteira-brasil-uruguai-argentina.html', category: 'Território', text: 'cidades-gêmeas, circulação familiar, comércio, música, línguas e identidades platinas.' },
    { title: 'Cultura Missioneira', url: 'paginas/historia/cultura-missioneira.html', category: 'História', text: 'memória guarani-jesuítica, música, ruínas, sepé tiaraju e identidade regional.' },
    { title: 'Cultura do Vinho na Serra Gaúcha', url: 'paginas/gastronomia/cultura-vinho-serra.html', category: 'Gastronomia', text: 'vitivinicultura, imigração italiana, cantinas, cooperativas e turismo.' },
    { title: 'Erva-Mate', url: 'paginas/gastronomia/erva-mate.html', category: 'Gastronomia', text: 'história, produção, indústria, chimarrão e presença indígena.' },
    { title: 'Araucária e Pinhão', url: 'paginas/meio-ambiente/araucaria-pinhao.html', category: 'Meio Ambiente', text: 'ecologia, alimentação, povos originários, serra e preservação ambiental.' },
    { title: 'Rádio Gaúcho', url: 'paginas/midia/radio-gaucho.html', category: 'Mídia', text: 'programas nativistas, futebol, música regional, notícias e formação de público.' },
    { title: 'Imprensa Regional no RS', url: 'paginas/midia/imprensa-regional.html', category: 'Mídia', text: 'jornais, almanaques, política, literatura, comércio e memória local.' },
    { title: 'Universidades e Cultura no RS', url: 'paginas/economia/universidades-cultura.html', category: 'Educação', text: 'pesquisa, extensão, museus, arquivos universitários e formação cultural.' },
    { title: 'Futebol Gaúcho do Interior', url: 'paginas/esporte/futebol-interior-gaucho.html', category: 'Esporte', text: 'clubes locais, rivalidades, estádios, rádio e identidade urbana.' },
    { title: 'Carnaval no Rio Grande do Sul', url: 'paginas/sociedade/carnaval-rs.html', category: 'Cultura', text: 'porto alegre, pelotas, rio grande, uruguaiana, escolas de samba e presença afro-brasileira.' },    { title: 'Cultura Indígena Contemporânea no RS', url: 'paginas/sociedade/cultura-indigena-contemporanea.html', category: 'Sociedade', text: 'guarani, kaingang, charrua e presença indígena viva no presente.' },
    { title: 'Afro-Gauchidade', url: 'paginas/sociedade/afro-gauchidade.html', category: 'Sociedade', text: 'presença negra, lanceiros negros, charqueadas, clubes sociais negros, religiosidades afro-brasileiras e carnaval.' },
    { title: 'Mulheres na História Gaúcha', url: 'paginas/sociedade/mulheres-gauchas.html', category: 'Sociedade', text: 'participação feminina em guerras, literatura, política, educação, arte e tradicionalismo.' },
    { title: 'Mudanças Climáticas no RS', url: 'paginas/meio-ambiente/mudancas-climaticas-rs.html', category: 'Meio Ambiente', text: 'enchentes, estiagens, pampa, agricultura, cidades e memória comunitária.' },
    { title: 'Enchentes e Reconstrução no RS', url: 'paginas/meio-ambiente/enchentes-reconstrucao.html', category: 'Meio Ambiente', text: 'memória das cheias, solidariedade, território urbano e reconstrução comunitária.' },
    { title: 'Cultura Digital Gaúcha', url: 'paginas/economia/cultura-digital-gaucha.html', category: 'Tecnologia', text: 'acervos online, mapas, ia, memória, educação e preservação digital.' },
    { title: 'Semana Farroupilha', url: 'paginas/cultura/semana-farroupilha.html', category: 'Cultura', text: 'memória cívica, acampamentos, desfiles, ctgs e debates sobre tradição.' },
    { title: 'Rodeio Crioulo', url: 'paginas/cultura/rodeio-crioulo.html', category: 'Cultura', text: 'provas campeiras, laço, gineteada, sociabilidade, regras e controvérsias.' },
    { title: 'Pilcha Gaúcha', url: 'paginas/cultura/pilcha-gaucha.html', category: 'Cultura', text: 'indumentária tradicional, usos sociais, normas, memória e identidade.' },
    { title: 'Bombacha, Lenço e Guaiaca', url: 'paginas/cultura/bombacha-lenco-guaiaca.html', category: 'Cultura', text: 'simbologia das peças, usos cotidianos e tradição campeira.' },
    { title: 'Fandango Gaúcho', url: 'paginas/musica-danca/fandango-gaucho.html', category: 'Música', text: 'dança, baile, música, sociabilidade e tradição popular.' },
    { title: 'Pajada e Trova', url: 'paginas/musica-danca/pajada-trova.html', category: 'Música', text: 'improviso, oralidade, poesia campeira, disputa verbal e memória.' },
    { title: 'Milonga', url: 'paginas/musica-danca/milonga.html', category: 'Música', text: 'gênero musical de fronteira, poesia, violão, dança e identidade platina.' },
    { title: 'Chamamé', url: 'paginas/musica-danca/chamame.html', category: 'Música', text: 'ritmo missioneiro e platino, acordeon, dança e circulação fronteiriça.' },
    { title: 'Bugio', url: 'paginas/musica-danca/bugio.html', category: 'Música', text: 'ritmo regional, gaita, baile e identidade do interior.' },
    { title: 'Vaneira', url: 'paginas/musica-danca/vaneira.html', category: 'Música', text: 'baile, dança de salão, gaita e repertório popular gaúcho.' },
    { title: 'Gaita-Ponto', url: 'paginas/musica-danca/gaita-ponto.html', category: 'Música', text: 'instrumento, repertório, bailes, música instrumental e tradição regional.' },
    { title: 'Violão Gaúcho', url: 'paginas/musica-danca/violao-gaucho.html', category: 'Música', text: 'milonga, técnica, composição instrumental e diálogo com o prata.' },
    { title: 'Casa de Estância', url: 'paginas/patrimonio/casa-estancia.html', category: 'Patrimônio', text: 'arquitetura rural, galpão, mangueira, trabalho e vida familiar.' },
    { title: 'Arquitetura Enxaimel no RS', url: 'paginas/patrimonio/arquitetura-enxaimel-rs.html', category: 'Patrimônio', text: 'casas de imigração alemã, técnica construtiva e memória colonial.' },
    { title: 'Ruínas de São Miguel Arcanjo', url: 'paginas/patrimonio/ruinas-sao-miguel-arcanjo.html', category: 'Patrimônio', text: 'patrimônio missioneiro, arqueologia, turismo e memória guarani-jesuítica.' },
    { title: 'Instituições da Cultura e do Tradicionalismo Gaúcho', url: 'paginas/patrimonio/instituicoes-tradicionalistas.html', category: 'Patrimônio', text: 'MTG, CBTG, CTGs, fundações, institutos de pesquisa e órgãos governamentais de cultura.' },
    { title: 'Sepé Tiaraju', url: 'paginas/historia/sepe-tiaraju.html', category: 'História', text: 'liderança guarani, guerra guaranítica, mito político e memória missioneira.' },
    { title: 'Lanceiros Negros', url: 'paginas/historia/lanceiros-negros.html', category: 'História', text: 'participação negra na revolução farroupilha, porongos, liberdade e memória.' },
    { title: 'Getúlio Vargas e o RS', url: 'paginas/historia/getulio-vargas-rs.html', category: 'História', text: 'são borja, revolução de 1930, trabalhismo, estado novo e memória política.' },
    { title: 'João Goulart e São Borja', url: 'paginas/historia/joao-goulart-sao-borja.html', category: 'História', text: 'jango, trabalhismo, reformas de base, golpe de 1964 e memória fronteiriça.' },
    { title: 'Mario Quintana', url: 'paginas/literatura/mario-quintana.html', category: 'Literatura', text: 'poesia, porto alegre, infância, humor e memória literária.' },
    { title: 'João Simões Lopes Neto', url: 'paginas/literatura/simoes-lopes-neto.html', category: 'Literatura', text: 'contos gauchescos, blau nunes, linguagem regional e memória oral.' },
    { title: 'Erico Verissimo', url: 'paginas/literatura/erico-verissimo.html', category: 'Literatura', text: 'romance histórico, o tempo e o vento, memória familiar e formação do rs.' },
    { title: 'Luis Fernando Verissimo', url: 'paginas/literatura/luis-fernando-verissimo.html', category: 'Literatura', text: 'crônica, humor, jornalismo, música e cultura urbana.' },
    { title: 'Doce de Pelotas', url: 'paginas/gastronomia/doce-pelotas.html', category: 'Gastronomia', text: 'patrimônio doceiro, receitas, economia doméstica e identidade urbana.' },
    { title: 'Café Colonial', url: 'paginas/gastronomia/cafe-colonial.html', category: 'Gastronomia', text: 'mesa farta da serra, imigração, turismo e sociabilidade familiar.' },
    { title: 'Entrevero de Pinhão', url: 'paginas/gastronomia/entrevero-pinhao.html', category: 'Gastronomia', text: 'prato de inverno com pinhão, carnes, legumes e memória serrana.' },
    { title: 'Costela no Fogo de Chão', url: 'paginas/gastronomia/costela-fogo-chao.html', category: 'Gastronomia', text: 'técnica do churrasco, tempo lento, brasa, campo e sociabilidade.' },
    { title: 'Regiões Culturais do RS', url: 'paginas/territorio/regioes-culturais-rs.html', category: 'Território', text: 'campanha, serra, missões, litoral, fronteira, metropolitana e seus contrastes.' },
    { title: 'Xote Gaúcho', url: 'paginas/musica-danca/xote-gaucho.html', category: 'Música', text: 'dança de par, balanço moderado e presença constante em fandangos. gaita, violão, baixo, bateria, voz e conjuntos regionais. aprox. 80 a 120 bpm, com andamento moderado e balanço regular.' },
    { title: 'Rancheira', url: 'paginas/musica-danca/rancheira.html', category: 'Música', text: 'dança popular de salão ligada ao repertório regional e fronteiriço. gaita/acordeom, violão, baixo, bateria, voz e conjuntos de baile. aprox. 90 a 130 bpm, geralmente em levada ternária ou valseada.' },
    { title: 'Chamarrita', url: 'paginas/musica-danca/chamarrita.html', category: 'Dança', text: 'dança tradicional de origem luso-açoriana presente no folclore gaúcho. gaita, violão, rabeca em tradições antigas, percussão leve e canto em algumas versões. aprox. 100 a 140 bpm, com marcação viva e estrutura coreográfica coletiva.' },
    { title: 'Pezinho', url: 'paginas/musica-danca/pezinho.html', category: 'Dança', text: 'dança tradicional de pares, gestos marcados e caráter brincante. gaita, violão, canto, percussão leve e conjuntos tradicionalistas. aprox. 100 a 130 bpm, com marcação clara para passos e palmas.' },
    { title: 'Balaio', url: 'paginas/musica-danca/balaio.html', category: 'Dança', text: 'dança tradicional de conjunto, figuras coreográficas e memória folclórica. gaita, violão, canto e acompanhamento rítmico leve. aprox. 100 a 140 bpm, com pulso regular para deslocamentos coletivos.' },
    { title: 'Chula Gaúcha', url: 'paginas/musica-danca/chula.html', category: 'Dança', text: 'dança sapateada masculina, desafio rítmico e virtuosismo corporal. gaita, violão, percussão leve, palmas e marcação rítmica para sustentar o sapateado. aprox. 100 a 150 bpm, dependendo da execução; o foco está na precisão rítmica do sapateado.' },
    { title: 'Música Gaúcha Contemporânea', url: 'paginas/musica-danca/musica-gaucha-contemporanea.html', category: 'Música', text: 'nativismo, mpb, rock, pop, jazz, música instrumental e produção digital. gaita, violão, guitarra, baixo, bateria, piano, sintetizadores, cordas, sopros, percussões e recursos digitais de estúdio. variável; depende do diálogo com milonga, pop, rock, jazz, música instrumental, eletrônica ou canção nativista.' },
    { title: 'O Gaúcho', url: 'paginas/cultura/o-gaucho.html', category: 'Cultura', text: 'identidade, formação histórica, modos de vida e diversidade do povo gaúcho. identidade em construção o gaúcho é uma identidade histórica, cultural e social associada ao rio grande do sul, mas não se limita a uma figura única. a imagem clássica do cavaleiro dos pampas, ligado ao cavalo, ao chimarrão, ao churrasco, à lida campeira e à fronteira, é apenas uma das camadas dessa identidade. o povo gaúcho também é urbano, indígena, negro, missioneiro, imigrante, litorâneo, serrano, fronteiriço, feminino, jovem, trabalhador, artístico e contemporâneo. formação histórica a identidade gaúcha foi formada por encontros e conflitos entre povos originários, colonização ibérica, presença africana, mundo das estâncias, tropeirismo, charqueadas, imigração europeia, fronteira platina, cidades, guerras, política, rádio, literatura, música, ctgs e memória familiar. essa formação não ocorreu sem desigualdades: escravidão, disputas de terra, apagamentos indígenas e silenciamentos sociais também fazem parte da história. valores associados na memória pública, o gaúcho costuma ser associado a coragem, hospitalidade, palavra empenhada, apego à liberdade, trabalho, convivência no galpão e vínculo com a terra. esses valores são importantes, mas precisam ser lidos como construções culturais. eles expressam ideais transmitidos por famílias, escolas, música, literatura e tradicionalismo, e não uma essência fixa de todas as pessoas nascidas no rio grande do sul. o gaúcho contemporâneo hoje, ser gaúcho pode significar viver no campo, morar em porto alegre, estudar em santa maria, trabalhar na serra, migrar para mato grosso, manter um ctg fora do estado, torcer por um clube local, preservar receitas familiares ou pesquisar genealogia. a identidade gaúcha permanece viva justamente porque muda, dialoga com outras culturas e se adapta a novos contextos sem perder seus símbolos de pertencimento.' },
    { title: 'Tradicionalismo Gaúcho', url: 'paginas/cultura/tradicionalismo-gaucho.html', category: 'Cultura', text: 'movimento cultural, ctgs, preservação de costumes e transmissão da identidade gaúcha. o que é tradicionalismo o tradicionalismo gaúcho é um movimento cultural organizado para preservar, estudar, representar e transmitir práticas associadas à identidade gaúcha. ele envolve ctgs, invernadas artísticas, danças, pilcha, música, culinária, rodeios, acampamentos, literatura, símbolos, cerimônias e atividades educativas. sua força está em transformar memória em prática coletiva. características principais entre suas características estão a valorização da pilcha, o culto aos símbolos rio-grandenses, a organização de eventos, a formação de crianças e jovens em danças e declamação, a preservação de repertórios musicais, o uso de terminologia campeira e o estudo de costumes ligados à vida rural, à história e à sociabilidade dos galpões. importância cultural o tradicionalismo ajudou a manter visíveis práticas que poderiam ter sido esquecidas com urbanização, industrialização, migração e mudanças no trabalho rural. ao organizar grupos, concursos, eventos e calendários, criou uma rede de transmissão cultural que conecta famílias, escolas, municípios, entidades e comunidades gaúchas fora do rio grande do sul. cuidados e debates preservar tradição não significa congelar o passado. o tradicionalismo também precisa dialogar com pesquisas históricas, diversidade social, presença indígena e negra, papel das mulheres, juventude, acessibilidade e críticas contemporâneas. sua relevância aumenta quando reconhece que a cultura gaúcha é plural, viva e aberta a revisão responsável.' },
    { title: 'Símbolos Gaúchos', url: 'paginas/simbolos/simbolos-gauchos.html', category: 'Cultura', text: 'bandeira, hino, brasão e referências que expressam pertencimento rio-grandense. símbolos e pertencimento símbolos são formas de condensar memória, território e identidade em imagens, sons, cores e palavras. no rio grande do sul, bandeira, hino e brasão aparecem em escolas, prédios públicos, cerimônias, eventos tradicionalistas, festas cívicas e manifestações culturais. eles ajudam a reconhecer o estado e a criar sentimento de pertencimento. principais símbolos oficiais os símbolos oficiais mais conhecidos são a bandeira do rio grande do sul, o hino rio-grandense e o brasão de armas do estado. cada um deles remete à história política do século xix, à memória farroupilha e à construção de uma identidade pública rio-grandense. uso cultural nos ctgs, escolas, desfiles e solenidades, os símbolos costumam acompanhar execução do hino, hasteamento da bandeira, cerimônias de abertura e atividades de formação cívica. seu uso deve respeitar a legislação e, sobretudo, a compreensão histórica de que símbolo é memória compartilhada, não substituto da pesquisa. símbolos vivos além dos oficiais, a cultura gaúcha também reconhece símbolos sociais como chimarrão, cavalo, pilcha, churrasco, galpão, quero-quero, erva-mate e paisagens do pampa. eles não têm todos o mesmo estatuto legal, mas funcionam como marcas culturais de reconhecimento.' },
    { title: 'Bandeira Rio-Grandense', url: 'paginas/simbolos/bandeira-rio-grandense.html', category: 'Cultura', text: 'cores, história e usos da bandeira do rio grande do sul. descrição a bandeira do rio grande do sul é formada por faixas diagonais nas cores verde, vermelha e amarela, com o brasão do estado ao centro. é um dos símbolos mais reconhecidos da identidade rio-grandense e aparece em prédios públicos, escolas, solenidades, eventos tradicionalistas e manifestações culturais. sentido histórico a bandeira está ligada à memória política do século xix e à tradição republicana associada à revolução farroupilha. seu uso atual representa o estado brasileiro do rio grande do sul, e não apenas um episódio militar. por isso, deve ser lida como símbolo cívico, histórico e cultural. uso cultural em eventos tradicionalistas, a bandeira costuma acompanhar cerimônias de abertura, desfiles, acampamentos farroupilhas, aulas de cultura regional e atividades escolares. ela condensa pertencimento, mas também exige conhecimento histórico para evitar interpretações simplificadas.' },
    { title: 'Hino Rio-Grandense', url: 'paginas/simbolos/hino-rio-grandense.html', category: 'Cultura', text: 'hino rio-grandense letra contexto histórico símbolo oficial memória farroupilha vinte de setembro liberdade façanhas hino cantado' },
    { title: 'Brasão do Rio Grande do Sul', url: 'paginas/simbolos/brasao-rio-grandense.html', category: 'Cultura', text: 'armas do estado, elementos visuais e presença em documentos e símbolos oficiais. o brasão como símbolo oficial o brasão de armas do rio grande do sul aparece no centro da bandeira estadual e em documentos, prédios públicos, publicações oficiais e materiais institucionais. ele reúne elementos visuais associados à história política, à memória farroupilha e à representação do estado. elementos visuais como todo brasão, sua leitura combina formas, cores, inscrições e composição heráldica. o observador deve perceber que não se trata apenas de ornamento: o brasão organiza uma narrativa visual sobre autoridade pública, história e identidade estadual. uso e preservação o uso do brasão exige respeito ao caráter oficial do símbolo. em contexto educativo, ele pode servir para discutir heráldica, formação política do estado, memória republicana, símbolos cívicos e relação entre imagem e poder público.' },
];

const timelineEvents = [
    { period: 'Antes do século XVI', category: 'História', title: 'Presença dos povos originários', text: 'Guarani, Kaingang, Charrua, Minuano e outros povos habitavam campos, matas, rios e áreas missioneiras antes da colonização europeia.', url: 'paginas/sociedade/povos-originarios.html' },
    { period: 'Séculos XVII e XVIII', category: 'História', title: 'Missões Jesuíticas', text: 'Reduções missioneiras reuniram organização social, religiosidade, arte, música, agricultura e resistência guarani.', url: 'paginas/historia/missoes-jesuiticas.html' },
    { period: '1750-1756', category: 'Política', title: 'Tratado de Madrid e Guerra Guaranítica', text: 'A redefinição territorial entre Portugal e Espanha levou a deslocamentos forçados e à resistência missioneira simbolizada por Sepé Tiaraju.', url: 'paginas/historia/missoes-jesuiticas.html' },
    { period: 'Século XVIII', category: 'História', title: 'Estâncias, tropeirismo e fronteira', text: 'A criação de gado, as rotas de tropeiros e a militarização da fronteira ajudaram a formar modos de vida campeiros.', url: 'paginas/historia/tropeirismo.html' },
    { period: 'Séculos XVIII e XIX', category: 'Economia', title: 'Pecuária, charque e lã', text: 'Bovinocultura e ovinocultura sustentaram estâncias, charqueadas, comércio regional e símbolos duradouros da identidade gaúcha.', url: 'paginas/economia/pecuaria-rs.html' },
    { period: '1737', category: 'Política', title: 'Fundação do forte de Rio Grande', text: 'A presença militar portuguesa consolidou uma base estratégica no extremo sul do Brasil colonial.', url: 'historia.html' },
    { period: 'Século XVIII', category: 'Imigração', title: 'Chegada de açorianos', text: 'Casais açorianos contribuíram para povoamentos, agricultura e formação de núcleos civis no território gaúcho.', url: 'paginas/historia/origens-povo-gaucho.html' },
    { period: '1835-1845', category: 'Política', title: 'Revolução Farroupilha', text: 'Conflito longo envolvendo autonomia provincial, economia do charque, República Rio-Grandense e memória cívica regional.', url: 'paginas/historia/revolucao-farroupilha.html' },
    { period: '1824 em diante', category: 'Imigração', title: 'Imigração alemã', text: 'Colônias alemãs transformaram agricultura, indústria, arquitetura, educação, religiosidade e sociabilidade em várias regiões.', url: 'paginas/historia/imigracao.html' },
    { period: '1875 em diante', category: 'Imigração', title: 'Imigração italiana', text: 'A ocupação da Serra impulsionou vitivinicultura, agricultura familiar, gastronomia, festas e identidades locais.', url: 'paginas/historia/imigracao.html' },
    { period: '1893-1895', category: 'Política', title: 'Revolução Federalista', text: 'O conflito entre maragatos e chimangos marcou a política republicana, os lenços partidários e a memória da violência regional.', url: 'paginas/historia/maragatos-chimangos.html' },
    { period: 'Início do século XX', category: 'Cultura', title: 'Literatura regional e memória oral', text: 'Autores como João Simões Lopes Neto registraram causos, lendas, linguagem regional e imaginários campeiros.', url: 'paginas/literatura/literatura.html' },
    { period: '1930', category: 'Política', title: 'Getúlio Vargas chega ao poder nacional', text: 'A Revolução de 1930 projetou lideranças políticas gaúchas no cenário brasileiro.', url: 'paginas/personalidades/personalidades-gauchas.html#getulio-vargas' },
    { period: '1948', category: 'Cultura', title: 'Fundação do 35 CTG', text: 'O tradicionalismo organizado ganhou força com a criação do primeiro Centro de Tradições Gaúchas em Porto Alegre.', url: 'paginas/cultura/ctgs.html' },
    { period: 'Década de 1960', category: 'Cultura', title: 'Expansão dos festivais nativistas', text: 'Festivais de música valorizaram compositores, intérpretes e repertórios ligados à identidade regional.', url: 'paginas/musica-danca/evolucao-musica.html' },
    { period: 'Século XX', category: 'Migração', title: 'Diáspora gaúcha pelo Brasil', text: 'Famílias gaúchas migraram para Santa Catarina, Paraná, Centro-Oeste e Amazônia Legal em busca de terras, trabalho e novas oportunidades.', url: 'paginas/territorio/diaspora-gaucha.html' },
    { period: '1971', category: 'Cultura', title: 'Califórnia da Canção Nativa', text: 'Festival de Uruguaiana tornou-se referência para a música nativista e para a circulação de novos artistas.', url: 'paginas/musica-danca/evolucao-musica.html' },
    { period: '1983', category: 'Esporte', title: 'Grêmio campeão mundial', text: 'O título mundial projetou o futebol gaúcho internacionalmente e fortaleceu a memória esportiva gremista.', url: 'paginas/esporte/esportes-jogos-tradicionais.html' },
    { period: '1999', category: 'Esporte', title: 'Daiane dos Santos no cenário internacional', text: 'A ginasta porto-alegrense tornou-se referência da ginástica artística brasileira.', url: 'paginas/personalidades/personalidades-gauchas.html#daiane-dos-santos' },
    { period: '2006', category: 'Esporte', title: 'Internacional campeão mundial', text: 'O título mundial colorado consolidou outro marco internacional do futebol gaúcho.', url: 'paginas/esporte/esportes-jogos-tradicionais.html' },
    { period: 'Século XXI', category: 'Tecnologia', title: 'Acervos digitais e cultura', text: 'Arquivos, museus e projetos digitais passaram a ampliar o acesso a documentos, fotografias, mapas, genealogia e memória cultural.', url: 'paginas/economia/tecnologia-cultura.html' },
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
    setupCitationBox();
    setupCookieConsent();
});

function getCurrentDepth() {
    const path = window.location.pathname.replace(/\\/g, '/');
    if (path.includes('/paginas/')) {
        return path.split('/paginas/')[1].split('/').length;
    }
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

function setupCitationBox() {
    const depth = getCurrentDepth();
    if (depth === 0) return;

    const main = document.querySelector('main');
    const footer = document.querySelector('footer');
    if (!main || !footer) return;

    const canonical = document.querySelector('link[rel="canonical"]');
    const url = canonical ? canonical.getAttribute('href') : window.location.href;
    const rawTitle = document.title.replace(/\s*-\s*Cultura Gaúcha\s*$/, '');
    const today = new Date().toLocaleDateString('pt-BR', { day: 'numeric', month: 'long', year: 'numeric' });
    const citationText = `CULTURA GAÚCHA. ${rawTitle}. Disponível em: ${url}. Acesso em: ${today}.`;

    const section = document.createElement('section');
    section.className = 'container citacao-abnt';

    const heading = document.createElement('h2');
    heading.textContent = 'Como citar esta página (ABNT)';

    const paragraph = document.createElement('p');
    paragraph.className = 'citacao-texto';
    paragraph.textContent = citationText;

    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'btn btn-small btn-secondary';
    button.textContent = 'Copiar citação';

    button.addEventListener('click', () => {
        if (!navigator.clipboard) return;
        navigator.clipboard.writeText(citationText).then(() => {
            const original = button.textContent;
            button.textContent = 'Citação copiada!';
            setTimeout(() => { button.textContent = original; }, 2000);
        }).catch(() => {});
    });

    section.append(heading, paragraph, button);
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

const GA_MEASUREMENT_ID = 'G-BQ3QFMYV83';
const COOKIE_CONSENT_KEY = 'cookie-consent';

function loadGoogleAnalytics() {
    if (window.__gaLoaded) return;
    window.__gaLoaded = true;

    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
    document.head.appendChild(script);

    window.dataLayer = window.dataLayer || [];
    window.gtag = function gtag() { window.dataLayer.push(arguments); };
    window.gtag('js', new Date());
    window.gtag('config', GA_MEASUREMENT_ID);
}

function setupCookieConsent() {
    const depth = getCurrentDepth();
    const existing = document.querySelector('.cookie-consent-banner');
    if (existing) existing.remove();

    if (localStorage.getItem(COOKIE_CONSENT_KEY) === 'accepted') {
        loadGoogleAnalytics();
    }

    renderCookiePreferencesLink(depth);

    if (localStorage.getItem(COOKIE_CONSENT_KEY)) return;

    const banner = document.createElement('div');
    banner.className = 'cookie-consent-banner';
    banner.setAttribute('role', 'dialog');
    banner.setAttribute('aria-live', 'polite');
    banner.setAttribute('aria-label', 'Aviso de cookies e privacidade');
    banner.innerHTML = `
        <p>Este site usa cookies do Google Analytics para estatísticas de uso, com finalidade educacional. Você pode aceitar ou recusar. Saiba mais na <a href="${withDepth('privacidade.html', depth)}">Política de Privacidade</a>.</p>
        <div class="cookie-consent-actions">
            <button type="button" class="btn" data-consent="accepted">Aceitar</button>
            <button type="button" class="btn btn-secondary" data-consent="rejected">Recusar</button>
        </div>
    `;
    document.body.appendChild(banner);

    banner.addEventListener('click', (event) => {
        const choice = event.target instanceof HTMLElement ? event.target.dataset.consent : undefined;
        if (!choice) return;
        localStorage.setItem(COOKIE_CONSENT_KEY, choice);
        if (choice === 'accepted') loadGoogleAnalytics();
        banner.remove();
    });
}

function renderCookiePreferencesLink(depth) {
    const footerBottom = document.querySelector('.footer-bottom .container');
    if (!footerBottom || footerBottom.querySelector('[data-cookie-preferences]')) return;

    const separator = document.createTextNode(' ');
    const link = document.createElement('a');
    link.href = '#';
    link.textContent = 'Preferências de cookies';
    link.setAttribute('data-cookie-preferences', '');

    link.addEventListener('click', (event) => {
        event.preventDefault();
        localStorage.removeItem(COOKIE_CONSENT_KEY);
        setupCookieConsent();
    });

    footerBottom.appendChild(separator);
    footerBottom.appendChild(link);
}
