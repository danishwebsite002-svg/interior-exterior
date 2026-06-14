const fs = require('fs');
const path = require('path');
const { JSDOM } = require('jsdom');

const targetFile = path.join(__dirname, 'index.html');
const content = fs.readFileSync(targetFile, 'utf8');

const dom = new JSDOM(content);
const document = dom.window.document;

// 1. Update Global CSS for Dark Elegance
const styleTag = document.querySelector('style');
if (styleTag) {
    styleTag.innerHTML = `
      @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Outfit:wght@300;400;500;600;700;800&family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400;1,600;1,700&family=Caveat:wght@400;500;600;700&display=swap');
      
      body {
        font-family: "Outfit", sans-serif;
        background-color: #151515;
        color: #F2F2F2;
        overflow-x: hidden;
      }
      
      .font-serif {
        font-family: "Playfair Display", serif !important;
      }
      
      /* Luxury Dark Theme Accent */
      .text-accent { color: #D4AF37 !important; }
      .bg-accent { background-color: #D4AF37 !important; }
      .border-accent { border-color: #D4AF37 !important; }
      
      h1, h2, h3, h4, h5, h6 { color: #FFFFFF; }
      h1 span, h2 span, h3 span { color: #D4AF37; }

      /* Buttons */
      .btn-outline {
        border: 1px solid #333333;
        color: #F2F2F2;
        transition: all 0.5s ease;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        background: transparent;
      }
      .btn-outline:hover {
        border-color: #D4AF37;
        color: #151515;
        background-color: #D4AF37;
      }
      
      .btn-orange {
        background-color: transparent;
        color: #D4AF37;
        border-radius: 0;
        padding: 0.875rem 2.5rem;
        display: inline-flex;
        align-items: center;
        font-size: 0.875rem;
        font-weight: 500;
        letter-spacing: 0.05em;
        transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
        border: 1px solid #D4AF37;
      }
      .btn-orange:hover {
        background-color: #D4AF37;
        color: #151515;
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
      .arch-frame-inverted {
        border-bottom-left-radius: 999px;
        border-bottom-right-radius: 999px;
        overflow: hidden;
      }

      .luxury-shadow {
        box-shadow: 0 20px 50px rgba(0,0,0,0.5);
      }
      
      .glass-card {
        background: rgba(20, 20, 20, 0.8);
        backdrop-filter: blur(12px);
        -webkit-backdrop-filter: blur(12px);
        border: 1px solid rgba(255, 255, 255, 0.05);
      }

      .swiper-pagination-bullet-active {
        background-color: #D4AF37 !important;
      }
      .check-icon { color: #D4AF37; }
    `;
}

