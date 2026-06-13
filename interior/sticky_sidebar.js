const fs = require('fs');

const files = [
    'curtain-walls.html',
    'doors-and-windows.html',
    'skylight.html',
    'sliding-doors.html',
    'sliding-folding-doors.html',
    'substation-louvers.html'
];

files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    
    // Replace the right column class to make it sticky
    // It currently might look like <div class="lg:col-span-4 space-y-8" data-aos="fade-left">
    if (content.includes('lg:col-span-4 space-y-8"')) {
        content = content.replace('lg:col-span-4 space-y-8"', 'lg:col-span-4 space-y-8 lg:sticky lg:top-32 lg:self-start"');
        fs.writeFileSync(file, content);
        console.log('Made right side sticky in: ' + file);
    }
});
