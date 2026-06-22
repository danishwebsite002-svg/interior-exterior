const fs = require('fs');
const path = require('path');

const extDir = 'c:\\Users\\MSI 1\\Downloads\\ExteriorInterior\\exterior';
const intDir = 'c:\\Users\\MSI 1\\Downloads\\ExteriorInterior\\interior';

const extMenuHTML = `
    <!-- Mobile Menu Overlay -->
    <div class="mobile-menu fixed inset-0 bg-white/95 backdrop-blur-md z-[100] flex flex-col items-center justify-center space-y-8 opacity-0 pointer-events-none transition-all duration-300">
      <button class="close-menu absolute top-6 right-6 text-slate-800 focus:outline-none" aria-label="Close Menu">
        <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
      </button>
      <a href="index.html" class="text-2xl font-bold text-slate-800 hover:text-accent">Home</a>
      <a href="about.html" class="text-2xl font-bold text-slate-800 hover:text-accent">About Us</a>
      <a href="services.html" class="text-2xl font-bold text-slate-800 hover:text-accent">Services</a>
      <a href="gallery.html" class="text-2xl font-bold text-slate-800 hover:text-accent">Portfolios</a>
      <a href="blog.html" class="text-2xl font-bold text-slate-800 hover:text-accent">Blog</a>
      <a href="contact.html" class="text-2xl font-bold text-slate-800 hover:text-accent">Contact</a>
    </div>

    <script>
      document.addEventListener('DOMContentLoaded', () => {
        const mobileMenuBtns = document.querySelectorAll('.mobile-menu-btn');
        const closeMenuBtns = document.querySelectorAll('.close-menu');
        const mobileMenus = document.querySelectorAll('.mobile-menu');

        mobileMenuBtns.forEach(btn => {
          btn.addEventListener('click', () => {
            mobileMenus.forEach(menu => {
              menu.classList.remove('opacity-0', 'pointer-events-none');
              menu.classList.add('opacity-100', 'pointer-events-auto');
            });
          });
        });

        closeMenuBtns.forEach(btn => {
          btn.addEventListener('click', () => {
            mobileMenus.forEach(menu => {
              menu.classList.remove('opacity-100', 'pointer-events-auto');
              menu.classList.add('opacity-0', 'pointer-events-none');
            });
          });
        });
      });
    </script>
</body>`;

const intMenuHTML = `
    <!-- Mobile Menu Overlay -->
    <div class="mobile-menu fixed inset-0 bg-navy/95 backdrop-blur-md z-[100] flex flex-col items-center justify-center space-y-8 opacity-0 pointer-events-none transition-all duration-300">
      <button class="close-menu absolute top-6 right-6 text-white focus:outline-none" aria-label="Close Menu">
        <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
      </button>
      <a href="index.html" class="text-2xl font-bold text-white hover:text-copper uppercase tracking-widest">Home</a>
      <a href="about.html" class="text-2xl font-bold text-white hover:text-copper uppercase tracking-widest">About Us</a>
      <a href="services.html" class="text-2xl font-bold text-white hover:text-copper uppercase tracking-widest">Services</a>
      <a href="gallery.html" class="text-2xl font-bold text-white hover:text-copper uppercase tracking-widest">Portfolios</a>
      <a href="blog.html" class="text-2xl font-bold text-white hover:text-copper uppercase tracking-widest">Blog</a>
      <a href="contact.html" class="text-2xl font-bold text-white hover:text-copper uppercase tracking-widest">Contact</a>
    </div>

    <script>
      document.addEventListener('DOMContentLoaded', () => {
        const mobileMenuBtns = document.querySelectorAll('.mobile-menu-btn');
        const closeMenuBtns = document.querySelectorAll('.close-menu');
        const mobileMenus = document.querySelectorAll('.mobile-menu');

        mobileMenuBtns.forEach(btn => {
          btn.addEventListener('click', () => {
            mobileMenus.forEach(menu => {
              menu.classList.remove('opacity-0', 'pointer-events-none');
              menu.classList.add('opacity-100', 'pointer-events-auto');
            });
          });
        });

        closeMenuBtns.forEach(btn => {
          btn.addEventListener('click', () => {
            mobileMenus.forEach(menu => {
              menu.classList.remove('opacity-100', 'pointer-events-auto');
              menu.classList.add('opacity-0', 'pointer-events-none');
            });
          });
        });
      });
    </script>
</body>`;

// Process Exterior
let extFiles = fs.readdirSync(extDir).filter(f => f.endsWith('.html'));
extFiles.forEach(file => {
  const fullPath = path.join(extDir, file);
  let content = fs.readFileSync(fullPath, 'utf8');
  
  if (!content.includes('mobile-menu-btn')) {
    content = content.replace(/<\/div>\s*<\/header>/, `
          <button class="mobile-menu-btn md:hidden text-slate-800 focus:outline-none ml-auto" aria-label="Open Menu">
            <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
          </button>
        </div>
      </header>`);
      
    content = content.replace(/<\/body>/, extMenuHTML);
    fs.writeFileSync(fullPath, content, 'utf8');
    console.log('Updated', fullPath);
  }
});

// Process Interior
let intFiles = fs.readdirSync(intDir).filter(f => f.endsWith('.html'));
intFiles.forEach(file => {
  const fullPath = path.join(intDir, file);
  let content = fs.readFileSync(fullPath, 'utf8');
  
  if (!content.includes('mobile-menu-btn')) {
    content = content.replace(/<\/div>\s*<\/nav>/, `
        <button class="mobile-menu-btn md:hidden text-white focus:outline-none ml-auto" aria-label="Open Menu">
          <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
        </button>
      </div>
    </nav>`);
      
    content = content.replace(/<\/body>/, intMenuHTML);
    fs.writeFileSync(fullPath, content, 'utf8');
    console.log('Updated', fullPath);
  }
});

console.log('Done.');
