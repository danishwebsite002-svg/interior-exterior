const fs = require('fs');
const path = require('path');

const directory = './';

fs.readdir(directory, (err, files) => {
    if (err) throw err;
    
    files.forEach(file => {
        if (path.extname(file) === '.html' && file !== 'index.html') {
            let content = fs.readFileSync(file, 'utf8');
            
            // We need to target the inner page banner specifically
            // We can match the <section> block that has the banner
            const bannerRegex = /(<section class="relative w-full h-\[40vh\] md:h-\[45vh\][^>]*>|<section class="relative w-full h-\[50vh\] md:h-\[60vh\][^>]*>)([\s\S]*?)(<\/section>)/;
            
            content = content.replace(bannerRegex, (match, p1, p2, p3) => {
                let inner = p2;
                
                // Replace overlays
                inner = inner.replace(/bg-primary-dark\/60/g, 'bg-white/60 backdrop-blur-sm');
                inner = inner.replace(/bg-primary-dark\/70/g, 'bg-white/70 backdrop-blur-sm');
                inner = inner.replace(/bg-primary-dark\/50/g, 'bg-white/50 backdrop-blur-sm');
                
                // Replace text colors
                inner = inner.replace(/text-white/g, 'text-primary-dark');
                inner = inner.replace(/text-slate-300/g, 'text-slate-700');
                
                return p1 + inner + p3;
            });
            
            fs.writeFileSync(file, content);
            console.log(`Updated banner text in ${file}`);
        }
    });
});
