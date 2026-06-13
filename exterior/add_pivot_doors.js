const fs = require('fs');
const path = require('path');

const exteriorDir = path.join('c:', 'Users', 'MSI 1', 'Downloads', 'ExteriorInterior', 'exterior');
const files = fs.readdirSync(exteriorDir).filter(f => f.endsWith('.html'));

const oldId1 = '1600607686527-6fb886090705'; // Main doors-and-windows image
const newId1 = '1617307074423-6344f18d357f'; // Pivot door 1

const oldId2 = '1618221195710-dd6b41faaea6'; // Secondary image in doors-and-windows
const newId2 = '1668911492786-766a300d744b'; // Pivot door 2

let replacementCount1 = 0;
let replacementCount2 = 0;

files.forEach(file => {
    const filePath = path.join(exteriorDir, file);
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Replace the first image globally (updates index, services, and doors-and-windows hero)
    if (content.includes(oldId1)) {
        content = content.replace(new RegExp(oldId1, 'g'), newId1);
        replacementCount1++;
        modified = true;
    }

    // Replace the second image specifically inside the doors-and-windows page
    if (file === 'doors-and-windows.html' && content.includes(oldId2)) {
        content = content.replace(new RegExp(oldId2, 'g'), newId2);
        replacementCount2++;
        modified = true;
    }

    if (modified) {
        fs.writeFileSync(filePath, content);
        console.log(`Updated pivot doors in ${file}`);
    }
});

console.log(`Global replacements of ID 1: ${replacementCount1} files updated`);
console.log(`Specific replacements of ID 2: ${replacementCount2} files updated`);
