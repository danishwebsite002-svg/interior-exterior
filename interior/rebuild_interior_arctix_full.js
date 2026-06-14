const fs = require('fs');
const path = require('path');

const targetFile = path.join(__dirname, 'index.html');

const htmlContent = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Arctix | Architecture & Interior Design</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <link href="https://cdnjs.cloudflare.com/ajax/libs/aos/2.3.4/aos.css" rel="stylesheet">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
  
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Jost:wght@300;400;500;600;700&display=swap');
    
    body {
      font-family: 'Jost', sans-serif;
      background-color: #FFFFFF;
      color: #555555;
      overflow-x: hidden;
    }
    
    h1, h2, h3, h4, h5, h6 { color: #161B29; font-weight: 700; }
    
    /* Exact Colors from screenshot */
    .bg-navy { background-color: #161B29; }
    .text-navy { color: #161B29; }
    .bg-copper { background-color: #B27C5A; }
    .text-copper { color: #B27C5A; }
    .bg-offwhite { background-color: #FBF9F6; }

    /* Buttons */
    .btn-copper {
      background-color: #B27C5A;
      color: #FFFFFF;
      padding: 0.875rem 2.5rem;
      font-weight: 600;
      font-size: 0.875rem;
      transition: all 0.3s ease;
      display: inline-flex;
      align-items: center;
      justify-content: center;
    }
    .btn-copper:hover { background-color: #161B29; color: #FFFFFF; }
    
    .btn-navy {
      background-color: #161B29;
      color: #FFFFFF;
      padding: 0.875rem 2.5rem;
      font-weight: 600;
      font-size: 0.875rem;
      transition: all 0.3s ease;
      display: inline-flex;
      align-items: center;
      justify-content: center;
    }
    .btn-navy:hover { background-color: #B27C5A; color: #FFFFFF; }

    /* Custom Layouts */
    .hero-overlay {
      background: linear-gradient(90deg, rgba(22,27,41,0.95) 0%, rgba(22,27,41,0.7) 40%, rgba(22,27,41,0.2) 100%);
    }

    /* Accordion styles */
    .accordion-border { border-bottom: 1px solid #E5E7EB; }
    
    .img-zoom {
      transition: transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    }
    .group:hover .img-zoom { transform: scale(1.05); }

    .border-copper { border-color: #B27C5A; }
  </style>
</head>
<body class="antialiased">

  <!-- 1. Top Navbar -->
  <nav class="w-full bg-white border-b border-gray-100 relative z-50">
    <div class="max-w-[1400px] mx-auto px-4 lg:px-8 flex justify-between items-center h-20">
      
      <!-- Logo -->
      <a href="index.html" class="flex items-center space-x-2">
        <span class="text-2xl font-bold text-navy tracking-tight">Arctix<span class="text-copper">.</span></span>
      </a>

      <!-- Links -->
      <div class="hidden md:flex space-x-8 items-center text-sm font-semibold text-navy tracking-wide">
        <a href="#" class="hover:text-copper transition-colors">Home</a>
        <a href="#" class="hover:text-copper transition-colors">About Us</a>
        <a href="#" class="hover:text-copper transition-colors">Pages</a>
        <a href="#" class="hover:text-copper transition-colors">Blog</a>
        <a href="#" class="hover:text-copper transition-colors">Contact</a>
      </div>

      <!-- Right actions -->
      <div class="hidden md:flex items-center space-x-6">
        <button class="text-navy hover:text-copper"><i class="fas fa-search"></i></button>
        <a href="#" class="btn-navy">Get A Quote</a>
      </div>
    </div>
  </nav>

  <!-- 2. Hero Section -->
  <section class="relative w-full h-[85vh] bg-navy overflow-hidden">
    <!-- Dark Architectural BG -->
    <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2500&auto=format&fit=crop" class="absolute inset-0 w-full h-full object-cover opacity-40 mix-blend-overlay">
    <div class="absolute inset-0 hero-overlay"></div>

    <div class="relative w-full h-full max-w-[1400px] mx-auto px-4 lg:px-8 flex items-center">
      <div class="max-w-3xl" data-aos="fade-up" data-aos-duration="1200">
        <p class="text-copper text-sm font-semibold tracking-[0.2em] uppercase mb-4">Architecture & Interior</p>
        <h1 class="text-5xl lg:text-7xl font-bold text-white leading-[1.1] mb-8">ARCHITECTURE FOR <br/>INSPIRED LIVING.</h1>
        <p class="text-gray-300 text-base leading-relaxed mb-10 max-w-xl">
          We bring spaces to life with striking architecture and thoughtful interior design. From concept to reality, we craft environments that inspire.
        </p>
        <a href="#" class="btn-copper">Discover More</a>
      </div>
    </div>

    <!-- Overlapping Bottom Right Box -->
    <div class="absolute right-0 bottom-0 lg:right-20 lg:-bottom-20 w-[450px] bg-navy border border-gray-800 p-6 flex gap-6 z-20 shadow-2xl" data-aos="fade-left" data-aos-delay="500">
      <div class="w-24 h-24 shrink-0 overflow-hidden">
         <img src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=400&auto=format&fit=crop" class="w-full h-full object-cover">
      </div>
      <div>
        <h4 class="text-white text-lg font-semibold mb-2">Modern Architecture Design</h4>
        <p class="text-gray-400 text-xs mb-4">Explore our latest innovative spaces.</p>
        <button class="w-8 h-8 bg-white text-navy flex items-center justify-center hover:bg-copper hover:text-white transition-colors"><i class="fas fa-arrow-right text-xs"></i></button>
      </div>
    </div>
  </section>

  <!-- 3. Services Strip -->
  <section class="py-20 bg-white">
    <div class="max-w-[1400px] mx-auto px-4 lg:px-8">
      <div class="text-center mb-16">
        <p class="text-copper text-xs font-semibold tracking-widest uppercase mb-2">Our Services</p>
        <h2 class="text-3xl font-bold">Design & Planning Solutions</h2>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-5 gap-8 border-t border-b border-gray-100 py-12">
        <!-- Service 1 -->
        <div class="text-center px-4 border-r border-gray-100 group">
          <i class="fas fa-drafting-compass text-3xl text-navy mb-4 group-hover:text-copper transition-colors"></i>
          <h4 class="text-base font-bold mb-3">Space Planning</h4>
          <p class="text-gray-500 text-xs leading-relaxed">Optimizing layouts for flawless flow and functionality.</p>
        </div>
        <!-- Service 2 -->
        <div class="text-center px-4 border-r border-gray-100 group">
          <i class="fas fa-hard-hat text-3xl text-navy mb-4 group-hover:text-copper transition-colors"></i>
          <h4 class="text-base font-bold mb-3">Architecture Design</h4>
          <p class="text-gray-500 text-xs leading-relaxed">Structural integrity meets modern aesthetics.</p>
        </div>
        <!-- Service 3 -->
        <div class="text-center px-4 border-r border-gray-100 group">
          <i class="fas fa-couch text-3xl text-navy mb-4 group-hover:text-copper transition-colors"></i>
          <h4 class="text-base font-bold mb-3">Interior Design</h4>
          <p class="text-gray-500 text-xs leading-relaxed">Curating materials, textures, and bespoke furniture.</p>
        </div>
        <!-- Service 4 -->
        <div class="text-center px-4 border-r border-gray-100 group">
          <i class="fas fa-city text-3xl text-navy mb-4 group-hover:text-copper transition-colors"></i>
          <h4 class="text-base font-bold mb-3">Urban Planning</h4>
          <p class="text-gray-500 text-xs leading-relaxed">Designing masterplans for sustainable communities.</p>
        </div>
        <!-- Service 5 -->
        <div class="text-center px-4 group">
          <i class="fas fa-tools text-3xl text-navy mb-4 group-hover:text-copper transition-colors"></i>
          <h4 class="text-base font-bold mb-3">Construction</h4>
          <p class="text-gray-500 text-xs leading-relaxed">End-to-end execution with flawless precision.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- 4. About Section -->
  <section class="py-20 bg-offwhite">
    <div class="max-w-[1400px] mx-auto px-4 lg:px-8">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        <!-- Left Image with Badge -->
        <div class="relative w-full h-[600px] pr-12 pb-12" data-aos="fade-right">
          <div class="w-full h-full overflow-hidden">
             <img src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=1500&auto=format&fit=crop" class="w-full h-full object-cover">
          </div>
          <!-- 25 Years Badge -->
          <div class="absolute bottom-0 right-0 bg-copper text-white p-8 w-48 text-center flex flex-col items-center justify-center">
            <span class="text-5xl font-bold mb-1">25</span>
            <span class="text-sm font-medium tracking-wider uppercase">Years Of<br/>Experience</span>
          </div>
        </div>

        <!-- Right Content -->
        <div data-aos="fade-left">
          <p class="text-copper text-xs font-semibold tracking-widest uppercase mb-4">About Our Company</p>
          <h2 class="text-4xl lg:text-5xl font-bold text-navy leading-[1.2] mb-6">
            Our firm around expertise in architecture and interior design.
          </h2>
          <p class="text-gray-500 text-sm leading-relaxed mb-8">
            We are committed to delivering innovative, sustainable, and aesthetically brilliant spaces. Our team of experts works closely with clients to transform their visions into award-winning realities.
          </p>
          
          <div class="space-y-4 mb-10">
            <div class="flex items-center"><i class="fas fa-check-circle text-copper mr-3"></i> <span class="text-navy font-semibold text-sm">Award Winning Architecture Design</span></div>
            <div class="flex items-center"><i class="fas fa-check-circle text-copper mr-3"></i> <span class="text-navy font-semibold text-sm">High-Quality Materials & Execution</span></div>
            <div class="flex items-center"><i class="fas fa-check-circle text-copper mr-3"></i> <span class="text-navy font-semibold text-sm">Dedicated Team of Professionals</span></div>
          </div>

          <div class="flex items-center gap-8">
            <a href="#" class="btn-copper">Discover More</a>
            <div class="flex items-center gap-4 border-l border-gray-300 pl-8">
              <div class="w-12 h-12 rounded-full overflow-hidden"><img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=200&auto=format&fit=crop" class="w-full h-full object-cover"></div>
              <div>
                <p class="text-navy font-bold text-sm">David Miller</p>
                <p class="text-gray-500 text-xs">CEO & Founder</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>

  <!-- 5. Recent Projects (with floating center card) -->
  <section class="py-24 bg-white relative">
    <div class="max-w-[1400px] mx-auto px-4 lg:px-8">
      
      <div class="flex justify-between items-end mb-12">
        <div>
          <p class="text-copper text-xs font-semibold tracking-widest uppercase mb-2">Our Portfolio</p>
          <h2 class="text-4xl font-bold text-navy">Explore our recent project</h2>
        </div>
        <a href="#" class="btn-copper">See All Projects</a>
      </div>

      <!-- Massive Image with floating center card -->
      <div class="relative w-full h-[600px] mb-20 group" data-aos="zoom-in" data-aos-duration="1200">
        <div class="w-full h-full overflow-hidden">
          <img src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000&auto=format&fit=crop" class="w-full h-full object-cover img-zoom">
        </div>
        
        <!-- Floating Center Card -->
        <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-6 shadow-2xl text-center w-80">
          <h4 class="text-navy font-bold text-xl mb-2">Ocean View Villa</h4>
          <p class="text-copper text-xs font-semibold mb-6">Residential / Interior</p>
          <div class="w-full h-32 overflow-hidden mb-6">
             <img src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=600&auto=format&fit=crop" class="w-full h-full object-cover">
          </div>
          <a href="#" class="text-navy font-bold text-xs uppercase tracking-widest hover:text-copper transition-colors border-b-2 border-copper pb-1">View Details</a>
        </div>
      </div>

      <!-- Partner Logos -->
      <div class="flex justify-between items-center opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
        <i class="fab fa-aws text-4xl"></i>
        <i class="fab fa-slack text-4xl"></i>
        <i class="fab fa-google text-4xl"></i>
        <i class="fab fa-microsoft text-4xl"></i>
        <i class="fab fa-figma text-4xl"></i>
      </div>
    </div>
  </section>

  <!-- 6. Video Parallax Banner -->
  <section class="relative w-full h-[400px] flex justify-center items-center overflow-hidden">
    <img src="https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=2500&auto=format&fit=crop" class="absolute inset-0 w-full h-full object-cover opacity-80 mix-blend-multiply bg-navy" style="background-attachment: fixed;">
    <button class="relative z-10 w-20 h-20 bg-copper text-white flex items-center justify-center hover:bg-white hover:text-copper transition-colors">
      <i class="fas fa-play text-2xl"></i>
    </button>
  </section>

  <!-- 7. Process Steps -->
  <section class="py-24 bg-white">
    <div class="max-w-[1400px] mx-auto px-4 lg:px-8">
      <div class="text-center mb-16">
        <p class="text-copper text-xs font-semibold tracking-widest uppercase mb-2">How We Work</p>
        <h2 class="text-4xl font-bold">Our Work Process</h2>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <!-- Step 1 -->
        <div class="border border-gray-200 p-10 relative group hover:border-copper transition-colors bg-white mt-0" data-aos="fade-up" data-aos-delay="100">
          <div class="text-6xl font-bold text-gray-100 absolute top-4 right-4 z-0 group-hover:text-copper/10 transition-colors">01</div>
          <div class="relative z-10">
            <h4 class="text-xl font-bold text-navy mb-4">Planning & Strategy</h4>
            <p class="text-gray-500 text-sm leading-relaxed">We analyze your requirements and build a comprehensive roadmap for the project.</p>
          </div>
        </div>
        <!-- Step 2 -->
        <div class="border border-gray-200 p-10 relative group hover:border-copper transition-colors bg-white mt-10" data-aos="fade-up" data-aos-delay="200">
          <div class="text-6xl font-bold text-gray-100 absolute top-4 right-4 z-0 group-hover:text-copper/10 transition-colors">02</div>
          <div class="relative z-10">
            <h4 class="text-xl font-bold text-navy mb-4">Design & Architecture</h4>
            <p class="text-gray-500 text-sm leading-relaxed">Our architects draft brilliant structural blueprints and interior 3D visualizations.</p>
          </div>
        </div>
        <!-- Step 3 -->
        <div class="border border-gray-200 p-10 relative group hover:border-copper transition-colors bg-white mt-20" data-aos="fade-up" data-aos-delay="300">
          <div class="text-6xl font-bold text-gray-100 absolute top-4 right-4 z-0 group-hover:text-copper/10 transition-colors">03</div>
          <div class="relative z-10">
            <h4 class="text-xl font-bold text-navy mb-4">Build & Handover</h4>
            <p class="text-gray-500 text-sm leading-relaxed">Flawless execution by our builders, delivering the final masterpiece on time.</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- 8. Stats & Image Section -->
  <section class="py-24 bg-offwhite">
    <div class="max-w-[1400px] mx-auto px-4 lg:px-8">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        <!-- Left Stats -->
        <div data-aos="fade-right">
          <p class="text-copper text-xs font-semibold tracking-widest uppercase mb-4">Why Choose Us</p>
          <h2 class="text-4xl font-bold text-navy leading-[1.2] mb-6">
            We provide the best design solutions for you.
          </h2>
          <p class="text-gray-500 text-sm leading-relaxed mb-10">
            Our commitment to excellence is reflected in our numbers. We deliver outstanding results across all scales of architecture.
          </p>
          <a href="#" class="btn-copper mb-12">Discover More</a>

          <div class="grid grid-cols-2 gap-6">
            <div class="bg-white p-6 border border-gray-100 text-center shadow-sm">
              <i class="fas fa-layer-group text-3xl text-copper mb-3"></i>
              <h4 class="text-navy font-bold text-lg mb-1">Architecture</h4>
              <p class="text-gray-500 text-xs">Modern Structures</p>
            </div>
            <div class="bg-white p-6 border border-gray-100 text-center shadow-sm">
              <i class="fas fa-paint-roller text-3xl text-copper mb-3"></i>
              <h4 class="text-navy font-bold text-lg mb-1">Interior</h4>
              <p class="text-gray-500 text-xs">Bespoke Design</p>
            </div>
            <div class="bg-white p-6 border border-gray-100 text-center shadow-sm">
              <i class="fas fa-hammer text-3xl text-copper mb-3"></i>
              <h4 class="text-navy font-bold text-lg mb-1">Construction</h4>
              <p class="text-gray-500 text-xs">Flawless Builds</p>
            </div>
            <div class="bg-white p-6 border border-gray-100 text-center shadow-sm">
              <i class="fas fa-couch text-3xl text-copper mb-3"></i>
              <h4 class="text-navy font-bold text-lg mb-1">Furniture</h4>
              <p class="text-gray-500 text-xs">Custom Pieces</p>
            </div>
          </div>
        </div>

        <!-- Right Image -->
        <div class="w-full h-[700px] overflow-hidden" data-aos="fade-left">
           <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1500&auto=format&fit=crop" class="w-full h-full object-cover">
        </div>

      </div>
    </div>
  </section>

  <!-- 9. Team / FAQ Section -->
  <section class="py-24 bg-white">
    <div class="max-w-[1400px] mx-auto px-4 lg:px-8">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        <!-- Left Image -->
        <div class="w-full h-[600px] bg-gray-100 overflow-hidden" data-aos="zoom-in">
           <img src="https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=1500&auto=format&fit=crop" class="w-full h-full object-cover">
        </div>

        <!-- Right Accordion -->
        <div data-aos="fade-up">
          <p class="text-copper text-xs font-semibold tracking-widest uppercase mb-4">General Questions</p>
          <h2 class="text-4xl font-bold text-navy leading-[1.2] mb-10">
            Frequently Asked Questions
          </h2>
          
          <div class="space-y-4">
            <!-- FAQ 1 -->
            <div class="accordion-border pb-4">
              <div class="flex justify-between items-center cursor-pointer group">
                <h4 class="text-lg font-bold text-navy group-hover:text-copper transition-colors">What is your design process?</h4>
                <div class="w-8 h-8 rounded-full bg-copper text-white flex items-center justify-center shrink-0"><i class="fas fa-minus text-xs"></i></div>
              </div>
              <p class="text-gray-500 text-sm mt-4 leading-relaxed pr-10">We start with a detailed consultation, followed by conceptual sketches, 3D renderings, and finally execution with our partnered contractors.</p>
            </div>
            <!-- FAQ 2 -->
            <div class="accordion-border py-4">
              <div class="flex justify-between items-center cursor-pointer group">
                <h4 class="text-lg font-bold text-navy group-hover:text-copper transition-colors">How long does a project take?</h4>
                <div class="w-8 h-8 rounded-full bg-gray-100 text-navy flex items-center justify-center shrink-0 group-hover:bg-copper group-hover:text-white transition-colors"><i class="fas fa-plus text-xs"></i></div>
              </div>
            </div>
            <!-- FAQ 3 -->
            <div class="accordion-border py-4">
              <div class="flex justify-between items-center cursor-pointer group">
                <h4 class="text-lg font-bold text-navy group-hover:text-copper transition-colors">Do you provide custom furniture?</h4>
                <div class="w-8 h-8 rounded-full bg-gray-100 text-navy flex items-center justify-center shrink-0 group-hover:bg-copper group-hover:text-white transition-colors"><i class="fas fa-plus text-xs"></i></div>
              </div>
            </div>
            <!-- FAQ 4 -->
            <div class="accordion-border py-4">
              <div class="flex justify-between items-center cursor-pointer group">
                <h4 class="text-lg font-bold text-navy group-hover:text-copper transition-colors">What areas do you service?</h4>
                <div class="w-8 h-8 rounded-full bg-gray-100 text-navy flex items-center justify-center shrink-0 group-hover:bg-copper group-hover:text-white transition-colors"><i class="fas fa-plus text-xs"></i></div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>

  <!-- 10. Testimonials Slider -->
  <section class="py-24 bg-navy relative overflow-hidden">
    <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2500&auto=format&fit=crop" class="absolute inset-0 w-full h-full object-cover opacity-20 mix-blend-overlay">
    
    <div class="max-w-[1400px] mx-auto px-4 lg:px-8 relative z-10">
      <div class="text-center mb-16">
        <p class="text-copper text-xs font-semibold tracking-widest uppercase mb-2">Testimonials</p>
        <h2 class="text-4xl font-bold text-white">What Our Clients Say</h2>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <!-- Review 1 -->
        <div class="bg-white p-10 relative">
          <i class="fas fa-quote-left text-6xl text-gray-100 absolute top-6 right-6"></i>
          <div class="flex text-copper text-sm mb-4"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i></div>
          <p class="text-gray-600 text-base leading-relaxed italic mb-8">"The team at Arctix completely transformed our office space. Their attention to detail and modern aesthetic exceeded all expectations."</p>
          <div class="flex items-center gap-4">
            <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop" class="w-12 h-12 rounded-full object-cover">
            <div>
              <h4 class="text-navy font-bold text-base">John Carter</h4>
              <p class="text-gray-400 text-xs">Corporate Client</p>
            </div>
          </div>
        </div>
        
        <!-- Review 2 -->
        <div class="bg-white p-10 relative">
          <i class="fas fa-quote-left text-6xl text-gray-100 absolute top-6 right-6"></i>
          <div class="flex text-copper text-sm mb-4"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i></div>
          <p class="text-gray-600 text-base leading-relaxed italic mb-8">"Building our dream home was seamless thanks to their architectural expertise. A truly inspired living space."</p>
          <div class="flex items-center gap-4">
            <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop" class="w-12 h-12 rounded-full object-cover">
            <div>
              <h4 class="text-navy font-bold text-base">Sarah Jenkins</h4>
              <p class="text-gray-400 text-xs">Homeowner</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- 11. Counters -->
  <section class="py-16 bg-white border-b border-gray-100">
    <div class="max-w-[1400px] mx-auto px-4 lg:px-8">
      <div class="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        <div>
          <i class="fas fa-trophy text-4xl text-copper mb-4"></i>
          <h3 class="text-5xl font-bold text-navy mb-2">2K+</h3>
          <p class="text-gray-500 font-medium text-sm">Winning Awards</p>
        </div>
        <div>
          <i class="fas fa-hard-hat text-4xl text-copper mb-4"></i>
          <h3 class="text-5xl font-bold text-navy mb-2">1K+</h3>
          <p class="text-gray-500 font-medium text-sm">Expert Staff</p>
        </div>
        <div>
          <i class="fas fa-building text-4xl text-copper mb-4"></i>
          <h3 class="text-5xl font-bold text-navy mb-2">8K+</h3>
          <p class="text-gray-500 font-medium text-sm">Completed Projects</p>
        </div>
        <div>
          <i class="fas fa-smile text-4xl text-copper mb-4"></i>
          <h3 class="text-5xl font-bold text-navy mb-2">3K+</h3>
          <p class="text-gray-500 font-medium text-sm">Happy Clients</p>
        </div>
      </div>
    </div>
  </section>

  <!-- 12. Blog Section -->
  <section class="py-24 bg-offwhite">
    <div class="max-w-[1400px] mx-auto px-4 lg:px-8">
      <div class="text-center mb-16">
        <p class="text-copper text-xs font-semibold tracking-widest uppercase mb-2">Latest News</p>
        <h2 class="text-4xl font-bold text-navy">Read Our Articles</h2>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <!-- Blog 1 -->
        <div class="bg-white flex flex-col group border border-gray-100 hover:shadow-lg transition-shadow">
          <div class="w-full h-48 overflow-hidden">
            <img src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=800&auto=format&fit=crop" class="w-full h-full object-cover img-zoom">
          </div>
          <div class="p-6">
            <p class="text-copper text-xs font-semibold mb-3">Architecture • Oct 12, 2026</p>
            <h4 class="text-navy font-bold text-lg mb-4 group-hover:text-copper transition-colors">The Future of Sustainable Urban Architecture</h4>
            <a href="#" class="text-navy text-xs font-bold uppercase tracking-widest hover:text-copper">Read More <i class="fas fa-arrow-right ml-1"></i></a>
          </div>
        </div>
        <!-- Blog 2 -->
        <div class="bg-white flex flex-col group border border-gray-100 hover:shadow-lg transition-shadow">
          <div class="w-full h-48 overflow-hidden">
            <img src="https://images.unsplash.com/photo-1593696140826-c58b021acf8b?q=80&w=800&auto=format&fit=crop" class="w-full h-full object-cover img-zoom">
          </div>
          <div class="p-6">
            <p class="text-copper text-xs font-semibold mb-3">Interior • Oct 05, 2026</p>
            <h4 class="text-navy font-bold text-lg mb-4 group-hover:text-copper transition-colors">Minimalist Interior Design Trends for 2027</h4>
            <a href="#" class="text-navy text-xs font-bold uppercase tracking-widest hover:text-copper">Read More <i class="fas fa-arrow-right ml-1"></i></a>
          </div>
        </div>
        <!-- Blog 3 -->
        <div class="bg-white flex flex-col group border border-gray-100 hover:shadow-lg transition-shadow">
          <div class="w-full h-48 overflow-hidden">
            <img src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=800&auto=format&fit=crop" class="w-full h-full object-cover img-zoom">
          </div>
          <div class="p-6">
            <p class="text-copper text-xs font-semibold mb-3">Construction • Sep 28, 2026</p>
            <h4 class="text-navy font-bold text-lg mb-4 group-hover:text-copper transition-colors">New Materials Shaping Modern Construction</h4>
            <a href="#" class="text-navy text-xs font-bold uppercase tracking-widest hover:text-copper">Read More <i class="fas fa-arrow-right ml-1"></i></a>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- 13. Instagram Grid -->
  <section class="w-full">
    <div class="grid grid-cols-2 md:grid-cols-6 gap-0 relative group">
      <div class="w-full aspect-square"><img src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=400&auto=format&fit=crop" class="w-full h-full object-cover"></div>
      <div class="w-full aspect-square"><img src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=400&auto=format&fit=crop" class="w-full h-full object-cover"></div>
      <div class="w-full aspect-square"><img src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=400&auto=format&fit=crop" class="w-full h-full object-cover"></div>
      <div class="w-full aspect-square"><img src="https://images.unsplash.com/photo-1593696140826-c58b021acf8b?q=80&w=400&auto=format&fit=crop" class="w-full h-full object-cover"></div>
      <div class="w-full aspect-square"><img src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=400&auto=format&fit=crop" class="w-full h-full object-cover"></div>
      <div class="w-full aspect-square"><img src="https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=400&auto=format&fit=crop" class="w-full h-full object-cover"></div>
      
      <!-- Overlay Button -->
      <div class="absolute inset-0 bg-navy/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 cursor-pointer">
        <a href="#" class="btn-copper"><i class="fab fa-instagram mr-2"></i> Follow @Arctix</a>
      </div>
    </div>
  </section>

  <!-- 14. Footer -->
  <footer class="bg-[#111520] pt-20 pb-8 border-t-[5px] border-copper">
    <div class="max-w-[1400px] mx-auto px-4 lg:px-8">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        
        <!-- Col 1 -->
        <div>
          <a href="index.html" class="flex items-center space-x-2 mb-6">
            <span class="text-3xl font-bold text-white tracking-tight">Arctix<span class="text-copper">.</span></span>
          </a>
          <p class="text-gray-400 text-sm leading-relaxed mb-6">
            Leading architecture and interior design firm dedicated to creating inspiring, sustainable, and luxurious spaces worldwide.
          </p>
          <div class="flex space-x-4">
            <a href="#" class="w-10 h-10 bg-navy text-white flex items-center justify-center hover:bg-copper transition-colors"><i class="fab fa-facebook-f"></i></a>
            <a href="#" class="w-10 h-10 bg-navy text-white flex items-center justify-center hover:bg-copper transition-colors"><i class="fab fa-twitter"></i></a>
            <a href="#" class="w-10 h-10 bg-navy text-white flex items-center justify-center hover:bg-copper transition-colors"><i class="fab fa-linkedin-in"></i></a>
          </div>
        </div>

        <!-- Col 2 -->
        <div>
          <h4 class="text-white text-lg font-bold mb-6">Quick Links</h4>
          <ul class="space-y-3 text-sm text-gray-400">
            <li><a href="#" class="hover:text-copper transition-colors">About Company</a></li>
            <li><a href="#" class="hover:text-copper transition-colors">Our Services</a></li>
            <li><a href="#" class="hover:text-copper transition-colors">Recent Projects</a></li>
            <li><a href="#" class="hover:text-copper transition-colors">Latest News</a></li>
            <li><a href="#" class="hover:text-copper transition-colors">Contact Us</a></li>
          </ul>
        </div>

        <!-- Col 3 -->
        <div>
          <h4 class="text-white text-lg font-bold mb-6">Contact Info</h4>
          <ul class="space-y-4 text-sm text-gray-400">
            <li class="flex items-start">
              <i class="fas fa-map-marker-alt text-copper mt-1 mr-3"></i>
              <span>123 Architecture Blvd,<br/>Design District, NY 10001</span>
            </li>
            <li class="flex items-center">
              <i class="fas fa-phone text-copper mr-3"></i>
              <span>+1 (555) 123-4567</span>
            </li>
            <li class="flex items-center">
              <i class="fas fa-envelope text-copper mr-3"></i>
              <span>info@arctixdesign.com</span>
            </li>
          </ul>
        </div>

        <!-- Col 4 -->
        <div>
          <h4 class="text-white text-lg font-bold mb-6">Newsletter</h4>
          <p class="text-gray-400 text-sm leading-relaxed mb-6">Subscribe to our newsletter to receive the latest design news and updates.</p>
          <div class="flex">
            <input type="email" placeholder="Email Address" class="w-full bg-navy border border-gray-700 text-white px-4 py-3 text-sm focus:outline-none focus:border-copper">
            <button class="bg-copper text-white px-4 py-3 hover:bg-white hover:text-navy transition-colors"><i class="fas fa-paper-plane"></i></button>
          </div>
        </div>

      </div>

      <div class="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
        <p>&copy; 2026 Arctix Architecture. All Rights Reserved.</p>
        <div class="flex space-x-6 mt-4 md:mt-0">
          <a href="#" class="hover:text-copper transition-colors">Terms of Use</a>
          <a href="#" class="hover:text-copper transition-colors">Privacy Policy</a>
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
console.log('Successfully completely rebuilt interior/index.html to precisely match the massive full-page Arctix template.');
