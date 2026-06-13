const fs = require('fs');
const path = require('path');

const exteriorDir = path.join('c:', 'Users', 'MSI 1', 'Downloads', 'ExteriorInterior', 'exterior');
const filesToUpdate = ['index.html', 'about.html', 'gallery.html', 'contact.html'];

const exteriorImages = [
    '1600596542815-ffad4c1539a9', // Modern Villa
    '1513694203232-719a280e022f', // Sliding Glass Exterior
    '1616486338812-3dadae4b4ace', // Skyscraper Facade
    '1486406146926-c627a92ad1ab', // Glass Curtain Wall
    '1505691938895-1758d7feb511', // Modern Architecture
    '1518173946091-a8330452a5f7', // Aluminium Fins
    '1584622650111-993a426fbf0a', // House Exterior / Fence
    '1507089947368-19c1da9775ae', // Roof / Skylight
    '1595843468924-a21235b377b2', // Outdoor Patio / Pergola
    '1600585154340-be6161a56a0c', // Exterior Bifold
    '1600607686527-6fb886090705', // Modern Windows
    '1560945842-88fdfb2390a0', // Mashrabiya
    '1600210492486-724fe5c67fb0'  // Glass facade
];

let imgIndex = 0;

filesToUpdate.forEach(file => {
    const filePath = path.join(exteriorDir, file);
    if (!fs.existsSync(filePath)) return;
    
    let content = fs.readFileSync(filePath, 'utf8');
    
    // We will find every Unsplash URL and replace the ID
    const regex = /images\.unsplash\.com\/photo-([a-zA-Z0-9\-]+)/g;
    
    content = content.replace(regex, (match, p1) => {
        // Exclude some known good exterior IDs if they are already there?
        // Let's just blindly replace them all to ensure everything is strictly exterior
        const newId = exteriorImages[imgIndex % exteriorImages.length];
        imgIndex++;
        return `images.unsplash.com/photo-${newId}`;
    });
    
    fs.writeFileSync(filePath, content);
    console.log(`Updated images in ${file}`);
});

console.log("All residual interior images in core pages have been replaced with 100% exterior architecture imagery!");
