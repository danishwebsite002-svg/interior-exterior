const fs = require('fs');
const path = require('path');

const dirs = [
    'c:\\Users\\MSI 1\\Downloads\\ExteriorInterior\\exterior',
    'c:\\Users\\MSI 1\\Downloads\\ExteriorInterior\\interior'
];

function processDir(dir) {
    const isExterior = dir.endsWith('exterior');
    const files = fs.readdirSync(dir);
    
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
        
        // Replace address
        content = content.replace(/Boulevard Plaza Tower 1<br>Downtown Dubai, UAE<br>P\.O\. Box 123456/g, 'dubai , united arab emirates');
        
        // Replace copyright with appended goadslive link
        const copyrightRegex1 = /(<p>&copy; 2026 Kiian Prime Technical Services L\.L\.C All rights reserved\.)(<\/p>)/g;
        const footerStr1 = ` <span class="mx-2">|</span> Design and developed by <a href="https://goadslive.com" target="_blank" class="hover:text-accent transition-colors">goadslive.com</a>`;
        content = content.replace(copyrightRegex1, `$1${footerStr1}$2`);
        
        const copyrightRegex2 = /(<p>&copy; 2026 Arctix Architecture & Design\. All Rights Reserved\.)(<\/p>)/g;
        const footerStr2 = ` <span class="mx-2">|</span> Design and developed by <a href="https://goadslive.com" target="_blank" class="hover:text-copper transition-colors">goadslive.com</a>`;
        content = content.replace(copyrightRegex2, `$1${footerStr2}$2`);
        
        if (content !== originalContent) {
            fs.writeFileSync(fullPath, content, 'utf8');
            console.log(`Updated: ${fullPath}`);
        }
    });
}

dirs.forEach(processDir);
console.log('Done.');
