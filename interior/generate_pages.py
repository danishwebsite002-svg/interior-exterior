import os

services = [
    {
        'id': 'doors-and-windows',
        'title': 'Doors and Windows',
        'img1': 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=2000&q=80',
        'img2': 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=800&q=80',
        'img3': 'https://images.unsplash.com/photo-1595515106969-1ce29566ff1c?auto=format&fit=crop&w=800&q=80',
        'desc1': 'Elevate your property aesthetics and functionality with our premium doors and windows. Designed to offer maximum durability, top-tier security, and unmatched elegance, our bespoke solutions cater to all architectural styles.',
        'desc2': 'From sleek modern designs to timeless classics, we use the finest materials to construct doors and windows that enhance natural light, ensure optimal insulation, and provide seamless transitions between indoor and outdoor spaces.'
    },
    {
        'id': 'sliding-folding-doors',
        'title': 'Sliding Folding Doors',
        'img1': 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=2000&q=80',
        'img2': 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=800&q=80',
        'img3': 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80',
        'desc1': 'Transform your living spaces with our state-of-the-art sliding folding doors. These innovative systems are engineered to blur the boundaries between your indoor sanctuaries and outdoor landscapes, creating expansive, open environments.',
        'desc2': 'Featuring smooth, effortless operation and robust framing, our sliding folding doors are perfect for maximizing space utilization. They fold neatly out of the way, allowing for unhindered views and exceptional ventilation.'
    },
    {
        'id': 'sliding-doors',
        'title': 'Sliding Doors',
        'img1': 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=2000&q=80',
        'img2': 'https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=800&q=80',
        'img3': 'https://images.unsplash.com/photo-1600121848594-d8644e57abab?auto=format&fit=crop&w=800&q=80',
        'desc1': 'Discover the perfect blend of form and function with our high-performance sliding doors. Built for smooth gliding and long-lasting durability, they bring an air of sophisticated modernity to any residential or commercial project.',
        'desc2': 'Our sliding door systems prioritize energy efficiency and security without compromising on sleek aesthetics. Enjoy expansive glass panels that flood your interiors with natural sunlight while offering panoramic views.'
    },
    {
        'id': 'curtain-walls',
        'title': 'Curtain Walls',
        'img1': 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=2000&q=80',
        'img2': 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=800&q=80',
        'img3': 'https://images.unsplash.com/photo-1595515106969-1ce29566ff1c?auto=format&fit=crop&w=800&q=80',
        'desc1': 'Redefine the skyline with our striking curtain wall installations. We specialize in cutting-edge structural glass facades that provide impressive architectural statements while ensuring robust performance and weather resistance.',
        'desc2': 'Our curtain wall solutions are custom-engineered for each project, handling wind loads, thermal expansion, and water penetration. They deliver brilliant natural illumination and an iconic, modern look for any high-end property.'
    },
    {
        'id': 'skylight',
        'title': 'Skylight',
        'img1': 'https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=2000&q=80',
        'img2': 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=800&q=80',
        'img3': 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80',
        'desc1': 'Invite the sky inside with our custom skylight installations. Whether you desire a dramatic architectural focal point or subtle overhead lighting, our skylights transform dark, enclosed spaces into bright, airy environments.',
        'desc2': 'Utilizing premium glazing and weather-tight seals, our skylights are designed for optimal thermal performance. They not only reduce the need for artificial lighting but also create a profound sense of connection with the outdoors.'
    },
    {
        'id': 'substation-louvers',
        'title': 'Substation Louvers',
        'img1': 'https://images.unsplash.com/photo-1600121848594-d8644e57abab?auto=format&fit=crop&w=2000&q=80',
        'img2': 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=800&q=80',
        'img3': 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=800&q=80',
        'desc1': 'Ensure optimal ventilation and equipment protection with our architectural substation louvers. Engineered to meet strict airflow and weather-resistance requirements, they seamlessly integrate into the building exterior.',
        'desc2': 'Our louvers are constructed from heavy-duty materials to withstand harsh industrial and environmental conditions. They provide superior visual screening while allowing critical air circulation, merging practicality with clean design.'
    }
]

