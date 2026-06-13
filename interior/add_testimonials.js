const fs = require('fs');

const file = 'index.html';
let content = fs.readFileSync(file, 'utf8');

const testimonialSection = `
    <!-- Testimonials Section -->
    <section class="w-full bg-[#0F172A] py-24 overflow-hidden relative">
        <div class="w-[90%] max-w-[90%] mx-auto px-4 md:px-8">
            <div class="text-center mb-16" data-aos="fade-up">
                <span class="text-white text-sm font-semibold mb-4 block">Testimonials</span>
                <h2 class="text-4xl md:text-5xl font-bold text-white leading-tight">What Guests <span class="text-[#D9873E] italic font-serif font-light">Saying?</span></h2>
            </div>

            <!-- Swiper Slider -->
            <div class="swiper testimonialsSwiper !overflow-visible" data-aos="fade-up" data-aos-delay="100">
                <div class="swiper-wrapper">
                    
                    <!-- Card 1 -->
                    <div class="swiper-slide h-auto">
                        <div class="bg-[#1E293B] p-8 h-full">
                            <div class="flex items-center mb-6">
                                <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Dale Mendoza" class="w-12 h-12 rounded-full object-cover mr-4">
                                <div>
                                    <h4 class="text-white font-bold text-lg leading-tight">Dale Mendoza</h4>
                                    <span class="text-[#D9873E] text-xs">Our Customer</span>
                                </div>
                            </div>
                            <p class="text-slate-300 text-sm leading-relaxed">"Our family vacation at this villa exceeded all our expectations. The spacious rooms and well-equipped kitchen made us feel right at home. The kids loved the dedicated play area and the beach access, while we enjoyed the spa services."</p>
                        </div>
                    </div>

                    <!-- Card 2 -->
                    <div class="swiper-slide h-auto">
                        <div class="bg-[#1E293B] p-8 h-full">
                            <div class="flex items-center mb-6">
                                <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Alice Maxwell" class="w-12 h-12 rounded-full object-cover mr-4">
                                <div>
                                    <h4 class="text-white font-bold text-lg leading-tight">Alice Maxwell</h4>
                                    <span class="text-[#D9873E] text-xs">Our Customer</span>
                                </div>
                            </div>
                            <p class="text-slate-300 text-sm leading-relaxed">"My partner and I chose this villa for our honeymoon, and it was absolutely perfect. The private terrace with a hot tub and the stunning views of the sunset made for unforgettable evenings. The attention to detail in the villa's decor."</p>
                        </div>
                    </div>

                    <!-- Card 3 -->
                    <div class="swiper-slide h-auto">
                        <div class="bg-[#1E293B] p-8 h-full">
                            <div class="flex items-center mb-6">
                                <img src="https://randomuser.me/api/portraits/men/46.jpg" alt="Archer Corbyn" class="w-12 h-12 rounded-full object-cover mr-4">
                                <div>
                                    <h4 class="text-white font-bold text-lg leading-tight">Archer Corbyn</h4>
                                    <span class="text-[#D9873E] text-xs">Our Customer</span>
                                </div>
                            </div>
                            <p class="text-slate-300 text-sm leading-relaxed">"This villa provided a luxurious yet welcoming atmosphere that made our vacation truly special. The gourmet kitchen allowed us to enjoy some home-cooked meals, while the on-site restaurant served delicious local cuisine."</p>
                        </div>
                    </div>

                    <!-- Card 4 -->
                    <div class="swiper-slide h-auto">
                        <div class="bg-[#1E293B] p-8 h-full">
                            <div class="flex items-center mb-6">
                                <img src="https://randomuser.me/api/portraits/women/65.jpg" alt="Chelsea West" class="w-12 h-12 rounded-full object-cover mr-4">
                                <div>
                                    <h4 class="text-white font-bold text-lg leading-tight">Chelsea West</h4>
                                    <span class="text-[#D9873E] text-xs">Our Customer</span>
                                </div>
                            </div>
                            <p class="text-slate-300 text-sm leading-relaxed">"The service at this villa was exceptional from start to finish. Every request was met with a smile and prompt action. The villa itself was beautifully designed with modern amenities and stunning views from every window."</p>
                        </div>
                    </div>

                </div>
            </div>
            
            <!-- Navigation Arrows -->
            <div class="flex justify-center mt-12 gap-4" data-aos="fade-up" data-aos-delay="200">
                <div class="testi-prev w-10 h-10 rounded-full bg-[#D9873E] flex items-center justify-center cursor-pointer text-slate-900 hover:bg-white transition-colors duration-300">
                    <i class="fas fa-chevron-left text-sm"></i>
                </div>
                <div class="testi-next w-10 h-10 rounded-full bg-[#D9873E] flex items-center justify-center cursor-pointer text-slate-900 hover:bg-white transition-colors duration-300">
                    <i class="fas fa-chevron-right text-sm"></i>
                </div>
            </div>
            
        </div>
    </section>

`;

const targetIndex = content.indexOf('<!-- 11. Dark CTA Banner -->');
if (targetIndex !== -1 && !content.includes('What Guests')) {
    content = content.substring(0, targetIndex) + testimonialSection + content.substring(targetIndex);
}

// Add Swiper configuration script for testimonialsSwiper
const scriptInjection = `
        var testimonialsSwiper = new Swiper(".testimonialsSwiper", {
            slidesPerView: 1,
            spaceBetween: 24,
            loop: true,
            autoplay: {
                delay: 4000,
                disableOnInteraction: false,
            },
            navigation: {
                nextEl: ".testi-next",
                prevEl: ".testi-prev",
            },
            breakpoints: {
                768: { slidesPerView: 2, spaceBetween: 24 },
                1024: { slidesPerView: 3, spaceBetween: 32 },
                1280: { slidesPerView: 4, spaceBetween: 32 }
            }
        });
    </script>`;

const lastScriptIndex = content.lastIndexOf('</script>');
if (lastScriptIndex !== -1 && !content.includes('var testimonialsSwiper')) {
    content = content.substring(0, lastScriptIndex) + scriptInjection + content.substring(lastScriptIndex + 9);
}

fs.writeFileSync(file, content);
console.log('Added Testimonial section');
