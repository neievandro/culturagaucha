#!/usr/bin/env node
// Formaliza o checklist de docs/publicacao.md em um script executavel.
// Sai com codigo 1 se qualquer verificacao falhar, para uso em CI.
//
// Uso:
//   node tools/validate-site.js

const fs = require('fs');
const path = require('path');
const { execFileSync } = require('child_process');

const root = path.resolve(__dirname, '..');
const errors = [];
const warnings = [];

function walkHtml(dir, files = []) {
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
        if (entry.name.startsWith('.git') || entry.name === 'node_modules') continue;
        const full = path.join(dir, entry.name);
        if (entry.isDirectory()) {
            walkHtml(full, files);
        } else if (entry.name.endsWith('.html')) {
            files.push(full);
        }
    }
    return files;
}

const allHtmlFiles = walkHtml(root);
const TECHNICAL_PAGES = new Set(['404.html', 'template.html']);

// 1. Sintaxe do JavaScript.
try {
    execFileSync(process.execPath, ['--check', path.join(root, 'assets/js/script.js')], { stdio: 'pipe' });
    console.log('[ok] assets/js/script.js: sintaxe valida.');
} catch (err) {
    errors.push(`assets/js/script.js tem erro de sintaxe:\n${err.stderr ? err.stderr.toString() : err.message}`);
}

// 2. Ausencia de arquivos *safeBackup*.
const backupFiles = [];
function walkAll(dir, files = []) {
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
        if (entry.name.startsWith('.git') || entry.name === 'node_modules') continue;
        const full = path.join(dir, entry.name);
        if (entry.isDirectory()) {
            walkAll(full, files);
        } else if (entry.name.includes('safeBackup')) {
            files.push(path.relative(root, full).replace(/\\/g, '/'));
        }
    }
    return files;
}
walkAll(root, backupFiles);
if (backupFiles.length) {
    errors.push(`Arquivos de backup encontrados na arvore publica:\n${backupFiles.join('\n')}`);
} else {
    console.log('[ok] Nenhum arquivo *safeBackup* na arvore do projeto.');
}

// 3. Canonicals sem www, absolutas, uma por pagina.
let canonicalIssues = [];
for (const file of allHtmlFiles) {
    const rel = path.relative(root, file).replace(/\\/g, '/');
    if (TECHNICAL_PAGES.has(rel)) continue;
    const content = fs.readFileSync(file, 'utf8');
    const matches = [...content.matchAll(/<link rel="canonical" href="([^"]+)">/g)];
    if (matches.length === 0) {
        canonicalIssues.push(`${rel}: sem canonical.`);
        continue;
    }
    if (matches.length > 1) {
        canonicalIssues.push(`${rel}: mais de uma canonical.`);
    }
    const href = matches[0][1];
    if (href.includes('www.')) {
        canonicalIssues.push(`${rel}: canonical usa www (${href}).`);
    }
    if (!href.startsWith('https://culturagaucha.com.br/')) {
        canonicalIssues.push(`${rel}: canonical fora do dominio esperado (${href}).`);
    }
}
if (canonicalIssues.length) {
    errors.push(`Problemas de canonical:\n${canonicalIssues.join('\n')}`);
} else {
    console.log('[ok] Canonicals presentes, unicas e sem www.');
}

// 4. Links externos com target="_blank" devem ter rel com noopener.
let relIssues = [];
for (const file of allHtmlFiles) {
    const rel = path.relative(root, file).replace(/\\/g, '/');
    const content = fs.readFileSync(file, 'utf8');
    const tags = content.match(/<a [^>]*target="_blank"[^>]*>/g) || [];
    for (const tag of tags) {
        if (!/rel="[^"]*noopener/.test(tag)) {
            relIssues.push(`${rel}: link com target="_blank" sem rel="noopener noreferrer" -> ${tag.slice(0, 120)}`);
        }
    }
}
if (relIssues.length) {
    warnings.push(`Links externos sem rel="noopener noreferrer":\n${relIssues.join('\n')}`);
} else {
    console.log('[ok] Links externos com target="_blank" usam rel="noopener noreferrer".');
}

// 5. Links internos quebrados.
let brokenLinks = [];
for (const file of allHtmlFiles) {
    const rel = path.relative(root, file).replace(/\\/g, '/');
    const content = fs.readFileSync(file, 'utf8');
    const hrefs = [...content.matchAll(/href="([^"]+)"/g)].map((m) => m[1]);
    for (const href of hrefs) {
        if (/^(https?:)?\/\//.test(href) || href.startsWith('mailto:') || href.startsWith('tel:') || href.startsWith('#')) continue;
        const cleanHref = href.split('#')[0];
        if (!cleanHref) continue;
        const targetPath = path.resolve(path.dirname(file), cleanHref);
        if (!fs.existsSync(targetPath)) {
            brokenLinks.push(`${rel}: link interno quebrado -> ${href}`);
        }
    }
}
if (brokenLinks.length) {
    errors.push(`Links internos quebrados:\n${brokenLinks.join('\n')}`);
} else {
    console.log('[ok] Nenhum link interno quebrado encontrado.');
}

// 6. Sitemap: contagem de URLs e ausencia de www.
const sitemapPath = path.join(root, 'sitemap.xml');
if (fs.existsSync(sitemapPath)) {
    const sitemapContent = fs.readFileSync(sitemapPath, 'utf8');
    const locs = [...sitemapContent.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
    const wwwLocs = locs.filter((loc) => loc.includes('www.'));
    if (wwwLocs.length) {
        errors.push(`sitemap.xml tem URLs com www:\n${wwwLocs.join('\n')}`);
    } else {
        console.log('[ok] sitemap.xml nao usa www em nenhuma URL.');
    }

    const publicHtmlFiles = allHtmlFiles.filter((file) => {
        const rel = path.relative(root, file).replace(/\\/g, '/');
        return !TECHNICAL_PAGES.has(rel);
    });

    if (locs.length !== publicHtmlFiles.length) {
        warnings.push(`sitemap.xml tem ${locs.length} URLs, mas existem ${publicHtmlFiles.length} paginas publicas no repositorio. Confira se todas as paginas novas foram adicionadas ao sitemap (ou se paginas removidas ainda estao listadas).`);
    } else {
        console.log(`[ok] sitemap.xml tem ${locs.length} URLs, igual ao numero de paginas publicas.`);
    }
} else {
    errors.push('sitemap.xml nao encontrado.');
}

console.log('');
if (warnings.length) {
    console.log(`AVISOS (${warnings.length}):`);
    for (const w of warnings) console.log(`- ${w}`);
    console.log('');
}

if (errors.length) {
    console.log(`ERROS (${errors.length}):`);
    for (const e of errors) console.log(`- ${e}`);
    process.exitCode = 1;
} else {
    console.log('Todas as verificacoes obrigatorias passaram.');
}
