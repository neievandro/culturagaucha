#!/usr/bin/env node
// Audita a profundidade de conteudo das paginas em paginas/**/*.html
// Gera docs/auditoria-profundidade.md com contagem de palavras, secoes
// e presenca de marcadores de aprofundamento ja usados no projeto.

const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');
const paginasDir = path.join(root, 'paginas');

function walk(dir, files = []) {
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
        const full = path.join(dir, entry.name);
        if (entry.isDirectory()) {
            walk(full, files);
        } else if (entry.name.endsWith('.html')) {
            files.push(full);
        }
    }
    return files;
}

function extractMain(html) {
    const match = html.match(/<main>([\s\S]*?)<\/main>/);
    return match ? match[1] : '';
}

function stripTags(html) {
    return html
        .replace(/<script[\s\S]*?<\/script>/g, ' ')
        .replace(/<[^>]+>/g, ' ')
        .replace(/&nbsp;|&amp;|&aacute;|&eacute;|&iacute;|&oacute;|&uacute;/g, ' ')
        .replace(/\s+/g, ' ')
        .trim();
}

function countWords(text) {
    if (!text) return 0;
    return text.split(/\s+/).filter(Boolean).length;
}

function countOccurrences(str, needle) {
    return str.split(needle).length - 1;
}

function tierFor(wordCount) {
    if (wordCount < 300) return 'rasa';
    if (wordCount < 600) return 'media';
    return 'aprofundada';
}

const files = walk(paginasDir).sort();

const rows = files.map((file) => {
    const rel = path.relative(root, file).replace(/\\/g, '/');
    const html = fs.readFileSync(file, 'utf8');
    const mainHtml = extractMain(html);
    const text = stripTags(mainHtml);
    const wordCount = countWords(text);
    const sectionCount = countOccurrences(mainHtml, '<section');
    const hasParaSaberMais = mainHtml.includes('para-saber-mais');
    const hasAprofundamento = mainHtml.includes('aprofundamento-editorial');
    const titleMatch = html.match(/<title>(.*?)<\/title>/);
    const title = titleMatch ? titleMatch[1].replace(' - Cultura Gaúcha', '') : rel;

    return {
        rel,
        title,
        wordCount,
        sectionCount,
        hasParaSaberMais,
        hasAprofundamento,
        tier: tierFor(wordCount),
    };
});

rows.sort((a, b) => a.wordCount - b.wordCount);

const total = rows.length;
const tierCounts = rows.reduce((acc, r) => {
    acc[r.tier] = (acc[r.tier] || 0) + 1;
    return acc;
}, {});
const avgWords = Math.round(rows.reduce((sum, r) => sum + r.wordCount, 0) / total);
const missingParaSaberMais = rows.filter((r) => !r.hasParaSaberMais).length;
const missingAprofundamento = rows.filter((r) => !r.hasAprofundamento).length;

const lines = [];
lines.push('# Auditoria de Profundidade de Conteudo');
lines.push('');
lines.push('Relatorio gerado automaticamente por `tools/audit-content-depth.js`. Mede palavras dentro de `<main>`, numero de `<section>` e presenca dos marcadores editoriais `para-saber-mais` e `aprofundamento-editorial` ja usados no projeto.');
lines.push('');
lines.push('Para regerar este relatorio apos editar conteudo:');
lines.push('');
lines.push('```powershell');
lines.push('node tools/audit-content-depth.js');
lines.push('```');
lines.push('');
lines.push('## Resumo');
lines.push('');
lines.push(`- Total de paginas de conteudo analisadas: \`${total}\`.`);
lines.push(`- Media de palavras por pagina: \`${avgWords}\`.`);
lines.push(`- Paginas classificadas como \`rasa\` (menos de 300 palavras): \`${tierCounts.rasa || 0}\`.`);
lines.push(`- Paginas classificadas como \`media\` (300 a 599 palavras): \`${tierCounts.media || 0}\`.`);
lines.push(`- Paginas classificadas como \`aprofundada\` (600 palavras ou mais): \`${tierCounts.aprofundada || 0}\`.`);
lines.push(`- Paginas sem secao \`para-saber-mais\` (sem fontes/referencias fechadas): \`${missingParaSaberMais}\`.`);
lines.push(`- Paginas sem nenhum marcador \`aprofundamento-editorial\`: \`${missingAprofundamento}\`.`);
lines.push('');
lines.push('## Prioridade De Aprofundamento');
lines.push('');
lines.push('Paginas `rasa` sem secao `para-saber-mais` sao a prioridade mais alta: tem pouco conteudo e nenhuma fonte fechada.');
lines.push('');
const highPriority = rows.filter((r) => r.tier === 'rasa' && !r.hasParaSaberMais);
if (highPriority.length) {
    lines.push('| Pagina | Palavras | Secoes |');
    lines.push('|---|---:|---:|');
    for (const r of highPriority) {
        lines.push(`| \`${r.rel}\` | ${r.wordCount} | ${r.sectionCount} |`);
    }
} else {
    lines.push('Nenhuma pagina nessa condicao no momento desta auditoria.');
}
lines.push('');
lines.push('## Todas As Paginas (Da Mais Rasa Para A Mais Aprofundada)');
lines.push('');
lines.push('| Pagina | Titulo | Palavras | Secoes | Nivel | Para saber mais | Aprofundamento |');
lines.push('|---|---|---:|---:|---|:---:|:---:|');
for (const r of rows) {
    lines.push(`| \`${r.rel}\` | ${r.title} | ${r.wordCount} | ${r.sectionCount} | ${r.tier} | ${r.hasParaSaberMais ? 'sim' : 'nao'} | ${r.hasAprofundamento ? 'sim' : 'nao'} |`);
}
lines.push('');

fs.writeFileSync(path.join(root, 'docs', 'auditoria-profundidade.md'), lines.join('\n'), 'utf8');

console.log(`Auditoria gerada: ${total} paginas analisadas, media de ${avgWords} palavras.`);
console.log(`Rasa: ${tierCounts.rasa || 0} | Media: ${tierCounts.media || 0} | Aprofundada: ${tierCounts.aprofundada || 0}`);
console.log(`Sem "para saber mais": ${missingParaSaberMais}`);
