
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
});
