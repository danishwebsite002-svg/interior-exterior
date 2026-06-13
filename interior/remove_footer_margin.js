const fs = require('fs');
const path = require('path');

const directory = './';

fs.readdir(directory, (err, files) => {
    if (err) throw err;
    files.forEach(file => {
        if (path.extname(file) === '.html') {
            let content = fs.readFileSync(file, 'utf8');
            // Remove mt-20 from the footer
            if (content.includes('mt-20 border-t border-slate-800')) {
                content = content.replace('mt-20 border-t border-slate-800', 'border-t border-slate-800');
                fs.writeFileSync(file, content);
                console.log(`Removed margin top from footer in ${file}`);
            }
        }
    });
});
