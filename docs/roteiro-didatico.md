# Roteiro Didatico

Este roteiro sugere como usar o Cultura Gaucha como estudo de caso em aulas de Tecnologia da Informacao, Sistemas de Informacao, Desenvolvimento Web, Governanca de TI e Gestao de TI. Ele parte do que ja existe no projeto: `README.md`, `docs/taxonomia.md`, `docs/guia-editorial.md`, `docs/publicacao.md`, o codigo-fonte e o conteudo publicado.

Contexto pedagogico completo em `sobre-o-site.html`.

## Como Usar Este Roteiro

Cada bloco abaixo indica disciplina, objetivo, material de apoio no proprio projeto e um exercicio pratico com critério de avaliacao. Os exercicios foram desenhados para serem resolvidos a partir do estado real do repositorio, sem necessidade de acesso a infraestrutura externa.

## Desenvolvimento Web

**Objetivo:** reconhecer estrutura HTML semantica, organizacao de CSS por variaveis e comportamento JavaScript client-side sem framework.

**Material de apoio:** `assets/css/styles.css`, `assets/js/script.js`, qualquer pagina em `paginas/`.

**Exercicio:** peça para o aluno abrir uma pagina de conteudo (ex. `paginas/historia/tropeirismo.html`) e identificar: onde termina o cabecalho comum e comeca o conteudo especifico da pagina; quais classes CSS vêm de `--rs-red`, `--rs-green` e `--rs-yellow`; e como o tema escuro é aplicado via `.dark-theme` no `:root`.

**Critério de avaliacao:** o aluno consegue apontar corretamente as tres camadas (estrutura, estilo, comportamento) e explicar por que o site não usa build step nem framework.

## Sistemas de Informacao

**Objetivo:** discutir requisitos, escopo e evolucao incremental de um sistema sem backend.

**Material de apoio:** `docs/taxonomia.md` (tipos de pagina e temas), historico de commits do repositorio.

**Exercicio:** peça para o aluno propor uma nova categoria de conteudo (por exemplo, um novo `tema_principal` em `docs/taxonomia.md`) e justificar onde ela se encaixaria na estrutura de pastas em `paginas/`.

**Critério de avaliacao:** a proposta respeita a separacao entre `hub`, `conteudo`, `funcional`, `institucional` e `tecnica` definida na taxonomia.

## Governanca de TI

**Objetivo:** entender como padroes documentados (nao apenas codigo) sustentam a qualidade de um projeto ao longo do tempo.

**Material de apoio:** `docs/guia-editorial.md`, `docs/publicacao.md`, `privacidade.html`, `licenca.html`.

**Exercicio:** peça para o aluno auditar 5 paginas aleatorias de `paginas/` contra o `docs/guia-editorial.md` e reportar inconsistencias (falta de fonte, imagem sem credito, secao generica proibida pelo guia, link externo sem `rel="noopener noreferrer"`).

**Critério de avaliacao:** o relatorio cita a regra especifica do guia editorial violada em cada achado, nao apenas uma opiniao geral sobre qualidade.

## Gestao de TI

**Objetivo:** relacionar processo de publicacao, checklist de qualidade e rastreabilidade de mudancas.

**Material de apoio:** `docs/publicacao.md`, `sitemap.xml`, `robots.txt`.

**Exercicio:** peça para o aluno rodar o checklist de `docs/publicacao.md` manualmente (contagem de URLs no sitemap, ausencia de arquivos `*safeBackup*`, presenca de canonicals sem `www`) e apontar divergencias encontradas.

**Critério de avaliacao:** o aluno identifica corretamente qualquer divergencia real entre o numero documentado e o numero medido no repositorio.

## SEO Tecnico

**Objetivo:** demonstrar o papel de `sitemap.xml`, `robots.txt` e canonicals na descoberta de conteudo por motores de busca.

**Material de apoio:** `sitemap.xml`, `robots.txt`, qualquer `<link rel="canonical">` no `<head>` das paginas.

**Exercicio:** peça para o aluno escolher uma pagina nao listada no `sitemap.xml` (se houver) ou verificar se todas as paginas do sitemap tem canonical correspondente, e reportar o resultado.

**Critério de avaliacao:** o aluno consegue explicar a diferenca entre uma pagina "publica" (no sitemap) e uma pagina "tecnica" (fora do sitemap, como `404.html` e `template.html`).

## Privacidade E Dados

**Objetivo:** discutir coleta de dados de navegacao, consentimento e LGPD em um contexto real de site estatico.

**Material de apoio:** `privacidade.html`, o banner de consentimento implementado em `assets/js/script.js` (funcoes `setupCookieConsent` e `loadGoogleAnalytics`).

**Exercicio:** peça para o aluno explicar, a partir do codigo-fonte, o que acontece com o Google Analytics quando o visitante clica em "Recusar" versus quando nao responde ao banner.

**Critério de avaliacao:** o aluno identifica corretamente que o GA so carrega apos consentimento explicito e que a escolha fica salva em `localStorage`.

## Uso Responsavel De Inteligencia Artificial

**Objetivo:** discutir o papel da IA como ferramenta de apoio em projetos reais de desenvolvimento e curadoria de conteudo.

**Material de apoio:** secao "Uso de inteligencia artificial" em `sobre-o-site.html`.

**Exercicio:** peça para o aluno comparar duas paginas de conteudo (uma mais antiga, uma mais recente) e discutir se percebe diferencas de profundidade, estrutura ou fontes, relacionando com o papel da IA na producao assistida de conteudo.

**Critério de avaliacao:** a resposta evita extremos (nem "a IA fez tudo sozinha", nem "a IA nao teve papel algum") e reconhece a IA como ferramenta sob supervisao humana.

## Sugestao De Sequencia Em Sala

1. Apresentar `sobre-o-site.html` e o proposito do demonstrador.
2. Explorar a estrutura de pastas com apoio de `README.md` e `docs/taxonomia.md`.
3. Escolher um exercicio de Desenvolvimento Web para leitura de codigo.
4. Escolher um exercicio de Governanca ou Gestao de TI para auditoria de conteudo ou processo.
5. Fechar com o exercicio de Privacidade e Dados, ligando o tema a legislacao vigente.
