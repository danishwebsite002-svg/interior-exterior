const fs = require('fs');
const path = require('path');

const directory = './';

fs.readdir(directory, (err, files) => {
    if (err) throw err;
    files.forEach(file => {
        if (path.extname(file) === '.html') {
            let content = fs.readFileSync(file, 'utf8');
            let modified = false;

            // Remove bg-slate-50 from section classes
            content = content.replace(/<section\s+class="([^"]+)"/g, (match, classes) => {
                if (classes.includes('bg-slate-50')) {
                    let newClasses = classes.replace(/\bbg-slate-50\b/g, '').replace(/\s+/g, ' ').trim();
                    modified = true;
                    return `<section class="${newClasses}"`;
                }
                return match;
            });
            
            if (modified) {
                fs.writeFileSync(file, content);
                console.log(`Undid alternating section colors in ${file}`);
            }
        }
    });
});
