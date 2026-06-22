const fs = require('fs');
const path = require('path');

function insertFeaturedProject() {
  const baseDir = 'c:\\Users\\MSI 1\\Downloads\\ExteriorInterior';
  
  // 1. Exterior Index
  const extIndex = path.join(baseDir, 'exterior', 'index.html');
  let extContent = fs.readFileSync(extIndex, 'utf8');
  if (!extContent.includes('id="featured-saadiyat"')) {
    const extSection = `
    <!-- Featured Project Section -->
    <section class="w-full py-24 bg-white" id="featured-saadiyat">
      <div class="w-[90%] max-w-[90%] mx-auto px-4 md:px-8">
        <div class="flex flex-col md:flex-row justify-between items-end mb-16" data-aos="fade-up">
          <div>
            <span class="text-accent text-sm font-bold uppercase tracking-widest mb-4 block">Featured Project</span>
            <h2 class="text-3xl md:text-5xl font-bold text-primary-dark">Saadiyat Island,<br />Abu Dhabi</h2>
          </div>
          <a href="gallery.html" class="text-primary-dark font-bold border-b-2 border-primary-dark hover:border-accent hover:text-accent transition-colors pb-1 text-sm uppercase tracking-widest hidden md:block">View Gallery</a>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div class="rounded-2xl overflow-hidden group cursor-pointer h-[500px] shadow-lg" data-aos="fade-right">
            <div class="w-full h-full bg-cover bg-center img-hover-zoom" style="background-image: url('../assets/Saadiyat_Island_Abudhabi_image1.jpeg');"></div>
          </div>
          <div class="rounded-2xl overflow-hidden group cursor-pointer h-[500px] shadow-lg" data-aos="fade-left" data-aos-delay="200">
            <div class="w-full h-full bg-cover bg-center img-hover-zoom" style="background-image: url('../assets/Saadiyat_Island_Abudhabi_image2.png');"></div>
          </div>
        </div>
      </div>
    </section>
`;
    extContent = extContent.replace('<!-- Blog & News Section -->', extSection + '\n    <!-- Blog & News Section -->');
    fs.writeFileSync(extIndex, extContent, 'utf8');
    console.log('Updated exterior/index.html');
  }

  // 2. Interior Index
  const intIndex = path.join(baseDir, 'interior', 'index.html');
  let intContent = fs.readFileSync(intIndex, 'utf8');
  if (!intContent.includes('id="featured-saadiyat"')) {
    const intSection = `
    <!-- Featured Project Section -->
    <section class="w-full py-24 bg-white" id="featured-saadiyat">
      <div class="max-w-7xl mx-auto px-4 md:px-8">
        <div class="flex flex-col md:flex-row justify-between items-end mb-16" data-aos="fade-up">
          <div>
            <span class="text-copper text-sm font-bold uppercase tracking-widest mb-4 block">Featured Project</span>
            <h2 class="text-3xl md:text-5xl font-bold text-primary-dark">Saadiyat Island,<br />Abu Dhabi</h2>
          </div>
          <a href="gallery.html" class="text-primary-dark font-bold border-b-2 border-primary-dark hover:border-copper hover:text-copper transition-colors pb-1 text-sm uppercase tracking-widest hidden md:block">View Gallery</a>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div class="rounded-2xl overflow-hidden group cursor-pointer h-[500px] shadow-lg" data-aos="fade-right">
            <div class="w-full h-full bg-cover bg-center img-hover-zoom" style="background-image: url('../assets/Saadiyat_Island_Abudhabi_image1.jpeg');"></div>
          </div>
          <div class="rounded-2xl overflow-hidden group cursor-pointer h-[500px] shadow-lg" data-aos="fade-left" data-aos-delay="200">
            <div class="w-full h-full bg-cover bg-center img-hover-zoom" style="background-image: url('../assets/Saadiyat_Island_Abudhabi_image2.png');"></div>
          </div>
        </div>
      </div>
    </section>
`;
    intContent = intContent.replace('<!-- 7. Design Journal (Blog Section) -->', intSection + '\n    <!-- 7. Design Journal (Blog Section) -->');
    fs.writeFileSync(intIndex, intContent, 'utf8');
    console.log('Updated interior/index.html');
  }

  // 3. Exterior Gallery
  const extGallery = path.join(baseDir, 'exterior', 'gallery.html');
  let extGalContent = fs.readFileSync(extGallery, 'utf8');
  if (!extGalContent.includes('Saadiyat_Island_Abudhabi_image1.jpeg')) {
    const galItems = `
                  <!-- Project: Saadiyat Island 1 -->
                  <a href="../assets/Saadiyat_Island_Abudhabi_image1.jpeg" data-src="../assets/Saadiyat_Island_Abudhabi_image1.jpeg" data-thumb="../assets/Saadiyat_Island_Abudhabi_image1.jpeg" class="portfolio-item group cursor-pointer transition-all duration-300 block" data-category="featured" data-aos="fade-up">
                      <img src="../assets/Saadiyat_Island_Abudhabi_image1.jpeg" style="display:none;" alt="thumbnail" />
                      <div class="h-80 w-full overflow-hidden rounded-xl mb-6 shadow-sm">
                          <div class="w-full h-full bg-cover bg-center img-hover-zoom" style="background-image: url('../assets/Saadiyat_Island_Abudhabi_image1.jpeg');"></div>
                      </div>
                      <span class="text-accent text-xs font-bold uppercase tracking-widest mb-2 block">Featured</span>
                      <h3 class="text-2xl font-bold text-primary-dark group-hover:text-accent transition-colors">Saadiyat Island, Abu Dhabi</h3>
                  </a>

                  <!-- Project: Saadiyat Island 2 -->
                  <a href="../assets/Saadiyat_Island_Abudhabi_image2.png" data-src="../assets/Saadiyat_Island_Abudhabi_image2.png" data-thumb="../assets/Saadiyat_Island_Abudhabi_image2.png" class="portfolio-item group cursor-pointer transition-all duration-300 block" data-category="featured" data-aos="fade-up" data-aos-delay="100">
                      <img src="../assets/Saadiyat_Island_Abudhabi_image2.png" style="display:none;" alt="thumbnail" />
                      <div class="h-80 w-full overflow-hidden rounded-xl mb-6 shadow-sm">
                          <div class="w-full h-full bg-cover bg-center img-hover-zoom" style="background-image: url('../assets/Saadiyat_Island_Abudhabi_image2.png');"></div>
                      </div>
                      <span class="text-accent text-xs font-bold uppercase tracking-widest mb-2 block">Featured</span>
                      <h3 class="text-2xl font-bold text-primary-dark group-hover:text-accent transition-colors">Saadiyat Island, Abu Dhabi</h3>
                  </a>
`;
    extGalContent = extGalContent.replace('id="portfolio-grid">\n', 'id="portfolio-grid">\n' + galItems);
    fs.writeFileSync(extGallery, extGalContent, 'utf8');
    console.log('Updated exterior/gallery.html');
  }

  // 4. Interior Gallery
  const intGallery = path.join(baseDir, 'interior', 'gallery.html');
  let intGalContent = fs.readFileSync(intGallery, 'utf8');
  if (!intGalContent.includes('Saadiyat_Island_Abudhabi_image1.jpeg')) {
    const galItems = `
                  <!-- Project: Saadiyat Island 1 -->
                  <a href="../assets/Saadiyat_Island_Abudhabi_image1.jpeg" data-src="../assets/Saadiyat_Island_Abudhabi_image1.jpeg" data-thumb="../assets/Saadiyat_Island_Abudhabi_image1.jpeg" class="portfolio-item group cursor-pointer transition-all duration-300 block" data-category="featured" data-aos="fade-up">
                      <img src="../assets/Saadiyat_Island_Abudhabi_image1.jpeg" style="display:none;" alt="thumbnail" />
                      <div class="h-80 w-full overflow-hidden rounded-xl mb-6 shadow-sm">
                          <div class="w-full h-full bg-cover bg-center img-hover-zoom" style="background-image: url('../assets/Saadiyat_Island_Abudhabi_image1.jpeg');"></div>
                      </div>
                      <span class="text-copper text-xs font-bold uppercase tracking-widest mb-2 block">Featured</span>
                      <h3 class="text-2xl font-bold text-primary-dark group-hover:text-copper transition-colors">Saadiyat Island, Abu Dhabi</h3>
                  </a>

                  <!-- Project: Saadiyat Island 2 -->
                  <a href="../assets/Saadiyat_Island_Abudhabi_image2.png" data-src="../assets/Saadiyat_Island_Abudhabi_image2.png" data-thumb="../assets/Saadiyat_Island_Abudhabi_image2.png" class="portfolio-item group cursor-pointer transition-all duration-300 block" data-category="featured" data-aos="fade-up" data-aos-delay="100">
                      <img src="../assets/Saadiyat_Island_Abudhabi_image2.png" style="display:none;" alt="thumbnail" />
                      <div class="h-80 w-full overflow-hidden rounded-xl mb-6 shadow-sm">
                          <div class="w-full h-full bg-cover bg-center img-hover-zoom" style="background-image: url('../assets/Saadiyat_Island_Abudhabi_image2.png');"></div>
                      </div>
                      <span class="text-copper text-xs font-bold uppercase tracking-widest mb-2 block">Featured</span>
                      <h3 class="text-2xl font-bold text-primary-dark group-hover:text-copper transition-colors">Saadiyat Island, Abu Dhabi</h3>
                  </a>
`;
    intGalContent = intGalContent.replace('id="portfolio-grid">\n', 'id="portfolio-grid">\n' + galItems);
    fs.writeFileSync(intGallery, intGalContent, 'utf8');
    console.log('Updated interior/gallery.html');
  }
}

insertFeaturedProject();
