const fs = require('fs');

const file = 'index.html';
let content = fs.readFileSync(file, 'utf8');

// 1. Fix the broken AOS script tag
content = content.replace(
    /<script src="https:\/\/unpkg\.com\/aos@2\.3\.1\/dist\/aos\.js">\s*var servicesSwiper[\s\S]*?<\/script>/,
    '<script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>'
);

// 2. Inject servicesSwiper properly before the LAST </script> tag
const scriptInjection = `
        var servicesSwiper = new Swiper(".servicesSwiper", {
            slidesPerView: 1.2,
            spaceBetween: 24,
            freeMode: true,
            grabCursor: true,
            scrollbar: {
                el: ".swiper-scrollbar",
                hide: false,
                draggable: true,
            },
            breakpoints: {
                640: { slidesPerView: 2.2, spaceBetween: 24 },
                1024: { slidesPerView: 3.5, spaceBetween: 32 }
            }
        });
    </script>`;

const lastScriptIndex = content.lastIndexOf('</script>');
if (lastScriptIndex !== -1 && !content.includes('var servicesSwiper')) {
    content = content.substring(0, lastScriptIndex) + scriptInjection + content.substring(lastScriptIndex + 9);
}

fs.writeFileSync(file, content);
console.log('Fixed Swiper injection in index.html');
