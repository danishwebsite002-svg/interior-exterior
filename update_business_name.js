const fs = require('fs');
const path = require('path');

const dirs = [
    'c:\\Users\\MSI 1\\Downloads\\ExteriorInterior\\exterior',
    'c:\\Users\\MSI 1\\Downloads\\ExteriorInterior\\interior',
    'c:\\Users\\MSI 1\\Downloads\\ExteriorInterior' // For root index.html
];

function processDir(dir) {
    let files;
    try {
        files = fs.readdirSync(dir);
    } catch (e) {
        return; // handle error if any
    }
    
    files.forEach(file => {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            return;
        }
        
        if (!fullPath.endsWith('.html')) {
            return;
        }
        
        let content = fs.readFileSync(fullPath, 'utf8');
        let originalContent = content;
        
        // Replacements
        content = content.replace(/KIIAN PRIME<span class="text-accent"> TECHNICAL<\/span>/g, 'Kiian Prime Technical Services <span class="text-accent">L.L.C</span>');
        content = content.replace(/KIIAN PRIME<span class="text-copper">\.<\/span>/g, 'Kiian Prime Technical Services <span class="text-copper">L.L.C</span>');
        content = content.replace(/CEO of KIIAN PRIME/g, 'CEO of Kiian Prime Technical Services L.L.C');
        content = content.replace(/KIIAN PRIME TECHNICAL SERVICES \|/g, 'Kiian Prime Technical Services L.L.C |');
        content = content.replace(/Arctix Architecture & Design/g, 'Kiian Prime Technical Services L.L.C');
        content = content.replace(/Arctix structure/g, 'Kiian Prime Technical Services L.L.C structure');
        
        if (content !== originalContent) {
            fs.writeFileSync(fullPath, content, 'utf8');
            console.log(`Updated names in: ${fullPath}`);
        }
    });
}

dirs.forEach(processDir);
console.log('Done.');
