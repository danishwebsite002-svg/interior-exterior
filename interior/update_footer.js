const fs = require('fs');
const path = require('path');

const directory = './';

// First, read the target footer from gallery.html
const galleryContent = fs.readFileSync('gallery.html', 'utf8');
const footerMatch = galleryContent.match(/(<footer[\s\S]*?<\/footer>)/);

if (!footerMatch) {
    console.error("Could not find footer in gallery.html");
    process.exit(1);
}

const targetFooter = footerMatch[1];

// Now loop through all html files and replace their footers
fs.readdir(directory, (err, files) => {
    if (err) throw err;
    
    files.forEach(file => {
        if (path.extname(file) === '.html') {
            let content = fs.readFileSync(file, 'utf8');
            
            // Look for existing footer
            const existingFooterMatch = content.match(/<footer[\s\S]*?<\/footer>/);
            
            if (existingFooterMatch) {
                // Replace existing footer
                if (content !== content.replace(existingFooterMatch[0], targetFooter)) {
                    content = content.replace(existingFooterMatch[0], targetFooter);
                    fs.writeFileSync(file, content);
                    console.log(`Updated footer in ${file}`);
                } else {
                    console.log(`Footer already identical in ${file}`);
                }
            } else {
                console.log(`No footer found in ${file}, skipping or you could append it before </body>`);
                // If we want to append it:
                if (content.includes('</body>')) {
                    content = content.replace('</body>', targetFooter + '\n</body>');
                    fs.writeFileSync(file, content);
                    console.log(`Appended footer to ${file}`);
                }
            }
        }
    });
});
