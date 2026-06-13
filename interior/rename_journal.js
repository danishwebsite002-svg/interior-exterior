const fs = require('fs');
const path = require('path');

const directory = './';

fs.readdir(directory, (err, files) => {
    if (err) throw err;
    files.forEach(file => {
        if (path.extname(file) === '.html') {
            let content = fs.readFileSync(file, 'utf8');
            let modified = false;

            // Replace "Journal" with "Blog" in navigation
            if (content.includes('>Journal</a>')) {
                content = content.replace(/>Journal<\/a>/g, '>Blog</a>');
                modified = true;
            }
            
            // For blog.html specific replacements
            if (file === 'blog.html') {
                content = content.replace(/Interior Journal/g, 'Interior Blog');
                content = content.replace(/The Journal/g, 'Our Blog');
                content = content.replace(/<span class="text-accent">Journal<\/span>/g, '<span class="text-accent">Blog</span>');
                modified = true;
            }

            if (modified) {
                fs.writeFileSync(file, content);
                console.log(`Renamed Journal to Blog in ${file}`);
            }
        }
    });
});
