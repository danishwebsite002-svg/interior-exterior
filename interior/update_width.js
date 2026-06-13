const fs = require('fs');
const path = require('path');

const directory = './';

fs.readdir(directory, (err, files) => {
    if (err) throw err;
    
    files.forEach(file => {
        if (path.extname(file) === '.html') {
            let content = fs.readFileSync(file, 'utf8');
            
            // Replace max-w-7xl with max-w-[90%]
            const updatedContent = content.replace(/max-w-7xl/g, 'w-[90%] max-w-[90%]');
            
            if (content !== updatedContent) {
                fs.writeFileSync(file, updatedContent);
                console.log(`Updated width in ${file}`);
            }
        }
    });
});
