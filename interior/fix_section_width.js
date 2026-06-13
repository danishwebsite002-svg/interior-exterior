const fs = require('fs');

const file = 'index.html';
let content = fs.readFileSync(file, 'utf8');

// The section we just added
const oldSectionStart = '<section class="w-[90%] max-w-[90%] mx-auto px-4 md:px-8 py-24 overflow-hidden border-t border-slate-100 bg-[#F8F9FA]">';
const newSectionStart = `<section class="w-full py-24 overflow-hidden border-t border-slate-100 bg-[#F8F9FA]">
        <div class="w-[90%] max-w-[90%] mx-auto px-4 md:px-8">`;

const oldSectionEnd = `        <div class="text-center mt-12" data-aos="fade-up">
            <a href="services.html" class="inline-block border-2 border-primary-dark text-primary-dark rounded-full px-8 py-3 text-sm font-bold hover:bg-primary-dark hover:text-white transition-colors duration-300">View All Services</a>
        </div>
    </section>`;

const newSectionEnd = `        <div class="text-center mt-12" data-aos="fade-up">
            <a href="services.html" class="inline-block border-2 border-primary-dark text-primary-dark rounded-full px-8 py-3 text-sm font-bold hover:bg-primary-dark hover:text-white transition-colors duration-300">View All Services</a>
        </div>
        </div>
    </section>`;

content = content.replace(oldSectionStart, newSectionStart);
content = content.replace(oldSectionEnd, newSectionEnd);

fs.writeFileSync(file, content);
console.log('Fixed services section full width');
