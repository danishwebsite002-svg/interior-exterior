const fs = require('fs');

const file = 'index.html';
let content = fs.readFileSync(file, 'utf8');

// 1. Fix the broken Tailwind script tag
const brokenTailwind = /<script src="https:\/\/cdn\.tailwindcss\.com">\s*var servicesSwiper[\s\S]*?<\/script>/;
content = content.replace(brokenTailwind, '<script src="https://cdn.tailwindcss.com"></script>');

// 2. Inject servicesSwiper properly before the final </script> tag
const scriptInjection = `
        var servicesSwiper = new Swiper(".servicesSwiper", {
            slidesPerView: 1,
            spaceBetween: 24,
            freeMode: true,
            grabCursor: true,
            scrollbar: {
                el: ".servicesSwiper .swiper-scrollbar",
                hide: false,
                draggable: true,
            },
            breakpoints: {
                640: { slidesPerView: 2, spaceBetween: 24 },
                1024: { slidesPerView: 3, spaceBetween: 32 }
            }
        });
    </script>`;

// Find the last </script> tag
const lastScriptIndex = content.lastIndexOf('</script>');
if (lastScriptIndex !== -1 && !content.includes('var servicesSwiper')) {
    content = content.substring(0, lastScriptIndex) + scriptInjection + content.substring(lastScriptIndex + 9);
}

fs.writeFileSync(file, content);
console.log('Fixed Swiper injection and set to 3 cards per view');
