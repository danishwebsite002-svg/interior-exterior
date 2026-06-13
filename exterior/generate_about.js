const fs = require('fs');
const path = require('path');

const dir = path.join('c:', 'Users', 'MSI 1', 'Downloads', 'ExteriorInterior', 'exterior');
const sourcePath = path.join(dir, 'services.html');
const destPath = path.join(dir, 'about.html');

let sourceContent = fs.readFileSync(sourcePath, 'utf8');

// The main content is between <!-- 2. Hero Section --> and <!-- 5. Footer -->
// Let's find the header ending which is usually </header>
const headerEndIndex = sourceContent.indexOf('</header>') + '</header>'.length;
const footerStartIndex = sourceContent.indexOf('<!-- Footer -->') !== -1 ? sourceContent.indexOf('<!-- Footer -->') : sourceContent.lastIndexOf('<footer');

if (headerEndIndex === -1 || footerStartIndex === -1) {
    console.error("Could not find header or footer bounds");
    process.exit(1);
}

const headerPart = sourceContent.substring(0, headerEndIndex);
const footerPart = sourceContent.substring(footerStartIndex);

// Replace title and active states in header
let newHeader = headerPart.replace('<title>Services - Luxury Exterior Architecture</title>', '<title>About Us - Luxury Exterior Architecture</title>');
// Active link logic
newHeader = newHeader.replace('<a href="services.html" class="text-accent">Services</a>', '<a href="services.html" class="hover:text-accent transition-colors">Services</a>');
newHeader = newHeader.replace('<a href="about.html" class="hover:text-accent transition-colors">About</a>', '<a href="about.html" class="text-accent">About</a>'); // if it exists

// Images to use:
// Facades: 'https://images.unsplash.com/photo-1479839672679-a46483c0e7c8?q=80&w=710&auto=format&fit=crop'
// Pergolas: 'https://images.unsplash.com/photo-1696846912973-3233cc80bf86?q=80&w=1170&auto=format&fit=crop'
// Skylight: 'https://images.unsplash.com/photo-1542676012084-a4b1f610452a?q=80&w=1170&auto=format&fit=crop'

