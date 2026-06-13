const fs = require('fs');
const path = require('path');

const exteriorDir = path.join('c:', 'Users', 'MSI 1', 'Downloads', 'ExteriorInterior', 'exterior');
const files = fs.readdirSync(exteriorDir).filter(f => f.endsWith('.html'));

const oldImageId = '1513694203232-719a280e022f';
const newImageUrl = 'https://images.unsplash.com/photo-1721902024148-287438cf3e05?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';

let replacementCount = 0;

files.forEach(file => {
    const filePath = path.join(exteriorDir, file);
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Replace the URL globally
    const regex = new RegExp(`https:\\/\\/images\\.unsplash\\.com\\/photo-${oldImageId}[^'"\\)]*`, 'g');
    
    if (regex.test(content)) {
        content = content.replace(regex, newImageUrl);
        replacementCount++;
        modified = true;
    }

    if (modified) {
        fs.writeFileSync(filePath, content);
        console.log(`Updated Sliding Doors image in ${file}`);
    }
});

console.log(`Total files updated: ${replacementCount}`);
