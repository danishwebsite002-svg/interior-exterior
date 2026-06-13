const fs = require('fs');

const file = 'gallery.html';
if (fs.existsSync(file)) {
    let content = fs.readFileSync(file, 'utf8');

    // 1. Add CSS
    if (!content.includes('lightgallery.min.css')) {
        content = content.replace('</head>', `
    <!-- lightGallery CSS -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/lightgallery/2.7.1/css/lightgallery.min.css" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/lightgallery/2.7.1/css/lg-zoom.min.css" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/lightgallery/2.7.1/css/lg-thumbnail.min.css" />
</head>`);
    }

    // 2. Replace Grid
    const oldGrid = /<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" id="portfolio-grid">[\s\S]*?<\/section>/;
    const newGrid = `<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" id="portfolio-grid">
                
                <!-- Project 1: Doors -->
                <a href="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=2000&q=80" class="portfolio-item group cursor-pointer transition-all duration-300 block" data-category="doors-windows" data-aos="fade-up">
                    <div class="h-80 w-full overflow-hidden rounded-xl mb-6 shadow-sm">
                        <div class="w-full h-full bg-cover bg-center img-hover-zoom" style="background-image: url('https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=800&q=80');"></div>
                    </div>
                    <span class="text-accent text-xs font-bold uppercase tracking-widest mb-2 block">Doors and Windows</span>
                    <h3 class="text-2xl font-bold text-primary-dark group-hover:text-accent transition-colors">Palm Jumeirah Custom</h3>
                </a>

                <!-- Project 2: Sliding Folding -->
                <a href="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=2000&q=80" class="portfolio-item group cursor-pointer transition-all duration-300 block" data-category="sliding-folding" data-aos="fade-up" data-aos-delay="100">
                    <div class="h-80 w-full overflow-hidden rounded-xl mb-6 shadow-sm">
                        <div class="w-full h-full bg-cover bg-center img-hover-zoom" style="background-image: url('https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=800&q=80');"></div>
                    </div>
                    <span class="text-accent text-xs font-bold uppercase tracking-widest mb-2 block">Sliding Folding Doors</span>
                    <h3 class="text-2xl font-bold text-primary-dark group-hover:text-accent transition-colors">Downtown Sky Villa</h3>
                </a>

                <!-- Project 3: Sliding -->
                <a href="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=2000&q=80" class="portfolio-item group cursor-pointer transition-all duration-300 block" data-category="sliding" data-aos="fade-up" data-aos-delay="200">
                    <div class="h-80 w-full overflow-hidden rounded-xl mb-6 shadow-sm">
                        <div class="w-full h-full bg-cover bg-center img-hover-zoom" style="background-image: url('https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=800&q=80');"></div>
                    </div>
                    <span class="text-accent text-xs font-bold uppercase tracking-widest mb-2 block">Sliding Doors</span>
                    <h3 class="text-2xl font-bold text-primary-dark group-hover:text-accent transition-colors">DIFC Executive Office</h3>
                </a>

                <!-- Project 4: Curtain Walls -->
                <a href="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=2000&q=80" class="portfolio-item group cursor-pointer transition-all duration-300 block" data-category="curtain-walls" data-aos="fade-up">
                    <div class="h-80 w-full overflow-hidden rounded-xl mb-6 shadow-sm">
                        <div class="w-full h-full bg-cover bg-center img-hover-zoom" style="background-image: url('https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=800&q=80');"></div>
                    </div>
                    <span class="text-accent text-xs font-bold uppercase tracking-widest mb-2 block">Curtain Walls</span>
                    <h3 class="text-2xl font-bold text-primary-dark group-hover:text-accent transition-colors">Emirates Hills Facade</h3>
                </a>

                <!-- Project 5: Skylight -->
                <a href="https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=2000&q=80" class="portfolio-item group cursor-pointer transition-all duration-300 block" data-category="skylight" data-aos="fade-up" data-aos-delay="100">
                    <div class="h-80 w-full overflow-hidden rounded-xl mb-6 shadow-sm">
                        <div class="w-full h-full bg-cover bg-center img-hover-zoom" style="background-image: url('https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=800&q=80');"></div>
                    </div>
                    <span class="text-accent text-xs font-bold uppercase tracking-widest mb-2 block">Skylight</span>
                    <h3 class="text-2xl font-bold text-primary-dark group-hover:text-accent transition-colors">Boutique Hotel Atrium</h3>
                </a>

                <!-- Project 6: Louvers -->
                <a href="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=2000&q=80" class="portfolio-item group cursor-pointer transition-all duration-300 block" data-category="louvers" data-aos="fade-up" data-aos-delay="200">
                    <div class="h-80 w-full overflow-hidden rounded-xl mb-6 shadow-sm">
                        <div class="w-full h-full bg-cover bg-center img-hover-zoom" style="background-image: url('https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80');"></div>
                    </div>
                    <span class="text-accent text-xs font-bold uppercase tracking-widest mb-2 block">Substation Louvers</span>
                    <h3 class="text-2xl font-bold text-primary-dark group-hover:text-accent transition-colors">Industrial Plant DXB</h3>
                </a>

                <!-- Project 7: Doors -->
                <a href="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2000&q=80" class="portfolio-item group cursor-pointer transition-all duration-300 block" data-category="doors-windows" data-aos="fade-up">
                    <div class="h-80 w-full overflow-hidden rounded-xl mb-6 shadow-sm">
                        <div class="w-full h-full bg-cover bg-center img-hover-zoom" style="background-image: url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80');"></div>
                    </div>
                    <span class="text-accent text-xs font-bold uppercase tracking-widest mb-2 block">Doors and Windows</span>
                    <h3 class="text-2xl font-bold text-primary-dark group-hover:text-accent transition-colors">Al Barari Estate</h3>
                </a>

                <!-- Project 8: Sliding Folding -->
                <a href="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=2000&q=80" class="portfolio-item group cursor-pointer transition-all duration-300 block" data-category="sliding-folding" data-aos="fade-up" data-aos-delay="100">
                    <div class="h-80 w-full overflow-hidden rounded-xl mb-6 shadow-sm">
                        <div class="w-full h-full bg-cover bg-center img-hover-zoom" style="background-image: url('https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=800&q=80');"></div>
                    </div>
                    <span class="text-accent text-xs font-bold uppercase tracking-widest mb-2 block">Sliding Folding Doors</span>
                    <h3 class="text-2xl font-bold text-primary-dark group-hover:text-accent transition-colors">Jumeirah Golf Estates</h3>
                </a>

                <!-- Project 9: Curtain Walls -->
                <a href="https://images.unsplash.com/photo-1600121848594-d8644e57abab?auto=format&fit=crop&w=2000&q=80" class="portfolio-item group cursor-pointer transition-all duration-300 block" data-category="curtain-walls" data-aos="fade-up" data-aos-delay="200">
                    <div class="h-80 w-full overflow-hidden rounded-xl mb-6 shadow-sm">
                        <div class="w-full h-full bg-cover bg-center img-hover-zoom" style="background-image: url('https://images.unsplash.com/photo-1600121848594-d8644e57abab?auto=format&fit=crop&w=800&q=80');"></div>
                    </div>
                    <span class="text-accent text-xs font-bold uppercase tracking-widest mb-2 block">Curtain Walls</span>
                    <h3 class="text-2xl font-bold text-primary-dark group-hover:text-accent transition-colors">Marina Commercial Tower</h3>
                </a>
            </div>
        </section>`;
    content = content.replace(oldGrid, newGrid);

    // 3. Replace old script with new script that includes lightGallery
    const oldScript = /<!-- Portfolio Filtering Script -->[\s\S]*?<\/body>/;
    const newScript = `<!-- lightGallery JS -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/lightgallery/2.7.1/lightgallery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/lightgallery/2.7.1/plugins/zoom/lg-zoom.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/lightgallery/2.7.1/plugins/thumbnail/lg-thumbnail.min.js"></script>
    
    <!-- Portfolio Filtering Script -->
    <script>
        document.addEventListener('DOMContentLoaded', () => {
            const filterBtns = document.querySelectorAll('.filter-btn');
            const portfolioItems = document.querySelectorAll('.portfolio-item');
            const grid = document.getElementById('portfolio-grid');

            let lgInstance = lightGallery(grid, {
                selector: '.portfolio-item:not([style*="display: none"])',
                plugins: [lgZoom, lgThumbnail],
                speed: 500,
                download: false
            });

            filterBtns.forEach(btn => {
                btn.addEventListener('click', () => {
                    // Update active button styling
                    filterBtns.forEach(b => {
                        b.classList.remove('bg-primary-dark', 'text-white');
                        b.classList.add('bg-white', 'text-slate-600');
                    });
                    btn.classList.remove('bg-white', 'text-slate-600');
                    btn.classList.add('bg-primary-dark', 'text-white');

                    const filterValue = btn.getAttribute('data-filter');

                    portfolioItems.forEach(item => {
                        if (filterValue === 'all' || item.getAttribute('data-category') === filterValue) {
                            item.style.display = 'block';
                            setTimeout(() => {
                                item.style.opacity = '1';
                                item.style.transform = 'scale(1)';
                            }, 50);
                        } else {
                            item.style.opacity = '0';
                            item.style.transform = 'scale(0.95)';
                            setTimeout(() => {
                                item.style.display = 'none';
                            }, 300);
                        }
                    });
                    
                    // Trigger AOS refresh and LightGallery refresh
                    setTimeout(() => {
                        if(typeof AOS !== 'undefined') {
                            AOS.refresh();
                        }
                        if(lgInstance) {
                            lgInstance.destroy(true);
                            lgInstance = lightGallery(grid, {
                                selector: '.portfolio-item:not([style*="display: none"])',
                                plugins: [lgZoom, lgThumbnail],
                                speed: 500,
                                download: false
                            });
                        }
                    }, 400);
                });
            });
        });
    </script>
</body>`;
    content = content.replace(oldScript, newScript);

    fs.writeFileSync(file, content);
    console.log('Successfully integrated lightGallery into gallery.html');
}
