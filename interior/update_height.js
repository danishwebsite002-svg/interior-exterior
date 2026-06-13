const fs = require('fs');
const path = require('path');

const filesToUpdate = ['services.html', 'index.html'];

filesToUpdate.forEach(file => {
    if (fs.existsSync(file)) {
        let content = fs.readFileSync(file, 'utf8');
        
        // 1. Change items-center to items-stretch for the service/what-we-do grids
        // But only in the zig-zag sections, which have grid-cols-1 md:grid-cols-2 gap-16
        content = content.replace(/class="grid grid-cols-1 md:grid-cols-2 gap-16 items-center/g, 'class="grid grid-cols-1 md:grid-cols-2 gap-16 items-stretch');
        
        // 2. Change the image container from h-[600px] to h-[300px] md:h-full
        // This makes it fixed height on mobile, but stretches to match text height on desktop
        content = content.replace(/h-\[600px\]/g, 'h-[300px] md:h-full flex flex-col');
        
        // 3. Make text container flex flex-col justify-center
        // Find: <div class="order-2 md:order-1" data-aos="fade-right">
        content = content.replace(/class="order-2 md:order-1"/g, 'class="order-2 md:order-1 flex flex-col justify-center py-8"');
        content = content.replace(/class="order-2 md:order-1"/g, 'class="order-2 md:order-1 flex flex-col justify-center py-8"');
        // Find: <div data-aos="fade-left"> (for right side text in services.html)
        // Wait, in services.html, right side text is just <div data-aos="fade-left">
        content = content.replace(/<div data-aos="fade-left">/g, '<div data-aos="fade-left" class="flex flex-col justify-center py-8">');
        
        fs.writeFileSync(file, content);
        console.log(`Updated layout in ${file}`);
    }
});
