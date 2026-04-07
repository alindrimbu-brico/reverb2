import os
import PyPDF2

def build_html(chapter_idx, title, content, next_idx, prev_idx, max_chap):
    nav = f"""<a href="capitolul-{prev_idx}.html" class="nav-btn active">← Sectiunea {prev_idx}</a>""" if prev_idx else """<span class="nav-btn disabled">← Precedentul</span>"""
    nav += f"""<a href="capitolul-{next_idx}.html" class="nav-btn active">Sectiunea {next_idx} →</a>""" if next_idx <= max_chap else """<span class="nav-btn disabled">Sfârșit →</span>"""
    
    html = f"""<!DOCTYPE html>
<html lang="ro">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sectiunea {chapter_idx} - Extras</title>
    <link rel="stylesheet" href="styles.css">
    <link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600&family=Inter:wght@300;400;500;600&display=swap" rel="stylesheet">
</head>
<body class="reading-body">
    <div class="glow-orb orb-1" style="opacity: 0.2"></div>
    <div class="glow-orb orb-2" style="opacity: 0.1"></div>

    <header class="reading-header">
        <a href="index.html" class="logo" style="font-size: 1.2rem;">← Cuprins</a>
        <div class="current-chapter">Secțiunea {chapter_idx}</div>
    </header>

    <main class="reading-container">
        <article class="glass-card reading-card fade-in">
            <h1 class="chapter-title">{title}</h1>
            <div class="text-content">
"""
    # Create paragraphs safely
    paragraphs = content.split('\n\n')
    for p in paragraphs:
        if p.strip():
            html += f"                <p>{p.strip()}</p>\n"

    html += f"""            </div>
        </article>

        <div class="reading-nav fade-in delay-1">
            {nav}
        </div>
    </main>

    <script src="app.js"></script>
</body>
</html>"""
    return html

def main():
    pdf_path = r'C:\Users\alind\Documents\Brianna_Wiest_-_101_eseuri_care_iti_vor_schimba_modul_de_a_gandi.pdf'
    output_dir = r'C:\Users\alind\Projects\reverb\spiritual-site'
    
    print("Reading PDF...")
    text = ""
    with open(pdf_path, 'rb') as f:
        reader = PyPDF2.PdfReader(f)
        for i, page in enumerate(reader.pages):
            # Skip first 10 pages for TOC and intro usually
            if i > 15:
                # remove bad chars
                extracted = page.extract_text()
                if extracted:
                    text += extracted.replace('~', 'ț') + " "

    print("Splitting into chapters...")
    chunks = []
    current_chunk = []
    current_len = 0
    words = text.split()
    
    # Approx 600 words per page to simulate a very readable section
    for word in words:
        current_chunk.append(word)
        current_len += len(word) + 1
        if current_len > 4000:
            chunks.append(" ".join(current_chunk))
            current_chunk = []
            current_len = 0
    if current_chunk:
        chunks.append(" ".join(current_chunk))
        
    toc_links = ""
    print(f"Writing {len(chunks)} HTML files...")
    for idx, chunk in enumerate(chunks):
        chapter_id = idx + 1
        title = f"Călătoria - Partea {chapter_id}"
        
        sentences = chunk.split('. ')
        formatted_content = ""
        for i in range(0, len(sentences), 4):
            formatted_content += '. '.join(sentences[i:i+4]) + ".\n\n"
            
        html = build_html(chapter_id, title, formatted_content, chapter_id + 1, chapter_id - 1 if chapter_id > 1 else None, len(chunks))
        
        with open(os.path.join(output_dir, f'capitolul-{chapter_id}.html'), 'w', encoding='utf-8') as f:
            f.write(html)
            
        toc_links += f"""
                <a href="capitolul-{chapter_id}.html" class="glass-card toc-card fade-in">
                    <span class="chapter-num">Sectiunea {chapter_id}</span>
                    <h3>Extensia De Gândire {chapter_id}</h3>
                    <p>Continuă explorarea sinelui.</p>
                </a>"""
    
    index_html = f"""<!DOCTYPE html>
<html lang="ro">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>101 Eseuri - Experiență Vizuală</title>
    <link rel="stylesheet" href="styles.css">
    <link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600&family=Inter:wght@300;400;500;600&display=swap" rel="stylesheet">
</head>
<body>
    <div class="glow-orb orb-1"></div>
    <div class="glow-orb orb-2"></div>

    <header>
        <div class="logo">AURA.</div>
    </header>

    <main>
        <section class="hero" style="min-height: 70vh;">
            <h1 class="fade-in">Începutul <span>Călătoriei</span></h1>
            <p class="fade-in delay-1" style="max-width: 600px; margin: 0 auto 3rem;">Aceasta este arhiva extrasă din fișierul "Brianna Wiest - 101 eseuri". Toate scrierile au fost împărțite în pagini distincte de lectură.</p>
        </section>

        <section class="book-index" style="min-height: auto; padding-top: 0;">
            <div class="grid toc-grid" style="max-width: 800px; margin: 0 auto;">
                {toc_links}
            </div>
        </section>
    </main>
    <script src="app.js"></script>
</body>
</html>"""
    
    with open(os.path.join(output_dir, 'index.html'), 'w', encoding='utf-8') as f:
        f.write(index_html)
        
    print("Done! Check index.html.")

if __name__ == "__main__":
    main()
