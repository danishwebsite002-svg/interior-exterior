const fs = require('fs');

const file = 'index.html';
if (fs.existsSync(file)) {
    let content = fs.readFileSync(file, 'utf8');

    // Look for the start of the section containing the portfolio heading
    // We'll split the content to insert our new section right before it.
    
    // Find the section that has "Explore portfolio latest"
    const portfolioIndex = content.indexOf('Explore portfolio latest');
    
    if (portfolioIndex !== -1) {
        // Find the <section ...> tag right before this index
        const beforePortfolio = content.lastIndexOf('<section', portfolioIndex);
        
        if (beforePortfolio !== -1) {
            const servicesSection = `
    <!-- Dedicated Services Section -->
    <section class="w-[90%] max-w-[90%] mx-auto px-4 md:px-8 py-24 overflow-hidden border-t border-slate-100 bg-[#F8F9FA]">
        <div class="text-center mb-16" data-aos="fade-up">
            <span class="text-accent text-xs font-bold uppercase tracking-widest mb-4 block">Our Expertise</span>
            <h2 class="text-4xl md:text-5xl font-bold text-primary-dark mb-6 leading-tight">What services we provide</h2>
            <p class="text-slate-500 max-w-2xl mx-auto">Explore our comprehensive range of premium exterior and interior design solutions, engineered for luxury and performance.</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <!-- Service 1 -->
            <a href="doors-and-windows.html" class="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-slate-100" data-aos="fade-up" data-aos-delay="0">
                <div class="h-56 overflow-hidden">
                    <div class="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110" style="background-image: url('https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=800&q=80');"></div>
                </div>
                <div class="p-8">
                    <h3 class="text-xl font-bold text-primary-dark mb-3 group-hover:text-accent transition-colors">Doors and Windows</h3>
                    <p class="text-slate-500 text-sm mb-4 leading-relaxed line-clamp-2">Elevate your property aesthetics and functionality with our premium bespoke doors and windows.</p>
                    <span class="text-accent font-bold text-sm flex items-center">Learn More <i class="fas fa-arrow-right ml-2 transform group-hover:translate-x-2 transition-transform"></i></span>
                </div>
            </a>

            <!-- Service 2 -->
            <a href="sliding-folding-doors.html" class="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-slate-100" data-aos="fade-up" data-aos-delay="100">
                <div class="h-56 overflow-hidden">
                    <div class="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110" style="background-image: url('https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=800&q=80');"></div>
                </div>
                <div class="p-8">
                    <h3 class="text-xl font-bold text-primary-dark mb-3 group-hover:text-accent transition-colors">Sliding Folding Doors</h3>
                    <p class="text-slate-500 text-sm mb-4 leading-relaxed line-clamp-2">Transform your living spaces with our state-of-the-art sliding folding doors for expansive environments.</p>
                    <span class="text-accent font-bold text-sm flex items-center">Learn More <i class="fas fa-arrow-right ml-2 transform group-hover:translate-x-2 transition-transform"></i></span>
                </div>
            </a>

            <!-- Service 3 -->
            <a href="sliding-doors.html" class="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-slate-100" data-aos="fade-up" data-aos-delay="200">
                <div class="h-56 overflow-hidden">
                    <div class="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110" style="background-image: url('https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=800&q=80');"></div>
                </div>
                <div class="p-8">
                    <h3 class="text-xl font-bold text-primary-dark mb-3 group-hover:text-accent transition-colors">Sliding Doors</h3>
                    <p class="text-slate-500 text-sm mb-4 leading-relaxed line-clamp-2">Experience the perfect blend of minimalist design and high-performance engineering.</p>
                    <span class="text-accent font-bold text-sm flex items-center">Learn More <i class="fas fa-arrow-right ml-2 transform group-hover:translate-x-2 transition-transform"></i></span>
                </div>
            </a>

            <!-- Service 4 -->
            <a href="curtain-walls.html" class="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-slate-100" data-aos="fade-up" data-aos-delay="300">
                <div class="h-56 overflow-hidden">
                    <div class="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110" style="background-image: url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80');"></div>
                </div>
                <div class="p-8">
                    <h3 class="text-xl font-bold text-primary-dark mb-3 group-hover:text-accent transition-colors">Curtain Walls</h3>
                    <p class="text-slate-500 text-sm mb-4 leading-relaxed line-clamp-2">Redefine architectural boundaries with our advanced structural glazing systems.</p>
                    <span class="text-accent font-bold text-sm flex items-center">Learn More <i class="fas fa-arrow-right ml-2 transform group-hover:translate-x-2 transition-transform"></i></span>
                </div>
            </a>

            <!-- Service 5 -->
            <a href="skylight.html" class="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-slate-100" data-aos="fade-up" data-aos-delay="400">
                <div class="h-56 overflow-hidden">
                    <div class="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110" style="background-image: url('https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80');"></div>
                </div>
                <div class="p-8">
                    <h3 class="text-xl font-bold text-primary-dark mb-3 group-hover:text-accent transition-colors">Skylight</h3>
                    <p class="text-slate-500 text-sm mb-4 leading-relaxed line-clamp-2">Flood your interiors with natural sunlight while maintaining exceptional thermal efficiency.</p>
                    <span class="text-accent font-bold text-sm flex items-center">Learn More <i class="fas fa-arrow-right ml-2 transform group-hover:translate-x-2 transition-transform"></i></span>
                </div>
            </a>

            <!-- Service 6 -->
            <a href="substation-louvers.html" class="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-slate-100" data-aos="fade-up" data-aos-delay="500">
                <div class="h-56 overflow-hidden">
                    <div class="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110" style="background-image: url('https://images.unsplash.com/photo-1600607686527-6fb886090705?auto=format&fit=crop&w=800&q=80');"></div>
                </div>
                <div class="p-8">
                    <h3 class="text-xl font-bold text-primary-dark mb-3 group-hover:text-accent transition-colors">Substation Louvers</h3>
                    <p class="text-slate-500 text-sm mb-4 leading-relaxed line-clamp-2">Ensure optimal airflow and robust protection for critical power infrastructure.</p>
                    <span class="text-accent font-bold text-sm flex items-center">Learn More <i class="fas fa-arrow-right ml-2 transform group-hover:translate-x-2 transition-transform"></i></span>
                </div>
            </a>
        </div>
        
        <div class="text-center mt-12" data-aos="fade-up">
            <a href="services.html" class="inline-block border-2 border-primary-dark text-primary-dark rounded-full px-8 py-3 text-sm font-bold hover:bg-primary-dark hover:text-white transition-colors duration-300">View All Services</a>
        </div>
    </section>

`;
            const firstPart = content.substring(0, beforePortfolio);
            const secondPart = content.substring(beforePortfolio);
            
            fs.writeFileSync(file, firstPart + servicesSection + secondPart);
            console.log('Inserted dedicated services section in index.html');
        }
    }
}
