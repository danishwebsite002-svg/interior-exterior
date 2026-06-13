const fs = require('fs');
const path = require('path');

const filesToUpdate = ['services.html', 'index.html'];

filesToUpdate.forEach(file => {
    if (fs.existsSync(file)) {
        let content = fs.readFileSync(file, 'utf8');
        
        // Reverse 1
        content = content.replace(/class="grid grid-cols-1 md:grid-cols-2 gap-16 items-stretch/g, 'class="grid grid-cols-1 md:grid-cols-2 gap-16 items-center');
        
        // Reverse 2
        content = content.replace(/h-\[300px\] md:h-full flex flex-col/g, 'h-[600px]');
        
        // Reverse 3
        content = content.replace(/class="order-2 md:order-1 flex flex-col justify-center py-8"/g, 'class="order-2 md:order-1"');
        
        // Reverse 4
        content = content.replace(/<div data-aos="fade-left" class="flex flex-col justify-center py-8">/g, '<div data-aos="fade-left">');
        
        fs.writeFileSync(file, content);
        console.log(`Reverted layout in ${file}`);
    }
});
