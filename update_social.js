const fs = require('fs');
const path = require('path');

const dirs = [
    'c:\\Users\\MSI 1\\Downloads\\ExteriorInterior\\exterior',
    'c:\\Users\\MSI 1\\Downloads\\ExteriorInterior\\interior'
];

const socialRegex = /<a\s+href="#"\s+class="[^"]*w-10 h-10[^"]*"\s*><i class="fab fa-facebook-f"><\/i\s*>\s*<\/a>\s*<a\s+href="#"\s+class="[^"]*w-10 h-10[^"]*"\s*><i class="fab fa-instagram"><\/i\s*>\s*<\/a>\s*<a\s+href="#"\s+class="[^"]*w-10 h-10[^"]*"\s*><i class="fab fa-twitter"><\/i\s*>\s*<\/a>\s*<a\s+href="#"\s+class="[^"]*w-10 h-10[^"]*"\s*><i class="fab fa-linkedin-in"><\/i\s*>\s*<\/a>/gs;

const newSocial = `<a
                href="https://www.instagram.com/kiianprime/?hl=en" target="_blank"
                class="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-accent hover:text-white transition-all"
                ><i class="fab fa-instagram"></i
              ></a>
              <a
                href="https://www.youtube.com/channel/UCvDvB1lCBboo-tusaVES3Vw" target="_blank"
                class="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-accent hover:text-white transition-all"
                ><i class="fab fa-youtube"></i
              ></a>`;

function processDir(dir) {
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
        
        // Social media replace
        content = content.replace(socialRegex, newSocial);
        
        if (content !== originalContent) {
            fs.writeFileSync(fullPath, content, 'utf8');
            console.log(`Updated social in: ${fullPath}`);
        }
    });
}

dirs.forEach(processDir);
console.log('Done.');
