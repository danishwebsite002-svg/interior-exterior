const fs = require('fs');
const path = require('path');

const dirs = [
    'c:\\Users\\MSI 1\\Downloads\\ExteriorInterior\\exterior',
    'c:\\Users\\MSI 1\\Downloads\\ExteriorInterior\\interior',
    'c:\\Users\\MSI 1\\Downloads\\ExteriorInterior'
];

function processDir(dir) {
    let files;
    try {
        files = fs.readdirSync(dir);
    } catch (e) {
        return;
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
        
        const isInRoot = fullPath === path.join('c:\\Users\\MSI 1\\Downloads\\ExteriorInterior', 'index.html');
        const assetPrefix = isInRoot ? './assets' : '../assets';

        // Fix multiline h2 tag replacement
        const footerH2Regex = /<h2 class="text-2xl font-bold text-white mb-6">\s*Kiian Prime Technical Services <span class="text-(?:accent|copper)">L\.L\.C<\/span>\s*<\/h2>/g;
        content = content.replace(footerH2Regex, `<a href="index.html"><img src="${assetPrefix}/logofooter.png" alt="Kiian Prime Technical Services L.L.C" class="mb-6 h-12 w-auto"></a>`);

        // Check if there are any other remnants of the text logos that should be an image
        
        if (content !== originalContent) {
            fs.writeFileSync(fullPath, content, 'utf8');
            console.log(`Updated images in: ${fullPath}`);
        }
    });
}

dirs.forEach(processDir);
console.log('Done fix 2.');
