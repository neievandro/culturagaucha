import os
import glob

target_dir = r"c:\Users\neiev\OneDrive\Documentos\site04"
html_files = glob.glob(os.path.join(target_dir, "**", "*.html"), recursive=True)

favicon_tag = '<link rel="icon" href="favicon.ico" type="image/x-icon">\n'
favicon_tag_png = '<link rel="icon" href="favicon.png" type="image/png">\n'

for filepath in html_files:
    try:
        with open(filepath, "r", encoding="utf-8") as f:
            content = f.read()
            
        if "favicon" not in content:
            # We insert right before the closing head tag
            # If the image might be a png, using standard favicon tag is usually enough for modern browsers
            # but we can use the relative path depending on depth.
            # To handle depth:
            rel_path = os.path.relpath(filepath, target_dir)
            depth = rel_path.count(os.sep)
            prefix = "../" * depth
            
            tag = f'    <link rel="icon" href="{prefix}favicon.ico" type="image/x-icon">\n'
            
            new_content = content.replace("</head>", tag + "</head>")
            
            with open(filepath, "w", encoding="utf-8") as f:
                f.write(new_content)
            print(f"Added favicon to {filepath}")
    except Exception as e:
        print(f"Error on {filepath}: {e}")
