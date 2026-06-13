const fs = require('fs');
const path = require('path');

const srcImagePath = 'C:\\Users\\MSI 1\\.gemini\\antigravity\\brain\\43a6785d-90af-4564-846f-d7f48c5a2982\\burj_khalifa_hero_1780822104792.png';
const destImagePath = path.join('c:', 'Users', 'MSI 1', 'Downloads', 'ExteriorInterior', 'assets', 'burj_khalifa_hero.png');
const rootIndexFile = path.join('c:', 'Users', 'MSI 1', 'Downloads', 'ExteriorInterior', 'index.html');

// Ensure assets directory exists
const assetsDir = path.dirname(destImagePath);
if (!fs.existsSync(assetsDir)){
    fs.mkdirSync(assetsDir, { recursive: true });
}

// Copy the image
fs.copyFileSync(srcImagePath, destImagePath);
console.log('Copied generated image to assets directory.');

// Update index.html
let content = fs.readFileSync(rootIndexFile, 'utf8');

// The current URL in the file is the unsplash one from the previous step
const oldUrl = "url('https://images.unsplash.com/photo-1512632578888-169bbbc64f33?auto=format&fit=crop&w=2000&q=80')";
const newUrl = "url('assets/burj_khalifa_hero.png')";

if (content.includes(oldUrl)) {
    content = content.replace(oldUrl, newUrl);
    fs.writeFileSync(rootIndexFile, content);
    console.log('Successfully updated index.html to use the custom generated image.');
} else {
    console.log('Could not find the old Unsplash URL to replace.');
}
