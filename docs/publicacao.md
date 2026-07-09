# Publicacao E Validacao

Use este checklist antes de publicar o site.

## Checklist Rapido

- Rodar verificacao de sintaxe do JavaScript.
- Conferir links internos.
- Conferir canonicals.
- Conferir `sitemap.xml`.
- Verificar ausencia de arquivos `*safeBackup*`.
- Verificar que URLs canonicas e sitemap nao usam `www`.
- Conferir se links externos usam `target="_blank"` e `rel="noopener noreferrer"`.
- Conferir se novas imagens possuem credito e `alt`.

## Comando Basico

```powershell
node --check "assets/js/script.js"
```

Se nao houver saida, a sintaxe esta valida.

## Validacao Automatizada

O checklist deste documento tambem roda como script:

```powershell
node tools/validate-site.js
```

O script verifica sintaxe do JavaScript, ausencia de arquivos `*safeBackup*`, presenca e formato de canonicals, `rel="noopener noreferrer"` em links externos, links internos quebrados e contagem de URLs do `sitemap.xml` contra o numero real de paginas publicas. Ele sai com codigo de erro se alguma verificacao obrigatoria falhar.

Esse mesmo script roda automaticamente em `.github/workflows/validate.yml` a cada `push` ou `pull request`, em qualquer branch.

## Datas De Revisao Editorial

Cada pagina de conteudo em `paginas/` traz uma linha `Última revisão de conteúdo: DD/MM/AAAA` logo no inicio do `content-wrapper`. Essa data vem do ultimo commit git que alterou o arquivo (ou da data atual, se o arquivo ainda nao foi commitado).

Depois de revisar e commitar o conteudo de uma pagina, atualize a data rodando:

```powershell
node tools/stamp-review-dates.js
```

## Auditoria De Profundidade

Para identificar paginas de conteudo mais rasas (candidatas a aprofundamento), rode:

```powershell
node tools/audit-content-depth.js
```

O relatorio gerado fica em `docs/auditoria-profundidade.md`.

## Sitemap

Regras atuais:

- Deve listar somente paginas publicas.
- Deve usar `https://culturagaucha.com.br/`, sem `www`.
- Deve excluir `404.html`.
- Deve excluir `template.html`.
- Deve excluir qualquer arquivo `*safeBackup*`.

Quantidade atual esperada:

```txt
155 URLs
```

## Canonicals

Cada pagina publica listada no sitemap deve ter no `<head>` uma canonical apontando para ela mesma.

Exemplo:

```html
<link rel="canonical" href="https://culturagaucha.com.br/paginas/historia/tropeirismo.html">
```

Regras:

- sem `www`;
- URL absoluta;
- uma canonical por pagina;
- canonical igual ao URL listado no sitemap.

## Arquivos Tecnicos

Manter fora do sitemap:

- `404.html`
- `template.html`

`404.html` deve ser mantido para erro personalizado.

`template.html` deve ser mantido apenas se ainda for usado como modelo de criacao de paginas.

## Backups

Arquivos `*safeBackup*` nao devem ficar na arvore publica do site.

Se precisar preservar uma versao antiga:

- use controle de versao;
- ou armazene fora da pasta publica;
- ou use um arquivo compactado externo ao fluxo de publicacao.

## Publicacao Estatica

O site nao depende de backend. A hospedagem precisa servir arquivos estaticos:

- HTML;
- CSS;
- JavaScript;
- imagens;
- `sitemap.xml`;
- `robots.txt`, se existir.

## Depois De Publicar

Verifique no navegador:

- pagina inicial;
- menus em desktop e mobile;
- busca;
- mapa do site;
- paginas profundas em `paginas/*`;
- imagens externas;
- links externos;
- pagina inexistente para confirmar o `404.html`, se a hospedagem permitir configuracao de erro personalizado.
