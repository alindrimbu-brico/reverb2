
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

    // Secure WebCrypto Logic
    const CryptoVault = {
        async deriveKey(password, salt) {
            const enc = new TextEncoder();
            const keyMaterial = await window.crypto.subtle.importKey(
                "raw", enc.encode(password), { name: "PBKDF2" }, false, ["deriveBits", "deriveKey"]
            );
            return window.crypto.subtle.deriveKey(
                { name: "PBKDF2", salt: enc.encode(salt), iterations: 100000, hash: "SHA-256" },
                keyMaterial, { name: "AES-GCM", length: 256 }, false, ["encrypt", "decrypt"]
            );
        },
        async encryptData(text, password, salt) {
            const key = await this.deriveKey(password, salt);
            const iv = window.crypto.getRandomValues(new Uint8Array(12));
            const enc = new TextEncoder();
            const encrypted = await window.crypto.subtle.encrypt({ name: "AES-GCM", iv: iv }, key, enc.encode(text));
            const combined = new Uint8Array(iv.length + encrypted.byteLength);
            combined.set(iv, 0);
            combined.set(new Uint8Array(encrypted), iv.length);
            return btoa(String.fromCharCode.apply(null, combined));
        },
        async decryptData(base64, password, salt) {
            try {
                const bytes = Uint8Array.from(atob(base64), c => c.charCodeAt(0));
                const iv = bytes.slice(0, 12);
                const cipher = bytes.slice(12);
                const key = await this.deriveKey(password, salt);
                const decrypted = await window.crypto.subtle.decrypt({ name: "AES-GCM", iv: iv }, key, cipher);
                const dec = new TextDecoder();
                return dec.decode(decrypted);
            } catch (e) {
                return null;
            }
        }
    };

    // Crypto Crystal Journal Logic
    const journalBtn = document.getElementById('journalBtn');
    const journalContainer = document.getElementById('journalContainer');
    const journalText = document.getElementById('journalText');
    const saveStatus = document.getElementById('saveStatus');
    
    if(journalBtn && journalContainer && journalText && saveStatus) {
        const match = window.location.pathname.match(/node-(\d+)/);
        const nodeId = match ? match[1] : 'index';
        const cacheKey = `aura_crypto_journal_${nodeId}`;
        const salt = `aura_salt_${nodeId}_reverb`;
        let sessionKey = null;

        // Create password overlay
        const authDiv = document.createElement('div');
        authDiv.className = 'journal-auth';
        authDiv.innerHTML = `
            <h4 style="margin-bottom:1rem; font-family:'Cinzel', serif; color:var(--aura-light);">Sigiliu de Memorie</h4>
            <p style="font-size:0.8rem; margin-bottom:1rem; color:var(--text-dim);">Setează sau introdu parola pentru a decripta jurnalul. Textele sunt encriptate AES offline.</p>
            <input type="password" id="journalPass" placeholder="Parolă / Sigiliu" style="padding:10px; border-radius:5px; border:1px solid var(--aura-light); background:transparent; color:white; width:100%; margin-bottom:1rem;" />
            <button id="authBtn" class="journal-btn" style="width:100%; font-size:0.9rem;">Deschide Sigiliul</button>
            <p id="authError" style="color:salmon; font-size:0.8rem; margin-top:10px; display:none;">Criptografie eșuată. Sigiliu incorect.</p>
        `;
        authDiv.style.display = 'none';
        authDiv.style.padding = '2rem';
        authDiv.style.background = 'rgba(0,0,0,0.5)';
        authDiv.style.backdropFilter = 'blur(10px)';
        authDiv.style.borderRadius = '12px';
        authDiv.style.border = '1px solid var(--glass-rim)';
        authDiv.style.maxWidth = '400px';
        authDiv.style.margin = '2rem auto';
        
        journalContainer.parentNode.insertBefore(authDiv, journalContainer);

        journalBtn.addEventListener('click', () => {
            authDiv.style.display = 'block';
            journalBtn.style.display = 'none';
        });

        document.getElementById('authBtn').addEventListener('click', async () => {
            const pass = document.getElementById('journalPass').value;
            if(!pass) return;
            
            const existingVal = localStorage.getItem(cacheKey);
            if(existingVal) {
                // Try decryption
                const dec = await CryptoVault.decryptData(existingVal, pass, salt);
                if(dec !== null) {
                    sessionKey = pass;
                    journalText.value = dec;
                    authDiv.style.display = 'none';
                    journalContainer.style.display = 'block';
                } else {
                    document.getElementById('authError').style.display = 'block';
                }
            } else {
                // First initialization
                sessionKey = pass;
                authDiv.style.display = 'none';
                journalContainer.style.display = 'block';
            }
        });

        let timeout = null;
        journalText.addEventListener('input', () => {
            if(!sessionKey) return;
            saveStatus.innerText = 'Se criptează secvența...';
            clearTimeout(timeout);
            timeout = setTimeout(async () => {
                const enc = await CryptoVault.encryptData(journalText.value, sessionKey, salt);
                localStorage.setItem(cacheKey, enc);
                saveStatus.innerText = 'Lăcătuit în siguranță (AES-GCM).';
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
