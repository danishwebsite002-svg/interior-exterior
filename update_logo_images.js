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

        // 1. Exterior Header Logo
        const extHeaderRegex = /<div class="flex items-center space-x-2">\s*<div[^>]*class="w-6 h-6 rounded-full border-2 border-accent flex items-center justify-center"[^>]*>\s*<div class="w-2 h-2 bg-accent rounded-full animate-pulse"><\/div>\s*<\/div>\s*<a[^>]*href="index\.html"[^>]*>Exterior\s*<\/a>\s*<\/div>/g;
        content = content.replace(extHeaderRegex, `<a href="index.html"><img src="${assetPrefix}/logoheader.png" alt="Kiian Prime Technical Services L.L.C" class="h-10 w-auto"></a>`);

        // 2. Footer Logo (h2 variant)
        const footerH2Regex = /<h2 class="text-2xl font-bold text-white mb-6">Kiian Prime Technical Services <span class="text-(?:accent|copper)">L\.L\.C<\/span><\/h2>/g;
        content = content.replace(footerH2Regex, `<a href="index.html"><img src="${assetPrefix}/logofooter.png" alt="Kiian Prime Technical Services L.L.C" class="mb-6 h-12 w-auto"></a>`);

        // 3. Interior Header Logo
        const intHeaderRegex = /<a href="index\.html" class="flex items-center space-x-2">\s*<span class="text-3xl font-bold text-white tracking-tight"\s*>Kiian Prime Technical Services <span class="text-copper">L\.L\.C<\/span><\/span\s*>\s*<\/a>/g;
        content = content.replace(intHeaderRegex, `<a href="index.html" class="flex items-center"><img src="${assetPrefix}/logoheader.png" alt="Kiian Prime Technical Services L.L.C" class="h-10 w-auto object-contain"></a>`);

        // 4. Interior Footer Logo (mb-6 variant)
        const intFooterRegex = /<a href="index\.html" class="flex items-center space-x-2 mb-6">\s*<span class="text-3xl font-bold text-white tracking-tight"\s*>Kiian Prime Technical Services <span class="text-copper">L\.L\.C<\/span><\/span\s*>\s*<\/a>/g;
        content = content.replace(intFooterRegex, `<a href="index.html" class="flex items-center mb-6"><img src="${assetPrefix}/logofooter.png" alt="Kiian Prime Technical Services L.L.C" class="h-12 w-auto object-contain"></a>`);
        
        if (content !== originalContent) {
            fs.writeFileSync(fullPath, content, 'utf8');
            console.log(`Updated images in: ${fullPath}`);
        }
    });
}

dirs.forEach(processDir);
console.log('Done.');
