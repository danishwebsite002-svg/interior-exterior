const fs = require('fs');
const path = require('path');

const dir = path.join('c:', 'Users', 'MSI 1', 'Downloads', 'ExteriorInterior', 'exterior');
const files = fs.readdirSync(dir).filter(f => f.endsWith('.html'));

files.forEach(f => {
    const p = path.join(dir, f);
    let content = fs.readFileSync(p, 'utf8');
    
    // Find all url(...) patterns that contain http
    content = content.replace(/url\(([^)]+)\)/g, (match, urlInside) => {
        if (!urlInside.includes('http')) return match;
        
        // Clean up the url string
        let cleanUrl = urlInside
            .replace(/^&quot;|^"|^'/, '') // Remove leading quotes or &quot;
            .replace(/&quot;$|"$|'$/, ''); // Remove trailing quotes or &quot;
            
        // Return wrapped nicely in single quotes
        return `url('${cleanUrl}')`;
    });

    fs.writeFileSync(p, content);
});

console.log("Quotes fixed globally in all HTML files.");
