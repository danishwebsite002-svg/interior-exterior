const fs = require('fs');
const path = require('path');

const dir = path.join('c:', 'Users', 'MSI 1', 'Downloads', 'ExteriorInterior', 'exterior');
const filePath = path.join(dir, 'about.html');

let content = fs.readFileSync(filePath, 'utf8');

// 1. Add Mission & Vision after Our Story Section
const storyEnd = `    <!-- Core Values Section -->`;
const missionVisionHTML = `
    <!-- Mission & Vision Section -->
    <section class="py-24 bg-white">
      <div class="w-[90%] max-w-[90%] mx-auto px-4 md:px-8">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
          
          <div class="bg-off-warm p-10 md:p-14 rounded-3xl relative overflow-hidden group" data-aos="fade-right">
            <div class="absolute top-0 right-0 w-32 h-32 bg-accent/10 rounded-full blur-3xl -mr-10 -mt-10 transition-transform group-hover:scale-150 duration-700"></div>
            <div class="w-16 h-16 bg-white shadow-sm rounded-full flex items-center justify-center text-accent mb-8 relative z-10">
              <i class="fa-solid fa-bullseye text-2xl"></i>
            </div>
            <h3 class="text-3xl font-bold text-primary-dark mb-4 relative z-10">Our Mission</h3>
            <p class="text-slate-500 font-light leading-relaxed text-lg relative z-10">
              To redefine the boundaries of architectural design by delivering unparalleled exterior solutions. We aim to merge form and function, crafting sustainable and visually stunning environments that elevate the standard of luxury living worldwide.
            </p>
          </div>
          
          <div class="bg-off-cool p-10 md:p-14 rounded-3xl relative overflow-hidden group" data-aos="fade-left">
            <div class="absolute top-0 right-0 w-32 h-32 bg-slate-900/5 rounded-full blur-3xl -mr-10 -mt-10 transition-transform group-hover:scale-150 duration-700"></div>
            <div class="w-16 h-16 bg-white shadow-sm rounded-full flex items-center justify-center text-primary-dark mb-8 relative z-10">
              <i class="fa-solid fa-eye text-2xl"></i>
            </div>
            <h3 class="text-3xl font-bold text-primary-dark mb-4 relative z-10">Our Vision</h3>
            <p class="text-slate-500 font-light leading-relaxed text-lg relative z-10">
              To be the globally recognized pioneer in luxury exterior architecture, inspiring future generations of design through continuous innovation, elite craftsmanship, and an unwavering commitment to the beauty of structural integration.
            </p>
          </div>

        </div>
      </div>
    </section>

    <!-- Core Values Section -->`;

content = content.replace(storyEnd, missionVisionHTML);

// 2. Add Counter classes to statistics
content = content.replace(/>15</g, `><span class="counter-value" data-target="15">0</span><`);
content = content.replace(/>200</g, `><span class="counter-value" data-target="200">0</span><`);
content = content.replace(/>50</g, `><span class="counter-value" data-target="50">0</span><`);
content = content.replace(/>100</g, `><span class="counter-value" data-target="100">0</span><`);

// 3. Replace CTA Section
const oldCTA = `    <!-- Call To Action -->
    <section class="py-24 bg-white text-center">
      <div class="w-[90%] max-w-3xl mx-auto px-4" data-aos="fade-up">
        <h2 class="text-4xl md:text-5xl font-bold text-primary-dark mb-6 tracking-tight">Ready to begin your journey?</h2>
        <p class="text-slate-500 mb-10 text-lg font-light">Let us transform your vision into an architectural masterpiece.</p>
        <a href="contact.html" class="btn-pill group text-lg px-8 py-4">
          Contact Our Team
          <svg class="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
        </a>
      </div>
    </section>`;

const newCTA = `    <!-- Enhanced Call To Action -->
    <section class="relative py-32 mt-12 bg-cover bg-center overflow-hidden" style="background-image: url('https://images.unsplash.com/photo-1696846912973-3233cc80bf86?q=80&w=1170&auto=format&fit=crop');">
      <div class="absolute inset-0 bg-slate-900/80 backdrop-blur-[2px]"></div>
      <div class="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
      
      <div class="relative z-10 w-[90%] max-w-4xl mx-auto px-4 text-center" data-aos="fade-up">
        <span class="text-accent text-xs font-bold uppercase tracking-widest mb-4 block">Let's Create Together</span>
        <h2 class="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">Ready to begin your architectural journey?</h2>
        <p class="text-slate-300 mb-10 text-lg md:text-xl font-light max-w-2xl mx-auto">Contact us today to schedule a private consultation. Let us transform your vision into an unparalleled masterpiece.</p>
        
        <div class="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
          <a href="contact.html" class="btn-orange text-lg px-10 py-4 w-full sm:w-auto shadow-[0_0_20px_rgba(217,135,62,0.4)] hover:shadow-[0_0_30px_rgba(217,135,62,0.6)] rounded-full">
            Consult With Us
          </a>
          <a href="gallery.html" class="btn-outline border-white text-white hover:border-accent hover:text-accent hover:bg-white/5 text-lg px-10 py-4 w-full sm:w-auto rounded-full">
            View Portfolios
          </a>
        </div>
      </div>
    </section>`;

content = content.replace(oldCTA, newCTA);

// 4. Inject JS before </body>
const scriptInject = `
    <script>
      // Counter Animation
      const counters = document.querySelectorAll('.counter-value');
      const speed = 100;

      const animateCounters = (entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const counter = entry.target;
            const updateCount = () => {
              const target = +counter.getAttribute('data-target');
              const count = +counter.innerText;
              
              const inc = target / speed;

              if (count < target) {
                counter.innerText = Math.ceil(count + inc);
                setTimeout(updateCount, 20);
              } else {
                counter.innerText = target;
              }
            };
            updateCount();
            observer.unobserve(counter);
          }
        });
      };

      const counterObserver = new IntersectionObserver(animateCounters, {
        threshold: 0.5
      });

      counters.forEach(counter => {
        counterObserver.observe(counter);
      });
    </script>
</body>`;

content = content.replace('</body>', scriptInject);

fs.writeFileSync(filePath, content);
console.log("Updated about.html with counters, mission/vision, and enhanced CTA");
