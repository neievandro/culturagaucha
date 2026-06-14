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
            <a href="historia.html" class="active">História</a>
            <a href="tradicoes-orais.html">Tradições</a>
            <a href="culinaria.html">Gastronomia</a>
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
                <a href="historia.html" class="btn">⬅️ Voltar à Linha do Tempo</a>
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
            <p>&copy; 2024 <strong>Cultura Gaúcha</strong>. Todos os direitos reservados. Fomentando o tradicionalismo virtual. Código-fonte licenciado sob a <a href="../licenca.html">MIT License</a>.</p>
        </div>
    </div>
</footer>

</body>
</html>
"""

pages = {
    "missoes-jesuiticas.html": {
        "title": "A Saga das Missões Jesuíticas",
        "h1": "As Missões Jesuíticas<br><br><span style='font-size:1.5rem;'>Os Sete Povos, O Guarani e a Guerra de Sepé Tiaraju</span>",
        "content": """
            <section>
                <h2 class="section-title">O Experimento Utópico</h2>
                <p>Nos séculos XVII e XVIII, comissão da Companhia de Jesus, da coroa da Espanha, os padres jesuítas criaram grandes grupamentos conhecidos como "Reduções" no atual território do Rio Grande do Sul, Argentina e Paraguai. O objetivo era cristianizar, sedentarizar e proteger o índio Guarani contra os cruéis Bandeirantes (caçadores de escravos paulistas).</p>
                <p>Essas reduções eram cidades planejadas de grande beleza arquitetônica, mesclando o barroco europeu de pedra e madeira maciça com a cultura e o talento áudio-visual nativo.</p>
            </section>
            <section>
                <h2 class="section-title">Os Sete Povos</h2>
                <p>Do lado oriental do rio Uruguai, formaram-se os chamados <strong>Sete Povos das Missões</strong> (São Borja, São Nicolau, São Luiz Gonzaga, São Lourenço Mártir, São Miguel Arcanjo, São João Batista e Santo Ângelo Custódio). São Miguel ainda desponta como ruína colossal e detém o selo de Patrimônio Cultural da Humanidade (UNESCO).</p>
                <p>Chegaram a aglomerar dezenas de milhares de índios sob preceitos rígidos da fé católica mas com alto padrão comunitário, produzindo música, harpas europeias feitas de cedro local, sinos de bronze espetaculares, e tipografia autônoma.</p>
            </section>
            <section>
                <h2 class="section-title">A Guerra Guaranítica e o Mito de Sepé</h2>
                <p>O <em>Tratado de Madrid (1750)</em> obrigou os Sete Povos a serem entregues à coroa de Portugal pelas mãos da Espanha (em troca da Colônia do Sacramento, no Uruguai). Os Jesuítas deveriam arrastar os índios pelas selvas para a o outro lado do rio em pouco tempo.</p>
                <p>O cacique indígena <strong>Sepé Tiaraju</strong> tornou-se a figura principal de insurreição. Um índio Guarani evangelizado, Corregedor de São Miguel, ele reuniu flechas, laços, as rédeas dos gados largados nos pampas e liderou e empurrou seus guerreiros em batalhas suicidas contra o próprio exército luso-espanhol unido só para matá-los.</p>
                <p>O exército imperial dizimou mais de 1.500 guaranis na Batalha de Caiboaté. Sepé morreu bradando a sua lendária frase, cravada na história como o primeiro grito nativista de defesa de soberania: <strong>"Esta terra tem dono!"</strong></p>
                <p>A expulsão dos jesuítas abriu espaço para algo maior. Sem os padres com seus milhões de bois apreendidos em galpões, o gigantesco rebanho missioneiro ficou no campo de erva sozinho pra se multiplicar de graça. A vacaria infinita, esse "ouro de couro", chamaria e germinaria as estâncias do século XIX.</p>
            </section>
        """
    },
    "revolucao-farroupilha.html": {
        "title": "Revolução Farroupilha",
        "h1": "A Revolução Farroupilha<br><br><span style='font-size:1.5rem;'>Do Charque à República Rio-Grandense</span>",
        "content": """
            <section>
                <h2 class="section-title">A Ira dos Estancieiros</h2>
                <p>O Rio Grande do Sul do limiar do século XIX não dependia do café. Ele não era escravocrata nas proporções baianas ou fazendárias. O grande tesouro aqui era outro: a salgadeira. O sal secava as carnes grossas produzindo o famoso "Charque" vendido para alimentar os escravos no Rio de Janeiro, Minas, Bahia e São Paulo, baseando-se nas colossais manadas criadas nas estâncias do sul (especialmente zona sul, na cidade de Pelotas).</p>
                <p>Porém o governo no Rio de Janeiro cobrava um imposto absurdo no charque gaúcho, deixando-o mais caro que o charque produzido pelos competidores diretos no Uruguai ou Argentina (que entravam no sudeste barato e fácil).</p>
                <p>Somado a isso, o estancieiro derramava sangue guardando a fronteira nacional nas constantes chamadas de voluntários da pátria, não recebiam promoção pelas forças imperiais do exercicito, e o Rio instalava governantes fluminenses desprestigiados como chefes daqui. Em 20 de setembro de 1835 a fúria foi desencadeada.</p>
            </section>
            <section>
                <h2 class="section-title">Guerra e Secessão</h2>
                <p>O movimento liderado pelo nobre <strong>Bento Gonçalves</strong> inicialmente não pedia separação plena do Brasil imperial, não enquanto o Império não mandasse uma facção forte. Conforme a guerra civil estourou e império abriu artilharia no sul, eles formalizaram e proclamaram a <strong>República Rio-Grandense (1836 - 1845)</strong>, em tese um país independente (de duração que levou quase dez longos e sufocantes anos de combate de cavalaria rústica no Pampa).</p>
                <p>Se juntaram italianos carbonários lendários proscritos como Giuseppe Garibaldi (e Anita), heróis rudes como Davi Canabarro e Gomes Jardim, até o negro lanceiro com sua força colossal imbatível forçando e quebrando os dragões do exército e dominando o sul pelas perdas do Estado Maior imperial de duques massivos de caxias e o próprio almirantado.</p>
            </section>
            <section>
                <h2 class="section-title">O Tratado e o Legado Eterno</h2>
                <p>O Brasil, temendo que os Farrapos fizessem acordo de ajuda com o violento vizinho castelhano argentino (Rosas) em pleno projeto de separacionismo e temendo ruir de vez, concordou pelo Conde de Caxias numa paz luxuosamente perdoável, a Paz de Ponche Verde, em 1845. Nela, o império assumia todas as dívidas públicas do RS (que era falido na época após as invasões), reajustava a taxa sobre o império concorrente pra favorecer os gaúchos, nomeou todos os renegados nas melhores patentes, e jurava liberdade escrava a milícia civil e preta guerreira perdoada (fator que hoje se investiga por massiva traição do Tratado em emboscadas do governo imperial de Porongos).</p>
                <p>Seus ideais viraram sagrados. A fúria por Liberdade e a República tornaram-se lemas ("Liberdade Igualdade Humanidade" no pavilhão). Mesmo perdedor contra as grandes armas marinhas navais da monarquia de Caxias e regentes, o Farrapo é folclorizado na própria canção natal gaúcha (seu Hino atual - como uma memória que o gaúcho jamais deixará uma bota o oprimir).</p>
            </section>
        """
    },
    "imigracao.html": {
        "title": "A Grande Imigração",
        "h1": "A Grande Imigração<br><br><span style='font-size:1.5rem;'>O Choque Enxaimel, O Cultivo da Uva, Do Outro Lado da Serra</span>",
        "content": """
            <section>
                <h2 class="section-title">O Branco contra as Araucárias Ocultas</h2>
                <p>Por centenas de anos, as elites pastoris no Rio Grande esgotavam fortunas pelo gado solto raso nos grandes relevos do Pampa ao sul e oeste. As serras rochosas gigantes no nordeste e leste permaneciam cobertas pela sombria floresta de pinhos sem estradas e recheada por hordas de coroados e nativos intocados e não catalogados até por volta os anos impérios civis em 1824 com Dona Leopoldina e Dom Pedro Primeiro.</p>
                <p>Necessitando fechar essa borda de mato e embranquecer as terras nacionais de minifúndios de cultivo, a corte mandou chamar camponeses sujos europeus empobrecidos em épocas severas e cruéis pelo meio do inverno prometendo terrenos de ouro em climas europeus idênticos.</p>
            </section>
            <section>
                <h2 class="section-title">Colônias Alemãs</h2>
                <p>Desde São Leopoldo em 1824, as famílias da Bavária, Reno e Hunsrück chegaram nas margens barrentas dos rios em chácaras minúsculas de subsistência selvagem. Descobriram cobras gigantescas venenosas e doenças em abafamentos tropicais que não tinham volta. Tiveram de caçar tigres, fazer as próprias machadinhas na forja, usar madeira porca para replicar as casas alemãs da Europa velha de enxaimel usando banha e taipa e se adaptar à banha assada de porcos cruzados pelo chão.</p>
                <p>Trabalhando freneticamente eles evoluíram para o couro industrializado (vales do sinos de Calçados) a cerveja encavada, os bolos velhos adaptados para laranjas caipiras (Cucas). Muitos dos descendentes preservaram as velhas palavras perdidas de plattdeutsch e dos Hunsrückisch ("Riograndenser Hunsrückisch").</p>
            </section>
            <section>
                <h2 class="section-title">Colônias Italianas</h2>
                <p>O ano é 1875 em diante (cidades velhas originais nasciam sob Condes em Nova Milano até o Rio das Antas que eram como espinhos nas fendas verticais altíssimas subindo para Garibaldi fundado pelo Caxias italiano das montanhas). Eles achavam o inferno absoluto e subiam rolando com as mulas entre cipós até começarem os plantios furiosos em barrancos nas velhas mudas vinícolas europeias que resultaram nas gigantes indústrias que sustentam a economia turística do Brasil vinícola até as datas futuras que exportam os trigos (Macarrões pão velho polente polenta com molhos) por estradas com pedras gigantes construídos e forjados por mulheres italianas com o próprio vestido de luto antigo.</p>
                <p>No dialeto do Talian (dialeto vêneto com pátria, onde o 'tutti bona gente' do Nonno virou as origens de um novo italiano tropical misturado nos cumes do gelo da serra gaúcha).</p>
            </section>
        """
    },
    "maragatos-chimangos.html": {
        "title": "Maragatos e Chimangos",
        "h1": "Maragatos versus Chimangos<br><br><span style='font-size:1.5rem;'>Revoluções de 1893 e 1923, A Degola e A Mitologia dos Lenços</span>",
        "content": """
            <section>
                <h2 class="section-title">O Ódio Impresso no Lenço</h2>
                <p>De longe este é considerado por folcloristas como o evento de crueldade de vizinhos sangrentos na planície do Prata Rio-Grandense. É nessa hora quando encerra as utopias heroicas do Farrapo de união e nasce as brutalidades com prisioneiros em 1893 (A Guerra Federalista).</p>
                <p>Em plena instauração de marechais Deodoro pelo republicano nascido recém de 1889 na união o Rio Grande sofre no braço pesado ditatorial dos positivistas absolutos formados no exército do castilhista sob a égide absoluta castilhista - o chamado Partido Republicano Riograndense (PRR) do governador com rédeas de cavalos Júlio de Castilhos e depois do fanático frio Borges de Medeiros. Os defensores mortais deles fardados usavam o simbólico Lenço Branco sobre as espadas. Suas alcunhas odiosas dadas pelos velhos revolucionários inimigos da época eram: <strong>"Chimango"</strong> (termo perjorativo usando para uma ave agourenta, rapina, caçadora roubando gado nos varais de defunto gaúcho que é sem caia de rapina folha).</p>
            </section>
            <section>
                <h2 class="section-title">Federalistas pelo Velho Federal</h2>
                <p>O adversário do interior campeiro profundo tradicional, atrelado em partes velhas pelo estancieiro gaspar e o lendário caudilho de barbas grisalhas, o brutal General e assassino Gumercindo de pragas com espingardonas da divisa, de la fronteira velha das castelhas, eram partidários abertos para afrouxarem o parlamento - O Partido Federalista.</p>
                <p>Chamados perigosamente de Maragatos (nome derivado da milícia espanhol exilado Maragata em San Jose no Uruguay antigo vizinhas), eles se distinguiram nas sangrentas emboscadas por atar em fúria pelo nó mortal de lenço nas artérias o lenço escarlate de sangue e bandeira no pescoço. O Vermelho.</p>
            </section>
            <section>
                <h2 class="section-title">A Degola como Moeda de Troca da Brutalidade</h2>
                <p>Não ocorriam prisões nos acampamentos em guerra de charlates, cavalos mortos por minas pelo uruguay até dezenas dos paranás (sim a revolução de lencos subiu para degolar até em Desterro (hoje em Florianópolis rebatizou o presidente general contra)). Para poupar o caroção do chumbo britânico pesado as balas e apavorar aos vivos não matando no pelotão, o perito no uso longo da navalha passava as unhas de gravatas no prisioneiro amarrados usando as frias "gravata-vermelha" da degola sangrenta profunda a sangue grosso e lento. Assim nasceu o terror.</p>
                <p>Essas mágoas ferveram até 1923 repetindo com Assis Brasis com Borges velhos. Esse código de cor do Lenço é cismático, as canções enraizadas da alma rústica moderna que diz nos velhos CTGS ainda os brincares dos velhos nos versos perigosos contra a guerra onde foi enterrado mas sem nunca morrer.</p>
            </section>
        """
    }
}

for filename, content_dict in pages.items():
    filepath = os.path.join(r"c:\Users\neiev\OneDrive\Documentos\site04", filename)
    with open(filepath, "w", encoding="utf-8") as f:
        f.write(template.format(
            title=content_dict['title'],
            h1=content_dict['h1'],
            content=content_dict['content']
        ))
    print(f"Created {filepath}")
