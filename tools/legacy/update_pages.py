import os
import re
import glob

def fix_encoding(text):
    # Some files were saved with bad characters in the HTML.
    replacements = {
        "InÃ­cio": "Início",
        "HistÃ³ria": "História",
        "TradiÃ§Ãµes": "Tradições",
        "GaÃºcha": "Gaúcha",
        "PÃ¡gina": "Página",
        "â¬…ï¸ ": "⬅️"
    }
    for bad, good in replacements.items():
        text = text.replace(bad, good)
    return text

def process_file(filepath):
    with open(filepath, 'r', encoding='utf-8', errors='ignore') as f:
        content = f.read()

    content = fix_encoding(content)

    # Extract original h1
    h1_match = re.search(r'<header>.*?<h1>(.*?)</h1>.*?</header>', content, re.DOTALL)
    if not h1_match:
        print(f"Skipping {filepath} - Header H1 not found")
        return
    
    page_title = h1_match.group(1).strip()
    
    # Determine prefix
    is_secundaria = 'secundarias' in filepath.replace('\\', '/')
    prefix = '../' if is_secundaria else ''
    
    # New header and nav string
    new_top = f"""<header class="top-header">
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
        <a href="{prefix}index.html" class="brand">
            <h1>Cultura <span>Gaúcha</span></h1>
        </a>
        <div class="nav-links">
            <a href="{prefix}index.html">Início</a>
            <a href="{prefix}historia.html">História</a>
            <a href="{prefix}tradicoes-orais.html">Tradições</a>
            <a href="{prefix}culinaria.html">Gastronomia</a>
            <a href="{prefix}turismo.html">Turismo</a>
        </div>
    </div>
</nav>

<header class="page-header">
    <div class="container">
        <h1>{page_title}</h1>
    </div>
</header>"""

    new_footer = f"""<footer>
    <div class="container footer-content">
        <div class="footer-brand">
            <h2>Cultura <span>Gaúcha</span></h2>
            <p>Um portal dedicado à preservação, pesquisa e divulgação da rica herança cultural do estado do Rio Grande do Sul.</p>
        </div>
        <div class="footer-links">
            <h4>Navegação Rápida</h4>
            <ul>
                <li><a href="{prefix}historia.html">Nossa História</a></li>
                <li><a href="{prefix}culinaria.html">Gastronomia Típica</a></li>
                <li><a href="{prefix}turismo.html">Turismo pelo Rio Grande</a></li>
                <li><a href="{prefix}ctgs.html">Centros de Tradição (CTGs)</a></li>
            </ul>
        </div>
    </div>
    <div class="footer-bottom">
        <div class="container">
            <p>&copy; 2024 <strong>Cultura Gaúcha</strong>. Todos os direitos reservados. Fomentando o tradicionalismo virtual. Código-fonte licenciado sob a <a href="licenca.html">MIT License</a>.</p>
        </div>
    </div>
</footer>"""

    # Replace <header>...</header> \n\n <nav>...</nav> with the new_top
    content = re.sub(r'<header>.*?</nav>', new_top, content, flags=re.DOTALL)
    
    # Replace <footer>...</footer> with new_footer
    content = re.sub(r'<footer>.*?</footer>', new_footer, content, flags=re.DOTALL)
    
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)
    print(f"Updated {filepath}")

def main():
    root_dir = r"c:\Users\neiev\OneDrive\Documentos\site04"
    files = glob.glob(os.path.join(root_dir, '*.html')) + glob.glob(os.path.join(root_dir, 'secundarias', '*.html'))
    
    for file in files:
        if 'index.html' not in file and 'template.html' not in file:
            process_file(file)

if __name__ == '__main__':
    main()
