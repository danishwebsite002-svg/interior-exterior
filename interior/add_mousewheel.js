const fs = require('fs');

const file = 'index.html';
let content = fs.readFileSync(file, 'utf8');

if (content.includes('var servicesSwiper = new Swiper(".servicesSwiper", {')) {
    const swiperConfigIndex = content.indexOf('var servicesSwiper = new Swiper(".servicesSwiper", {');
    
    // Add mousewheel support to the config if it's not there
    if (!content.includes('mousewheel:')) {
        content = content.replace(
            'freeMode: true,',
            'freeMode: true,\n            mousewheel: {\n                forceToAxis: true,\n            },'
        );
        fs.writeFileSync(file, content);
        console.log('Added mousewheel scrolling to servicesSwiper');
    } else {
        console.log('Mousewheel config already exists.');
    }
} else {
    console.log('servicesSwiper not found.');
}
