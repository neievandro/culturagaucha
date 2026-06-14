import os

template = """<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{title} - Cultura Gaúcha</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>

<header class="top-header">
    <div class="container">
        <span>A preservação da nossa história e tradição.</span>
        <div>
            <a href="#">Governo do RS</a>
            <a href="#">MTG</a>
        </div>
    </div>
</header>

<nav class="main-nav">
    <div class="container nav-wrapper">
        <a href="index.html" class="brand">
            <h1>Cultura <span>Gaúcha</span></h1>
        </a>
        <div class="nav-links">
            <a href="index.html">Início</a>
            <a href="historia.html">História</a>
            <a href="tradicoes-orais.html" {tradicoes_active}>Tradições</a>
            <a href="culinaria.html" {culinaria_active}>Gastronomia</a>
            <a href="turismo.html">Turismo</a>
        </div>
    </div>
</nav>

<header class="page-header">
    <div class="container">
        <h1>{h1}</h1>
    </div>
</header>

<main>
    <div class="container">
        <div class="content-wrapper">
            {content}
            <div style="text-align: center; margin-top: 50px;">
                <a href="index.html" class="btn">⬅️ Voltar à Página Inicial</a>
            </div>
        </div>
    </div>
</main>

<footer>
    <div class="container footer-content">
        <div class="footer-brand">
            <h2>Cultura <span>Gaúcha</span></h2>
            <p>Um portal dedicado à preservação, pesquisa e divulgação da rica herança cultural do estado do Rio Grande do Sul.</p>
        </div>
        <div class="footer-links">
            <h4>Navegação Rápida</h4>
            <ul>
                <li><a href="historia.html">Nossa História</a></li>
                <li><a href="culinaria.html">Gastronomia Típica</a></li>
                <li><a href="turismo.html">Turismo pelo Rio Grande</a></li>
                <li><a href="ctgs.html">Centros de Tradição (CTGs)</a></li>
            </ul>
        </div>
    </div>
    <div class="footer-bottom">
        <div class="container">
            <p>&copy; 2024 <strong>Cultura Gaúcha</strong>. Todos os direitos reservados. Fomentando o tradicionalismo virtual. Código-fonte licenciado sob a <a href="licenca.html">MIT License</a>.</p>
        </div>
    </div>
</footer>

</body>
</html>
"""

