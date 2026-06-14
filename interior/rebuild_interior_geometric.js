const fs = require('fs');
const path = require('path');

const targetFile = path.join(__dirname, 'index.html');

const htmlContent = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Interior Design | Brown</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <link href="https://cdnjs.cloudflare.com/ajax/libs/aos/2.3.4/aos.css" rel="stylesheet">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
  
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&family=Inter:wght@300;400;500;600&display=swap');
    
    body {
      font-family: 'Inter', sans-serif;
      background-color: #F4F7F8;
      color: #333333;
      overflow-x: hidden;
    }
    
    h1, h2, h3, h4, h5, h6 {
      font-family: 'Poppins', sans-serif;
      color: #1A1A1A;
      font-weight: 800;
    }
    
    /* Colors */
    .bg-teal-dark { background-color: #1A3C38; }
    .text-teal-dark { color: #1A3C38; }
    .bg-orange-accent { background-color: #F2994A; }
    .text-orange-accent { color: #F2994A; }
    
    /* Buttons */
    .btn-teal {
      background-color: #1A3C38;
      color: #FFFFFF;
      padding: 0.875rem 2rem;
      font-family: 'Poppins', sans-serif;
      font-weight: 600;
      font-size: 0.875rem;
      transition: all 0.3s ease;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      border: 2px solid #1A3C38;
    }
    .btn-teal:hover {
      background-color: transparent;
      color: #1A3C38;
    }
    
    .btn-card {
      background-color: transparent;
      color: #1A1A1A;
      padding: 0.75rem 1.5rem;
      font-family: 'Poppins', sans-serif;
      font-weight: 600;
      font-size: 0.8rem;
      border: 1px solid #E5E7EB;
      transition: all 0.3s ease;
      display: inline-flex;
      position: relative;
    }
    .btn-card::after {
      content: '';
      position: absolute;
      top: 4px;
      left: 4px;
      width: 100%;
      height: 100%;
      background-color: #F2994A;
      z-index: -1;
      opacity: 0;
      transition: all 0.3s ease;
    }
    .btn-card:hover {
      background-color: #1A3C38;
      color: #FFFFFF;
      border-color: #1A3C38;
    }
    .btn-card:hover::after {
      opacity: 1;
      top: 6px;
      left: 6px;
    }

    /* Geometric Shapes (Clip-paths) */
    .clip-triangle-1 { clip-path: polygon(50% 0%, 0% 100%, 100% 100%); }
    .clip-triangle-2 { clip-path: polygon(0 0, 100% 0, 50% 100%); }
    .clip-triangle-3 { clip-path: polygon(0 50%, 100% 0, 100% 100%); }
    .clip-triangle-4 { clip-path: polygon(0 0, 100% 50%, 0 100%); }
    .clip-hex { clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%); }

    /* The Triangular Collage Structure */
    .collage-container {
      position: relative;
      width: 100%;
      height: 500px;
    }
    .collage-piece {
      position: absolute;
      background-image: url('https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1500&auto=format&fit=crop');
      background-size: 700px;
      background-attachment: fixed;
    }

    /* Floating Decor */
    .float-shape {
      animation: float 6s ease-in-out infinite;
    }
    @keyframes float {
      0% { transform: translateY(0px) rotate(0deg); }
      50% { transform: translateY(-15px) rotate(5deg); }
      100% { transform: translateY(0px) rotate(0deg); }
    }
    
    .spin-text {
      animation: spin 20s linear infinite;
    }
    @keyframes spin {
      100% { transform: rotate(360deg); }
    }
    
    /* Search Bar Overlay */
    .search-overlay {
      box-shadow: 0 15px 35px rgba(0,0,0,0.05);
    }
  </style>
</head>
<body class="antialiased">

  <!-- Navbar (Clean) -->
  <nav class="w-full py-6 absolute top-0 z-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
      <a href="index.html" class="text-2xl font-bold tracking-tight text-[#1A1A1A] font-['Poppins']">
        Interior.
      </a>
      <div class="hidden md:flex space-x-8 items-center">
        <a href="#" class="text-sm font-semibold text-[#1A1A1A]">Home</a>
        <a href="#" class="text-sm font-medium text-gray-500 hover:text-[#1A1A1A]">About</a>
        <a href="#" class="text-sm font-medium text-gray-500 hover:text-[#1A1A1A]">Services</a>
        <a href="#" class="text-sm font-medium text-gray-500 hover:text-[#1A1A1A]">Projects</a>
        <a href="#" class="text-sm font-medium text-gray-500 hover:text-[#1A1A1A]">Contact</a>
      </div>
    </div>
  </nav>

  <!-- Section 1: Triangular Collage Hero -->
  <section class="relative w-full min-h-screen pt-32 pb-20 overflow-hidden flex items-center">
    
    <!-- Decorative Background Elements -->
    <div class="absolute right-20 bottom-32 w-4 h-4 bg-transparent border-[3px] border-gray-300 clip-triangle-1 float-shape" style="animation-delay: 1s;"></div>
    <div class="absolute right-10 bottom-20 w-5 h-5 bg-teal-dark clip-triangle-2 float-shape"></div>
    <div class="absolute right-40 bottom-10 w-6 h-6 bg-orange-accent clip-triangle-3 float-shape" style="animation-delay: 2s;"></div>
    
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        <!-- Left: Triangular Collage -->
        <div class="relative w-full h-[500px]" data-aos="fade-right" data-aos-duration="1500">
          
          <!-- Circular Text Ring -->
          <div class="absolute -left-10 bottom-0 w-32 h-32 spin-text opacity-30 select-none">
            <svg viewBox="0 0 100 100" width="100" height="100">
              <path id="curve" d="M 50 50 m -40 0 a 40 40 0 1 1 80 0 a 40 40 0 1 1 -80 0" fill="transparent" />
              <text font-size="12" font-family="Poppins" font-weight="bold" letter-spacing="3"><textPath href="#curve">DESIGN INTERIOR DESIGN INTERIOR </textPath></text>
            </svg>
          </div>

          <!-- The Shattered Image (Using CSS Clip Paths) -->
          <!-- Note: To make it look like the image, we stack absolute divs with clip paths. We use a grey placeholder or an actual image -->
          <div class="absolute inset-0 z-10">
             <!-- Top small triangle -->
             <div class="absolute top-[5%] left-[20%] w-[25%] h-[25%] clip-triangle-1 bg-cover bg-center bg-[url('https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1000&auto=format&fit=crop')]"></div>
             <!-- Large center left -->
             <div class="absolute top-[25%] left-[0%] w-[55%] h-[55%] clip-triangle-2 bg-cover bg-center bg-[url('https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1000&auto=format&fit=crop')]"></div>
             <!-- Large center right -->
             <div class="absolute top-[10%] left-[45%] w-[50%] h-[70%] clip-triangle-4 bg-cover bg-center bg-[url('https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1000&auto=format&fit=crop')]"></div>
             <!-- Bottom piece -->
             <div class="absolute bottom-[0%] left-[25%] w-[60%] h-[35%] clip-triangle-1 bg-cover bg-center bg-[url('https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1000&auto=format&fit=crop')]"></div>
          </div>

          <!-- Search Bar Overlay -->
          <div class="absolute top-[35%] left-[5%] z-30 w-64 bg-white py-3 px-4 flex items-center gap-3 search-overlay rounded-sm">
            <i class="fas fa-search text-gray-400 text-sm"></i>
            <input type="text" placeholder="What are you looking for?" class="text-xs w-full outline-none font-medium text-gray-600 placeholder-gray-400">
          </div>
        </div>

        <!-- Right: Text Content -->
        <div class="pl-0 lg:pl-10" data-aos="fade-left" data-aos-duration="1500" data-aos-delay="200">
          <h1 class="text-5xl lg:text-[3.5rem] leading-[1.1] tracking-tight mb-6">
            A catalogue with the <br/>best of modern design
          </h1>
          <p class="text-gray-500 text-sm leading-relaxed mb-10 max-w-md">
            Organization Name is something other than an interior design organization; we're an accumulation of specialists and craftsmen with a mutual reasoning of undermining the basic and the complex. We control structures and rooms from our regular world to make it stylish.
          </p>
          <a href="#" class="btn-teal">Explore More</a>
        </div>

      </div>
    </div>
  </section>

  <!-- Section 2: Latest Creations Grid -->
  <section class="py-24 bg-white relative">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <!-- Header -->
      <div class="flex flex-col md:flex-row md:items-end justify-between mb-12" data-aos="fade-up">
        <div class="max-w-xl">
          <h2 class="text-4xl mb-4">Few of our latest creations</h2>
          <p class="text-gray-500 text-sm font-medium">An interior designer is someone who plans, researches, coordinates, and manages such enhancement projects.</p>
        </div>
        <div class="flex gap-3 mt-6 md:mt-0">
          <button class="w-10 h-10 flex items-center justify-center bg-gray-200 text-gray-500 hover:bg-gray-300 transition-colors rounded-sm"><i class="fas fa-arrow-left text-sm"></i></button>
          <button class="w-10 h-10 flex items-center justify-center bg-teal-dark text-white hover:bg-orange-accent transition-colors rounded-sm relative shadow-[4px_4px_0px_#F2994A]"><i class="fas fa-arrow-right text-sm"></i></button>
        </div>
      </div>

      <!-- 4 Column Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        
        <!-- Card 1 -->
        <div class="bg-white group" data-aos="fade-up" data-aos-delay="100">
          <div class="w-full h-64 overflow-hidden mb-4">
            <img src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=800&auto=format&fit=crop" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Interior room">
          </div>
          <div class="px-2 pb-6 border-b border-gray-100 group-hover:border-transparent transition-colors">
            <h3 class="text-sm font-bold text-gray-800 mb-4">Interior room with furniture</h3>
            <a href="#" class="btn-card">See Full Project</a>
          </div>
        </div>

        <!-- Card 2 -->
        <div class="bg-white group shadow-[0_20px_40px_rgba(0,0,0,0.06)]" data-aos="fade-up" data-aos-delay="200">
          <div class="w-full h-64 overflow-hidden mb-4">
            <img src="https://images.unsplash.com/photo-1593696140826-c58b021acf8b?q=80&w=800&auto=format&fit=crop" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Living room">
          </div>
          <div class="px-4 pb-6">
            <h3 class="text-sm font-bold text-gray-800 mb-4">Living room interior</h3>
            <!-- Active state styling -->
            <a href="#" class="btn-card bg-teal-dark text-white border-teal-dark" style="background-color: #1A3C38; color: white;">See Full Project</a>
          </div>
        </div>

        <!-- Card 3 -->
        <div class="bg-white group" data-aos="fade-up" data-aos-delay="300">
          <div class="w-full h-64 overflow-hidden mb-4">
            <img src="https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=800&auto=format&fit=crop" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Room design">
          </div>
          <div class="px-2 pb-6 border-b border-gray-100 group-hover:border-transparent transition-colors">
            <h3 class="text-sm font-bold text-gray-800 mb-4">Room interior design</h3>
            <a href="#" class="btn-card">See Full Project</a>
          </div>
        </div>

        <!-- Card 4 -->
        <div class="bg-white group" data-aos="fade-up" data-aos-delay="400">
          <div class="w-full h-64 overflow-hidden mb-4">
            <img src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=800&auto=format&fit=crop" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Modern space">
          </div>
          <div class="px-2 pb-6 border-b border-gray-100 group-hover:border-transparent transition-colors">
            <h3 class="text-sm font-bold text-gray-800 mb-4">Modern space design</h3>
            <a href="#" class="btn-card">See Full Project</a>
          </div>
        </div>

      </div>
    </div>
  </section>

  <!-- Section 3: Hexagonal Experts -->
  <section class="py-24 bg-[#F4F7F8] relative overflow-hidden">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        <!-- Left: Text Content -->
        <div class="pr-0 lg:pr-10" data-aos="fade-right" data-aos-duration="1500">
          <h2 class="text-4xl lg:text-[2.8rem] leading-[1.2] tracking-tight mb-6">
            Home interior design<br/>experts at Brown have<br/>a long reputation
          </h2>
          <p class="text-gray-500 text-sm leading-relaxed mb-10 max-w-md">
            As a solitary hotspot for turnkey business interior ventures, we have the unmistakable preferred standpoint of offering strength development administrations, design, establishment and broadly perceived furniture marks through different equipment verticals.
          </p>
          <a href="#" class="btn-teal">Explore More</a>
        </div>

        <!-- Right: Hexagon Collage -->
        <div class="relative w-full h-[600px] flex justify-center" data-aos="fade-left" data-aos-duration="1500" data-aos-delay="200">
          
          <!-- Circular Text Ring Top Right -->
          <div class="absolute top-0 right-10 w-28 h-28 spin-text opacity-30 select-none">
            <svg viewBox="0 0 100 100" width="100" height="100">
              <path id="curve2" d="M 50 50 m -40 0 a 40 40 0 1 1 80 0 a 40 40 0 1 1 -80 0" fill="transparent" />
              <text font-size="12" font-family="Poppins" font-weight="bold" letter-spacing="3"><textPath href="#curve2">DESIGN INTERIOR DESIGN INTERIOR </textPath></text>
            </svg>
          </div>

          <!-- Hexagon Structure -->
          <div class="relative w-[80%] h-[90%] mt-10">
            <!-- Top Hex -->
            <div class="absolute top-[0%] left-[25%] w-[50%] h-[35%] clip-hex bg-cover bg-center bg-[url('https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=800')]"></div>
            <!-- Middle Left Hex -->
            <div class="absolute top-[33%] left-[0%] w-[50%] h-[35%] clip-hex bg-cover bg-center bg-[url('https://images.unsplash.com/photo-1593696140826-c58b021acf8b?q=80&w=800')]"></div>
            <!-- Middle Right Hex -->
            <div class="absolute top-[33%] left-[52%] w-[50%] h-[35%] clip-hex bg-cover bg-center bg-[url('https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=800')]"></div>
            <!-- Bottom Hex -->
            <div class="absolute top-[66%] left-[25%] w-[50%] h-[35%] clip-hex bg-cover bg-center bg-[url('https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=800')]"></div>
            <!-- Decorative Orange Triangle -->
            <div class="absolute bottom-[0%] right-[15%] w-[15%] h-[15%] bg-orange-accent clip-triangle-1"></div>
          </div>

        </div>

      </div>
    </div>
  </section>

  <!-- Clean Footer -->
  <footer class="bg-white py-12 border-t border-gray-100">
    <div class="max-w-7xl mx-auto px-4 text-center">
      <p class="text-gray-400 text-xs font-semibold uppercase tracking-widest">&copy; 2026 Interior Design Experts. All rights reserved.</p>
    </div>
  </footer>

  <script src="https://cdnjs.cloudflare.com/ajax/libs/aos/2.3.4/aos.js"></script>
  <script>
    AOS.init({ once: true });
  </script>
</body>
</html>`;

fs.writeFileSync(targetFile, htmlContent);
console.log('Successfully completely rebuilt interior/index.html with the Geometric Teal & Orange design.');
