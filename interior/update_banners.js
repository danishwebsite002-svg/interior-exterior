const fs = require('fs');
const path = require('path');

const directory = './';

fs.readdirSync(directory).forEach(file => {
    if (path.extname(file) === '.html' && file !== 'index.html') {
        let content = fs.readFileSync(file, 'utf8');
        let modified = false;

        // Make it taller and add bg-fixed for parallax
        if (content.includes('h-[40vh] md:h-[45vh]')) {
            content = content.replace('h-[40vh] md:h-[45vh]', 'h-[50vh] md:h-[60vh] bg-fixed');
            modified = true;
        }

        // Change white overlay to dark overlay
        if (content.includes('bg-white/70')) {
            content = content.replace('bg-white/70', 'bg-slate-900/75 mix-blend-multiply');
            modified = true;
        }

        // Change dark text to white text
        if (content.includes('text-primary-dark') && content.indexOf('text-primary-dark') < content.indexOf('</section>')) {
            // Only replace the h1 text color inside the banner
            const bannerEnd = content.indexOf('</section>');
            const bannerHTML = content.substring(0, bannerEnd);
            
            if (bannerHTML.includes('text-primary-dark')) {
                const newBannerHTML = bannerHTML.replace(/text-primary-dark/g, 'text-white');
                content = newBannerHTML + content.substring(bannerEnd);
                modified = true;
            }
        }

        // Change breadcrumb text from slate-700 to slate-300
        const bannerEnd = content.indexOf('</section>');
        if (bannerEnd !== -1) {
            let bannerHTML = content.substring(0, bannerEnd);
            if (bannerHTML.includes('text-slate-700')) {
                bannerHTML = bannerHTML.replace(/text-slate-700/g, 'text-slate-300');
                content = bannerHTML + content.substring(bannerEnd);
                modified = true;
            }
            if (bannerHTML.includes('text-slate-500')) { // The slash separator
                bannerHTML = bannerHTML.replace(/text-slate-500/g, 'text-slate-400');
                content = bannerHTML + content.substring(bannerEnd);
                modified = true;
            }
        }

        if (modified) {
            fs.writeFileSync(file, content);
            console.log('Updated banner in ' + file);
        }
    }
});