const aboutBody = `
    <!-- Hero Section -->
    <section class="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
      <div class="absolute inset-0 bg-cover bg-center parallax-bg" style="background-image: url('https://images.unsplash.com/photo-1479839672679-a46483c0e7c8?q=80&w=1170&auto=format&fit=crop');"></div>
      <div class="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent"></div>
      <div class="relative z-10 text-center px-4 mt-20" data-aos="fade-up">
        <span class="text-accent font-bold tracking-widest uppercase text-sm mb-4 block">Discover Our Legacy</span>
        <h1 class="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">About <span class="font-signature font-normal text-accent normal-case">Us</span></h1>
        <p class="text-slate-300 max-w-2xl mx-auto text-lg md:text-xl font-light">
          Architecting atmospheres and crafting bespoke luxury environments.
        </p>
      </div>
    </section>

    <!-- Our Story Section -->
    <section class="py-24 bg-white relative overflow-hidden">
      <div class="w-[90%] max-w-[90%] mx-auto px-4 md:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div data-aos="fade-right">
            <span class="text-accent text-xs font-bold uppercase tracking-widest mb-4 block">Our Story</span>
            <h2 class="text-4xl md:text-5xl font-bold text-primary-dark mb-8 leading-tight">Mastering the Art of Modern Luxury</h2>
            <div class="space-y-6 text-slate-500 text-lg font-light leading-relaxed">
              <p>
                Established as one of the premier exterior architecture firms in the UAE, we specialize in creating bespoke, ultra-luxury environments. From the initial conceptual sketches to the final structural glazing, our approach is defined by an uncompromising commitment to perfection.
              </p>
              <p>
                We do not simply decorate spaces; we architect atmospheres. By blending rigorous spatial planning with the world's finest materials—sourced directly from artisans globally—we craft exteriors that are both deeply intimate and profoundly magnificent. Our signature aesthetic balances bold modernism with timeless elegance, ensuring every project stands as a monumental work of art.
              </p>
            </div>
            <div class="mt-10 flex items-center space-x-6">
              <div class="w-16 h-[1px] bg-accent"></div>
              <p class="font-signature text-3xl text-primary-dark">The Founders</p>
            </div>
          </div>
          <div class="relative h-[600px] rounded-2xl overflow-hidden shadow-2xl" data-aos="fade-left">
            <div class="absolute inset-0 bg-cover bg-center img-hover-zoom" style="background-image: url('https://images.unsplash.com/photo-1696846912973-3233cc80bf86?q=80&w=1170&auto=format&fit=crop');"></div>
          </div>
        </div>
      </div>
    </section>

    <!-- Core Values Section -->
    <section class="py-24 bg-[#f8f9fa]">
      <div class="w-[90%] max-w-[90%] mx-auto px-4 md:px-8">
        <div class="text-center max-w-3xl mx-auto mb-16" data-aos="fade-up">
          <span class="text-accent text-xs font-bold uppercase tracking-widest mb-4 block">Our Philosophy</span>
          <h2 class="text-4xl md:text-5xl font-bold text-primary-dark mb-6 tracking-tight">The Pillars of Excellence</h2>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <!-- Value 1 -->
          <div class="bg-white p-10 rounded-2xl shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:-translate-y-2 transition-transform duration-300" data-aos="fade-up" data-aos-delay="100">
            <div class="w-14 h-14 bg-accent/10 rounded-full flex items-center justify-center mb-6 text-accent">
              <i class="fa-solid fa-gem text-2xl"></i>
            </div>
            <h3 class="text-2xl font-bold text-primary-dark mb-4">Uncompromising Quality</h3>
            <p class="text-slate-500 font-light leading-relaxed">We source only the rarest and most durable materials, ensuring that our architectural creations withstand the test of time while maintaining their pristine aesthetic.</p>
          </div>
          
          <!-- Value 2 -->
          <div class="bg-white p-10 rounded-2xl shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:-translate-y-2 transition-transform duration-300" data-aos="fade-up" data-aos-delay="200">
            <div class="w-14 h-14 bg-accent/10 rounded-full flex items-center justify-center mb-6 text-accent">
              <i class="fa-solid fa-pen-nib text-2xl"></i>
            </div>
            <h3 class="text-2xl font-bold text-primary-dark mb-4">Bespoke Innovation</h3>
            <p class="text-slate-500 font-light leading-relaxed">No two projects are alike. We engineer custom solutions—from dynamic facades to kinetic louvers—that push the boundaries of modern exterior design.</p>
          </div>
          
          <!-- Value 3 -->
          <div class="bg-white p-10 rounded-2xl shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:-translate-y-2 transition-transform duration-300" data-aos="fade-up" data-aos-delay="300">
            <div class="w-14 h-14 bg-accent/10 rounded-full flex items-center justify-center mb-6 text-accent">
              <i class="fa-solid fa-hourglass-half text-2xl"></i>
            </div>
            <h3 class="text-2xl font-bold text-primary-dark mb-4">Timeless Elegance</h3>
            <p class="text-slate-500 font-light leading-relaxed">Our designs transcend fleeting trends. We focus on proportional harmony and classic aesthetics integrated seamlessly with futuristic capabilities.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Statistics Parallax -->
    <section class="relative py-32 flex items-center justify-center bg-fixed bg-cover bg-center" style="background-image: url('https://images.unsplash.com/photo-1542676012084-a4b1f610452a?q=80&w=1170&auto=format&fit=crop');">
      <div class="absolute inset-0 bg-slate-900/80 backdrop-blur-sm"></div>
      <div class="relative z-10 w-[90%] max-w-[90%] mx-auto px-4 md:px-8">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div data-aos="zoom-in" data-aos-delay="100">
            <h4 class="text-5xl font-bold text-white mb-2">15<span class="text-accent">+</span></h4>
            <p class="text-slate-400 font-medium uppercase tracking-wider text-sm">Years Experience</p>
          </div>
          <div data-aos="zoom-in" data-aos-delay="200">
            <h4 class="text-5xl font-bold text-white mb-2">200<span class="text-accent">+</span></h4>
            <p class="text-slate-400 font-medium uppercase tracking-wider text-sm">Projects Delivered</p>
          </div>
          <div data-aos="zoom-in" data-aos-delay="300">
            <h4 class="text-5xl font-bold text-white mb-2">50<span class="text-accent">+</span></h4>
            <p class="text-slate-400 font-medium uppercase tracking-wider text-sm">Design Awards</p>
          </div>
          <div data-aos="zoom-in" data-aos-delay="400">
            <h4 class="text-5xl font-bold text-white mb-2">100<span class="text-accent">%</span></h4>
            <p class="text-slate-400 font-medium uppercase tracking-wider text-sm">Client Satisfaction</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Call To Action -->
    <section class="py-24 bg-white text-center">
      <div class="w-[90%] max-w-3xl mx-auto px-4" data-aos="fade-up">
        <h2 class="text-4xl md:text-5xl font-bold text-primary-dark mb-6 tracking-tight">Ready to begin your journey?</h2>
        <p class="text-slate-500 mb-10 text-lg font-light">Let us transform your vision into an architectural masterpiece.</p>
        <a href="contact.html" class="btn-pill group text-lg px-8 py-4">
          Contact Our Team
          <svg class="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
        </a>
      </div>
    </section>
`;

const finalHTML = newHeader + aboutBody + footerPart;
fs.writeFileSync(destPath, finalHTML);
console.log("Successfully created about.html!");
