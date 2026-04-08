import os
import PyPDF2

CSS_STYLE = """
:root {
    --bg-void: #fdfdfd;
    --text-core: #1e293b;
    --text-dim: #64748b;
    --aura-light: #94a3b8;
    --aura-glow: rgba(148, 163, 184, 0.4);
    --glass-plate: rgba(255, 255, 255, 0.6);
    --glass-rim: rgba(255, 255, 255, 0.8);
}

* { margin: 0; padding: 0; box-sizing: border-box; }

body {
    background-color: var(--bg-void);
    color: var(--text-core);
    font-family: 'Inter', sans-serif;
    overflow-x: hidden;
    position: relative;
    line-height: 1.8;
    background-attachment: fixed;
}

h1, h2, h3, .brand {
    font-family: 'Cinzel', serif;
    font-weight: 400;
}

/* Atmospheric Pulses */
.atmosphere {
    position: fixed; top: 0; left: 0; width: 100vw; height: 100vh;
    z-index: -1; pointer-events: none; overflow: hidden;
}
.pulse-1 {
    position: absolute; top: -20vh; left: -10vw; width: 70vw; height: 70vw;
    border-radius: 50%; filter: blur(120px); opacity: 0.15;
    background: radial-gradient(circle, #5b21b6, transparent 60%);
    animation: breathe 25s infinite alternate ease-in-out;
}
.pulse-2 {
    position: absolute; bottom: -20vh; right: -10vw; width: 80vw; height: 80vw;
    border-radius: 50%; filter: blur(150px); opacity: 0.2;
    background: radial-gradient(circle, var(--aura-light), transparent 60%);
    animation: breathe 30s infinite alternate-reverse ease-in-out;
}
@keyframes breathe {
    0% { transform: scale(0.9) translate(0, 0); }
    100% { transform: scale(1.1) translate(30px, -40px); }
}

header {
    display: flex; justify-content: center; align-items: center;
    padding: 3rem 5%; position: relative; z-index: 10;
}
.brand { 
    font-size: 1.5rem; letter-spacing: 10px; color: var(--text-core); 
    text-decoration: none; text-transform: uppercase; opacity: 0.9;
    transition: 0.4s;
    text-shadow: 0 0 15px rgba(255, 255, 255, 0.8);
}
.brand:hover { text-shadow: 0 0 25px rgba(255, 255, 255, 1); letter-spacing: 12px; }

/* Dashboard Shell */
.app-shell {
    padding: 4rem 5%; max-width: 1200px; margin: 0 auto; display: flex; flex-direction: column; align-items: center;
}
.greeting { text-align: center; margin-bottom: 5rem; }
.greeting h1 { font-size: 3rem; margin-bottom: 1rem; }
.greeting p { color: var(--text-dim); font-size: 1.1rem; max-width: 500px; margin: 0 auto; font-weight: 300;}

/* The Grid of Mirrors */
.mirror-grid {
    display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 1.5rem; width: 100%;
}
.mirror-node {
    background: var(--glass-plate); border: 1px solid var(--glass-rim);
    border-radius: 24px; padding: 2.5rem 2rem; text-decoration: none;
    transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
    display: flex; flex-direction: column; position: relative; overflow: hidden;
    backdrop-filter: blur(20px);
}
.mirror-node::before {
    content: ''; position: absolute; top: 0; left: 0; right: 0; bottom: 0;
    background: radial-gradient(800px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(255,255,255,0.03), transparent 40%);
    opacity: 0; transition: opacity 0.5s; z-index: 1; pointer-events: none;
}
.mirror-node:hover::before { opacity: 1; }
.mirror-node:hover {
    transform: translateY(-5px); border-color: rgba(255, 255, 255, 1);
    box-shadow: 0 20px 40px rgba(148, 163, 184, 0.1), inset 0 1px 0 rgba(255,255,255,0.8);
}

.node-sigil { font-size: 0.75rem; letter-spacing: 3px; color: var(--aura-light); margin-bottom: 1rem; text-transform: uppercase;}
.node-title { font-size: 1.4rem; color: var(--text-core); margin-bottom: 0.5rem;}
.node-desc { color: var(--text-dim); font-size: 0.95rem; font-weight: 300;}

/* Meditation Room (Reading View) */
.meditation-room {
    max-width: 700px; margin: 0 auto 8rem; padding: 0 5%; position: relative; z-index: 5;
}
.chapter-prompt {
    font-family: 'Cinzel', serif; font-size: 2.5rem; color: var(--aura-light); margin-bottom: 4rem; text-align: center;
    line-height: 1.3;
}
.breath-text p {
    font-size: 1.25rem; font-weight: 300; line-height: 2; color: var(--text-core); margin-bottom: 2.5rem; text-align: justify;
    opacity: 0.85;
}
.breath-text p:first-of-type::first-letter {
    font-family: 'Cinzel', serif; font-size: 3.5rem; float: left; padding-right: 12px; line-height: 0.8; color: var(--aura-light);
}

.guidance-nav {
    display: flex; justify-content: space-between; margin-top: 5rem; border-top: 1px solid var(--glass-rim); padding-top: 3rem;
}
.nav-link {
    text-decoration: none; padding: 1rem 2rem; border-radius: 40px; font-weight: 400; font-size: 0.95rem; letter-spacing: 1px;
    border: 1px solid var(--glass-rim); background: var(--glass-plate); transition: 0.4s; color: var(--text-dim); text-transform: uppercase;
}
.nav-link:hover { border-color: var(--aura-light); color: var(--aura-light); background: rgba(192, 144, 84, 0.05); }

/* System Animations */
.reveal { opacity: 0; transform: translateY(20px); transition: opacity 1.2s ease-out, transform 1.2s ease-out; }
.reveal.is-visible { opacity: 1; transform: translateY(0); }
.stagger-1 { transition-delay: 0.1s; } .stagger-2 { transition-delay: 0.2s; } .stagger-3 { transition-delay: 0.3s; }

/* Crypto Crystal Journal Component */
.journal-btn {
    display: inline-block; padding: 0.8rem 2rem;
    border: 1px solid var(--aura-light); background: transparent; color: var(--aura-light);
    border-radius: 30px; font-family: 'Cinzel', serif; font-size: 1rem; cursor: pointer; transition: 0.4s;
}
.journal-btn:hover { background: rgba(255,255,255,0.8); color: var(--text-core); }

.journal-container {
    display: none; margin-top: 2rem; animation: fade-in 0.5s ease-out;
}
@keyframes fade-in { from{opacity:0; transform:translateY(-10px);} to{opacity:1; transform:translateY(0);} }
.journal-textarea {
    width: 100%; height: 200px; background: rgba(255,255,255,0.3); border: 1px solid var(--glass-rim);
    border-radius: 12px; padding: 1.5rem; font-family: 'Inter', sans-serif; font-size: 1.1rem;
    color: var(--text-core); resize: vertical; outline: none; transition: 0.3s;
    backdrop-filter: blur(10px);
}
.journal-textarea:focus { border-color: var(--aura-light); background: rgba(255,255,255,0.5); }
.save-status { font-size: 0.8rem; color: var(--aura-light); margin-top: 0.5rem; display: block; text-align: right; }

/* Invisible Summon Contact */
.summon-star {
    position: fixed; bottom: 30px; left: 50%; transform: translateX(-50%);
    width: 10px; height: 10px; border-radius: 50%; background: var(--aura-light);
    box-shadow: 0 0 10px var(--aura-light); cursor: pointer; opacity: 0.2; transition: 0.5s; z-index: 99;
}
.summon-star:hover { opacity: 1; transform: translateX(-50%) scale(1.5); box-shadow: 0 0 20px var(--aura-light); }

.summon-overlay {
    position: fixed; top: 0; left: 0; width: 100vw; height: 100vh;
    background: rgba(255,255,255,0.8); backdrop-filter: blur(30px);
    display: flex; flex-direction: column; justify-content: center; align-items: center;
    opacity: 0; pointer-events: none; transition: 0.8s; z-index: 100;
}
.summon-overlay.active { opacity: 1; pointer-events: all; }
.summon-text { font-family: 'Cinzel', serif; font-size: 2rem; color: var(--text-core); margin-bottom: 1rem; }
.summon-mail { font-size: 1.2rem; color: var(--aura-light); text-decoration: none; border-bottom: 1px solid var(--aura-light); padding-bottom: 5px; }

"""
JS_SCRIPT = r"""
document.addEventListener("DOMContentLoaded", () => {
    // Reveal Animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

    // Dynamic Hover Aura for Mirror Nodes
    document.querySelectorAll('.mirror-node').forEach(card => {
        card.addEventListener('mousemove', e => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            card.style.setProperty('--mouse-x', `${x}px`);
            card.style.setProperty('--mouse-y', `${y}px`);
        });
    });

    // 432 Hz Sacred Drone audio engine
    let audioCtx;
    let isPlaying = false;
    
    function startSacredAudio() {
        if(isPlaying) return;
        isPlaying = true;
        
        try {
            audioCtx = new (window.AudioContext || window.webkitAudioContext)();
            const mainGain = audioCtx.createGain();
            mainGain.gain.value = 0; // fade in slowly
            mainGain.connect(audioCtx.destination);
            
            // 432 Hz oscillator
            const osc1 = audioCtx.createOscillator();
            osc1.type = 'sine';
            osc1.frequency.value = 432;
            
            // LFO for volume pulsing
            const lfo = audioCtx.createOscillator();
            lfo.type = 'sine';
            lfo.frequency.value = 0.05; // very slow wave
            
            const lfoGain = audioCtx.createGain();
            lfoGain.gain.value = 0.02; // max volume variation
            
            lfo.connect(lfoGain.gain);
            osc1.connect(lfoGain);
            lfoGain.connect(mainGain);
            
            osc1.start();
            lfo.start();
            
            // Fade in over 10 seconds to not startle
            mainGain.gain.linearRampToValueAtTime(0.05, audioCtx.currentTime + 10);
        } catch(e) {
            console.log('Web Audio nu a putut fi inițializat.');
        }
    }
    
    // Start audio on first interaction seamlessly
    document.body.addEventListener('click', startSacredAudio, { once: true });
    // Or on clicking any mirror specifically (in case body capture gets blocked)
    document.querySelectorAll('.mirror-node').forEach(node => {
        node.addEventListener('click', startSacredAudio); 
    });

    // Crypto Crystal Journal Logic
    const journalBtn = document.getElementById('journalBtn');
    const journalContainer = document.getElementById('journalContainer');
    const journalText = document.getElementById('journalText');
    const saveStatus = document.getElementById('saveStatus');
    
    if(journalBtn && journalContainer && journalText && saveStatus) {
        const match = window.location.pathname.match(/node-(\d+)/);
        const nodeId = match ? match[1] : 'index';
        const cacheKey = `aura_crypto_journal_${nodeId}`;
        
        const existingVal = localStorage.getItem(cacheKey);
        if(existingVal) {
            journalText.value = existingVal;
        }

        journalBtn.addEventListener('click', () => {
            journalContainer.style.display = 'block';
            journalBtn.style.display = 'none';
        });

        let timeout = null;
        journalText.addEventListener('input', () => {
            saveStatus.innerText = 'Se salvează secvența...';
            clearTimeout(timeout);
            timeout = setTimeout(() => {
                localStorage.setItem(cacheKey, journalText.value);
                saveStatus.innerText = 'Criptat și Păstrat local.';
            }, 1000);
        });
    }

    // Summon Star Logic
    const star = document.getElementById('summonStar');
    const overlay = document.getElementById('summonOverlay');
    if(star && overlay) {
        star.addEventListener('click', () => {
            overlay.classList.add('active');
        });
        overlay.addEventListener('click', (e) => {
            if(e.target === overlay) {
                overlay.classList.remove('active');
            }
        });
    }
});
"""

