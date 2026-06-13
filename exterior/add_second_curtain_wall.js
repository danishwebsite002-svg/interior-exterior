const fs = require('fs');
const path = require('path');

const filePath = path.join('c:', 'Users', 'MSI 1', 'Downloads', 'ExteriorInterior', 'exterior', 'curtain-walls.html');
let content = fs.readFileSync(filePath, 'utf8');

// The new URLs
const heroUrl = "https://images.unsplash.com/photo-1582174847297-a681c87719ad?q=80&w=1149&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
const gridUrl = "https://images.unsplash.com/photo-1691845254952-1ef8a890a0cd?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

// Replace line 122 (Hero Banner)
content = content.replace(
    /<div class="absolute inset-0 bg-cover bg-center parallax-bg" style="background-image: url\('[^']+'\);"><\/div>/,
    `<div class="absolute inset-0 bg-cover bg-center parallax-bg" style="background-image: url('${heroUrl}');"></div>`
);

// Replace line 294 (First grid image)
content = content.replace(
    /<div class="w-full h-full bg-cover bg-center img-hover-zoom" style="background-image: url\('https:\/\/images\.unsplash\.com\/photo-1505691938895-1758d7feb511\?auto=format&fit=crop&w=2000&q=80'\);"><\/div>/,
    `<div class="w-full h-full bg-cover bg-center img-hover-zoom" style="background-image: url('${gridUrl}');"></div>`
);

fs.writeFileSync(filePath, content);
console.log("Successfully fixed Curtain Walls layout and injected the second image.");
