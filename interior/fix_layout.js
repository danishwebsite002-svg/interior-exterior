const fs = require('fs');

const files = [
    'doors-and-windows.html',
    'skylight.html',
    'curtain-walls.html',
    'sliding-doors.html',
    'sliding-folding-doors.html',
    'substation-louvers.html'
];

files.forEach(file => {
    if (fs.existsSync(file)) {
        let content = fs.readFileSync(file, 'utf8');
        
        // We are looking for the exact mistake:
        // </div></div></div>
        // followed by some whitespace and <!-- Dark SEO Content Block -->
        
        // A simple string replace of the exact anomaly.
        const regex = /<\/div><\/div><\/div>(\s*<!-- Dark SEO Content Block -->)/g;
        
        if (regex.test(content)) {
            content = content.replace(regex, '</div></div>$1');
            fs.writeFileSync(file, content);
            console.log('Fixed broken layout by removing extra </div> in ' + file);
        } else {
            // Wait, what if the Dark SEO block is not there?
            // Fallback: look for </div></div></div> followed by <!-- Project Showcase -->
            const fallbackRegex = /<\/div><\/div><\/div>(\s*<h3 class="text-3xl font-bold text-primary-dark mb-8">Project Showcase<\/h3>)/g;
            if (fallbackRegex.test(content)) {
                content = content.replace(fallbackRegex, '</div></div>$1');
                fs.writeFileSync(file, content);
                console.log('Fixed broken layout (fallback) in ' + file);
            }
        }
    }
});
