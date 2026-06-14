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
        background-color: #FAFAFA;
        color: #1A1A1A;
        overflow-x: hidden;
      }
      
      .font-serif {
        font-family: "Playfair Display", serif !important;
      }
      
      /* Luxury Theme Accent */
      .text-accent { color: #C5A059 !important; }
      .bg-accent { background-color: #C5A059 !important; }
      .border-accent { border-color: #C5A059 !important; }
      
      h1, h2, h3, h4, h5, h6 { color: #1A1A1A; }
      h1 span, h2 span, h3 span { color: #C5A059; }

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
        border-color: #C5A059;
        color: #C5A059;
        background-color: rgba(197, 160, 89, 0.05);
      }
      
      .btn-orange {
        background-color: #C5A059;
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
        color: #C5A059;
        border-color: #C5A059;
      }

      /* Hover Effects */
      .img-hover-zoom {
        transition: transform 1.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
      }
      .group:hover .img-hover-zoom {
        transform: scale(1.08);
      }
      
      .luxury-shadow {
        box-shadow: 0 20px 40px rgba(0,0,0,0.04);
        border: 1px solid rgba(0,0,0,0.02);
      }
      
      .glass-card {
        background: rgba(255, 255, 255, 0.9);
        backdrop-filter: blur(10px);
        -webkit-backdrop-filter: blur(10px);
        border: 1px solid rgba(255, 255, 255, 1);
        box-shadow: 0 30px 60px rgba(0,0,0,0.05);
      }

      .swiper-pagination-bullet-active {
        background-color: #C5A059 !important;
      }
      .check-icon { color: #C5A059; }
      
      /* Subtle Background Shapes */
      .bg-shape-gold {
        position: absolute;
        border-radius: 50%;
        background: radial-gradient(circle, rgba(197,160,89,0.08) 0%, rgba(255,255,255,0) 70%);
        pointer-events: none;
        z-index: 0;
      }
    `;
}

// 2. Safely replace dark sections with white/light ones across the board
document.querySelectorAll('[class*="bg-[#0F172A]"], [class*="bg-slate-900"], [class*="bg-[#1e293b]"]').forEach(el => {
    el.className = el.className.replace(/bg-\[#0F172A\]/g, 'bg-[#FAFAFA]')
                               .replace(/bg-slate-900/g, 'bg-[#F9F9F9]')
                               .replace(/bg-\[#1e293b\]/g, 'bg-white');
});

// Adjust text colors in lightened sections to maintain contrast
document.querySelectorAll('.text-white, .text-gray-300, .text-gray-400').forEach(el => {
    if (!el.closest('.btn-orange') && !el.closest('button')) {
        el.className = el.className.replace(/text-white/g, 'text-gray-900')
                                   .replace(/text-gray-300/g, 'text-gray-600')
                                   .replace(/text-gray-400/g, 'text-gray-500');
    }
});

// Remove #d9873e manually
document.querySelectorAll('[class*="bg-[#d9873e]"], [class*="text-[#d9873e]"], [class*="border-[#d9873e]"]').forEach(el => {
    el.className = el.className.replace(/\[#d9873e\]/gi, '[#C5A059]');
});

// 3. Rewrite Hero Section Completely
// Find the hero section - usually the first <section> or slider
const sections = document.querySelectorAll('section');
if (sections.length > 0) {
    const heroSection = sections[0];
    heroSection.outerHTML = `
    <!-- 2. Luxury Hero Section -->
    <section class="relative w-full h-[90vh] flex items-center justify-center bg-white overflow-hidden">
      <!-- Background architectural image with soft light overlay -->
      <div class="absolute inset-0 z-0 group">
        <img src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=2000&auto=format&fit=crop" alt="Luxury Interior Design" class="w-full h-full object-cover opacity-60 img-hover-zoom" />
        <div class="absolute inset-0 bg-gradient-to-t from-white via-white/70 to-white/30"></div>
        <div class="absolute inset-0 bg-white/40 backdrop-blur-[2px]"></div>
      </div>
      
      <div class="relative z-10 text-center max-w-5xl mx-auto px-6" data-aos="fade-up" data-aos-duration="1500">
        <h4 class="text-accent uppercase tracking-[0.4em] text-xs md:text-sm font-semibold mb-6">Designing Inner Elegance</h4>
        <h1 class="text-6xl md:text-8xl font-serif text-[#1A1A1A] leading-[1.1] mb-8">
          Interior <br/> <span class="italic font-light text-accent">Mastery</span>
        </h1>
        <p class="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto mb-10 font-light leading-relaxed">
          We craft pristine, modern interiors that elevate the standard of luxury living in Dubai and Abu Dhabi.
        </p>
        <div class="flex flex-col sm:flex-row items-center justify-center gap-6">
          <a href="gallery.html" class="px-10 py-4 bg-[#1A1A1A] text-white rounded-none border border-[#1A1A1A] hover:bg-transparent hover:text-[#1A1A1A] transition-all duration-500 tracking-widest uppercase text-xs font-semibold">Discover Work</a>
          <a href="services.html" class="px-10 py-4 bg-transparent text-[#1A1A1A] rounded-none border border-gray-300 hover:border-accent hover:text-accent transition-all duration-500 tracking-widest uppercase text-xs font-semibold">Our Services</a>
        </div>
      </div>
    </section>
    `;
}

// 4. Rewrite "About Us" Section
if (sections.length > 1) {
    const aboutSection = sections[1];
    aboutSection.outerHTML = `
    <!-- ZIG 1: Luxury About Us -->
    <section class="py-32 bg-white relative overflow-hidden">
      <div class="bg-shape-gold w-[600px] h-[600px] -top-32 -left-32"></div>
      
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          
          <!-- Image Left with offset Frame -->
          <div class="relative group" data-aos="fade-right" data-aos-duration="1200">
            <div class="absolute -inset-4 border border-[#C5A059]/30 transform translate-x-4 translate-y-4 transition-transform duration-700 group-hover:translate-x-6 group-hover:translate-y-6"></div>
            <div class="relative h-[600px] w-full overflow-hidden luxury-shadow">
              <img src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000&auto=format&fit=crop" alt="Premium Interior Design" class="w-full h-full object-cover img-hover-zoom">
            </div>
            <!-- Floating glass card -->
            <div class="absolute -bottom-10 -right-10 glass-card p-8 w-64" data-aos="fade-up" data-aos-delay="300">
              <h3 class="text-5xl font-serif text-accent mb-2">15+</h3>
              <p class="text-sm tracking-widest uppercase text-gray-500">Years of Luxury Experience</p>
            </div>
          </div>

          <!-- Text Right -->
          <div data-aos="fade-left" data-aos-duration="1200" class="pl-0 lg:pl-10">
            <div class="flex items-center gap-4 mb-6">
              <span class="w-12 h-[1px] bg-accent"></span>
              <span class="uppercase tracking-[0.2em] text-accent text-xs font-semibold">About Us</span>
            </div>
            <h2 class="text-4xl md:text-5xl font-serif text-[#1A1A1A] mb-8 leading-tight">
              Designing the future of <br/> <span class="italic font-light">interior living.</span>
            </h2>
            <p class="text-gray-600 mb-6 font-light leading-relaxed text-lg">
              Our vision is to transcend traditional interior design. By blending minimalist white aesthetics with opulent gold accents, we create living spaces that are both timeless and breathtakingly modern.
            </p>
            <p class="text-gray-500 mb-10 font-light leading-relaxed">
              Every project is a masterpiece of spatial planning and bespoke furnishing, tailored exclusively for the elite interiors of Dubai and Abu Dhabi.
            </p>
            
            <ul class="space-y-4 mb-10">
              <li class="flex items-center gap-4">
                <i class="fas fa-check text-accent"></i>
                <span class="text-gray-700 font-light">Bespoke Interior Furnishings</span>
              </li>
              <li class="flex items-center gap-4">
                <i class="fas fa-check text-accent"></i>
                <span class="text-gray-700 font-light">Premium Material Sourcing</span>
              </li>
              <li class="flex items-center gap-4">
                <i class="fas fa-check text-accent"></i>
                <span class="text-gray-700 font-light">Flawless Execution & Finish</span>
              </li>
            </ul>

            <a href="about.html" class="btn-outline px-8 py-3 uppercase tracking-widest text-xs font-semibold">Read Our Story</a>
          </div>

        </div>
      </div>
    </section>
    `;
}

// 5. Enhance AOS durations globally
document.querySelectorAll('[data-aos-duration]').forEach(el => {
    el.setAttribute('data-aos-duration', '1500');
});

fs.writeFileSync(targetFile, dom.serialize());
console.log('Successfully crafted luxury structure in interior/index.html');
