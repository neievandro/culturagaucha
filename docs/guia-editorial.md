# Guia Editorial

Este guia define padroes para criar, revisar e manter conteudo no site.

## Idioma E Tom

- O conteudo deve ser escrito em portugues do Brasil.
- Use tom educativo, claro e acessivel.
- Evite linguagem promocional excessiva.
- Evite reduzir a cultura gaucha a uma imagem unica, heroica ou folclorica.
- Sempre que possivel, reconheca diversidade regional, indigena, negra, feminina, urbana, rural, fronteirica e contemporanea.

## Estrutura Recomendada De Pagina

Uma pagina de conteudo deve ter:

- `title` especifico no `<head>`.
- canonical sem `www`.
- cabecalho com `h1` e resumo curto.
- linha `<p class="revisao-editorial" data-revisao="1">` logo no inicio do `content-wrapper`, com a data da ultima revisao de conteudo.
- secoes com `h2 class="section-title"`.
- links internos para temas relacionados.
- fontes ou caminhos de pesquisa quando o tema exigir.
- bloco "Como citar esta pagina" (gerado automaticamente pelo JavaScript do site, nao precisa ser escrito manualmente).
- botoes de retorno ao mapa ou pagina inicial.

## Hubs

Hubs devem funcionar como indices editoriais.

- Devem apresentar caminhos de navegacao, nao textos muito longos.
- Devem apontar para paginas especificas.
- Nao devem concentrar receitas, biografias completas ou explicacoes longas quando ja houver pagina dedicada.

## Paginas De Conteudo

Paginas de conteudo devem aprofundar um tema especifico.

Boas secoes possiveis:

- contexto historico;
- desenvolvimento do tema;
- importancia cultural;
- relacoes economicas ou territoriais;
- debates contemporaneos;
- relacoes com outras paginas do site;
- fontes e caminhos de pesquisa.

Evite secoes genericas como:

- `Como interpretar o tema`;
- `Pontos de observacao`.

Quando uma pagina precisar de aprofundamento, escreva secoes especificas ao assunto.

## Fontes

Use fontes confiaveis e, quando possivel, indique caminhos de pesquisa.

Fontes recomendadas:

- IBGE;
- Governo do Estado do Rio Grande do Sul;
- arquivos publicos;
- museus;
- universidades;
- bibliotecas digitais;
- pesquisas academicas;
- acervos municipais;
- fontes primarias e memoria oral contextualizada.

Evite links institucionais duvidosos ou nao verificados.

## Imagens

Imagens devem ter:

- `alt` descritivo;
- `loading="lazy"` quando aplicavel;
- legenda com credito;
- link para fonte, quando externa;
- licenca respeitada.

Formato recomendado:

```html
<figure class="imagem-ilustrativa">
  <img src="..." alt="Descricao objetiva da imagem" loading="lazy">
  <figcaption>Credito da imagem. <a href="..." target="_blank" rel="noopener noreferrer">Fonte da imagem</a>.</figcaption>
</figure>
```

## Links

Links internos devem usar caminhos relativos corretos.

Links externos devem usar:

```html
target="_blank" rel="noopener noreferrer"
```

## SEO

- Cada pagina publica deve ter uma canonical apontando para ela mesma.
- Canonicals devem usar `https://culturagaucha.com.br/`, sem `www`.
- Paginas tecnicas, templates e backups nao devem entrar no sitemap.
- Evite duplicar conteudo em paginas diferentes.

## Gastronomia

- O hub `culinaria.html` deve funcionar como indice.
- Receitas, pratos e bebidas devem ficar em paginas dedicadas.
- Paginas de gastronomia devem citar contexto cultural, origem, ingredientes e fontes quando possivel.

## Contos E Literatura

- Contos devem indicar texto, autoria/fonte e contexto.
- Paginas literarias devem separar biografia, obra, contexto e interpretacao.

## Personalidades

Paginas de personalidades devem incluir:

- local de nascimento;
- relevancia cultural;
- contribuicoes principais;
- links de escuta, leitura ou pesquisa quando aplicavel.
