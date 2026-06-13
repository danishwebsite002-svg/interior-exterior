const fs = require('fs');
const path = require('path');

const directory = './';

fs.readdir(directory, (err, files) => {
    if (err) throw err;
    files.forEach(file => {
        if (path.extname(file) === '.html') {
            let content = fs.readFileSync(file, 'utf8');
            let modified = false;

            // Split by section tags
            // We use a regex with a replacer function to keep track of section index
            let sectionCount = 0;
            
            content = content.replace(/<section\s+class="([^"]+)"/g, (match, classes) => {
                sectionCount++;
                
                // Skip the first section (usually Hero banner)
                if (sectionCount === 1) return match;
                
                // Skip sections that are explicitly dark or have a dark background
                if (classes.includes('bg-primary-dark') || classes.includes('bg-slate-900') || classes.includes('bg-black')) {
                    return match;
                }
                
                // Remove existing light backgrounds to prevent stacking
                let newClasses = classes.replace(/\bbg-[#F8F9FA]\b/g, '')
                                        .replace(/\bbg-off-warm\b/g, '')
                                        .replace(/\bbg-slate-50\b/g, '')
                                        .replace(/\bbg-white\b/g, '')
                                        .replace(/\bbg-gray-50\b/g, '');
                                        
                // Normalize spaces
                newClasses = newClasses.replace(/\s+/g, ' ').trim();
                
                // If it's an even numbered section (after ignoring dark ones? No, just globally even/odd after the first)
                // Let's alternate based on the sectionCount.
                // 1=Hero (skipped), 2=White, 3=Off-color, 4=White, 5=Off-color...
                if (sectionCount % 2 !== 0) {
                    newClasses += ' bg-slate-50';
                }
                
                // Sometimes section classes had "w-[90%] mx-auto". If we add bg-slate-50 to a w-[90%] section, the background doesn't go edge-to-edge!
                // To fix this, we actually need the section to be w-full, and the inner div to be w-[90%].
                // But changing DOM structure via regex is dangerous.
                // However, the user said "make a off colour to make section different". If the section is w-[90%], the background will just be a block in the middle, which is often fine and looks like a card, or the user wants edge-to-edge.
                // Let's just add the class for now.
                
                if (classes !== newClasses) {
                    modified = true;
                    return `<section class="${newClasses}"`;
                }
                return match;
            });
            
            if (modified) {
                fs.writeFileSync(file, content);
                console.log(`Alternated section colors in ${file}`);
            }
        }
    });
});
