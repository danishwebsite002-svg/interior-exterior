const fs = require('fs');
const path = require('path');

const directory = './';

const newCtaSection = `
    <!-- 11. Parallax CTA Banner -->
    <section class="relative w-full min-h-[500px] md:min-h-[600px] flex items-end bg-fixed bg-cover bg-center mt-10" style="background-image: url('https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=2000&q=80');">
        <!-- Overlay -->
        <div class="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-slate-900/10 mix-blend-multiply"></div>
        <div class="absolute inset-0 bg-black/20"></div>
        
        <div class="relative z-10 w-[90%] max-w-[90%] mx-auto px-4 md:px-8 pb-16 w-full flex flex-col md:flex-row justify-between items-end gap-12" data-aos="fade-up">
            <!-- Text Content -->
            <div class="max-w-4xl">
                <h2 class="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight">
                    Create Beautiful <span class="font-serif italic text-[#D9873E]">Memories</span> Full Of Tranquility, Book Your Villa Now
                </h2>
            </div>
            
            <!-- Circular Button -->
            <a href="contact.html" class="flex-shrink-0 w-32 h-32 md:w-40 md:h-40 bg-[#FDBA74] rounded-full flex items-center justify-center text-primary-dark font-bold hover:bg-black hover:text-white transition-colors duration-500 shadow-2xl group">
                <span class="transform group-hover:scale-110 transition-transform duration-300 text-sm md:text-base whitespace-nowrap">Book Now</span>
            </a>
        </div>
    </section>
`;

fs.readdirSync(directory).forEach(file => {
    if (path.extname(file) === '.html' && file !== 'index.html') {
        let content = fs.readFileSync(file, 'utf8');
        
        // Find the start of the old CTA section without relying on comments
        const startIdx = content.indexOf('<section class="relative bg-primary-dark py-32 mt-10">');
        
        if (startIdx !== -1) {
            const endIdx = content.indexOf('</section>', startIdx);
            
            if (endIdx !== -1) {
                const before = content.substring(0, startIdx);
                const after = content.substring(endIdx + 10);
                
                content = before + newCtaSection + after;
                fs.writeFileSync(file, content);
                console.log('Updated CTA in ' + file);
            }
        }
    }
});
