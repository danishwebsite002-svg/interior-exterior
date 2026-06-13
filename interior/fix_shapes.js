const fs = require('fs');

const files = [
    'doors-and-windows.html',
    'skylight.html',
    'curtain-walls.html',
    'sliding-doors.html',
    'sliding-folding-doors.html',
    'substation-louvers.html',
    'services.html'
];

files.forEach(file => {
    if (fs.existsSync(file)) {
        let content = fs.readFileSync(file, 'utf8');
        
        const oldShapes = '<div class="bg-shape-1"></div>\n            <div class="bg-shape-2"></div>';
        const newShapes = `<div class="absolute inset-0 overflow-hidden pointer-events-none z-0">\n                <div class="bg-shape-1"></div>\n                <div class="bg-shape-2"></div>\n            </div>`;
        
        // Also account for possible carriage returns
        const regex = /<div class="bg-shape-1"><\/div>\s*<div class="bg-shape-2"><\/div>/g;
        
        if (regex.test(content)) {
            content = content.replace(regex, newShapes);
            fs.writeFileSync(file, content);
            console.log('Fixed floating shapes in: ' + file);
        }
    }
});