// 2. Convert white/light backgrounds to dark, and text colors
document.querySelectorAll('[class*="bg-white"], [class*="bg-[#F8F9FA]"], [class*="bg-slate-100"]').forEach(el => {
    el.className = el.className.replace(/bg-white/g, 'bg-[#151515]')
                               .replace(/bg-\[#F8F9FA\]/g, 'bg-[#1A1A1A]')
                               .replace(/bg-slate-100/g, 'bg-[#1A1A1A]');
});

// Flip text colors
document.querySelectorAll('.text-gray-900, .text-gray-800, .text-gray-600, [class*="text-[#1A1A1A]"]').forEach(el => {
    el.className = el.className.replace(/text-gray-900/g, 'text-white')
                               .replace(/text-gray-800/g, 'text-gray-200')
                               .replace(/text-gray-600/g, 'text-gray-400')
                               .replace(/text-\[#1A1A1A\]/g, 'text-white');
});

// Remove #d9873e manually
document.querySelectorAll('[class*="bg-[#d9873e]"], [class*="text-[#d9873e]"], [class*="border-[#d9873e]"]').forEach(el => {
    el.className = el.className.replace(/\[#d9873e\]/gi, '[#D4AF37]');
});

// 3. Rewrite Hero Section Completely (Split Screen / Arched)
const sections = document.querySelectorAll('section');
if (sections.length > 0) {
    const heroSection = sections[0];
    heroSection.outerHTML = `
    <!-- 2. Dark Luxury Hero Section -->
    <section class="relative w-full min-h-[90vh] flex flex-col lg:flex-row items-center bg-[#151515] overflow-hidden pt-20">
      
      <!-- Left Text -->
      <div class="w-full lg:w-1/2 px-6 lg:px-20 py-16 lg:py-0 relative z-10 flex flex-col justify-center" data-aos="fade-right" data-aos-duration="1500">
        <div class="flex items-center gap-4 mb-8">
          <span class="w-16 h-[1px] bg-accent"></span>
          <span class="uppercase tracking-[0.3em] text-accent text-xs font-semibold">Intimate Spaces</span>
        </div>
        <h1 class="text-5xl md:text-7xl font-serif text-white leading-tight mb-8">
          The Art of <br/> <span class="italic font-light text-accent">Ambiance</span>
        </h1>
        <p class="text-gray-400 text-lg md:text-xl max-w-lg mb-12 font-light leading-relaxed">
          Crafting moody, luxurious interiors that evoke emotion and redefine high-end living in the UAE.
        </p>
        <div class="flex items-center gap-6">
          <a href="gallery.html" class="px-8 py-4 bg-accent text-[#151515] rounded-none border border-accent hover:bg-transparent hover:text-accent transition-all duration-500 tracking-widest uppercase text-xs font-semibold">Explore Portfolio</a>
        </div>
      </div>

      <!-- Right Arched Image -->
      <div class="w-full lg:w-1/2 h-[60vh] lg:h-[90vh] relative p-4 lg:p-10" data-aos="fade-left" data-aos-duration="1500" data-aos-delay="300">
        <div class="w-full h-full arch-frame relative group luxury-shadow">
          <img src="https://images.unsplash.com/photo-1600210491369-e753d80a41f3?q=80&w=2000&auto=format&fit=crop" alt="Moody Luxury Interior" class="w-full h-full object-cover img-hover-zoom" />
          <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#151515]/60"></div>
        </div>
      </div>
    </section>
    `;
}

// 4. Rewrite "About Us" Section with an inverted arch
if (sections.length > 1) {
    const aboutSection = sections[1];
    aboutSection.outerHTML = `
    <!-- ZIG 1: Moody About Us -->
    <section class="py-32 bg-[#1A1A1A] relative overflow-hidden">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          
          <!-- Text Left -->
          <div data-aos="fade-up" data-aos-duration="1200" class="order-2 lg:order-1 pr-0 lg:pr-10">
            <h2 class="text-4xl md:text-5xl font-serif text-white mb-8 leading-tight">
              Shadows, light, and <br/> <span class="italic font-light text-accent">sublime textures.</span>
            </h2>
            <p class="text-gray-400 mb-6 font-light leading-relaxed text-lg">
              We believe interior design is about controlling mood. By utilizing dark, rich tones and illuminating them with warm, focused lighting and brass accents, we create unparalleled intimacy.
            </p>
            <p class="text-gray-500 mb-10 font-light leading-relaxed">
              Every room is sculpted as a retreat, shielding you from the brightness of the outside world and enveloping you in absolute luxury.
            </p>
            
            <a href="about.html" class="btn-outline px-8 py-3 uppercase tracking-widest text-xs font-semibold rounded-full border-accent text-accent">Our Philosophy</a>
          </div>

          <!-- Image Right with Arch -->
          <div class="relative group order-1 lg:order-2" data-aos="fade-up" data-aos-duration="1500" data-aos-delay="200">
            <div class="relative h-[650px] w-[85%] ml-auto arch-frame-inverted luxury-shadow">
              <img src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000&auto=format&fit=crop" alt="Dark Interior" class="w-full h-full object-cover img-hover-zoom">
            </div>
            <!-- Floating gold line -->
            <div class="absolute top-20 right-0 w-32 h-[1px] bg-accent"></div>
            <div class="absolute bottom-20 left-10 glass-card p-6 w-56 border-l-2 border-l-accent">
              <p class="text-sm tracking-widest uppercase text-gray-300">Curated Materials</p>
            </div>
          </div>

        </div>
      </div>
    </section>
    `;
}

// Ensure header is dark instead of white/90
const header = document.querySelector('header');
if (header) {
    header.className = header.className.replace(/bg-white\/90/g, 'bg-[#151515]/90').replace(/border-slate-100/g, 'border-[#333]');
}

// 5. Enhance AOS durations globally
document.querySelectorAll('[data-aos-duration]').forEach(el => {
    el.setAttribute('data-aos-duration', '1500');
});

fs.writeFileSync(targetFile, dom.serialize());
console.log('Successfully crafted Dark Elegance structure in interior/index.html');
