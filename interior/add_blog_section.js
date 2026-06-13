const fs = require('fs');

const file = 'index.html';
let content = fs.readFileSync(file, 'utf8');

const blogSection = `
    <!-- Blog & News Section -->
    <section class="w-full bg-white py-24">
        <div class="w-[90%] max-w-[90%] mx-auto px-4 md:px-8">
            <div class="flex flex-col md:flex-row justify-between items-end mb-12" data-aos="fade-up">
                <div>
                    <span class="text-slate-800 text-sm font-semibold mb-2 block">Blog & News</span>
                    <h2 class="text-4xl md:text-5xl font-bold text-primary-dark">Our Latest <span class="italic font-serif font-light">Blog</span> & News</h2>
                </div>
                <a href="blog.html" class="mt-6 md:mt-0 inline-block bg-[#FDBA74] text-primary-dark rounded-full px-8 py-3 font-semibold hover:bg-[#F97316] hover:text-white transition-colors duration-300">View All</a>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-8" data-aos="fade-up" data-aos-delay="100">
                <!-- Blog Post 1 -->
                <a href="blog.html" class="group relative h-[450px] md:h-[550px] overflow-hidden block rounded-none shadow-sm hover:shadow-xl transition-all duration-300">
                    <div class="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" style="background-image: url('https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?auto=format&fit=crop&w=800&q=80');"></div>
                    <div class="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent"></div>
                    <div class="absolute bottom-0 left-0 w-full p-8 text-white z-10">
                        <h3 class="text-2xl font-bold mb-4 leading-tight group-hover:text-[#FDBA74] transition-colors">10 Ways Exterior Designs Can Make Your Home Enjoyable</h3>
                        <div class="flex items-center text-sm text-slate-300">
                            <i class="far fa-clock mr-2 text-[#FDBA74]"></i> June 13, 2026
                        </div>
                    </div>
                </a>

                <!-- Blog Post 2 -->
                <a href="blog.html" class="group relative h-[450px] md:h-[550px] overflow-hidden block rounded-none shadow-sm hover:shadow-xl transition-all duration-300">
                    <div class="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" style="background-image: url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80');"></div>
                    <div class="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent"></div>
                    <div class="absolute bottom-0 left-0 w-full p-8 text-white z-10">
                        <h3 class="text-2xl font-bold mb-4 leading-tight group-hover:text-[#FDBA74] transition-colors">Top 8 Architectural Styles & Spaces You Must Explore In 2026</h3>
                        <div class="flex items-center text-sm text-slate-300">
                            <i class="far fa-clock mr-2 text-[#FDBA74]"></i> June 13, 2026
                        </div>
                    </div>
                </a>

                <!-- Blog Post 3 -->
                <a href="blog.html" class="group relative h-[450px] md:h-[550px] overflow-hidden block rounded-none shadow-sm hover:shadow-xl transition-all duration-300">
                    <div class="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" style="background-image: url('https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=800&q=80');"></div>
                    <div class="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent"></div>
                    <div class="absolute bottom-0 left-0 w-full p-8 text-white z-10">
                        <h3 class="text-2xl font-bold mb-4 leading-tight group-hover:text-[#FDBA74] transition-colors">Plan Your Spaces And Rooms To Allocate Time For Family</h3>
                        <div class="flex items-center text-sm text-slate-300">
                            <i class="far fa-clock mr-2 text-[#FDBA74]"></i> June 8, 2026
                        </div>
                    </div>
                </a>
            </div>
        </div>
    </section>
`;

const targetIndex = content.indexOf('<!-- 11. Dark CTA Banner -->');
if (targetIndex !== -1 && !content.includes('Our Latest <span class="italic font-serif')) {
    content = content.substring(0, targetIndex) + blogSection + content.substring(targetIndex);
    fs.writeFileSync(file, content);
    console.log('Added Blog section');
} else {
    console.log('Could not find injection point or section already exists');
}
