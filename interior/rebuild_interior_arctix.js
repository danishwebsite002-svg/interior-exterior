const fs = require('fs');
const path = require('path');

const targetFile = path.join(__dirname, 'index.html');

const htmlContent = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>ReBuild | Arctix Architecture</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <link href="https://cdnjs.cloudflare.com/ajax/libs/aos/2.3.4/aos.css" rel="stylesheet">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
  
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');
    
    body {
      font-family: 'Inter', sans-serif;
      background-color: #FFFFFF;
      color: #1F2937;
      overflow-x: hidden;
    }
    
    /* Utility for heavily rounded corners as seen in the template */
    .rounded-4xl { border-radius: 2.5rem; }
    
    /* Pill buttons */
    .btn-pill {
      border-radius: 9999px;
      padding: 0.75rem 1.5rem;
      font-weight: 600;
      font-size: 0.875rem;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      transition: all 0.3s ease;
    }
    
    .btn-yellow {
      background-color: #FDE047; /* Bright yellow */
      color: #111827;
    }
    .btn-yellow:hover { background-color: #FACC15; }
    
    .btn-white {
      background-color: #FFFFFF;
      color: #111827;
    }
    .btn-white:hover { background-color: #F3F4F6; }

    .btn-outline {
      background-color: transparent;
      border: 1px solid #D1D5DB;
      color: #111827;
    }
    .btn-outline:hover { background-color: #F9FAFB; }

    /* Floating Navbar shadow */
    .nav-shadow {
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
    }

    /* Glassmorphism Card */
    .glass-card {
      background: rgba(255, 255, 255, 0.15);
      backdrop-filter: blur(12px);
      -webkit-backdrop-filter: blur(12px);
      border: 1px solid rgba(255, 255, 255, 0.3);
      border-radius: 1.5rem;
    }

    /* Hover image scaling */
    .img-hover {
      transition: transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    }
    .group:hover .img-hover { transform: scale(1.05); }

    .stat-divider {
      position: relative;
    }
    .stat-divider::before {
      content: '';
      position: absolute;
      top: 50%;
      left: 0;
      width: 40px;
      height: 1px;
      background-color: #D1D5DB;
    }
  </style>
</head>
<body class="antialiased">

  <!-- Floating Pill Navbar -->
  <div class="absolute top-6 left-1/2 transform -translate-x-1/2 w-full max-w-5xl px-4 z-50">
    <nav class="bg-white rounded-full nav-shadow px-2 py-2 flex items-center justify-between">
      
      <!-- Logo -->
      <a href="#" class="pl-6 text-xl font-bold text-gray-900 tracking-tight">
        ReBuild
      </a>

      <!-- Links -->
      <div class="hidden md:flex items-center space-x-6 text-sm font-medium text-gray-600">
        <a href="#" class="text-gray-900 font-semibold">Home</a>
        <a href="#" class="hover:text-gray-900 transition-colors">About us</a>
        <a href="#" class="hover:text-gray-900 transition-colors">Services</a>
        <a href="#" class="hover:text-gray-900 transition-colors">Project</a>
        <a href="#" class="hover:text-gray-900 transition-colors">Blog</a>
        <a href="#" class="hover:text-gray-900 transition-colors">Consultation</a>
      </div>

      <!-- Button -->
      <a href="#" class="btn-pill btn-yellow ml-4 shadow-sm">
        Get Started
      </a>
    </nav>
  </div>

  <!-- Hero Section (Rounded Bottom) -->
  <section class="relative w-full h-[95vh] rounded-b-4xl overflow-hidden mb-24">
    <!-- Background Image -->
    <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2500&auto=format&fit=crop" alt="Modern Architecture Hero" class="absolute inset-0 w-full h-full object-cover">
    
    <!-- Subtle gradient for text readability -->
    <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent"></div>

    <!-- Content Container -->
    <div class="absolute inset-0 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col justify-end pb-16">
      
      <div class="flex flex-col lg:flex-row justify-between items-end gap-10">
        
        <!-- Left Hero Text -->
        <div class="max-w-2xl" data-aos="fade-up" data-aos-duration="1000">
          <h1 class="text-5xl md:text-6xl lg:text-[4rem] font-medium text-white leading-[1.1] mb-8 tracking-tight">
            From Vision to Reality<br/>— Built with Artistry<br/>and Purpose
          </h1>
          <button class="btn-pill btn-white">
            <i class="fas fa-play mr-2 text-xs"></i> Play Video
          </button>
        </div>

        <!-- Right Glass Card -->
        <div class="w-full max-w-md glass-card p-6 text-white" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="200">
          <div class="flex justify-between items-start mb-6">
            <div>
              <p class="text-lg font-semibold">17K Project</p>
              <p class="text-xs text-gray-300 font-light mt-1">Made around the world</p>
            </div>
            <div class="w-8 h-8 rounded-full border border-white/40 flex items-center justify-center">
              <i class="fas fa-arrow-right -rotate-45 text-sm"></i>
            </div>
          </div>
          
          <div class="w-full h-24 rounded-xl overflow-hidden mb-4">
             <img src="https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=800&auto=format&fit=crop" class="w-full h-full object-cover" alt="Project thumbnail">
          </div>
          
          <div class="flex justify-between items-center">
             <div>
               <p class="text-base font-medium">Iconic Architectur</p>
               <p class="text-xs text-gray-300 font-light mt-1">Explore a handpicked collecti...</p>
             </div>
             <div class="w-8 h-8 flex items-center justify-center text-gray-300">
               <i class="fas fa-arrow-right -rotate-45 text-sm"></i>
             </div>
          </div>
        </div>

      </div>

    </div>
  </section>

  <!-- Serenity Haven Section -->
  <section class="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
      
      <!-- Left Column -->
      <div data-aos="fade-right" data-aos-duration="1200">
        <!-- 3 Small Images -->
        <div class="flex space-x-4 mb-8">
          <div class="w-1/3 h-24 md:h-32 rounded-2xl overflow-hidden group">
            <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=400&auto=format&fit=crop" class="w-full h-full object-cover img-hover" alt="Arch 1">
          </div>
          <div class="w-1/3 h-24 md:h-32 rounded-2xl overflow-hidden group">
            <img src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=400&auto=format&fit=crop" class="w-full h-full object-cover img-hover" alt="Arch 2">
          </div>
          <div class="w-1/3 h-24 md:h-32 rounded-2xl overflow-hidden group">
            <img src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=400&auto=format&fit=crop" class="w-full h-full object-cover img-hover" alt="Arch 3">
          </div>
        </div>
        
        <!-- Controls -->
        <div class="flex items-center justify-between mb-12">
          <div class="flex items-center text-sm font-medium text-gray-400">
            <span class="text-gray-800 font-bold mr-2">01</span>/06
            <div class="w-16 h-[2px] bg-gray-200 ml-4 relative"><div class="absolute top-0 left-0 h-full w-1/6 bg-gray-800"></div></div>
          </div>
          <div class="flex space-x-4 text-gray-500">
            <button class="hover:text-gray-900"><i class="fas fa-chevron-left"></i></button>
            <button class="hover:text-gray-900"><i class="fas fa-chevron-right"></i></button>
          </div>
        </div>

        <!-- Title & Desc -->
        <h2 class="text-3xl md:text-4xl font-semibold text-gray-900 leading-tight mb-6">
          Serenity Haven: Embracing<br/>Nature in Architecture
        </h2>
        <p class="text-gray-500 text-sm leading-relaxed max-w-lg">
          Our architecture embraces a nature-centric design, weaving together organic materials—wood, stone, and natural light—to cultivate a serene and uplifting atmosphere.
        </p>
      </div>

      <!-- Right Column -->
      <div data-aos="fade-left" data-aos-duration="1200" data-aos-delay="200">
        <!-- Large Image -->
        <div class="w-full h-64 md:h-80 rounded-3xl overflow-hidden mb-8 group">
          <img src="https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=1500&auto=format&fit=crop" class="w-full h-full object-cover img-hover" alt="Cityscape project">
        </div>
        
        <!-- Stats -->
        <div class="grid grid-cols-3 gap-4 mb-8">
          <div>
            <h3 class="text-3xl font-bold text-gray-900 mb-1">200+</h3>
            <p class="text-xs text-gray-500 font-medium">Masive Design</p>
          </div>
          <div>
            <h3 class="text-3xl font-bold text-gray-900 mb-1">350+</h3>
            <p class="text-xs text-gray-500 font-medium">Happy Client</p>
          </div>
          <div>
            <h3 class="text-3xl font-bold text-gray-900 mb-1">1200+</h3>
            <p class="text-xs text-gray-500 font-medium">Project Finished</p>
          </div>
        </div>

        <!-- Buttons -->
        <div class="flex flex-wrap gap-4">
          <button class="btn-pill btn-outline">
            <i class="fas fa-star text-gray-800 mr-2 text-sm"></i> 4.8
          </button>
          <button class="btn-pill btn-outline flex-1 max-w-[200px]">
            See Reviews
          </button>
        </div>
      </div>

    </div>
  </section>

  <!-- Expertise Section -->
  <section class="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
      
      <!-- Left Image -->
      <div class="w-full h-[600px] rounded-4xl overflow-hidden group" data-aos="fade-up" data-aos-duration="1200">
        <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop" class="w-full h-full object-cover img-hover" alt="Modern Home">
      </div>

      <!-- Right Content -->
      <div class="pl-0 lg:pl-10" data-aos="fade-up" data-aos-duration="1200" data-aos-delay="200">
        <p class="text-xs font-semibold text-gray-500 mb-4">Recommendation</p>
        <h2 class="text-3xl md:text-[2.5rem] font-semibold text-gray-900 leading-tight mb-6">
          Expertise in all aspects<br/>of modern architecture.
        </h2>
        <p class="text-gray-500 text-sm leading-relaxed mb-12 max-w-md">
          Rooted in nature, our design fuses timber, stone, and sunlight to form tranquil spaces that breathe and inspire.
        </p>
        
        <!-- List -->
        <div class="space-y-6">
          <div class="flex items-center text-gray-900">
            <div class="w-12 h-12 border-l border-gray-300 flex items-center pl-4 mr-4">
              <span class="text-lg font-medium text-gray-400">01</span>
            </div>
            <span class="text-xl font-medium">Next-Gen Home</span>
          </div>
          <div class="flex items-center text-gray-400 hover:text-gray-900 transition-colors cursor-pointer">
            <div class="w-12 h-12 border-l border-gray-300 flex items-center pl-4 mr-4">
              <span class="text-lg font-medium">02</span>
            </div>
            <span class="text-xl font-medium">Commercial Spaces</span>
          </div>
          <div class="flex items-center text-gray-400 hover:text-gray-900 transition-colors cursor-pointer">
            <div class="w-12 h-12 border-l border-gray-300 flex items-center pl-4 mr-4">
              <span class="text-lg font-medium">03</span>
            </div>
            <span class="text-xl font-medium">Sustainable Design</span>
          </div>
        </div>
      </div>

    </div>
  </section>

  <!-- Simple Footer for completeness -->
  <footer class="bg-gray-50 py-12 border-t border-gray-200 mt-20">
    <div class="max-w-7xl mx-auto px-4 text-center">
      <p class="text-gray-400 text-sm font-medium">&copy; 2026 ReBuild Architecture. All rights reserved.</p>
    </div>
  </footer>

  <script src="https://cdnjs.cloudflare.com/ajax/libs/aos/2.3.4/aos.js"></script>
  <script>
    AOS.init({ once: true });
  </script>
</body>
</html>`;

fs.writeFileSync(targetFile, htmlContent);
console.log('Successfully completely rebuilt interior/index.html with the Arctix layout.');
