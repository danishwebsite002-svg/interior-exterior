const fs = require('fs');
const path = require('path');
const { JSDOM } = require('jsdom');

const targetFile = path.join(__dirname, 'index.html');
const content = fs.readFileSync(targetFile, 'utf8');

const dom = new JSDOM(content);
const document = dom.window.document;

// 1. Update Global CSS
const styleTag = document.querySelector('style');
if (styleTag) {
    styleTag.innerHTML = `
      @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Outfit:wght@300;400;500;600;700;800&family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400;1,600;1,700&family=Caveat:wght@400;500;600;700&display=swap');
      
      body {
        font-family: "Outfit", sans-serif;
        background-color: #FFFFFF;
        color: #1A1A1A;
        overflow-x: hidden;
      }
      
      .font-serif {
        font-family: "Playfair Display", serif !important;
      }
      
      /* Luxury Theme Accent (Warm Gold) */
      .text-accent { color: #D4AF37 !important; }
      .bg-accent { background-color: #D4AF37 !important; }
      .border-accent { border-color: #D4AF37 !important; }
      
      h1, h2, h3, h4, h5, h6 { color: #1A1A1A; }
      h1 span, h2 span, h3 span { color: #D4AF37; }

      /* Buttons */
      .btn-outline {
        border: 1px solid #E5E7EB;
        color: #1A1A1A;
        transition: all 0.5s ease;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        background: transparent;
      }
      .btn-outline:hover {
        border-color: #D4AF37;
        color: #D4AF37;
        background-color: rgba(212, 175, 55, 0.05);
      }
      
      .btn-orange {
        background-color: #D4AF37;
        color: #fff;
        border-radius: 999px;
        padding: 0.875rem 2.5rem;
        display: inline-flex;
        align-items: center;
        font-size: 0.875rem;
        font-weight: 500;
        letter-spacing: 0.05em;
        transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
        border: 1px solid transparent;
      }
      .btn-orange:hover {
        background-color: transparent;
        color: #D4AF37;
        border-color: #D4AF37;
      }

      /* Hover Effects */
      .img-hover-zoom {
        transition: transform 1.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
      }
      .group:hover .img-hover-zoom {
        transform: scale(1.05);
      }
      
      /* Arches */
      .arch-frame {
        border-top-left-radius: 999px;
        border-top-right-radius: 999px;
        overflow: hidden;
      }

      .luxury-shadow {
        box-shadow: 0 30px 60px rgba(0,0,0,0.06);
        border: 1px solid rgba(0,0,0,0.02);
      }
      
      .glass-card {
        background: rgba(255, 255, 255, 0.9);
        backdrop-filter: blur(10px);
        -webkit-backdrop-filter: blur(10px);
        border: 1px solid rgba(255, 255, 255, 1);
      }

      .swiper-pagination-bullet-active {
        background-color: #D4AF37 !important;
      }
      .check-icon { color: #D4AF37; }
    `;
}

