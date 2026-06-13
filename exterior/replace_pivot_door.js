const fs = require('fs');
const path = require('path');

const exteriorDir = path.join('c:', 'Users', 'MSI 1', 'Downloads', 'ExteriorInterior', 'exterior');
const files = fs.readdirSync(exteriorDir).filter(f => f.endsWith('.html'));

const oldId = '1600607686527-6fb886090705';
const newId = '1617307074423-6344f18d357f';
let replacementCount = 0;

files.forEach(file => {
    const filePath = path.join(exteriorDir, file);
    let content = fs.readFileSync(filePath, 'utf8');
    
    if (content.includes(oldId)) {
        content = content.replace(new RegExp(oldId, 'g'), newId);
        fs.writeFileSync(filePath, content);
        console.log(`Replaced in ${file}`);
        replacementCount++;
    }
});

console.log(`Total files updated: ${replacementCount}`);
