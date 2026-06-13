const fs = require('fs');
const path = require('path');

const directory = './';

const newCtaSectionCentered = `
    <!-- 11. Parallax CTA Banner -->
    <section class="relative w-full min-h-[500px] md:min-h-[600px] flex items-center justify-center bg-fixed bg-cover bg-center mt-10" style="background-image: url('https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=2000&q=80');">
        <!-- Overlay -->
        <div class="absolute inset-0 bg-slate-900/60 mix-blend-multiply"></div>
        <div class="absolute inset-0 bg-black/30"></div>
        
        <div class="relative z-10 w-[90%] max-w-5xl mx-auto px-4 md:px-8 text-center flex flex-col items-center justify-center gap-10" data-aos="fade-up">
            <!-- Text Content -->
            <div class="max-w-4xl">
                <h2 class="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight">
                    Create Beautiful <span class="font-serif italic text-[#D9873E]">Memories</span> Full Of Tranquility, Book Your Villa Now
                </h2>
            </div>
            
            <!-- Standard Pill Button -->
            <a href="contact.html" class="inline-block bg-[#FDBA74] text-primary-dark rounded-full px-12 py-4 text-base font-bold uppercase tracking-wider hover:bg-white hover:text-black transition-all duration-300 shadow-[0_10px_30px_rgba(0,0,0,0.3)] hover:shadow-[0_10px_40px_rgba(255,255,255,0.2)] transform hover:-translate-y-1">
                Book Your Villa Now
            </a>
        </div>
    </section>
`;

fs.readdirSync(directory).forEach(file => {
    if (path.extname(file) === '.html') {
        let content = fs.readFileSync(file, 'utf8');
        
        const startMarker = '<!-- 11. Parallax CTA Banner -->';
        const startIdx = content.indexOf(startMarker);
        
        if (startIdx !== -1) {
            const endIdx = content.indexOf('</section>', startIdx);
            
            if (endIdx !== -1) {
                const before = content.substring(0, startIdx);
                const after = content.substring(endIdx + 10);
                
                content = before + newCtaSectionCentered + after;
                fs.writeFileSync(file, content);
                console.log('Centered CTA in ' + file);
            }
        }
    }
});
