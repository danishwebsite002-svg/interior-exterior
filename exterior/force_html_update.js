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

// 1. REBUILD SERVICES.HTML
const servicesHtmlPath = path.join(exteriorDir, 'services.html');
let sHtml = fs.readFileSync(servicesHtmlPath, 'utf8');

let gridHtml = `
        <!-- Main Services Grid -->
        <section class="w-[90%] max-w-[90%] mx-auto px-4 md:px-8 py-20 overflow-hidden">
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
`;
services.forEach((srv, i) => {
    const delay = (i % 4) * 100;
    gridHtml += `
                <!-- Service Card -->
                <a href="${srv.slug}.html" class="group block relative h-[400px] rounded-2xl overflow-hidden shadow-xl" data-aos="fade-up" data-aos-delay="${delay}">
                    <div class="absolute inset-0 bg-cover bg-center img-hover-zoom" style="background-image: url('https://images.unsplash.com/photo-${srv.img}?auto=format&fit=crop&w=800&q=80');"></div>
                    <div class="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent group-hover:from-slate-900/95 transition-colors duration-500"></div>
                    <div class="absolute bottom-0 left-0 w-full p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                        <div class="flex items-center gap-2 mb-2 transform -translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500">
                            <span class="w-6 h-[2px] bg-accent"></span>
                            <span class="text-accent text-[10px] font-bold uppercase tracking-widest">Explore</span>
                        </div>
                        <h3 class="text-xl font-bold text-white mb-2 group-hover:text-accent transition-colors">${srv.name}</h3>
                        <p class="text-slate-300 text-xs font-light leading-relaxed h-0 opacity-0 overflow-hidden group-hover:h-auto group-hover:opacity-100 group-hover:mt-2 transition-all duration-500">${srv.desc}</p>
                    </div>
                </a>
    `;
});
gridHtml += `
            </div>
        </section>
`;

const sStartIdx = sHtml.indexOf('<!-- Service Block 1 -->');
const sEndIdx = sHtml.indexOf('</main>');
if (sStartIdx !== -1 && sEndIdx !== -1) {
    sHtml = sHtml.substring(0, sStartIdx) + gridHtml + '\n    ' + sHtml.substring(sEndIdx);
    fs.writeFileSync(servicesHtmlPath, sHtml);
    console.log("Successfully rebuilt services.html grid");
}

// 2. REBUILD INDEX.HTML SWIPER
const indexHtmlPath = path.join(exteriorDir, 'index.html');
let idxHtml = fs.readFileSync(indexHtmlPath, 'utf8');

let swiperHtml = `
        <!-- Swiper Slider -->
        <div class="swiper servicesSwiper !overflow-visible relative pb-16" data-aos="fade-up" data-aos-delay="100">
          <div class="swiper-wrapper">
`;
services.forEach(srv => {
    swiperHtml += `
            <div class="swiper-slide">
              <a href="${srv.slug}.html" class="group block cursor-pointer">
                <div class="w-full h-64 md:h-72 rounded-2xl overflow-hidden mb-6 relative shadow-lg">
                  <div class="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" style="background-image: url('https://images.unsplash.com/photo-${srv.img}?auto=format&fit=crop&w=800&q=80');"></div>
                  <div class="absolute inset-0 bg-slate-900/20 group-hover:bg-transparent transition-colors duration-500"></div>
                </div>
                <h3 class="text-xl font-bold text-primary-dark mb-2 group-hover:text-accent transition-colors">${srv.name}</h3>
                <p class="text-slate-500 text-sm leading-relaxed pr-4">${srv.desc}</p>
              </a>
            </div>
    `;
});
swiperHtml += `
          </div>
          <!-- Custom Scrollbar under slider -->
          <div class="swiper-scrollbar mt-12 bg-slate-200 !absolute !bottom-0 !left-0 !w-full !h-1 rounded-full overflow-hidden"></div>
        </div>
`;

const idxStartStr = '<!-- Swiper Slider -->';
const idxEndStr = '<!-- ZAG 2: What We Do (Text Left, Image Right) -->';
const iStartIdx = idxHtml.indexOf(idxStartStr);
const iEndIdx = idxHtml.indexOf(idxEndStr);

if (iStartIdx !== -1 && iEndIdx !== -1) {
    idxHtml = idxHtml.substring(0, iStartIdx) + swiperHtml + '      </div>\n    </section>\n\n    ' + idxHtml.substring(iEndIdx);
    fs.writeFileSync(indexHtmlPath, idxHtml);
    console.log("Successfully rebuilt index.html services swiper");
}
