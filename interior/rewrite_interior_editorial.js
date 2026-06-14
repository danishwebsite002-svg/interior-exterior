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
        font-family: "Inter", sans-serif;
        background-color: #FFFFFF;
        color: #2A2A2A;
        overflow-x: hidden;
      }
      
      .font-serif {
        font-family: "Playfair Display", serif !important;
      }
      
      /* Editorial Theme Accent (Muted Bronze / Mocha) */
      .text-accent { color: #A39171 !important; }
      .bg-accent { background-color: #A39171 !important; }
      .border-accent { border-color: #A39171 !important; }
      
      h1, h2, h3, h4, h5, h6 { color: #2A2A2A; font-family: "Inter", sans-serif; }
      h1 span, h2 span, h3 span { color: #A39171; }

      /* Editorial Buttons */
      .btn-outline {
        border: 1px solid #E5E7EB;
        color: #2A2A2A;
        transition: all 0.5s ease;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        background: transparent;
        border-radius: 0;
        letter-spacing: 0.1em;
      }
      .btn-outline:hover {
        border-color: #2A2A2A;
        color: #FFFFFF;
        background-color: #2A2A2A;
      }
      
      .btn-orange {
        background-color: #2A2A2A;
        color: #fff;
        border-radius: 0;
        padding: 0.875rem 2.5rem;
        display: inline-flex;
        align-items: center;
        font-size: 0.75rem;
        font-weight: 500;
        letter-spacing: 0.2em;
        text-transform: uppercase;
        transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
        border: 1px solid transparent;
      }
      .btn-orange:hover {
        background-color: transparent;
        color: #2A2A2A;
        border-color: #2A2A2A;
      }

      /* Hover Effects */
      .img-hover-zoom {
        transition: transform 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94);
      }
      .group:hover .img-hover-zoom {
        transform: scale(1.05);
      }

      /* Marquee Animation */
      .marquee-container {
        width: 100vw;
        overflow: hidden;
        white-space: nowrap;
        background: #F5F3F0;
        padding: 2rem 0;
        border-top: 1px solid #E5E7EB;
        border-bottom: 1px solid #E5E7EB;
      }
      .marquee-content {
        display: inline-block;
        animation: marquee 30s linear infinite;
        font-family: 'Playfair Display', serif;
        font-size: 4rem;
        font-style: italic;
        color: #A39171;
      }
      @keyframes marquee {
        0% { transform: translateX(0); }
        100% { transform: translateX(-50%); }
      }

      .swiper-pagination-bullet-active {
        background-color: #A39171 !important;
      }
      .check-icon { color: #A39171; }
    `;
}

// 2. Convert dark sections to white/linen
document.querySelectorAll('[class*="bg-[#0F172A]"], [class*="bg-slate-900"], [class*="bg-[#1e293b]"]').forEach(el => {
    el.className = el.className.replace(/bg-\[#0F172A\]/g, 'bg-[#F5F3F0]')
                               .replace(/bg-slate-900/g, 'bg-white')
                               .replace(/bg-\[#1e293b\]/g, 'bg-[#FFFFFF]');
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
    el.className = el.className.replace(/\[#d9873e\]/gi, '[#A39171]');
});

// 3. Rewrite Hero Section Completely (Editorial Floating Typographic Layout)
const sections = document.querySelectorAll('section');
if (sections.length > 0) {
    const heroSection = sections[0];
    heroSection.outerHTML = `
    <!-- 2. Distinct Editorial Magazine Hero Section -->
    <section class="relative w-full min-h-screen bg-white overflow-hidden pt-32 pb-20 flex flex-col items-center justify-center">
      
      <!-- Center Massive Typography -->
      <div class="relative z-20 text-center px-4" data-aos="fade-up" data-aos-duration="1500">
        <h4 class="text-gray-400 uppercase tracking-[0.5em] text-xs font-medium mb-8">Interior Architecture</h4>
        <h1 class="text-7xl md:text-[9rem] font-serif text-[#2A2A2A] leading-none mb-6 tracking-tight">
          Curated <br/> <span class="italic font-light text-accent">Spaces.</span>
        </h1>
        <p class="text-gray-500 text-sm md:text-base max-w-sm mx-auto mb-12 font-light leading-relaxed uppercase tracking-widest">
          Redefining luxury living in Dubai and Abu Dhabi through meticulous spatial curation.
        </p>
        <a href="gallery.html" class="btn-orange">View Portfolio</a>
      </div>

      <!-- Floating Images -->
      <div class="absolute top-20 left-[10%] w-48 h-64 md:w-64 md:h-80 z-10 hidden lg:block group overflow-hidden" data-aos="fade-right" data-aos-duration="2000" data-aos-delay="200">
        <img src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1000&auto=format&fit=crop" alt="Interior Detail 1" class="w-full h-full object-cover img-hover-zoom grayscale hover:grayscale-0 transition-all duration-700" />
      </div>

      <div class="absolute bottom-10 right-[15%] w-56 h-72 md:w-80 md:h-96 z-10 hidden lg:block group overflow-hidden" data-aos="fade-up" data-aos-duration="2000" data-aos-delay="400">
        <img src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1000&auto=format&fit=crop" alt="Interior Detail 2" class="w-full h-full object-cover img-hover-zoom grayscale hover:grayscale-0 transition-all duration-700" />
      </div>
    </section>

    <!-- Marquee Divider -->
    <div class="marquee-container">
      <div class="marquee-content">
        Bespoke Interiors &nbsp; — &nbsp; Luxury Spaces &nbsp; — &nbsp; Timeless Elegance &nbsp; — &nbsp; Bespoke Interiors &nbsp; — &nbsp; Luxury Spaces &nbsp; — &nbsp; Timeless Elegance &nbsp; — &nbsp;
      </div>
    </div>
    `;
}

// 4. Rewrite "About Us" Section (Pull-Quote & Editorial Grid)
if (sections.length > 1) {
    const aboutSection = sections[1];
    aboutSection.outerHTML = `
    <!-- ZIG 1: Editorial Pull-Quote and Gallery -->
    <section class="py-32 bg-[#F5F3F0] relative overflow-hidden">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <!-- Massive Pull Quote -->
        <div class="text-center max-w-4xl mx-auto mb-24" data-aos="fade-up" data-aos-duration="1200">
          <p class="text-3xl md:text-5xl font-serif text-[#2A2A2A] leading-snug italic font-light">
            "Design is not just what it looks like and feels like. Design is how it works harmoniously within your daily life."
          </p>
          <div class="w-24 h-[1px] bg-accent mx-auto mt-10"></div>
          <p class="mt-6 uppercase tracking-widest text-xs font-semibold text-gray-500">Our Design Philosophy</p>
        </div>

        <!-- Editorial Masonry Grid -->
        <div class="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          
          <div class="md:col-span-5 space-y-8" data-aos="fade-up" data-aos-duration="1500">
            <div class="w-full h-[500px] group overflow-hidden bg-white p-4 shadow-sm border border-gray-100">
              <img src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=1500&auto=format&fit=crop" alt="Living Space" class="w-full h-full object-cover img-hover-zoom">
            </div>
            <div class="px-4">
              <h3 class="text-2xl font-serif text-[#2A2A2A] mb-3">Minimalist Curation</h3>
              <p class="text-gray-500 text-sm leading-relaxed font-light">By stripping away the non-essential, we allow the premium materials and bespoke furnishings to speak for themselves.</p>
            </div>
          </div>

          <div class="md:col-span-7 space-y-8 md:mt-24" data-aos="fade-up" data-aos-duration="1500" data-aos-delay="200">
            <div class="w-full h-[600px] group overflow-hidden bg-white p-4 shadow-sm border border-gray-100">
              <img src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=1500&auto=format&fit=crop" alt="Material Details" class="w-full h-full object-cover img-hover-zoom">
            </div>
            <div class="px-4">
              <h3 class="text-2xl font-serif text-[#2A2A2A] mb-3">Tactile Harmony</h3>
              <p class="text-gray-500 text-sm leading-relaxed font-light">Texture is the soul of our interiors. We meticulously source organic linens, raw woods, and brushed bronze to create a multi-sensory experience.</p>
            </div>
          </div>

        </div>

        <!-- Central Action -->
        <div class="mt-20 text-center" data-aos="fade-up">
           <a href="about.html" class="btn-outline px-12 py-4 text-xs uppercase tracking-widest font-semibold border-gray-300">Discover Our Story</a>
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
console.log('Successfully crafted Editorial Magazine structure in interior/index.html');
