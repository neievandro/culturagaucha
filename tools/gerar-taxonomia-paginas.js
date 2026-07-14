const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');

function getTitle(filePath) {
    const content = fs.readFileSync(filePath, 'utf8');
    const m = content.match(/<title>([^<]*)<\/title>/);
    if (!m) return '(sem titulo)';
    return m[1].replace(/\s*-\s*Cultura Ga[uú]cha\s*$/i, '').trim();
}

function listPages(relDir) {
    const dir = path.join(root, relDir);
    return fs.readdirSync(dir)
        .filter((f) => f.endsWith('.html'))
        .sort((a, b) => a.localeCompare(b, 'pt-BR'))
        .map((f) => {
            const rel = relDir ? `${relDir}/${f}` : f;
            return { file: rel, title: getTitle(path.join(dir, f)) };
        });
}

const hub = ['index.html', 'historia.html', 'cultura.html', 'culinaria.html', 'territorio.html', 'turismo.html', 'patrimonio.html']
    .map((f) => ({ file: f, title: getTitle(path.join(root, f)) }));

const funcional = ['busca.html', 'mapa-do-site.html']
    .map((f) => ({ file: f, title: getTitle(path.join(root, f)) }));

const institucional = ['sobre-o-site.html', 'licenca.html', 'privacidade.html', 'governanca.html']
    .map((f) => ({ file: f, title: getTitle(path.join(root, f)) }));

const tecnica = ['404.html', 'template.html']
    .map((f) => ({ file: f, title: getTitle(path.join(root, f)) }));

const paginasDir = path.join(root, 'paginas');
const subpastas = fs.readdirSync(paginasDir)
    .filter((f) => fs.statSync(path.join(paginasDir, f)).isDirectory())
    .sort((a, b) => a.localeCompare(b, 'pt-BR'));

const conteudo = subpastas.map((sub) => ({
    pasta: sub,
    paginas: listPages(`paginas/${sub}`),
}));

const totalConteudo = conteudo.reduce((acc, g) => acc + g.paginas.length, 0);
const totalGeral = hub.length + funcional.length + institucional.length + tecnica.length + totalConteudo;
const totalPublico = totalGeral - tecnica.length;

const lines = [];
lines.push('TAXONOMIA DE PAGINAS - CULTURA GAUCHA');
lines.push(`Gerado automaticamente por tools/gerar-taxonomia-paginas.js em ${new Date().toISOString().slice(0, 10)}.`);
lines.push('Para atualizar apos criar, remover ou renomear paginas, rode: node tools/gerar-taxonomia-paginas.js');
lines.push('');
lines.push(`Total de arquivos HTML: ${totalGeral}`);
lines.push(`Paginas publicas (no sitemap.xml): ${totalPublico}`);
lines.push(`Paginas tecnicas (fora do sitemap): ${tecnica.length}`);
lines.push('');
lines.push('='.repeat(70));
lines.push(`HUB (${hub.length})`);
lines.push('='.repeat(70));
hub.forEach((p) => lines.push(`  ${p.file}  —  ${p.title}`));
lines.push('');

lines.push('='.repeat(70));
lines.push(`FUNCIONAL (${funcional.length})`);
lines.push('='.repeat(70));
funcional.forEach((p) => lines.push(`  ${p.file}  —  ${p.title}`));
lines.push('');

lines.push('='.repeat(70));
lines.push(`INSTITUCIONAL (${institucional.length})`);
lines.push('='.repeat(70));
institucional.forEach((p) => lines.push(`  ${p.file}  —  ${p.title}`));
lines.push('');

lines.push('='.repeat(70));
lines.push(`TECNICA - fora do sitemap (${tecnica.length})`);
lines.push('='.repeat(70));
tecnica.forEach((p) => lines.push(`  ${p.file}  —  ${p.title}`));
lines.push('');

lines.push('='.repeat(70));
lines.push(`CONTEUDO (${totalConteudo} paginas em ${conteudo.length} categorias)`);
lines.push('='.repeat(70));
lines.push('');
conteudo.forEach((g) => {
    lines.push(`--- paginas/${g.pasta} (${g.paginas.length}) ---`);
    g.paginas.forEach((p) => lines.push(`  ${p.file}  —  ${p.title}`));
    lines.push('');
});

fs.writeFileSync(path.join(root, 'docs', 'taxonomia-paginas.txt'), lines.join('\n'), 'utf8');
console.log(`docs/taxonomia-paginas.txt gerado. Total: ${totalGeral} paginas (${totalPublico} publicas, ${tecnica.length} tecnicas).`);
