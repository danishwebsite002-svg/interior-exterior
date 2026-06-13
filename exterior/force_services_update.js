const fs = require('fs');
const path = require('path');

const exteriorDir = path.join('c:', 'Users', 'MSI 1', 'Downloads', 'ExteriorInterior', 'exterior');

const services = [
    { name: 'Fixed & Foldable Systems', slug: 'fixed-and-foldable', desc: 'Versatile glass systems for seamless indoor-outdoor transitions.', img: '1600566753190-1732928043af' },
    { name: 'Aluminium Fences', slug: 'aluminium-fences', desc: 'Durable, modern boundary solutions combining security and aesthetics.', img: '1584622650111-993a426fbf0a' },
    { name: 'Doors & Windows', slug: 'doors-and-windows', desc: 'High-performance architectural glazing for luxury properties.', img: '1600607686527-6fb886090705' },
    { name: 'Sliding Doors', slug: 'sliding-doors', desc: 'Minimalist sliding systems maximizing natural light and views.', img: '1513694203232-719a280e022f' },
    { name: 'Sliding Folding Doors', slug: 'sliding-folding-doors', desc: 'Bifold mechanisms to completely open up your living spaces.', img: '1600585154340-be6161a56a0c' },
    { name: 'Curtain Walls', slug: 'curtain-walls', desc: 'Structural glass facades engineered for iconic skyscrapers.', img: '1486406146926-c627a92ad1ab' },
    { name: 'Skylights', slug: 'skylight', desc: 'Custom overhead glazing bringing natural illumination into deep floor plans.', img: '1507089947368-19c1da9775ae' },
    { name: 'Substation Louvers', slug: 'substation-louvers', desc: 'Heavy-duty architectural ventilation systems for industrial applications.', img: '1513328224021-9659bfa5f69a' },
    { name: 'Aluminium Decorative Fins', slug: 'aluminium-decorative-fins', desc: 'Vertical shading and aesthetic elements for modern elevations.', img: '1518173946091-a8330452a5f7' },
    { name: 'Aluminium Decorative Louvers', slug: 'aluminium-decorative-louvers', desc: 'Horizontal slat systems for privacy, shading, and facade texture.', img: '1497384401174-8b6a37fc1e2c' },
    { name: 'Mashrabiya', slug: 'mashrabiya', desc: 'Traditional Arabic geometric screens fabricated in modern aluminium.', img: '1560945842-88fdfb2390a0' },
    { name: 'Pergolas', slug: 'pergolas', desc: 'Luxury shaded structures for outdoor entertaining and landscaping.', img: '1595843468924-a21235b377b2' },
    { name: 'Private Majlis', slug: 'private-majlis', desc: 'Exclusive external annexes designed for traditional hospitality.', img: '1618221195710-dd6b41faaea6' },
    { name: 'Facades', slug: 'facade', desc: 'Complete exterior building envelope engineering and cladding.', img: '1600596542815-ffad4c1539a9' }
];

// Rebuild services.html 
const servicesHtmlPath = path.join(exteriorDir, 'services.html');
if (fs.existsSync(servicesHtmlPath)) {
    let content = fs.readFileSync(servicesHtmlPath, 'utf8');
    
    let gridHtml = '<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">\n';
    services.forEach((srv, i) => {
        const delay = (i % 3) * 100;
        gridHtml += `
        <!-- Service Card -->
        <a href="${srv.slug}.html" class="group block" data-aos="fade-up" data-aos-delay="${delay}">
            <div class="relative h-[450px] rounded-[2rem] overflow-hidden mb-6 shadow-xl">
                <div class="absolute inset-0 bg-cover bg-center img-hover-zoom" style="background-image: url('https://images.unsplash.com/photo-${srv.img}?auto=format&fit=crop&w=800&q=80');"></div>
                <div class="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/30 to-transparent group-hover:from-slate-900 transition-colors duration-500"></div>
                <div class="absolute bottom-0 left-0 w-full p-8 md:p-10 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <h3 class="text-2xl font-bold text-white mb-3 group-hover:text-[#D9873E] transition-colors">${srv.name}</h3>
                    <p class="text-slate-300 text-sm font-light leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500">${srv.desc}</p>
                </div>
            </div>
        </a>
        `;
    });
    gridHtml += '</div>';

    const startMarker = '<!-- NEW CONTENT EXPANSION: ALTERNATING ZIG-ZAG LAYOUT -->';
    const endMarker = '<!-- 3. Testimonials / Success Metrics -->';
    
    const startIdx = content.indexOf(startMarker);
    const endIdx = content.indexOf(endMarker);
    
    if (startIdx !== -1 && endIdx !== -1) {
        content = content.substring(0, startIdx) + 
                  '<!-- Core Services Grid -->\n    <section class="w-[90%] max-w-7xl mx-auto px-4 md:px-8 py-24 border-t border-slate-100">\n        ' + 
                  gridHtml + 
                  '\n    </section>\n\n    ' + 
                  content.substring(endIdx);
        fs.writeFileSync(servicesHtmlPath, content);
        console.log('Successfully rebuilt services.html with 14 item grid.');
    }
}

// Rebuild index.html services slider
const indexHtmlPath = path.join(exteriorDir, 'index.html');
if (fs.existsSync(indexHtmlPath)) {
    let content = fs.readFileSync(indexHtmlPath, 'utf8');
    
    let swiperHtml = '';
    services.forEach(srv => {
        swiperHtml += `
            <div class="swiper-slide">
                <a href="${srv.slug}.html" class="group block relative h-[500px] rounded-3xl overflow-hidden shadow-xl">
                    <div class="absolute inset-0 bg-cover bg-center img-hover-zoom" style="background-image: url('https://images.unsplash.com/photo-${srv.img}?auto=format&fit=crop&w=800&q=80');"></div>
                    <div class="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent"></div>
                    <div class="absolute inset-0 p-8 md:p-10 flex flex-col justify-end">
                        <div class="flex items-center gap-3 mb-3 transform -translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500">
                            <span class="w-8 h-[1px] bg-[#D9873E]"></span>
                            <span class="text-[#D9873E] text-xs font-bold uppercase tracking-widest">Explore</span>
                        </div>
                        <h3 class="text-3xl font-bold text-white mb-2 transform group-hover:-translate-y-2 transition-transform duration-500">${srv.name}</h3>
                        <p class="text-slate-300 text-sm font-light max-w-sm h-0 opacity-0 overflow-hidden group-hover:h-auto group-hover:opacity-100 transition-all duration-500 group-hover:mt-3">${srv.desc}</p>
                    </div>
                </a>
            </div>
        `;
    });

    const startSearch = '<!-- 3. Services Section -->';
    const sectionStart = content.indexOf(startSearch);
    
    if (sectionStart !== -1) {
        const wrapStart = content.indexOf('<div class="swiper-wrapper">', sectionStart);
        const wrapEnd = content.indexOf('</div>\n        </div>\n\n        <!-- Custom Navigation -->', wrapStart);
        
        if (wrapStart !== -1 && wrapEnd !== -1) {
            content = content.substring(0, wrapStart + '<div class="swiper-wrapper">'.length) + '\n' + swiperHtml + '          ' + content.substring(wrapEnd);
            fs.writeFileSync(indexHtmlPath, content);
            console.log('Successfully updated index.html services swiper.');
        }
    }
}
