const fs = require('fs');
const path = require('path');

const exteriorDir = path.join('c:', 'Users', 'MSI 1', 'Downloads', 'ExteriorInterior', 'exterior');
const files = fs.readdirSync(exteriorDir).filter(f => f.endsWith('.html'));

const oldImageId = '1584622650111-993a426fbf0a';
const newImageUrl = 'https://media.istockphoto.com/id/2227010613/photo/modern-mediterranean-apartment-towers-in-antalya-turkey.webp?a=1&b=1&s=612x612&w=0&k=20&c=29-x6C_2eZlgKmYVOVkYXJA1zA99p9TIlxPPLoTQiEQ=';

let replacementCount = 0;

files.forEach(file => {
    const filePath = path.join(exteriorDir, file);
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // We look for https://images.unsplash.com/photo-1584622650111-993a426fbf0a followed by anything until a quote or parenthesis
    const regex = new RegExp(`https:\\/\\/images\\.unsplash\\.com\\/photo-${oldImageId}[^'"\\)]*`, 'g');
    
    if (regex.test(content)) {
        content = content.replace(regex, newImageUrl);
        replacementCount++;
        modified = true;
    }

    if (modified) {
        fs.writeFileSync(filePath, content);
        console.log(`Updated Aluminium Fences image in ${file}`);
    }
});

console.log(`Total files updated: ${replacementCount}`);
