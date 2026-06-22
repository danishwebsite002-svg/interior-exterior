const fs = require('fs');
const path = require('path');

const dirs = [
    'c:\\Users\\MSI 1\\Downloads\\ExteriorInterior\\exterior',
    'c:\\Users\\MSI 1\\Downloads\\ExteriorInterior\\interior'
];

const socialRegex = /<a\s+href="#"\s+class="[^"]*w-10 h-10[^"]*"\s*>\s*<i class="fab fa-facebook-f"><\/i>\s*<\/a>\s*<a\s+href="#"\s+class="[^"]*w-10 h-10[^"]*"\s*>\s*<i class="fab fa-instagram"><\/i>\s*<\/a>\s*<a\s+href="#"\s+class="[^"]*w-10 h-10[^"]*"\s*>\s*<i class="fab fa-twitter"><\/i>\s*<\/a>\s*<a\s+href="#"\s+class="[^"]*w-10 h-10[^"]*"\s*>\s*<i class="fab fa-linkedin-in"><\/i>\s*<\/a>/gs;

const newSocial = `<a
                href="https://www.instagram.com/kiianprime/?hl=en" target="_blank"
                class="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-accent hover:text-white transition-all"
                ><i class="fab fa-instagram"></i></a>
              <a
                href="https://www.youtube.com/channel/UCvDvB1lCBboo-tusaVES3Vw" target="_blank"
                class="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-accent hover:text-white transition-all"
                ><i class="fab fa-youtube"></i></a>`;

function processDir(dir) {
    const isExterior = dir.endsWith('exterior');
    const files = fs.readdirSync(dir);
    
    files.forEach(file => {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            // we don't have subdirectories with html
            return;
        }
        
        if (!fullPath.endsWith('.html')) {
            return;
        }
        
        let content = fs.readFileSync(fullPath, 'utf8');
        let originalContent = content;
        
        // Replacements
        content = content.replace(/Info@kiianprime\.com/gi, 'kiianprime@gmail.com');
        content = content.replace(/\+971 0521147860/g, '+9758 191 2770');
        content = content.replace(/tel:\+9710521147860/g, 'tel:+97581912770');
        content = content.replace(/KIIAN PRIME TECHNICAL SERVICES L\.L\.C S\.O\.C\./g, 'Kiian Prime Technical Services L.L.C');
        
        // Social media replace
        content = content.replace(socialRegex, newSocial);
        
        // Door and window remove from exterior
        if (isExterior) {
            // Remove <li> link
            content = content.replace(/\s*<li>\s*<a[^>]*href="doors-and-windows\.html"[^>]*>[\s\S]*?<\/a>\s*<\/li>/g, '');
            // Remove swiper-slide block
            content = content.replace(/\s*<div class="swiper-slide">\s*<a href="doors-and-windows\.html"[\s\S]*?<\/a>\s*<\/div>/g, '');
            // Remove service card block
            content = content.replace(/\s*<!-- Service Card -->\s*<a href="doors-and-windows\.html"[\s\S]*?<\/a>/g, '');
        }
        
        if (content !== originalContent) {
            fs.writeFileSync(fullPath, content, 'utf8');
            console.log(`Updated: ${fullPath}`);
        }
    });
}

dirs.forEach(processDir);
console.log('Done.');
