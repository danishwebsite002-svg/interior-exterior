const fs = require('fs');
const path = require('path');
const { JSDOM } = require('jsdom');

const targetFile = path.join(__dirname, 'index.html');
const content = fs.readFileSync(targetFile, 'utf8');

const dom = new JSDOM(content);
const document = dom.window.document;

// 1. Ensure CSS has parallax support
const styleTag = document.querySelector('style');
if (styleTag && !styleTag.innerHTML.includes('bg-fixed')) {
    styleTag.innerHTML += `
      .parallax-banner {
        background-attachment: fixed;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
      }
      .framed-banner {
        border-radius: 20px;
        box-shadow: 0 40px 80px rgba(0,0,0,0.1);
      }
      .glass-overlay {
        background: rgba(255, 255, 255, 0.85);
        backdrop-filter: blur(12px);
        -webkit-backdrop-filter: blur(12px);
      }
    `;
}

// 2. Rewrite Hero Section to a Framed Banner
const sections = document.querySelectorAll('section');
if (sections.length > 0) {
    const heroSection = sections[0];
    heroSection.outerHTML = `
    <!-- 2. Gallery-Framed Hero Banner -->
    <section class="relative w-full min-h-screen bg-white flex items-center justify-center pt-24 pb-12 px-4 md:px-8 lg:px-12">
      
      <!-- The Framed Banner -->
      <div class="relative w-full h-[80vh] md:h-[85vh] framed-banner overflow-hidden group">
        <!-- Banner Image -->
        <img src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=2500&auto=format&fit=crop" alt="Luxury Interior Banner" class="absolute inset-0 w-full h-full object-cover img-hover-zoom" />
        
        <!-- Gradient Overlay -->
        <div class="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-700"></div>

        <!-- Glass Content Box -->
        <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[90%] max-w-2xl glass-overlay p-10 md:p-16 text-center shadow-2xl" data-aos="fade-up" data-aos-duration="1500">
          <h4 class="text-accent uppercase tracking-[0.4em] text-xs font-bold mb-6">Interior Architecture</h4>
          <h1 class="text-5xl md:text-7xl font-serif text-[#1A1A1A] leading-tight mb-6">
            Curated <br/> <span class="italic font-light text-accent">Elegance</span>
          </h1>
          <p class="text-gray-600 text-sm md:text-base mb-10 font-light leading-relaxed tracking-wider">
            Transforming exclusive residences into breathtaking works of art.
          </p>
          <a href="gallery.html" class="btn-orange">View Portfolio</a>
        </div>
      </div>

    </section>
    `;
}

// 3. Inject Parallax Statement Banner after the About Section
if (sections.length > 1) {
    const aboutSection = sections[1];
    const parallaxHTML = `
    <!-- Parallax Statement Banner -->
    <section class="relative w-full h-[60vh] md:h-[70vh] parallax-banner my-20" style="background-image: url('https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2500&auto=format&fit=crop');">
      
      <!-- Dark Moody Overlay -->
      <div class="absolute inset-0 bg-[#151515]/70"></div>

      <!-- Content -->
      <div class="relative z-10 w-full h-full flex flex-col items-center justify-center text-center px-4" data-aos="zoom-in" data-aos-duration="1500">
        <h2 class="text-4xl md:text-6xl font-serif text-white leading-tight max-w-4xl mx-auto mb-8">
          Transforming spaces into <br/> <span class="italic font-light text-accent">timeless experiences.</span>
        </h2>
        <a href="contact.html" class="px-10 py-4 bg-transparent text-white border border-white hover:bg-white hover:text-[#1A1A1A] transition-all duration-500 tracking-widest uppercase text-xs font-semibold rounded-none">Book Consultation</a>
      </div>

    </section>
    `;
    
    // Insert parallax banner immediately after the About section
    aboutSection.insertAdjacentHTML('afterend', parallaxHTML);
}

fs.writeFileSync(targetFile, dom.serialize());
console.log('Successfully added Gallery-Framed Hero Banner and Parallax Banner in interior/index.html');
