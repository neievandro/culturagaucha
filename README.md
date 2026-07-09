# Cultura Gaucha

Site estatico em HTML, CSS e JavaScript sobre cultura, historia, gastronomia, territorio, patrimonio e identidade do Rio Grande do Sul.

## Estrutura

- `index.html`: pagina inicial.
- `historia.html`, `cultura.html`, `culinaria.html`, `territorio.html`, `turismo.html`, `patrimonio.html`: hubs principais.
- `busca.html`, `mapa-do-site.html`: paginas funcionais.
- `sobre-o-site.html`, `licenca.html`, `privacidade.html`, `governanca.html`: paginas institucionais.
- `404.html`: pagina tecnica de erro.
- `robots.txt`: liberacao de indexacao e referencia ao `sitemap.xml`.
- `template.html`: modelo tecnico para criacao de paginas.
- `paginas/`: paginas publicas de conteudo.
- `assets/css/styles.css`: estilos globais.
- `assets/js/script.js`: busca, navegacao, tema, linha do tempo e recursos interativos.
- `assets/img/`: imagens locais e favicons.
- `assets/design/`: mockups e estudos visuais.
- `docs/`: documentacao do projeto.
- `tools/`: scripts de manutencao ativos (auditoria de conteudo, validacao de publicacao, carimbo de data de revisao).
- `tools/legacy/`: scripts antigos mantidos apenas como referencia.

## Conteudo Publico

O site possui `155` paginas publicas listadas no `sitemap.xml`.

Tipos principais:

- `hub`: 7 paginas.
- `conteudo`: 142 paginas, todas em `paginas/`.
- `funcional`: 2 paginas.
- `institucional`: 4 paginas.

Paginas tecnicas fora do sitemap:

- `404.html`
- `template.html`

## Regras Importantes

- O site deve funcionar como projeto estatico, sem backend.
- Canonicals e `sitemap.xml` usam sempre `https://culturagaucha.com.br/`, sem `www`.
- `404.html`, `template.html` e backups nao devem entrar no sitemap.
- Links externos devem usar `target="_blank"` e `rel="noopener noreferrer"`.
- Imagens externas devem ter credito e link de fonte quando aplicavel.
- Receitas e pratos ficam em paginas dedicadas de gastronomia, nao no hub `culinaria.html`.

## Documentacao

- `docs/taxonomia.md`: tipos de pagina, temas e criterios de classificacao.
- `docs/guia-editorial.md`: padroes de conteudo, fontes, imagens e links.
- `docs/publicacao.md`: checklist de validacao antes de publicar.
- `docs/roteiro-didatico.md`: sugestoes de aula e exercicios por disciplina.
- `docs/auditoria-profundidade.md`: relatorio gerado por `tools/audit-content-depth.js` com profundidade de cada pagina de conteudo.

## Validacao Recomendada

Antes de publicar, execute:

```powershell
node tools/validate-site.js
```

Esse script cobre sintaxe do JavaScript, links internos, canonicals, contagem do `sitemap.xml`, ausencia de `*safeBackup*` e ausencia de `www`. Ele roda automaticamente em `.github/workflows/validate.yml` a cada push ou pull request.

Para manter a documentacao do projeto atualizada, tambem rode quando fizer sentido:

```powershell
node tools/audit-content-depth.js
node tools/stamp-review-dates.js
```
