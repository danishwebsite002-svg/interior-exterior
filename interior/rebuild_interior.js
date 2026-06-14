const fs = require('fs');
const path = require('path');

const targetFile = path.join(__dirname, 'index.html');

const htmlContent = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Interior Mastery | Luxury Design</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <link href="https://cdnjs.cloudflare.com/ajax/libs/aos/2.3.4/aos.css" rel="stylesheet">
  <link rel="stylesheet" href="https://unpkg.com/swiper/swiper-bundle.min.css" />
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
  
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Outfit:wght@300;400;500;600;700&family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600&display=swap');
    
    body {
      font-family: "Outfit", sans-serif;
      background-color: #FFFFFF;
      color: #2A2A2A;
      overflow-x: hidden;
    }
    
    .font-serif {
      font-family: "Playfair Display", serif !important;
    }
    
    .text-accent { color: #A39171 !important; }
    .bg-accent { background-color: #A39171 !important; }
    .border-accent { border-color: #A39171 !important; }
    
    h1, h2, h3, h4, h5, h6 { color: #2A2A2A; }
    
    /* Buttons */
    .btn-outline {
      border: 1px solid #E5E7EB;
      color: #2A2A2A;
      transition: all 0.5s ease;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      background: transparent;
      padding: 1rem 2.5rem;
      text-transform: uppercase;
      letter-spacing: 0.15em;
      font-size: 0.75rem;
      font-weight: 600;
    }
    .btn-outline:hover {
      border-color: #A39171;
      color: #A39171;
      background-color: rgba(163, 145, 113, 0.05);
    }
    
    .btn-filled {
      background-color: #2A2A2A;
      color: #FFFFFF;
      transition: all 0.5s ease;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      padding: 1rem 2.5rem;
      text-transform: uppercase;
      letter-spacing: 0.15em;
      font-size: 0.75rem;
      font-weight: 600;
      border: 1px solid #2A2A2A;
    }
    .btn-filled:hover {
      background-color: transparent;
      color: #2A2A2A;
    }

    /* Hover Effects */
    .img-hover-zoom {
      transition: transform 1.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    }
    .group:hover .img-hover-zoom {
      transform: scale(1.05);
    }

    .framed-banner {
      border-radius: 20px;
      box-shadow: 0 40px 80px rgba(0,0,0,0.08);
      overflow: hidden;
    }
    
    .glass-overlay {
      background: rgba(255, 255, 255, 0.9);
      backdrop-filter: blur(12px);
      -webkit-backdrop-filter: blur(12px);
      box-shadow: 0 20px 40px rgba(0,0,0,0.05);
    }
    
    .parallax-banner {
      background-attachment: fixed;
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
    }

    .marquee-container {
      width: 100vw;
      overflow: hidden;
      white-space: nowrap;
      background: #FDFBF9;
      padding: 1.5rem 0;
      border-top: 1px solid #F0EBE1;
      border-bottom: 1px solid #F0EBE1;
    }
    .marquee-content {
      display: inline-block;
      animation: marquee 40s linear infinite;
      font-family: 'Playfair Display', serif;
      font-size: 2.5rem;
      font-style: italic;
      color: #A39171;
    }
    @keyframes marquee {
      0% { transform: translateX(0); }
      100% { transform: translateX(-50%); }
    }
    
    .arch-card {
      border-top-left-radius: 999px;
      border-top-right-radius: 999px;
    }
  </style>
</head>
<body class="antialiased">

  <!-- Navbar -->
  <nav class="fixed w-full z-50 transition-all duration-300 bg-white/95 backdrop-blur-md border-b border-gray-100 py-4">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center">
        <a href="index.html" class="text-2xl font-serif text-[#2A2A2A] tracking-wider">
          Elegance<span class="text-accent">.</span>
        </a>
        <div class="hidden md:flex space-x-8">
          <a href="index.html" class="text-accent text-sm uppercase tracking-widest font-medium">Home</a>
          <a href="about.html" class="text-gray-500 hover:text-accent text-sm uppercase tracking-widest font-medium transition-colors">About</a>
          <a href="services.html" class="text-gray-500 hover:text-accent text-sm uppercase tracking-widest font-medium transition-colors">Services</a>
          <a href="gallery.html" class="text-gray-500 hover:text-accent text-sm uppercase tracking-widest font-medium transition-colors">Portfolio</a>
          <a href="contact.html" class="text-gray-500 hover:text-accent text-sm uppercase tracking-widest font-medium transition-colors">Contact</a>
        </div>
      </div>
    </div>
  </nav>

  <!-- Gallery-Framed Hero Banner -->
  <section class="relative w-full min-h-screen bg-white flex items-center justify-center pt-24 pb-12 px-4 md:px-8 lg:px-12">
    <div class="relative w-full h-[80vh] md:h-[85vh] framed-banner group">
      <img src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=2500&auto=format&fit=crop" alt="Luxury Interior Banner" class="absolute inset-0 w-full h-full object-cover img-hover-zoom" />
      <div class="absolute inset-0 bg-black/10 group-hover:bg-black/5 transition-colors duration-700"></div>
      
      <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[90%] max-w-2xl glass-overlay p-10 md:p-16 text-center" data-aos="fade-up" data-aos-duration="1500">
        <h4 class="text-accent uppercase tracking-[0.4em] text-xs font-bold mb-6">Interior Architecture</h4>
        <h1 class="text-5xl md:text-7xl font-serif text-[#2A2A2A] leading-tight mb-6">
          Curated <br/> <span class="italic font-light text-accent">Elegance</span>
        </h1>
        <p class="text-gray-500 text-sm md:text-base mb-10 font-light leading-relaxed tracking-wider">
          Transforming exclusive residences into breathtaking works of art in the UAE.
        </p>
        <a href="gallery.html" class="btn-filled">View Portfolio</a>
      </div>
    </div>
  </section>

  <!-- Marquee -->
  <div class="marquee-container">
    <div class="marquee-content">
      Bespoke Interiors &nbsp; — &nbsp; Luxury Spaces &nbsp; — &nbsp; Timeless Elegance &nbsp; — &nbsp; Bespoke Interiors &nbsp; — &nbsp; Luxury Spaces &nbsp; — &nbsp; Timeless Elegance &nbsp; — &nbsp;
    </div>
  </div>

  <!-- Editorial About Section -->
  <section class="py-24 md:py-32 bg-[#FDFBF9] relative overflow-hidden">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <div class="text-center max-w-4xl mx-auto mb-20" data-aos="fade-up" data-aos-duration="1200">
        <p class="text-3xl md:text-5xl font-serif text-[#2A2A2A] leading-snug italic font-light">
          "Design is how it works harmoniously within your daily life."
        </p>
        <div class="w-16 h-[1px] bg-accent mx-auto mt-8 mb-6"></div>
        <p class="uppercase tracking-widest text-xs font-semibold text-gray-500">Our Design Philosophy</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
        <div class="md:col-span-5 space-y-8" data-aos="fade-up" data-aos-duration="1500">
          <div class="w-full h-[500px] group overflow-hidden bg-white p-4 shadow-sm border border-gray-100">
            <img src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=1500&auto=format&fit=crop" alt="Living Space" class="w-full h-full object-cover img-hover-zoom">
          </div>
          <div class="px-4 text-center md:text-left">
            <h3 class="text-2xl font-serif text-[#2A2A2A] mb-3">Minimalist Curation</h3>
            <p class="text-gray-500 text-sm leading-relaxed font-light">By stripping away the non-essential, we allow the premium materials to speak for themselves.</p>
          </div>
        </div>

        <div class="md:col-span-7 space-y-8 md:mt-24" data-aos="fade-up" data-aos-duration="1500" data-aos-delay="200">
          <div class="w-full h-[600px] group overflow-hidden bg-white p-4 shadow-sm border border-gray-100">
            <img src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=1500&auto=format&fit=crop" alt="Material Details" class="w-full h-full object-cover img-hover-zoom">
          </div>
          <div class="px-4 text-center md:text-left">
            <h3 class="text-2xl font-serif text-[#2A2A2A] mb-3">Tactile Harmony</h3>
            <p class="text-gray-500 text-sm leading-relaxed font-light">Texture is the soul of our interiors. We meticulously source organic linens and raw woods.</p>
          </div>
        </div>
      </div>

    </div>
  </section>

  <!-- Parallax Statement Banner -->
  <section class="relative w-full h-[60vh] md:h-[70vh] parallax-banner" style="background-image: url('https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2500&auto=format&fit=crop');">
    <div class="absolute inset-0 bg-[#1A1A1A]/70"></div>
    <div class="relative z-10 w-full h-full flex flex-col items-center justify-center text-center px-4" data-aos="zoom-in" data-aos-duration="1500">
      <h2 class="text-4xl md:text-6xl font-serif text-white leading-tight max-w-4xl mx-auto mb-10">
        Transforming spaces into <br/> <span class="italic font-light text-accent">timeless experiences.</span>
      </h2>
      <a href="contact.html" class="px-10 py-4 bg-transparent text-white border border-white hover:bg-white hover:text-[#2A2A2A] transition-all duration-500 tracking-widest uppercase text-xs font-semibold">Book Consultation</a>
    </div>
  </section>

  <!-- Services Section -->
  <section class="py-24 md:py-32 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <div class="flex flex-col md:flex-row md:items-end justify-between mb-16" data-aos="fade-up">
        <div>
          <h2 class="text-4xl md:text-5xl font-serif text-[#2A2A2A] mb-4">Our Expertise</h2>
          <p class="text-gray-500 max-w-md font-light">Comprehensive interior design services tailored for the most exclusive properties.</p>
        </div>
        <a href="services.html" class="btn-outline mt-6 md:mt-0">View All Services</a>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <!-- Service 1 -->
        <div class="group cursor-pointer" data-aos="fade-up" data-aos-delay="100">
          <div class="w-full h-80 overflow-hidden mb-6 rounded-sm">
            <img src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=1500&auto=format&fit=crop" class="w-full h-full object-cover img-hover-zoom" alt="Spatial Planning">
          </div>
          <h3 class="text-xl font-serif text-[#2A2A2A] mb-2 group-hover:text-accent transition-colors">Spatial Planning</h3>
          <p class="text-gray-500 text-sm font-light">Optimizing layouts for flawless flow and functionality.</p>
        </div>
        <!-- Service 2 -->
        <div class="group cursor-pointer" data-aos="fade-up" data-aos-delay="200">
          <div class="w-full h-80 overflow-hidden mb-6 rounded-sm">
            <img src="https://images.unsplash.com/photo-1593696140826-c58b021acf8b?q=80&w=1500&auto=format&fit=crop" class="w-full h-full object-cover img-hover-zoom" alt="Bespoke Furnishing">
          </div>
          <h3 class="text-xl font-serif text-[#2A2A2A] mb-2 group-hover:text-accent transition-colors">Bespoke Furnishing</h3>
          <p class="text-gray-500 text-sm font-light">Custom furniture perfectly scaled for your unique spaces.</p>
        </div>
        <!-- Service 3 -->
        <div class="group cursor-pointer" data-aos="fade-up" data-aos-delay="300">
          <div class="w-full h-80 overflow-hidden mb-6 rounded-sm">
            <img src="https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1500&auto=format&fit=crop" class="w-full h-full object-cover img-hover-zoom" alt="Material Curation">
          </div>
          <h3 class="text-xl font-serif text-[#2A2A2A] mb-2 group-hover:text-accent transition-colors">Material Curation</h3>
          <p class="text-gray-500 text-sm font-light">Sourcing the finest marble, wood, and textiles globally.</p>
        </div>
      </div>
      
    </div>
  </section>

  <!-- Testimonials Section (Clean White) -->
  <section class="py-24 bg-[#FDFBF9] border-t border-[#F0EBE1]">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h2 class="text-4xl font-serif text-[#2A2A2A] mb-16">Client <span class="italic text-accent">Reflections</span></h2>
      
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div class="bg-white p-10 shadow-sm border border-gray-100" data-aos="fade-up" data-aos-delay="100">
          <div class="flex justify-center mb-4 text-accent text-sm"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i></div>
          <p class="text-gray-600 font-light italic mb-6 text-sm leading-relaxed">"The attention to detail and material quality completely transformed our Dubai penthouse into a sanctuary."</p>
          <h4 class="text-[#2A2A2A] font-serif text-lg">Sarah Al Maktoum</h4>
          <span class="text-xs text-gray-400 uppercase tracking-widest">Penthouse Owner</span>
        </div>
        
        <div class="bg-white p-10 shadow-sm border border-gray-100" data-aos="fade-up" data-aos-delay="200">
          <div class="flex justify-center mb-4 text-accent text-sm"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i></div>
          <p class="text-gray-600 font-light italic mb-6 text-sm leading-relaxed">"A flawless execution from concept to handover. Their bespoke furnishing perfectly matches our lifestyle."</p>
          <h4 class="text-[#2A2A2A] font-serif text-lg">James Harrison</h4>
          <span class="text-xs text-gray-400 uppercase tracking-widest">Villa Renovation</span>
        </div>

        <div class="bg-white p-10 shadow-sm border border-gray-100" data-aos="fade-up" data-aos-delay="300">
          <div class="flex justify-center mb-4 text-accent text-sm"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i></div>
          <p class="text-gray-600 font-light italic mb-6 text-sm leading-relaxed">"Elegance and warmth perfectly balanced. It is rare to find a design firm with such profound vision."</p>
          <h4 class="text-[#2A2A2A] font-serif text-lg">Elena Rostova</h4>
          <span class="text-xs text-gray-400 uppercase tracking-widest">Luxury Estate</span>
        </div>
      </div>
    </div>
  </section>

  <!-- Clean Minimal Footer -->
  <footer class="bg-white pt-20 pb-10 border-t border-gray-100">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        <div class="md:col-span-2">
          <a href="index.html" class="text-3xl font-serif text-[#2A2A2A] tracking-wider block mb-6">
            Elegance<span class="text-accent">.</span>
          </a>
          <p class="text-gray-500 font-light text-sm max-w-sm leading-relaxed">
            Crafting the most exclusive, bespoke interior environments in the UAE. Minimalism meets absolute luxury.
          </p>
        </div>
        <div>
          <h4 class="text-[#2A2A2A] font-semibold uppercase tracking-widest text-xs mb-6">Explore</h4>
          <ul class="space-y-4">
            <li><a href="about.html" class="text-gray-500 hover:text-accent transition-colors text-sm font-light">About Us</a></li>
            <li><a href="services.html" class="text-gray-500 hover:text-accent transition-colors text-sm font-light">Our Services</a></li>
            <li><a href="gallery.html" class="text-gray-500 hover:text-accent transition-colors text-sm font-light">Portfolio</a></li>
          </ul>
        </div>
        <div>
          <h4 class="text-[#2A2A2A] font-semibold uppercase tracking-widest text-xs mb-6">Connect</h4>
          <ul class="space-y-4">
            <li class="text-gray-500 text-sm font-light">Dubai, UAE</li>
            <li><a href="mailto:design@elegance.com" class="text-gray-500 hover:text-accent transition-colors text-sm font-light">design@elegance.com</a></li>
            <li><a href="#" class="text-gray-500 hover:text-accent transition-colors text-sm font-light">+971 50 123 4567</a></li>
          </ul>
        </div>
      </div>
      <div class="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center">
        <p class="text-gray-400 text-xs tracking-wider uppercase font-light">&copy; 2026 Elegance Interiors. All rights reserved.</p>
        <div class="flex space-x-6 mt-4 md:mt-0 text-gray-400">
          <a href="#" class="hover:text-accent transition-colors"><i class="fab fa-instagram"></i></a>
          <a href="#" class="hover:text-accent transition-colors"><i class="fab fa-pinterest"></i></a>
          <a href="#" class="hover:text-accent transition-colors"><i class="fab fa-linkedin-in"></i></a>
        </div>
      </div>
    </div>
  </footer>

  <script src="https://cdnjs.cloudflare.com/ajax/libs/aos/2.3.4/aos.js"></script>
  <script>
    AOS.init({ once: true });
  </script>
</body>
</html>`;

fs.writeFileSync(targetFile, htmlContent);
console.log('Successfully completely rebuilt interior/index.html from top to bottom.');
