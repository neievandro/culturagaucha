#!/usr/bin/env node
// Insere ou atualiza a linha "Ultima revisao de conteudo" em cada pagina de
// paginas/**/*.html, usando a data real do ultimo commit git que alterou o
// arquivo. Arquivos ainda nao commitados recebem a data de hoje.
//
// Uso:
//   node tools/stamp-review-dates.js
//
// Reexecute este script sempre que o conteudo de uma pagina for revisado e
// commitado, para manter a data exibida coerente com a ultima alteracao real.

const fs = require('fs');
const path = require('path');
const { execFileSync } = require('child_process');

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

function todayFormatted() {
    const now = new Date();
    const dd = String(now.getDate()).padStart(2, '0');
    const mm = String(now.getMonth() + 1).padStart(2, '0');
    const yyyy = now.getFullYear();
    return `${dd}/${mm}/${yyyy}`;
}

function lastCommitDate(relPath) {
    try {
        const out = execFileSync(
            'git',
            ['log', '-1', '--format=%ad', '--date=format:%d/%m/%Y', '--', relPath],
            { cwd: root, encoding: 'utf8' },
        ).trim();
        return out || null;
    } catch (err) {
        return null;
    }
}

const files = walk(paginasDir).sort();
const today = todayFormatted();

let inserted = 0;
let updated = 0;
let unchanged = 0;

for (const file of files) {
    const rel = path.relative(root, file).replace(/\\/g, '/');
    const date = lastCommitDate(rel) || today;
    let content = fs.readFileSync(file, 'utf8');

    const lineRegex = /<p class="revisao-editorial" data-revisao="1">Última revisão de conteúdo: [\d/]+\.<\/p>/;
    const newLine = `<p class="revisao-editorial" data-revisao="1">Última revisão de conteúdo: ${date}.</p>`;

    if (lineRegex.test(content)) {
        const existing = content.match(lineRegex)[0];
        if (existing === newLine) {
            unchanged++;
            continue;
        }
        content = content.replace(lineRegex, newLine);
        fs.writeFileSync(file, content, 'utf8');
        updated++;
        continue;
    }

    const anchor = '<div class="content-wrapper">';
    const anchorPos = content.indexOf(anchor);
    if (anchorPos === -1) {
        console.warn(`Aviso: âncora "content-wrapper" não encontrada em ${rel}, pulando.`);
        continue;
    }
    const insertPos = anchorPos + anchor.length;
    content = content.slice(0, insertPos) + newLine + content.slice(insertPos);
    fs.writeFileSync(file, content, 'utf8');
    inserted++;
}

console.log(`Inseridas: ${inserted} | Atualizadas: ${updated} | Sem mudança: ${unchanged}`);