template = """<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{title} | Luxury Design Dubai</title>
    <meta name="description" content="Explore our premium {title} services.">
    <script src="https://cdn.tailwindcss.com"></script>
    <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet">
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');
        body {{ font-family: 'Inter', sans-serif; overflow-x: hidden; color: #1e293b; }}
        .text-accent {{ color: #D9873E; }}
        .bg-accent {{ background-color: #D9873E; }}
        .border-accent {{ border-color: #D9873E; }}
        .text-primary-dark {{ color: #2E3133; }}
        .bg-primary-dark {{ background-color: #2E3133; }}
        .btn-outline {{ border: 1px solid #e2e8f0; transition: all 0.4s ease; display: inline-flex; align-items: center; justify-content: center; }}
        .btn-outline:hover {{ border-color: #D9873E; color: #D9873E; background-color: rgba(217, 135, 62, 0.05); transform: translateY(-2px); }}
        .btn-pill {{ background-color: #2E3133; color: white; border-radius: 999px; padding: 0.875rem 2.5rem; display: inline-flex; align-items: center; font-size: 0.875rem; font-weight: 500; transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1); box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1); }}
        .btn-pill:hover {{ background-color: #1a1c1d; box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1); transform: translateY(-2px); }}
        .email-input {{ border: none; border-bottom: 2px solid #e2e8f0; padding-bottom: 0.5rem; outline: none; background: transparent; transition: border-color 0.3s; }}
        .email-input:focus {{ border-bottom-color: #D9873E; }}
        .img-hover-zoom {{ transition: transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94); }}
        .group:hover .img-hover-zoom {{ transform: scale(1.05); }}
    </style>
</head>
<body class="bg-white">
    <header class="w-full border-b border-slate-100 bg-white/90 backdrop-blur-md sticky top-0 z-50 transition-all duration-300">
        <div class="max-w-7xl mx-auto px-4 md:px-8 py-5 flex justify-between items-center">
            <div class="flex items-center space-x-2">
                <div class="w-6 h-6 rounded-full border-2 border-accent flex items-center justify-center">
                    <div class="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
                </div>
                <a href="index.html" class="text-xl font-bold tracking-tight text-primary-dark uppercase">Interior</a>
            </div>
            <nav class="hidden md:flex space-x-8 text-sm font-medium text-slate-600">
                <a href="index.html" class="hover:text-accent transition-colors">Home</a>
                <a href="services.html" class="text-accent">Services</a>
                <a href="gallery.html" class="hover:text-accent transition-colors">Portfolios</a>
                <a href="blog.html" class="hover:text-accent transition-colors">Journal</a>
                <a href="contact.html" class="hover:text-accent transition-colors">Contact</a>
            </nav>
            <div class="hidden md:flex items-center space-x-4">
                <a href="contact.html" class="btn-outline px-6 py-2.5 rounded-full text-sm font-semibold text-slate-700">Contact Us</a>
            </div>
        </div>
    </header>

    <main>
        <section class="relative w-full h-[50vh] md:h-[60vh] flex flex-col items-center justify-center mt-0 overflow-hidden">
            <div class="absolute inset-0 bg-cover bg-center parallax-bg" style="background-image: url('{img1}');"></div>
            <div class="absolute inset-0 bg-primary-dark/60"></div>
            <div class="relative z-10 text-center px-4" data-aos="fade-up">
                <span class="text-accent text-sm font-bold uppercase tracking-widest mb-4 block">Service Detail</span>
                <h1 class="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight capitalize">{title}</h1>
                <div class="flex items-center justify-center space-x-3 text-slate-300 text-sm font-medium tracking-widest uppercase">
                    <a href="index.html" class="hover:text-accent transition-colors">Home</a>
                    <span class="text-slate-500">/</span>
                    <a href="services.html" class="hover:text-accent transition-colors">Services</a>
                    <span class="text-slate-500">/</span>
                    <span class="text-accent">{title}</span>
                </div>
            </div>
        </section>
        
        <section class="max-w-7xl mx-auto px-4 md:px-8 py-20">
            <div class="grid grid-cols-1 lg:grid-cols-12 gap-16">
                <div class="lg:col-span-8" data-aos="fade-right">
                    <h2 class="text-4xl font-bold text-primary-dark mb-8 leading-tight">Elevating Spaces with Premium {title}</h2>
                    <p class="text-slate-500 mb-6 leading-relaxed text-lg">{desc1}</p>
                    <p class="text-slate-500 mb-10 leading-relaxed text-lg">{desc2}</p>
                    
                    <h3 class="text-2xl font-bold text-primary-dark mb-6">Key Features & Benefits</h3>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                        <div class="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                            <h4 class="text-lg font-bold text-primary-dark mb-2">Unmatched Durability</h4>
                            <p class="text-slate-500 text-sm leading-relaxed">Engineered to withstand harsh environments while maintaining peak performance over time.</p>
                        </div>
                        <div class="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                            <h4 class="text-lg font-bold text-primary-dark mb-2">Aesthetic Excellence</h4>
                            <p class="text-slate-500 text-sm leading-relaxed">Available in customized finishes that blend seamlessly with your interior architecture.</p>
                        </div>
                        <div class="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                            <h4 class="text-lg font-bold text-primary-dark mb-2">Energy Efficiency</h4>
                            <p class="text-slate-500 text-sm leading-relaxed">Advanced insulation to optimize energy consumption and enhance indoor comfort.</p>
                        </div>
                        <div class="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                            <h4 class="text-lg font-bold text-primary-dark mb-2">Seamless Integration</h4>
                            <p class="text-slate-500 text-sm leading-relaxed">Expertly installed by our seasoned professionals to ensure a perfect fit.</p>
                        </div>
                    </div>

                    <div class="grid grid-cols-2 gap-4">
                        <div class="h-64 rounded-xl overflow-hidden group">
                            <div class="w-full h-full bg-cover bg-center img-hover-zoom" style="background-image: url('{img2}');"></div>
                        </div>
                        <div class="h-64 rounded-xl overflow-hidden group">
                            <div class="w-full h-full bg-cover bg-center img-hover-zoom" style="background-image: url('{img3}');"></div>
                        </div>
                    </div>
                </div>

                <div class="lg:col-span-4 space-y-8" data-aos="fade-left">
                    <div class="bg-primary-dark p-8 rounded-2xl text-white">
                        <h3 class="text-2xl font-bold mb-4">Need a Consultation?</h3>
                        <p class="text-slate-400 mb-8 text-sm leading-relaxed">Contact our expert team to discuss your {title} requirements and let us guide you towards the perfect solution.</p>
                        <a href="contact.html" class="block text-center bg-accent hover:bg-[#c07332] text-white py-3 rounded-full transition-colors font-semibold">Get in Touch</a>
                    </div>

                    <div class="bg-slate-50 p-8 rounded-2xl border border-slate-100">
                        <h3 class="text-xl font-bold text-primary-dark mb-6">Other Services</h3>
                        <ul class="space-y-4">
                            <li><a href="doors-and-windows.html" class="text-slate-500 hover:text-accent transition-colors flex justify-between items-center"><span>Doors and Windows</span> <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg></a></li>
                            <li class="border-t border-slate-200 pt-4"><a href="sliding-folding-doors.html" class="text-slate-500 hover:text-accent transition-colors flex justify-between items-center"><span>Sliding Folding Doors</span> <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg></a></li>
                            <li class="border-t border-slate-200 pt-4"><a href="sliding-doors.html" class="text-slate-500 hover:text-accent transition-colors flex justify-between items-center"><span>Sliding Doors</span> <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg></a></li>
                            <li class="border-t border-slate-200 pt-4"><a href="curtain-walls.html" class="text-slate-500 hover:text-accent transition-colors flex justify-between items-center"><span>Curtain Walls</span> <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg></a></li>
                            <li class="border-t border-slate-200 pt-4"><a href="skylight.html" class="text-slate-500 hover:text-accent transition-colors flex justify-between items-center"><span>Skylight</span> <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg></a></li>
                            <li class="border-t border-slate-200 pt-4"><a href="substation-louvers.html" class="text-slate-500 hover:text-accent transition-colors flex justify-between items-center"><span>Substation Louvers</span> <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    </main>

    <footer class="mt-0 border-t border-slate-100 pt-20">
        <div class="text-center mb-20 px-4" data-aos="fade-up">
            <h2 class="text-3xl md:text-4xl font-bold text-primary-dark mb-8">Sign up for all the latest<br>news & updates</h2>
            <form class="max-w-lg mx-auto flex items-end">
                <input type="email" placeholder="Your premium email address..." class="flex-grow email-input text-base px-2 py-3">
                <button type="submit" class="text-primary-dark font-bold text-sm ml-6 border-b-2 border-primary-dark pb-2 hover:text-accent hover:border-accent transition-colors tracking-widest uppercase">Subscribe</button>
            </form>
        </div>
        <div class="grid grid-cols-5 h-56 w-full overflow-hidden">
            <div class="bg-cover bg-center hover:scale-110 transition-transform duration-700 cursor-pointer" style="background-image: url('https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=600&q=80');"></div>
            <div class="bg-cover bg-center hover:scale-110 transition-transform duration-700 cursor-pointer" style="background-image: url('https://images.unsplash.com/photo-1595515106969-1ce29566ff1c?auto=format&fit=crop&w=600&q=80');"></div>
            <div class="bg-cover bg-center hover:scale-110 transition-transform duration-700 cursor-pointer" style="background-image: url('https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=600&q=80');"></div>
            <div class="bg-cover bg-center hover:scale-110 transition-transform duration-700 cursor-pointer" style="background-image: url('https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=600&q=80');"></div>
            <div class="bg-cover bg-center hover:scale-110 transition-transform duration-700 cursor-pointer" style="background-image: url('https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=600&q=80');"></div>
        </div>
        <div class="bg-white max-w-7xl mx-auto px-4 md:px-8 py-12 flex flex-col md:flex-row justify-between items-center text-sm">
            <div class="flex items-center space-x-2 mb-6 md:mb-0">
                <div class="w-6 h-6 rounded-full border-2 border-accent flex items-center justify-center">
                    <div class="w-2 h-2 bg-accent rounded-full"></div>
                </div>
                <span class="font-bold text-primary-dark uppercase tracking-widest text-base">Interior</span>
            </div>
            <div class="flex flex-wrap justify-center gap-x-8 gap-y-4 text-slate-500 font-medium">
                <a href="#" class="hover:text-accent transition-colors">About</a>
                <a href="gallery.html" class="hover:text-accent transition-colors">Projects</a>
                <a href="services.html" class="hover:text-accent transition-colors">Services</a>
                <a href="contact.html" class="hover:text-accent transition-colors">Contact</a>
            </div>
            <div class="text-slate-400 mt-6 md:mt-0 text-xs font-light tracking-wide">
                &copy; 2026 Interior Dubai. All rights reserved.
            </div>
        </div>
    </footer>
    <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
    <script>
        AOS.init({ duration: 800, once: true, offset: 100, easing: 'ease-out-cubic' });
    </script>
</body>
</html>"""

for service in services:
    with open(service['id'] + '.html', 'w', encoding='utf-8') as f:
        f.write(template.format(**service))

print('Pages generated successfully!')
