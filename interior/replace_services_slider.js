const fs = require('fs');

const file = 'index.html';
if (fs.existsSync(file)) {
    let content = fs.readFileSync(file, 'utf8');

    // Define the new section HTML
    const newSection = `
    <!-- Dedicated Services Section -->
    <section class="w-full py-24 overflow-hidden border-t border-slate-100 bg-[#F8F9FA]">
        <div class="w-[90%] max-w-[90%] mx-auto px-4 md:px-8">
            <div class="flex flex-col md:flex-row justify-between items-end mb-10" data-aos="fade-up">
                <div>
                    <h2 class="text-4xl md:text-5xl font-bold text-primary-dark mb-2 leading-tight tracking-tight">What services we provide</h2>
                    <p class="text-slate-500 max-w-xl text-lg hidden md:block mt-4">Explore our comprehensive range of premium exterior and interior design solutions.</p>
                </div>
                <a href="services.html" class="mt-6 md:mt-0 inline-block bg-primary-dark text-white rounded-full px-8 py-3.5 font-semibold hover:bg-accent transition-colors duration-300 whitespace-nowrap">View All Services</a>
            </div>

            <!-- Swiper Slider -->
            <div class="swiper servicesSwiper !overflow-visible relative pb-16" data-aos="fade-up" data-aos-delay="100">
                <div class="swiper-wrapper">
                    <!-- Service 1 -->
                    <div class="swiper-slide">
                        <a href="doors-and-windows.html" class="group block cursor-pointer">
                            <div class="w-full h-64 md:h-72 rounded-2xl overflow-hidden mb-6 relative">
                                <div class="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" style="background-image: url('https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=800&q=80');"></div>
                            </div>
                            <h3 class="text-xl font-bold text-primary-dark mb-2 group-hover:text-accent transition-colors">Doors and Windows</h3>
                            <p class="text-slate-500 text-sm leading-relaxed pr-4">Elevate your property aesthetics and functionality with our premium bespoke doors and windows.</p>
                        </a>
                    </div>

                    <!-- Service 2 -->
                    <div class="swiper-slide">
                        <a href="sliding-folding-doors.html" class="group block cursor-pointer">
                            <div class="w-full h-64 md:h-72 rounded-2xl overflow-hidden mb-6 relative">
                                <div class="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" style="background-image: url('https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=800&q=80');"></div>
                            </div>
                            <h3 class="text-xl font-bold text-primary-dark mb-2 group-hover:text-accent transition-colors">Sliding Folding Doors</h3>
                            <p class="text-slate-500 text-sm leading-relaxed pr-4">Transform your living spaces with our state-of-the-art sliding folding doors for expansive environments.</p>
                        </a>
                    </div>

                    <!-- Service 3 -->
                    <div class="swiper-slide">
                        <a href="sliding-doors.html" class="group block cursor-pointer">
                            <div class="w-full h-64 md:h-72 rounded-2xl overflow-hidden mb-6 relative">
                                <div class="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" style="background-image: url('https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=800&q=80');"></div>
                            </div>
                            <h3 class="text-xl font-bold text-primary-dark mb-2 group-hover:text-accent transition-colors">Sliding Doors</h3>
                            <p class="text-slate-500 text-sm leading-relaxed pr-4">Experience the perfect blend of minimalist design and high-performance engineering.</p>
                        </a>
                    </div>

                    <!-- Service 4 -->
                    <div class="swiper-slide">
                        <a href="curtain-walls.html" class="group block cursor-pointer">
                            <div class="w-full h-64 md:h-72 rounded-2xl overflow-hidden mb-6 relative">
                                <div class="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" style="background-image: url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80');"></div>
                            </div>
                            <h3 class="text-xl font-bold text-primary-dark mb-2 group-hover:text-accent transition-colors">Curtain Walls</h3>
                            <p class="text-slate-500 text-sm leading-relaxed pr-4">Redefine architectural boundaries with our advanced structural glazing systems.</p>
                        </a>
                    </div>

                    <!-- Service 5 -->
                    <div class="swiper-slide">
                        <a href="skylight.html" class="group block cursor-pointer">
                            <div class="w-full h-64 md:h-72 rounded-2xl overflow-hidden mb-6 relative">
                                <div class="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" style="background-image: url('https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80');"></div>
                            </div>
                            <h3 class="text-xl font-bold text-primary-dark mb-2 group-hover:text-accent transition-colors">Skylight</h3>
                            <p class="text-slate-500 text-sm leading-relaxed pr-4">Flood your interiors with natural sunlight while maintaining exceptional thermal efficiency.</p>
                        </a>
                    </div>

                    <!-- Service 6 -->
                    <div class="swiper-slide">
                        <a href="substation-louvers.html" class="group block cursor-pointer">
                            <div class="w-full h-64 md:h-72 rounded-2xl overflow-hidden mb-6 relative">
                                <div class="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" style="background-image: url('https://images.unsplash.com/photo-1600607686527-6fb886090705?auto=format&fit=crop&w=800&q=80');"></div>
                            </div>
                            <h3 class="text-xl font-bold text-primary-dark mb-2 group-hover:text-accent transition-colors">Substation Louvers</h3>
                            <p class="text-slate-500 text-sm leading-relaxed pr-4">Ensure optimal airflow and robust protection for critical power infrastructure.</p>
                        </a>
                    </div>
                </div>
                <!-- Custom Scrollbar under slider -->
                <div class="swiper-scrollbar mt-12 bg-slate-200 !absolute !bottom-0 !left-0 !w-full !h-1 rounded-full overflow-hidden"></div>
            </div>
        </div>
    </section>`;

    // Find the current section
    const startIdx = content.indexOf('<!-- Dedicated Services Section -->');
    const endIdx = content.indexOf('</section>', startIdx) + 10;
    
    if (startIdx !== -1 && endIdx > 10) {
        content = content.substring(0, startIdx) + newSection + content.substring(endIdx);
    }
    
    // Add Swiper configuration script for servicesSwiper
    const scriptInjection = `
        var servicesSwiper = new Swiper(".servicesSwiper", {
            slidesPerView: 1.2,
            spaceBetween: 24,
            freeMode: true,
            grabCursor: true,
            scrollbar: {
                el: ".swiper-scrollbar",
                hide: false,
                draggable: true,
            },
            breakpoints: {
                640: { slidesPerView: 2.2, spaceBetween: 24 },
                1024: { slidesPerView: 3.5, spaceBetween: 32 }
            }
        });
    </script>`;
    
    if (!content.includes('var servicesSwiper')) {
        content = content.replace('</script>', scriptInjection);
    }

    fs.writeFileSync(file, content);
    console.log("Services section updated to use swiper");
}