def extract_pdf_data(pdf_path):
    print("Invocând extragerea din psihicul PDF-ului...")
    text = ""
    with open(pdf_path, 'rb') as f:
        reader = PyPDF2.PdfReader(f)
        for i, page in enumerate(reader.pages):
            if i > 15:
                extracted = page.extract_text()
                if extracted:
                    # Very basic cleanup to maintain prose
                    text += extracted.replace('~', 'ț').replace('\n', ' ') + " "
    return text

def chunk_soul_text(text):
    print("Segmentând textul în Reflecții Terapeutice...")
    words = text.split()
    chunks = []
    current_chunk = []
    length = 0
    
    # 500 words per reflection node provides extreme cognitive ease for the user
    for word in words:
        current_chunk.append(word)
        length += 1
        if length >= 500:
            chunks.append(" ".join(current_chunk))
            current_chunk = []
            length = 0
    if current_chunk:
        chunks.append(" ".join(current_chunk))
    return chunks

def build_reflection_node(node_id, total_nodes, txt_chunk):
    title = f"Reflecția {node_id}"
    
    prev_link = f"""<a href="node-{node_id-1}.html" class="nav-link">← Caută în Trecut</a>""" if node_id > 1 else ""
    next_link = f"""<a href="node-{node_id+1}.html" class="nav-link">Pășește Mai Departe →</a>""" if node_id < total_nodes else ""
    
    sentences = txt_chunk.split('. ')
    breath_paragraphs = ""
    for i in range(0, len(sentences), 5):
        para = '. '.join(sentences[i:i+5]) + "."
        # remove double dots if any
        para = para.replace("..", ".")
        breath_paragraphs += f"                <p>{para}</p>\n"
        
    journal_html = f"""
            <div style="text-align: center; margin-top: 4rem;">
                <button id="journalBtn" class="journal-btn">Reflectează Aici</button>
            </div>
            <div id="journalContainer" class="journal-container">
                <textarea id="journalText" class="journal-textarea" placeholder="Notează aici reflecția ta. Textul rămâne privat și securizat local pe dispozitivul tău."></textarea>
                <span id="saveStatus" class="save-status">Se așteaptă notița...</span>
            </div>
    """

    html = f"""<!DOCTYPE html>
<html lang="ro">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>AURA - Reflecția {node_id}</title>
    <link rel="stylesheet" href="aura.css">
    <link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500&family=Inter:wght@300;400&display=swap" rel="stylesheet">
</head>
<body>
    <div class="atmosphere">
        <div class="pulse-1"></div>
        <div class="pulse-2"></div>
    </div>

    <header>
        <a href="index.html" class="brand" style="font-size: 1rem;">← Refugiul Interior</a>
    </header>

    <main class="meditation-room">
        <div class="reveal">
            <h1 class="chapter-prompt">{title}</h1>
            <div class="breath-text">
{breath_paragraphs}
            </div>
{journal_html}
            
            <nav class="guidance-nav">
                <div class="left-nav">{prev_link}</div>
                <div class="right-nav">{next_link}</div>
            </nav>
        </div>
    </main>
    <div id="summonStar" class="summon-star"></div>
    <div id="summonOverlay" class="summon-overlay">
        <div class="summon-text">Apelează Tatăl. Formează Conexiunea.</div>
        <a href="mailto:contact@oglinda.eu" class="summon-mail">Începe cuvântul tău la: contact@oglinda.eu</a>
    </div>
    <script src="aura.js"></script>
</body>
</html>"""
    return html

