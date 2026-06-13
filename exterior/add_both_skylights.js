const fs = require('fs');
const path = require('path');

const exteriorDir = path.join('c:', 'Users', 'MSI 1', 'Downloads', 'ExteriorInterior', 'exterior');
const files = fs.readdirSync(exteriorDir).filter(f => f.endsWith('.html'));

const oldGlobalId = '1507089947368-19c1da9775ae';
const newHeroUrl = 'https://images.unsplash.com/photo-1542676012084-a4b1f610452a?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
const newGalleryUrl = 'https://plus.unsplash.com/premium_photo-1661963152804-b11296cf1be3?q=80&w=1233&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';

let globalReplacements = 0;

files.forEach(file => {
    const filePath = path.join(exteriorDir, file);
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // 1. Globally replace the old hero ID with the new hero URL
    const regex = new RegExp(`https:\\/\\/images\\.unsplash\\.com\\/photo-${oldGlobalId}[^'"\\)&]*`, 'g');
    if (regex.test(content)) {
        content = content.replace(regex, newHeroUrl);
        globalReplacements++;
        modified = true;
    }

    // 2. Specifically inject the second gallery image into skylight.html
    if (file === 'skylight.html') {
        // Find line 294 pattern
        const galleryRegex = /<div class="w-full h-full bg-cover bg-center img-hover-zoom" style="background-image: url\('[^']+'\);"><\/div>/;
        // replace the FIRST occurrence (which corresponds to line 294 grid item)
        content = content.replace(galleryRegex, `<div class="w-full h-full bg-cover bg-center img-hover-zoom" style="background-image: url('${newGalleryUrl}');"></div>`);
        modified = true;
    }

    if (modified) {
        fs.writeFileSync(filePath, content);
        console.log(`Updated images in ${file}`);
    }
});

console.log(`Global replacements made: ${globalReplacements}`);
