const fs = require('fs');
const path = require('path');

const dir = path.join('c:', 'Users', 'MSI 1', 'Downloads', 'ExteriorInterior', 'exterior');

// Fix gallery.html Hero Banner
const galleryPath = path.join(dir, 'gallery.html');
let galleryContent = fs.readFileSync(galleryPath, 'utf8');
galleryContent = galleryContent.replace(
    /https:\/\/images\.unsplash\.com\/photo-1600585154340-be6161a56a0c\?auto=format&fit=crop&w=2000&q=80/g,
    'https://images.unsplash.com/photo-1656385959898-7496979e7fd5?q=80&w=1170&auto=format&fit=crop'
);
fs.writeFileSync(galleryPath, galleryContent);

// Fix fixed-and-foldable.html
const fixedPath = path.join(dir, 'fixed-and-foldable.html');
let fixedContent = fs.readFileSync(fixedPath, 'utf8');
fixedContent = fixedContent.replace(
    /https?:\/\/[^'"\)\s]+/g,
    (url) => {
        if (url.includes('1600585154340')) {
            return 'https://images.unsplash.com/photo-1721902024148-287438cf3e05?q=80&w=1170&auto=format&fit=crop';
        }
        return url;
    }
);
fs.writeFileSync(fixedPath, fixedContent);

// Fix skylight.html line 300
const skylightPath = path.join(dir, 'skylight.html');
let skylightContent = fs.readFileSync(skylightPath, 'utf8');
skylightContent = skylightContent.replace(
    /https:\/\/images\.unsplash\.com\/photo-1600585154340-be6161a56a0c\?auto=format&fit=crop&w=2000&q=80/g,
    'https://images.unsplash.com/photo-1542676012084-a4b1f610452a?q=80&w=1170&auto=format&fit=crop'
);
fs.writeFileSync(skylightPath, skylightContent);

console.log('Final fixes applied!');
