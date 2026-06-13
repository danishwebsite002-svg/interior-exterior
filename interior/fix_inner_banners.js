const fs = require('fs');
const path = require('path');

const directory = './';

fs.readdirSync(directory).forEach(file => {
    if (path.extname(file) === '.html' && file !== 'index.html') {
        let content = fs.readFileSync(file, 'utf8');
        let modified = false;

        // Ensure parallax bg-fixed on the first section inside main
        const mainStart = content.indexOf('<main>');
        if (mainStart !== -1) {
            const firstSectStart = content.indexOf('<section', mainStart);
            const firstSectEnd = content.indexOf('>', firstSectStart);
            
            if (firstSectStart !== -1 && firstSectEnd !== -1) {
                let sectTag = content.substring(firstSectStart, firstSectEnd + 1);
                
                // Add bg-fixed if missing
                if (!sectTag.includes('bg-fixed')) {
                    sectTag = sectTag.replace('class="', 'class="bg-fixed ');
                    modified = true;
                }
                // Ensure height is h-[50vh] md:h-[60vh]
                sectTag = sectTag.replace(/h-\[40vh\] md:h-\[45vh\]/g, 'h-[50vh] md:h-[60vh]');
                
                content = content.substring(0, firstSectStart) + sectTag + content.substring(firstSectEnd + 1);
            }
        }

        // Fix all bg-white overlays in the banner
        // Limit to the first 2000 chars after <main>
        if (mainStart !== -1) {
            let bannerArea = content.substring(mainStart, mainStart + 2000);
            
            // Replace bg-white/60, bg-white/70, etc.
            if (/bg-white\/\d+/.test(bannerArea)) {
                bannerArea = bannerArea.replace(/bg-white\/\d+/g, 'bg-slate-900/75 mix-blend-multiply');
                content = content.substring(0, mainStart) + bannerArea + content.substring(mainStart + 2000);
                modified = true;
            }
            
            // Fix text color of h1 inside banner
            bannerArea = content.substring(mainStart, mainStart + 2000);
            if (/text-primary-dark/.test(bannerArea)) {
                bannerArea = bannerArea.replace(/<h1([^>]+)text-primary-dark([^>]*)>/g, '<h1$1text-white$2>');
                content = content.substring(0, mainStart) + bannerArea + content.substring(mainStart + 2000);
                modified = true;
            }
        }

        if (modified) {
            fs.writeFileSync(file, content);
            console.log('Fixed banner in ' + file);
        }
    }
});