pages = {
    # 1. Novas Páginas
    "chimarrao.html": {
        "title": "O Ritual do Chimarrão",
        "h1": "O Chimarrão<br><br><span style='font-size:1.5rem;'>O Ouro Verde e a Sagrada Roda de Mate</span>",
        "nav_active": "culinaria_active",
        "content": """
            <section>
                <h2 class="section-title">Muito Mais Que Uma Bebida</h2>
                <p>O chimarrão é o maior símbolo de hospitalidade do gaúcho. Servido quente em uma cuia, sorvido de mão em mão através da bomba metálica, ele é o combustível para debater os problemas do dia e afastar o frio cortante do inverno meridional.</p>
                <p>É uma herança estrita dos povos indígenas Guarani, Kaingang e Charruas. A erva-mate (Ilex paraguariensis) contém propriedades altamente estimulantes, antioxidantes e digestivas, e antigamente era essencial para limpar o denso paladar voltado para a dieta pesada e gorda das estâncias.</p>
            </section>
            <section>
                <h2 class="section-title">A Lenda de Caá-Yarí</h2>
                <p>Conta a velha lenda Guarani que um cacique envelheceu demais para seguir o modo nômade de sua tribo e foi deixado isolado apenas com sua amada filha, <strong>Yarí</strong>. O deus Tupã (ou em algumas versões um mensageiro divino estrangeiro) visitou disfarçado a pequena cabana. Yarí o serviu com afeto e as parcas provisões que tinham.</p>
                <p>Para recompensar tamanha bondade filial, a divindade fez brotar nos fundos da cabana um arbusto imortal de tronco liso e folhas muito verdes - a "Caá" (Erva). Ensinou a infusioná-la com água quente e transformar as folhas num líquido amargo que tira o cansaço do corpo, espanta a fome e renova a vitalidade do peito do velho. A jovem índia foi batizada "Caá-Yarí", a deusa protetora dos ervais.</p>
            </section>
            <section>
                <h2 class="section-title">A Etiqueta e os Dez Mandamentos na Roda</h2>
                <p>Servir chimarrão tem regras seríssimas de convívio herdadas do folclore e muitas vezes defendidas até sob xingamento. Algumas delas incluem:</p>
                <ul>
                    <li><strong>Não mexa na bomba:</strong> A bomba é assentada devagar pelo cevador. Tentativas de ajustá-la vão entupir a perfuração base, estragando o líquido e ofendendo gravemente quem a preparou (pois se pressupõe que ele "não sabe" cevar).</li>
                    <li><strong>A ordem é sagrada:</strong> A cuia sempre vai circular na mão direita ou na direção anti-horária se não estipulado. Pular a sua vez sem dar a desculpa antes se trata de uma quebra de honra.</li>
                    <li><strong>Tome até o roncar o porongo:</strong> O chamativo barulho "rrr" final significa que toda a doação de água ao mate foi consumida com respeito, sem se demorar segurando a cuia ("fazer ela de microfone").</li>
                    <li><strong>A Cuia não se agradece pelo meio:</strong> Dizer "Obrigado" devolvendo a cuia significa imperativamente: "Estou satisfeito, essa é minha última rodada".</li>
                </ul>
            </section>
        """
    },
    "lida-campeira.html": {
        "title": "A Lida Campeira e o Cavalo",
        "h1": "A Lida Campeira<br><br><span style='font-size:1.5rem;'>O Gaúcho no Pampa, Suas Armas e o Cavalo Crioulo</span>",
        "nav_active": "tradicoes_active",
        "content": """
            <section>
                <h2 class="section-title">No Lombo Sangrando a Distância</h2>
                <p>O pampa sem fim foi dominado pela figura livre e sem amarras do gaúcho a cavalo. Com faca na bota e cão ao lado enxotando tropas de grandes mamíferos. A Lida Campeira é pura sobrevivência em terrenos desassistidos do país no tempo.</p>
                <p>Manejar gigantescos bovinos pelo terreno plano mas incerto forjou ferramentas perfeitas. A união de mãos castelhas e guaranis concebeu utensílios icônicos de captura que hoje funcionam mais como relíquias e em esportes brutais de dominação.</p>
            </section>
            <section>
                <h2 class="section-title">Ferramentas Milenares da Estância</h2>
                <p>Ao lidar com touros, o revólver é inútil para o rebanho solto à carne da planície. São usados:</p>
                <ul>
                    <li><strong>O Laço Braço de Trançador:</strong> Longas cordas de lonca feitas de puro couro cru meticulosamente trançado no galpão, capazes de laçar um animal descontrolado por dezenas de metros a cavalo rasgando em alta rotação.</li>
                    <li><strong>A Boleadeira:</strong> Arma terrível herdada dos minuanos composta inteiramente de corda retorcida de três tentos conectados e bolas rústicas pesadíssimas de pedras basálticas envoltas em couro na ponta. Ao ser rodopiada acima do cavaleiro e lançada nos pés do animal enfurecido (ou do soldado inimigo nas guerras guaraníticas e farroupilhas) quebrava as canelas por força de giro e velocidade tangencial da cordada enrolando em um peso bruto.</li>
                    <li><strong>A Faca e Daga da Compadrio:</strong> Da esgrima à carnea. A adaga com sua lâmina comprida resolveu problemas mortais entre chefes rivais de ovelheiras como resolve nas carnes das castilheiras assadas dos boieiros.</li>
                </ul>
            </section>
            <section>
                <h2 class="section-title">O Deus Equino: Cavalo Crioulo e O Cão</h2>
                <p>Descendente rústico e indomado do famoso cavalo Andaluz ibérico jogado pelos Jesuítas nos pampas, adaptou-se milagrosamente. O <strong>Cavalo Crioulo Brasileiro</strong> é mais que um simples cavalo, é caracterizado fisicamente não pela altura ou galope alongado veloz americano mas sim por ser o pavor do pampa por causa de sua absurda resistência e corpanzil robusto musculoso nas pernas.</p>
                <p>Suporta calor de abafar do janeiro e solavancos da poça gelada de granizo frio. Hoje é venerado em provas de alta exaustão como o temível "Freio de Ouro".</p>
                <p>Aliando-se nas extremidades do rebanho está outro ser rústico enraizado ao limite das castilhas, o <strong>Cão Ovelheiro Gaúcho</strong>, hábil trotador ao redor de mais de trinta ovelhas desatinadas.</p>
            </section>
        """
    },
    "literatura.html": {
        "title": "A Literatura",
        "h1": "Literatura Sul-Rio-Grandense<br><br><span style='font-size:1.5rem;'>Os Fios do Pampa que Desaguam Letras Magníficas</span>",
        "nav_active": "tradicoes_active",
        "content": """
            <section>
                <h2 class="section-title">Contadores de Histórias do Fogo de Chão</h2>
                <p>As noites frias de julho fechavam os portões das estâncias. Longe e sozinhos em lugares ermos de mata sombria por vastas distancias, dentro do calor pesado dos galpões escuros cheirando à costela e picumã, as mentiras poéticas do gaúcho, as anedotas folclóricas, passavam dos causos de fogão diretamente para as glórias perpétuas gravadas nas letras da humanidade.</p>
            </section>
            <section>
                <h2 class="section-title">João Simões Lopes Neto: O Som Autêntico</h2>
                <p>Lopes Neto é o apogeu fundamental do nativismo rio-grandense das terras secas de Pelotas. Com a publicação de <em>"Contos Gauchescos" (1912)</em> com seu invencível e misterioso personagem (que se torna as vistas para os leitores e contava tudo), chamado <em>Blau Nunes</em>. Simões Lopes teve sucesso ao usar de forma milimétrica o linguajar, as pausas, as palavras do campeiro como elas são ("Trevas do Boitatá", causos horripilantes da negra lenda maldita), de sua época transformados na verdadeira expressão antropológica nativa sem floreamento metropolitano que era copiado no império da corte.</p>
            </section>
            <section>
                <h2 class="section-title">Erico Verissimo e a Bíblia Gaúcha</h2>
                <p>Se as escrituras russas possuem contos do Czar, o sul do Brasil tem <strong>Erico Verissimo</strong> relatando o seu mestre épico massivo: "<em>O Tempo e o Vento</em>". O maior compilado em diversas fases, a crônica familiar massiva dos Terra, Camargo (com figuras como o gigante indestrutível valente Capitão Rodrigo e Ana Terra) narrou no fundo e em primeira mão todo o contexto real épico brutal lutado a cada página, as invasões espanholas com garruchas em castelhos do farrapo em frentes e trincheiras e fundação continental até do Getulismo, de São Borja num estilo de épica poética grandioso que chocou a nação brasileira e mundo quebrando a limitação unindo noções heroicas modernas a tragédia da humanidade moderna.</p>
            </section>
            <section>
                <h2 class="section-title">Paixão Côrtes (A Fagulha) e O Tradicionalismo</h2>
                <p>Na imersão folclórica ele foi além de papel, ele gravou no comportamento. João Carlos de Paixão Côrtes percorreu as longínquas planuras documentando passo por passo a estética e as antigas rudes danças chabacanas de caipiras do tempo charque e re-transcreveu no "Manual de Danças", que salvou toda as memórias das chulas em extinção e moldou o estatuto MTG (Movimento Tradicionalista Gaúcho).</p>
            </section>
        """
    },
    
    # 2. Refazer as velhas em DEEP REWRITE
    "vestimenta.html": {
        "title": "Indumentária: A Pilcha",
        "h1": "A Anatômica Pilcha<br><br><span style='font-size:1.5rem;'>Os Adornos Oficiais Masculinos e a Prenda Feminina</span>",
        "nav_active": "tradicoes_active",
        "content": """
            <section>
                <h2 class="section-title">Pilcha Não é Roupa, é Tradicionalismo</h2>
                <p>O conceito oficial de "Pilcha" está protegido e normatizado à risca pelas exigidíssimas leis civis sob as planilhas do MTG (Movimento Tradicionalista Gaúcho). Qualquer deslize de adornamento numa bailo festivo e a pessoa é sumariamente não-enquadrada nas honras da tradição, preservada por estatuto no Rio Grande.</p>
            </section>
            <section>
                <h2 class="section-title">A Vestimenta Masculina (Peão)</h2>
                <p>Cada parte do cavaleiro carrega um embasamento da luta castelha e da crueza rural:</p>
                <ul>
                    <li><strong>Bombacha:</strong> É a peça mítica de extremidade, adotada massivamente das pernas volumosas das fardas das guarnições bélicas dos temíveis mercenários turcos e infantes europeus pela costa da américa durante da grande guerra paralela ao Paraguai, as abas soltas folgadas permitiam subir nos lobos em selas. Assemelhava aos grandes cortes. Costuma ter "favo" de algodão para traços de nobreza se dobrada perfeitamente na bota escura grossa e reforçada.</li>
                    <li><strong>O Lenço do Pescoço (Maragato ou Chimango?):</strong> Amarrado ao peito pelo cravador em "nó de formiga" negro trançado, as cores representavam seu partido, os vermelhos para as mortes de Maragatos federais de degola bruta e Brancos e para as vitórias cívicas ditadoras do repórter forte "Chimango" central. </li>
                    <li><strong>A Guaiaca:</strong> Largo e gigantesco cinto escudos e couro rebitado repleto colmeias que abriga cartucheiras pesadas, e os niquelados bolsos contábeis, na frente abriga as cinturas adagas para morte nas pontas (o cinturão castiço sem rebites para festas e prata maciça em galope de patentes).</li>
                    <li><strong>O Poncho / Pala:</strong> Sobre o ombro contra as neves. Era até travesão pesado nas trincheiras e em cima do sangue molhado nas chuvadas.</li>
                </ul>
            </section>
            <section>
                <h2 class="section-title">O Elegante Vestido de Prenda Feminina</h2>
                <p>Ao contrário dos rudes farrapos dos farrapos antigos rurais que lavavam panos batidos em lagos de estância, e contrapondo totalmente ao arquétipo do erótico moderno praiano do Brasil quente pra cima, nas rodas o design idealista do CTG focou a imitação e as honrarias em saias plissadas enormes luxuosas compridas de origem colonial de salão europeu imperiais ricas cheias e muito belas fechados em colares discretos de veludo nas pontas extremas as blusas nos ombros tapados com mantilhas.</p>
                <p>As determinações atuais proíbem decotes, maquiagem em cores falsas berrantes neon, arranjos abertos exagerados, mangas cavas em alças finas ou cores escuras pesadas não pasteis puras, além do penteado que necessita trações simples presilhas na franja, e proibindo unhas postiças compridas espelhadas em baile de prenda ou saias rasgando emendas no tecido curtas de forma grosseira à canela.</p>
            </section>
        """
    },
    "festas.html": {
        "title": "Festas, Acampamentos e Rodeios",
        "h1": "As Festas Gigantes da Pampa<br><br><span style='font-size:1.5rem;'>Do Tiro de Laço Selvagem aos CTGs</span>",
        "nav_active": "tradicoes_active",
        "content": """
            <section>
                <h2 class="section-title">Setembro Mágico: A Semana Farroupilha</h2>
                <p>Quando chega as chuvas do dia 20 de Setembro em homenagem à gloriosas rebeliões falhas da guerra de Bento no sul, algo extraordinário rompe todo o estado nas prefeituras. Todos param nas metrópoles cinzentas de concreto pra dar lugar e prioridade monumental absurna e maciça ao cheiro rústico forte de pólvora e lenha com a grandiosa <em>Semana Farroupilha</em> nas imediações.</p>
                <p>No centro da capital é armado as vilas rurais utópicas falsas monumentais. No de Porto Alegre nos longos campos de concreto nascem as cidades de lona abertas cheia de poças e o pátio imenso e lotado aos milhares: Os famigerados "Acampamentos Farroupilhas". Centenas de metros com choupanas escuras forradas por cavalos e espetos enfiados sob fogo violento defumando o charque e os ovinos.</p>
                <p>Uma romaria épica cruza estado montada à centenas de quilômetros pelas poeiras federais no trânsito para carregar as noções sagradas simbólicas ardentes as centelhas eternas sagradas das tocas das fogueiras heroicas de velhos cemitérios (A Chama Crioula).</p>
            </section>
            <section>
                <h2 class="section-title">Baile de Galpão: A Fúria e Alegria dos CTG</h2>
                <p>A vida comunitária rola sob os CTGs (uma forma parecida às lojas ou aos conselhos unificados mas recheado de festa de clube nos bairros de gado e concreto unificados no hino). Os Fandangos tocam no final de semana escuros de sábado rasgando acordeons a mil por hora sob cantoria grossa enquanto as patas (o sapateio percussivos de bombacha) treme até derrubar de solavancos os pregos de assoalhos velhos numa dança formal com respeito extremo de corte no machismo arcaico invertido formal respeitador que vigora nos limites de frestas do pago.</p>
            </section>
            <section>
                <h2 class="section-title">O Verdadeiro Rodeio Crioulo (Sangue de Bruto)</h2>
                <p>Diferente do rodeio cowboy texano-norte americano replevo e re-popular de espelhos do interior paulistano de narradores com luzes na arena para touros de brete de aço brilhantes, a areia pampa foca com exclusividade a tradição brutal nascida utilitariamente mas executada crua e velha e perfeitamente limpa hoje em campo cru nas competições oficiais.</p>
                <ul>
                    <li><strong>Tiro de Laço:</strong> Doze braças (muitíssimo distantes) girados ao vento pra agarrar em corridos os chifres astutos e finos (aspas) do animal. Feito em equipes por distâncias abissais em extrema e mortal mira tangencial.</li>
                    <li><strong>Gineteada (A Jineteada no Pelo):</strong> No lombo estufado duro em corcoveio brutal insano perverso de cavalo que derruba quem tenta firmar de botas rudes e grandes chumbadas com pontas que furam mas se agarram à morte rasgando se o cavaleiro pular feio e cair torcido nos bretes e moer o corpo duro rasgando areais grossos perigosamente na cerca dos campeonatos sangrentos famosos tipo na Expointer de esteio com milhões premiados nas éguas selvagens que o laço no pêlo segura o couro da crina e esmaga e chacoalha com força demoníaca espetacular.</li>
                </ul>
            </section>
        """
    },
    "musica.html": {
        "title": "Música e as Danças da Terra",
        "h1": "Música e Danças Tracionais<br><br><span style='font-size:1.5rem;'>O Som Nativista das Fronteiras Febris e a Gaita Cortante</span>",
        "nav_active": "tradicoes_active",
        "content": """
            <section>
                <h2 class="section-title">Ritmos Nascidos No Tráfego da Fronteira</h2>
                <p>As músicas correm livre sem aduanas pela foz rios entre o RS moderno, Uruguay e na temida terra das pampas argentinas. Os castilhenhos trouxeram as rústicas guitarras europeias com os negros coloniais ungiu-se no pampa. A essência nativista pulsa na alma pela melancolia solitária dos invernos no pampa mesclada pela agitação alegre furiosa da roda festeira:</p>
                <ul>
                    <li><strong>Chamamé:</strong> Ritmo com fortíssima origem guarani adaptado da argentina correntina (Corrientes) mas adaptados nos limiares na costa do rio uruguai nos pagos gaúchos de forma cadenciada compassiva na dor do choro da gaita de longas extensões de agulhas e sons pesados de foles arffantes na gaita em fole grande de 2 hinos longos cheios de arranjos nostálgicos lentos que quebram num compassos violento de seis oitos 6/8 espetacular.</li>
                    <li><strong>Vaneira / Vaneirão:</strong> Alegre, vibrante no salão, a febre de compasso com cadencia rápida de 2/4. O som puro original de se tocar a dança arrastando dos chinelos as botas em dois para o lado perigoso, o popular dos bailões arrastados dos grandes grupos.</li>
                    <li><strong>Milonga:</strong> Talvez o pilar profundo e complexo mais melancólico do sul e uruguay na milonga triste, reflexiva da terra onde a poesia e as grandes perdas de lutas nos poemas morrem para os heróis da pátria a voz solena. Em compasso fechado sombrio, de arrancar corações de facão pra chorar com cachaça velha nos copos e viola bordando as unhas.</li>
                    <li><strong>O Bugio:</strong> Considerável e singular ritmo por causa original nativa estrita nascida no próprio estado o RS de influência serrana e cômica copiando o temeroso urro e pulo no animal macaco bugio pelas cordas rasgadas em sanfonas rudes (samba rasgado pesado das serra) nos anos com sons pesados graves de balanço roncando os violões em fá sustenido de foles violentíssimos abertos em pancadas longas do dedilhar na palheta da guitarra.</li>
                </ul>
            </section>
            <section>
                <h2 class="section-title">Os Instrumentos Brutos de Salão</h2>
                <p>Muito mais que a guitarra as grandes e potentes <strong>Gaitas</strong> reinam o local. Ela tem apelidos e tipos brutos separando homens:</p>
                <p>A Gaita tipo Acordeom (cheia de pesadas colunas de teclas ricas de orquestras pesada como pianos) muito versátil pela Europa italiana.</p>
                <p>A venerável terrível pesada "<strong>Gaita-Ponto" (Buena ou Oito Baixos da Hohner-Botonera):</strong> Instrumento minúsculo letal percussivo onde abrindo ou fechando se tira uma nota brutal e aguda diferente de castanholas de sopro pesado cortando feito uma navalha cantando pela noite num duelo furioso entre pares dos fandangos uruguaios da velha corôa as notas cravando e ressoando feito a força nos fole por longas melodias da campanha puxando no peso duro dos gaiteros lendários que sangram na mão os botões de pérola pesados minúsculos pra dedilhar chamamés infernais!</p>
            </section>
            <section>
                <h2 class="section-title">As Danças Tradicionais Folclóricas em Provas das Lanças</h2>
                <p>O rigor de dançar não é apenas bailão arrastando o pó. Existe dança purista cívica folclórica (Pezinho de heranças portugueses no mar acoriano açoriano, o belo anu). Mas destacamos pela honra viril suprema mortal a perigosa no sapatear pesado por honras e orgulho:</p>
                <p><strong>A Desafiadora Chula:</strong> Tradição oriunda folclórica base nas fúria rurais de dança. Ela põem ao centro do pátio uma espessa e pesadíssima antiga pesada e longa e suja velha lança dura (armas do soldado em cavalo usada na era das degolas com caxias na mão farrapa) estendida caída inerte na horizontal sob as madeiras.</p>
                <p>Na sua base um sapateador forte percussivo executa com pés furiosos e esporas um desafio que o seu adversário oposto na beirada da lenha no peão necessita copiar (repetir perfeitamente e mais pesado sem trupicar nas hastes na farroupilha na pesada e grande perigosa percussão). Exigindo resistência herculea demoníaca brutal como atletas sob coreografias pesadas na rocha dura nos festivais artísticos imensos tipo ao "ENART" arrastando multioes de espectadores pelo RS aplaudindo as competidores campeões sapateadores de chula.</p>
            </section>
        """
    }
}

for filename, content_dict in pages.items():
    nav_status = {"tradicoes_active": "", "culinaria_active": ""}
    nav_status[content_dict["nav_active"]] = 'class="active"'
    
    filepath = os.path.join(r"c:\Users\neiev\OneDrive\Documentos\site04", filename)
    with open(filepath, "w", encoding="utf-8") as f:
        f.write(template.format(
            title=content_dict['title'],
            h1=content_dict['h1'],
            tradicoes_active=nav_status["tradicoes_active"],
            culinaria_active=nav_status["culinaria_active"],
            content=content_dict['content']
        ))
    print(f"Created/Updated {filepath}")