// 2. Convert dark sections to white/light
document.querySelectorAll('[class*="bg-[#0F172A]"], [class*="bg-slate-900"], [class*="bg-[#1e293b]"]').forEach(el => {
    el.className = el.className.replace(/bg-\[#0F172A\]/g, 'bg-[#FAFAFA]')
                               .replace(/bg-slate-900/g, 'bg-white')
                               .replace(/bg-\[#1e293b\]/g, 'bg-[#FAFAFA]');
});

// Flip text colors where backgrounds were lightened
document.querySelectorAll('.text-white, .text-gray-300, .text-gray-400').forEach(el => {
    if (!el.closest('.btn-orange') && !el.closest('button') && !el.closest('.bg-accent')) {
        el.className = el.className.replace(/text-white/g, 'text-gray-900')
                                   .replace(/text-gray-300/g, 'text-gray-600')
                                   .replace(/text-gray-400/g, 'text-gray-500');
    }
});

// Replace #d9873e manually
document.querySelectorAll('[class*="bg-[#d9873e]"], [class*="text-[#d9873e]"], [class*="border-[#d9873e]"]').forEach(el => {
    el.className = el.className.replace(/\[#d9873e\]/gi, '[#D4AF37]');
});

// 3. Rewrite Hero Section Completely (Split Screen / Arched on White)
const sections = document.querySelectorAll('section');
if (sections.length > 0) {
    const heroSection = sections[0];
    heroSection.outerHTML = `
    <!-- 2. Distinct White Luxury Hero Section -->
    <section class="relative w-full min-h-[90vh] flex flex-col lg:flex-row items-center bg-white overflow-hidden pt-20">
      
      <!-- Left Text -->
      <div class="w-full lg:w-[45%] px-6 lg:pl-20 py-16 lg:py-0 relative z-10 flex flex-col justify-center" data-aos="fade-right" data-aos-duration="1500">
        <div class="flex items-center gap-4 mb-8">
          <span class="w-16 h-[1px] bg-accent"></span>
          <span class="uppercase tracking-[0.3em] text-accent text-xs font-semibold">Interior Design</span>
        </div>
        <h1 class="text-6xl md:text-7xl lg:text-8xl font-serif text-[#1A1A1A] leading-[1.1] mb-8">
          Inner <br/> <span class="italic font-light text-accent">Elegance</span>
        </h1>
        <p class="text-gray-500 text-lg md:text-xl max-w-md mb-12 font-light leading-relaxed">
          Crafting breathtaking, light-filled interiors that redefine high-end modern living.
        </p>
        <div class="flex items-center gap-6">
          <a href="gallery.html" class="px-8 py-4 bg-accent text-white rounded-none border border-accent hover:bg-transparent hover:text-accent transition-all duration-500 tracking-widest uppercase text-xs font-semibold">Explore Portfolio</a>
        </div>
      </div>

      <!-- Right Arched Image -->
      <div class="w-full lg:w-[55%] h-[60vh] lg:h-[90vh] relative p-4 lg:p-10 flex items-center justify-center" data-aos="fade-left" data-aos-duration="1500" data-aos-delay="300">
        <div class="w-[90%] h-[90%] arch-frame relative group luxury-shadow border border-gray-100">
          <img src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=2000&auto=format&fit=crop" alt="Pristine Interior" class="w-full h-full object-cover img-hover-zoom" />
        </div>
      </div>
    </section>
    `;
}

// 4. Rewrite "About Us" Section with Double Overlap
if (sections.length > 1) {
    const aboutSection = sections[1];
    aboutSection.outerHTML = `
    <!-- ZIG 1: Distinct About Us (Double Overlap) -->
    <section class="py-32 bg-[#FAFAFA] relative overflow-hidden">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          
          <!-- Image Left with Double Overlap -->
          <div class="relative group h-[700px]" data-aos="fade-up" data-aos-duration="1500">
            <!-- Tall Back Image -->
            <div class="absolute top-0 left-0 w-2/3 h-[600px] arch-frame luxury-shadow border border-white">
              <img src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1500&auto=format&fit=crop" alt="Interior Detail" class="w-full h-full object-cover img-hover-zoom">
            </div>
            <!-- Wide Front Image -->
            <div class="absolute bottom-0 right-0 w-[70%] h-[400px] luxury-shadow border-4 border-white z-10 overflow-hidden" data-aos="fade-left" data-aos-delay="400">
              <img src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=1500&auto=format&fit=crop" alt="Living Room" class="w-full h-full object-cover img-hover-zoom">
            </div>
            
            <!-- Glass Card -->
            <div class="absolute top-20 right-0 glass-card p-6 w-48 shadow-xl border-l-2 border-l-accent z-20" data-aos="zoom-in" data-aos-delay="600">
              <p class="text-xs tracking-widest uppercase text-gray-500 font-semibold mb-1">Established</p>
              <h3 class="text-3xl font-serif text-accent">15+ Yrs</h3>
            </div>
          </div>

          <!-- Text Right -->
          <div data-aos="fade-up" data-aos-duration="1200" data-aos-delay="200" class="pl-0 lg:pl-10">
            <div class="flex items-center gap-4 mb-6">
              <span class="w-12 h-[1px] bg-accent"></span>
              <span class="uppercase tracking-[0.2em] text-accent text-xs font-semibold">About Us</span>
            </div>
            <h2 class="text-4xl md:text-5xl font-serif text-[#1A1A1A] mb-8 leading-tight">
              Curating spaces of <br/> <span class="italic font-light text-gray-500">timeless comfort.</span>
            </h2>
            <p class="text-gray-600 mb-6 font-light leading-relaxed text-lg">
              We specialize in creating pristine, breathable interiors. By utilizing a sophisticated neutral palette illuminated by warm, natural light and subtle gold accents, we bring a sense of calm and opulence to every room.
            </p>
            <p class="text-gray-500 mb-10 font-light leading-relaxed">
              From bespoke furnishing curation to meticulous spatial planning, we ensure your home is a sanctuary tailored perfectly to your lifestyle.
            </p>
            
            <a href="about.html" class="btn-outline px-8 py-3 uppercase tracking-widest text-xs font-semibold">Our Philosophy</a>
          </div>

        </div>
      </div>
    </section>
    `;
}

// 5. Enhance AOS durations globally
document.querySelectorAll('[data-aos-duration]').forEach(el => {
    if(!el.hasAttribute('data-aos-duration')) {
        el.setAttribute('data-aos-duration', '1500');
    }
});

fs.writeFileSync(targetFile, dom.serialize());
console.log('Successfully crafted distinct White Luxury structure in interior/index.html');