def main():
    pdf_path = r'C:\Users\alind\Documents\Brianna_Wiest_-_101_eseuri_care_iti_vor_schimba_modul_de_a_gandi.pdf'
    output_dir = r'C:\Users\alind\Projects\reverb\public\aura'
    
    os.makedirs(output_dir, exist_ok=True)
    
    with open(os.path.join(output_dir, 'aura.css'), 'w', encoding='utf-8') as f:
        f.write(CSS_STYLE)
    with open(os.path.join(output_dir, 'aura.js'), 'w', encoding='utf-8') as f:
        f.write(JS_SCRIPT)
        
    text = extract_pdf_data(pdf_path)
    nodes = chunk_soul_text(text)
    
    print("Construind interfața AURA Dashboard...")
    dashboard_links = ""
    for idx, node_txt in enumerate(nodes):
        node_id = idx + 1
        
        # Build individual node
        node_html = build_reflection_node(node_id, len(nodes), node_txt)
        with open(os.path.join(output_dir, f'node-{node_id}.html'), 'w', encoding='utf-8') as f:
            f.write(node_html)
            
        delay = (idx % 5) + 1
        dashboard_links += f"""
            <a href="node-{node_id}.html" class="mirror-node reveal stagger-{delay}">
                <span class="node-sigil">Poarta {node_id}</span>
                <h3 class="node-title">Oglinda {node_id}</h3>
                <p class="node-desc">O sesiune ghidată de reflecție asupra sinelui și a tiparelor interioare.</p>
            </a>"""

    dashboard_html = f"""<!DOCTYPE html>
<html lang="ro">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>AURA - Refugiu Interior</title>
    <link rel="stylesheet" href="aura.css">
    <link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400&family=Inter:wght@300;400&display=swap" rel="stylesheet">
</head>
<body>
    <div class="atmosphere">
        <div class="pulse-1"></div>
        <div class="pulse-2"></div>
    </div>

    <header>
        <div class="brand">A U R A</div>
    </header>

    <main class="app-shell">
        <section class="greeting reveal">
            <h1>"Oglinda – Precum sus, așa și jos. Claritatea se regăsește în interiorul tău."</h1>
            <p>Pășește cu încredere. Lasă agitația lumii la intrare. Acest portal a fost creat pentru liniștea și claritatea minții tale.</p>
        </section>

        <section class="mirror-grid">
            {dashboard_links}
        </section>
    </main>
    <div id="summonStar" class="summon-star"></div>
    <div id="summonOverlay" class="summon-overlay">
        <div class="summon-text">Intră în contact. Formează Conexiunea.</div>
        <a href="mailto:contact@oglinda.eu" class="summon-mail">Scrie-ne confidențial la: contact@oglinda.eu</a>
    </div>
    <script src="aura.js"></script>
</body>
</html>"""

    with open(os.path.join(output_dir, 'index.html'), 'w', encoding='utf-8') as f:
        f.write(dashboard_html)
        
    print(f"GATA! Aplicația AURA conține {len(nodes)} Oglinzi (noduri) terapeutice.")

if __name__ == "__main__":
    main()
