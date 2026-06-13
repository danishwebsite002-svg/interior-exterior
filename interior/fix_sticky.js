const fs = require('fs');
const path = require('path');

const directory = './';

fs.readdirSync(directory).forEach(file => {
    if (path.extname(file) === '.html' && file !== 'index.html') {
        let content = fs.readFileSync(file, 'utf8');
        
        // Find the section that wraps the grid.
        // It looks like: <section class="relative w-[90%] max-w-[90%] mx-auto px-4 md:px-8 py-20 overflow-hidden">
        // It's the section AFTER the banner section.
        
        const mainStart = content.indexOf('<main>');
        if (mainStart !== -1) {
            const gridSectionStr = 'w-[90%] max-w-[90%] mx-auto px-4 md:px-8 py-20 overflow-hidden';
            if (content.includes(gridSectionStr)) {
                content = content.replace(gridSectionStr, 'w-[90%] max-w-[90%] mx-auto px-4 md:px-8 py-20');
                fs.writeFileSync(file, content);
                console.log('Fixed sticky bug by removing overflow-hidden in ' + file);
            }
            
            // Just in case it has slightly different spacing
            const gridSectionRegex = /w-\[90%\] max-w-\[90%\] mx-auto px-4 md:px-8 py-20 overflow-hidden/g;
            if(gridSectionRegex.test(content)) {
                content = content.replace(gridSectionRegex, 'w-[90%] max-w-[90%] mx-auto px-4 md:px-8 py-20');
                fs.writeFileSync(file, content);
            }
        }
    }
});
