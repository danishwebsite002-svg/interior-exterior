const fs = require('fs');

const galleryFile = 'gallery.html';

if (fs.existsSync(galleryFile)) {
    let content = fs.readFileSync(galleryFile, 'utf8');

    // 1. Replace the filters
    const oldFilters = /<div class="w-\[90%\] max-w-\[90%\] mx-auto px-4 md:px-8 mt-16 mb-4 flex flex-wrap justify-center gap-4" data-aos="fade-up" data-aos-delay="200">[\s\S]*?<\/div>/;
    const newFilters = `<div class="w-[90%] max-w-[90%] mx-auto px-4 md:px-8 mt-16 mb-4 flex flex-wrap justify-center gap-4" id="portfolio-filters" data-aos="fade-up" data-aos-delay="200">
            <button data-filter="all" class="filter-btn px-6 py-2 bg-primary-dark text-white rounded-full text-sm font-bold transition-all shadow-md hover:shadow-lg hover:-translate-y-1">All Works</button>
            <button data-filter="doors-windows" class="filter-btn px-6 py-2 bg-white text-slate-600 border border-slate-200 hover:border-primary-dark hover:text-white rounded-full text-sm font-bold transition-all hover:-translate-y-1">Doors & Windows</button>
            <button data-filter="sliding-folding" class="filter-btn px-6 py-2 bg-white text-slate-600 border border-slate-200 hover:border-primary-dark hover:text-white rounded-full text-sm font-bold transition-all hover:-translate-y-1">Sliding Folding Doors</button>
            <button data-filter="sliding" class="filter-btn px-6 py-2 bg-white text-slate-600 border border-slate-200 hover:border-primary-dark hover:text-white rounded-full text-sm font-bold transition-all hover:-translate-y-1">Sliding Doors</button>
            <button data-filter="curtain-walls" class="filter-btn px-6 py-2 bg-white text-slate-600 border border-slate-200 hover:border-primary-dark hover:text-white rounded-full text-sm font-bold transition-all hover:-translate-y-1">Curtain Walls</button>
            <button data-filter="skylight" class="filter-btn px-6 py-2 bg-white text-slate-600 border border-slate-200 hover:border-primary-dark hover:text-white rounded-full text-sm font-bold transition-all hover:-translate-y-1">Skylight</button>
            <button data-filter="louvers" class="filter-btn px-6 py-2 bg-white text-slate-600 border border-slate-200 hover:border-primary-dark hover:text-white rounded-full text-sm font-bold transition-all hover:-translate-y-1">Substation Louvers</button>
        </div>`;
    content = content.replace(oldFilters, newFilters);

    // 2. Replace the grid content
    const oldGrid = /<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">[\s\S]*?<\/section>/;
    const newGrid = `<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" id="portfolio-grid">
                
                <!-- Project 1: Doors -->
                <div class="portfolio-item group cursor-pointer transition-all duration-300" data-category="doors-windows" data-aos="fade-up">
                    <div class="h-80 w-full overflow-hidden rounded-xl mb-6 shadow-sm">
                        <div class="w-full h-full bg-cover bg-center img-hover-zoom" style="background-image: url('https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=800&q=80');"></div>
                    </div>
                    <span class="text-accent text-xs font-bold uppercase tracking-widest mb-2 block">Doors and Windows</span>
                    <h3 class="text-2xl font-bold text-primary-dark group-hover:text-accent transition-colors">Palm Jumeirah Custom</h3>
                </div>

                <!-- Project 2: Sliding Folding -->
                <div class="portfolio-item group cursor-pointer transition-all duration-300" data-category="sliding-folding" data-aos="fade-up" data-aos-delay="100">
                    <div class="h-80 w-full overflow-hidden rounded-xl mb-6 shadow-sm">
                        <div class="w-full h-full bg-cover bg-center img-hover-zoom" style="background-image: url('https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=800&q=80');"></div>
                    </div>
                    <span class="text-accent text-xs font-bold uppercase tracking-widest mb-2 block">Sliding Folding Doors</span>
                    <h3 class="text-2xl font-bold text-primary-dark group-hover:text-accent transition-colors">Downtown Sky Villa</h3>
                </div>

                <!-- Project 3: Sliding -->
                <div class="portfolio-item group cursor-pointer transition-all duration-300" data-category="sliding" data-aos="fade-up" data-aos-delay="200">
                    <div class="h-80 w-full overflow-hidden rounded-xl mb-6 shadow-sm">
                        <div class="w-full h-full bg-cover bg-center img-hover-zoom" style="background-image: url('https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=800&q=80');"></div>
                    </div>
                    <span class="text-accent text-xs font-bold uppercase tracking-widest mb-2 block">Sliding Doors</span>
                    <h3 class="text-2xl font-bold text-primary-dark group-hover:text-accent transition-colors">DIFC Executive Office</h3>
                </div>

                <!-- Project 4: Curtain Walls -->
                <div class="portfolio-item group cursor-pointer transition-all duration-300" data-category="curtain-walls" data-aos="fade-up">
                    <div class="h-80 w-full overflow-hidden rounded-xl mb-6 shadow-sm">
                        <div class="w-full h-full bg-cover bg-center img-hover-zoom" style="background-image: url('https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=800&q=80');"></div>
                    </div>
                    <span class="text-accent text-xs font-bold uppercase tracking-widest mb-2 block">Curtain Walls</span>
                    <h3 class="text-2xl font-bold text-primary-dark group-hover:text-accent transition-colors">Emirates Hills Facade</h3>
                </div>

                <!-- Project 5: Skylight -->
                <div class="portfolio-item group cursor-pointer transition-all duration-300" data-category="skylight" data-aos="fade-up" data-aos-delay="100">
                    <div class="h-80 w-full overflow-hidden rounded-xl mb-6 shadow-sm">
                        <div class="w-full h-full bg-cover bg-center img-hover-zoom" style="background-image: url('https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=800&q=80');"></div>
                    </div>
                    <span class="text-accent text-xs font-bold uppercase tracking-widest mb-2 block">Skylight</span>
                    <h3 class="text-2xl font-bold text-primary-dark group-hover:text-accent transition-colors">Boutique Hotel Atrium</h3>
                </div>

                <!-- Project 6: Louvers -->
                <div class="portfolio-item group cursor-pointer transition-all duration-300" data-category="louvers" data-aos="fade-up" data-aos-delay="200">
                    <div class="h-80 w-full overflow-hidden rounded-xl mb-6 shadow-sm">
                        <div class="w-full h-full bg-cover bg-center img-hover-zoom" style="background-image: url('https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80');"></div>
                    </div>
                    <span class="text-accent text-xs font-bold uppercase tracking-widest mb-2 block">Substation Louvers</span>
                    <h3 class="text-2xl font-bold text-primary-dark group-hover:text-accent transition-colors">Industrial Plant DXB</h3>
                </div>

                <!-- Project 7: Doors -->
                <div class="portfolio-item group cursor-pointer transition-all duration-300" data-category="doors-windows" data-aos="fade-up">
                    <div class="h-80 w-full overflow-hidden rounded-xl mb-6 shadow-sm">
                        <div class="w-full h-full bg-cover bg-center img-hover-zoom" style="background-image: url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80');"></div>
                    </div>
                    <span class="text-accent text-xs font-bold uppercase tracking-widest mb-2 block">Doors and Windows</span>
                    <h3 class="text-2xl font-bold text-primary-dark group-hover:text-accent transition-colors">Al Barari Estate</h3>
                </div>

                <!-- Project 8: Sliding Folding -->
                <div class="portfolio-item group cursor-pointer transition-all duration-300" data-category="sliding-folding" data-aos="fade-up" data-aos-delay="100">
                    <div class="h-80 w-full overflow-hidden rounded-xl mb-6 shadow-sm">
                        <div class="w-full h-full bg-cover bg-center img-hover-zoom" style="background-image: url('https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=800&q=80');"></div>
                    </div>
                    <span class="text-accent text-xs font-bold uppercase tracking-widest mb-2 block">Sliding Folding Doors</span>
                    <h3 class="text-2xl font-bold text-primary-dark group-hover:text-accent transition-colors">Jumeirah Golf Estates</h3>
                </div>

                <!-- Project 9: Curtain Walls -->
                <div class="portfolio-item group cursor-pointer transition-all duration-300" data-category="curtain-walls" data-aos="fade-up" data-aos-delay="200">
                    <div class="h-80 w-full overflow-hidden rounded-xl mb-6 shadow-sm">
                        <div class="w-full h-full bg-cover bg-center img-hover-zoom" style="background-image: url('https://images.unsplash.com/photo-1600121848594-d8644e57abab?auto=format&fit=crop&w=800&q=80');"></div>
                    </div>
                    <span class="text-accent text-xs font-bold uppercase tracking-widest mb-2 block">Curtain Walls</span>
                    <h3 class="text-2xl font-bold text-primary-dark group-hover:text-accent transition-colors">Marina Commercial Tower</h3>
                </div>
            </div>
        </section>`;
    content = content.replace(oldGrid, newGrid);

    // 3. Add the JS logic right before </body>
    const jsLogic = `    <!-- Portfolio Filtering Script -->
    <script>
        document.addEventListener('DOMContentLoaded', () => {
            const filterBtns = document.querySelectorAll('.filter-btn');
            const portfolioItems = document.querySelectorAll('.portfolio-item');

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
                    
                    // Trigger AOS refresh to reposition items
                    setTimeout(() => {
                        if(typeof AOS !== 'undefined') {
                            AOS.refresh();
                        }
                    }, 400);
                });
            });
        });
    </script>
</body>`;
    content = content.replace(/<\/body>/, jsLogic);

    fs.writeFileSync(galleryFile, content);
    console.log('Updated gallery page');
}
