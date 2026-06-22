const fs = require('fs');
const path = require('path');

function updateFeaturedProjects() {
  const baseDir = 'c:\\Users\\MSI 1\\Downloads\\ExteriorInterior';
  
  // 1. Exterior Index
  const extIndex = path.join(baseDir, 'exterior', 'index.html');
  let extContent = fs.readFileSync(extIndex, 'utf8');
  
  const extSection = `    <!-- Featured Projects Section -->
    <section class="w-full py-24 bg-white" id="featured-projects">
      <div class="w-[90%] max-w-[90%] mx-auto px-4 md:px-8">
        <div class="flex flex-col md:flex-row justify-between items-end mb-16" data-aos="fade-up">
          <div>
            <span class="text-accent text-sm font-bold uppercase tracking-widest mb-4 block">Featured Projects</span>
            <h2 class="text-3xl md:text-5xl font-bold text-primary-dark">Latest Signature<br />Developments</h2>
          </div>
          <a href="gallery.html" class="text-primary-dark font-bold border-b-2 border-primary-dark hover:border-accent hover:text-accent transition-colors pb-1 text-sm uppercase tracking-widest hidden md:block">View Gallery</a>
        </div>

        <!-- Project 1: Saadiyat Island -->
        <div class="mb-16">
          <h3 class="text-2xl font-bold text-primary-dark mb-6 border-l-4 border-accent pl-4">Saadiyat Island, Abu Dhabi</h3>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div class="rounded-2xl overflow-hidden group cursor-pointer h-[400px] md:h-[500px] shadow-lg" data-aos="fade-up">
              <div class="w-full h-full bg-cover bg-center img-hover-zoom" style="background-image: url('../assets/Saadiyat_Island_Abudhabi_image1.jpeg');"></div>
            </div>
            <div class="rounded-2xl overflow-hidden group cursor-pointer h-[400px] md:h-[500px] shadow-lg" data-aos="fade-up" data-aos-delay="200">
              <div class="w-full h-full bg-cover bg-center img-hover-zoom" style="background-image: url('../assets/Saadiyat_Island_Abudhabi_image2.png');"></div>
            </div>
          </div>
        </div>

        <!-- Project 2: Dubai Hills Estate -->
        <div>
          <h3 class="text-2xl font-bold text-primary-dark mb-6 border-l-4 border-accent pl-4">Dubai Hills Estate</h3>
          <div class="rounded-2xl overflow-hidden group cursor-pointer h-[400px] md:h-[600px] shadow-lg" data-aos="fade-up">
            <div class="w-full h-full bg-cover bg-center img-hover-zoom" style="background-image: url('../assets/Dubai_Hills_Estate.png');"></div>
          </div>
        </div>
      </div>
    </section>`;
    
  // Use regex to replace the old featured-saadiyat section
  const extRegex = /<!-- Featured Project Section -->[\s\S]*?<\/section>/;
  if (extRegex.test(extContent)) {
    extContent = extContent.replace(extRegex, extSection);
    fs.writeFileSync(extIndex, extContent, 'utf8');
    console.log('Updated exterior/index.html');
  }

  // 2. Interior Index
  const intIndex = path.join(baseDir, 'interior', 'index.html');
  let intContent = fs.readFileSync(intIndex, 'utf8');
  
  const intSection = `    <!-- Featured Projects Section -->
    <section class="w-full py-24 bg-white" id="featured-projects">
      <div class="max-w-7xl mx-auto px-4 md:px-8">
        <div class="flex flex-col md:flex-row justify-between items-end mb-16" data-aos="fade-up">
          <div>
            <span class="text-copper text-sm font-bold uppercase tracking-widest mb-4 block">Featured Projects</span>
            <h2 class="text-3xl md:text-5xl font-bold text-primary-dark">Latest Signature<br />Developments</h2>
          </div>
          <a href="gallery.html" class="text-primary-dark font-bold border-b-2 border-primary-dark hover:border-copper hover:text-copper transition-colors pb-1 text-sm uppercase tracking-widest hidden md:block">View Gallery</a>
        </div>

        <!-- Project 1: Saadiyat Island -->
        <div class="mb-16">
          <h3 class="text-2xl font-bold text-primary-dark mb-6 border-l-4 border-copper pl-4">Saadiyat Island, Abu Dhabi</h3>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div class="rounded-2xl overflow-hidden group cursor-pointer h-[400px] md:h-[500px] shadow-lg" data-aos="fade-up">
              <div class="w-full h-full bg-cover bg-center img-hover-zoom" style="background-image: url('../assets/Saadiyat_Island_Abudhabi_image1.jpeg');"></div>
            </div>
            <div class="rounded-2xl overflow-hidden group cursor-pointer h-[400px] md:h-[500px] shadow-lg" data-aos="fade-up" data-aos-delay="200">
              <div class="w-full h-full bg-cover bg-center img-hover-zoom" style="background-image: url('../assets/Saadiyat_Island_Abudhabi_image2.png');"></div>
            </div>
          </div>
        </div>

        <!-- Project 2: Dubai Hills Estate -->
        <div>
          <h3 class="text-2xl font-bold text-primary-dark mb-6 border-l-4 border-copper pl-4">Dubai Hills Estate</h3>
          <div class="rounded-2xl overflow-hidden group cursor-pointer h-[400px] md:h-[600px] shadow-lg" data-aos="fade-up">
            <div class="w-full h-full bg-cover bg-center img-hover-zoom" style="background-image: url('../assets/Dubai_Hills_Estate.png');"></div>
          </div>
        </div>
      </div>
    </section>`;

  if (extRegex.test(intContent)) {
    intContent = intContent.replace(extRegex, intSection);
    fs.writeFileSync(intIndex, intContent, 'utf8');
    console.log('Updated interior/index.html');
  }

  // 3. Exterior Gallery
  const extGallery = path.join(baseDir, 'exterior', 'gallery.html');
  let extGalContent = fs.readFileSync(extGallery, 'utf8');
  if (!extGalContent.includes('Dubai_Hills_Estate.png')) {
    const extItem = `
                  <!-- Project: Dubai Hills Estate -->
                  <a href="../assets/Dubai_Hills_Estate.png" data-src="../assets/Dubai_Hills_Estate.png" data-thumb="../assets/Dubai_Hills_Estate.png" class="portfolio-item group cursor-pointer transition-all duration-300 block" data-category="featured" data-aos="fade-up">
                      <img src="../assets/Dubai_Hills_Estate.png" style="display:none;" alt="thumbnail" />
                      <div class="h-80 w-full overflow-hidden rounded-xl mb-6 shadow-sm">
                          <div class="w-full h-full bg-cover bg-center img-hover-zoom" style="background-image: url('../assets/Dubai_Hills_Estate.png');"></div>
                      </div>
                      <span class="text-accent text-xs font-bold uppercase tracking-widest mb-2 block">Featured</span>
                      <h3 class="text-2xl font-bold text-primary-dark group-hover:text-accent transition-colors">Dubai Hills Estate</h3>
                  </a>
`;
    extGalContent = extGalContent.replace('id="portfolio-grid">\n', 'id="portfolio-grid">\n' + extItem);
    fs.writeFileSync(extGallery, extGalContent, 'utf8');
    console.log('Updated exterior/gallery.html');
  }

  // 4. Interior Gallery
  const intGallery = path.join(baseDir, 'interior', 'gallery.html');
  let intGalContent = fs.readFileSync(intGallery, 'utf8');
  if (!intGalContent.includes('Dubai_Hills_Estate.png')) {
    const intItem = `
                  <!-- Project: Dubai Hills Estate -->
                  <a href="../assets/Dubai_Hills_Estate.png" data-src="../assets/Dubai_Hills_Estate.png" data-thumb="../assets/Dubai_Hills_Estate.png" class="portfolio-item group cursor-pointer transition-all duration-300 block" data-category="featured" data-aos="fade-up">
                      <img src="../assets/Dubai_Hills_Estate.png" style="display:none;" alt="thumbnail" />
                      <div class="h-80 w-full overflow-hidden rounded-xl mb-6 shadow-sm">
                          <div class="w-full h-full bg-cover bg-center img-hover-zoom" style="background-image: url('../assets/Dubai_Hills_Estate.png');"></div>
                      </div>
                      <span class="text-copper text-xs font-bold uppercase tracking-widest mb-2 block">Featured</span>
                      <h3 class="text-2xl font-bold text-primary-dark group-hover:text-copper transition-colors">Dubai Hills Estate</h3>
                  </a>
`;
    intGalContent = intGalContent.replace('id="portfolio-grid">\n', 'id="portfolio-grid">\n' + intItem);
    fs.writeFileSync(intGallery, intGalContent, 'utf8');
    console.log('Updated interior/gallery.html');
  }
}

updateFeaturedProjects();
