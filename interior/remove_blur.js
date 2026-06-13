const fs = require('fs');
const path = require('path');

const directory = './';

fs.readdir(directory, (err, files) => {
    if (err) throw err;
    
    files.forEach(file => {
        if (path.extname(file) === '.html' && file !== 'index.html') {
            let content = fs.readFileSync(file, 'utf8');
            
            // Remove the blur
            const updatedContent = content.replace(/ backdrop-blur-sm/g, '');
            
            if (content !== updatedContent) {
                fs.writeFileSync(file, updatedContent);
                console.log(`Removed blur from ${file}`);
            }
        }
    });
});
