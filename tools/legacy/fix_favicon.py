import os
import glob
import shutil

target_dir = r"c:\Users\neiev\OneDrive\Documentos\site04"

# 1. Rename favicon.ico to favicon.png if it exists and favicon.png doesn't exist
ico_path = os.path.join(target_dir, "favicon.ico")
png_path = os.path.join(target_dir, "favicon.png")
if os.path.exists(ico_path):
    if not os.path.exists(png_path):
        os.rename(ico_path, png_path)
        print("Renamed favicon.ico to favicon.png")
    else:
        # if png already exists, just remove the ico
        os.remove(ico_path)
        print("Removed favicon.ico since favicon.png already exists")

html_files = glob.glob(os.path.join(target_dir, "**", "*.html"), recursive=True)

for filepath in html_files:
    try:
        with open(filepath, "r", encoding="utf-8") as f:
            content = f.read()
            
        rel_path = os.path.relpath(filepath, target_dir)
        depth = rel_path.count(os.sep)
        prefix = "../" * depth
        
        old_tag = f'    <link rel="icon" href="{prefix}favicon.ico" type="image/x-icon">\n'
        new_tag = f'    <link rel="icon" href="{prefix}favicon.png" type="image/png">\n'
        
        if old_tag in content:
            new_content = content.replace(old_tag, new_tag)
        else:
            # Maybe the depth formatting or spacing is different, let's just do a generic replace
            # removing any existing link rel="icon"
            import re
            new_content = re.sub(r'\s*<link rel="icon"[^>]*>\n?', '\n', content)
            new_content = new_content.replace('</head>', f'    {new_tag}</head>')
            
        with open(filepath, "w", encoding="utf-8") as f:
            f.write(new_content)
        print(f"Fixed favicon link in {filepath}")
    except Exception as e:
        print(f"Error on {filepath}: {e}")
