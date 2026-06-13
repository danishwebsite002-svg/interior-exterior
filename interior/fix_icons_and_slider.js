const fs = require('fs');
const path = require('path');

const directory = './';

// The FontAwesome CDN to add
const faLink = '    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">\n';

fs.readdirSync(directory).forEach(file => {
    if (path.extname(file) === '.html') {
        let content = fs.readFileSync(file, 'utf8');
        let modified = false;

        // 1. Add FontAwesome if missing
        if (!content.includes('font-awesome/6.4.0')) {
            content = content.replace('</head>', faLink + '</head>');
            modified = true;
        }

        // 2. Fix smooth sliding for testimonialsSwiper in index.html
        if (file === 'index.html') {
            // Add speed to the swiper config
            if (content.includes('var testimonialsSwiper') && !content.includes('speed: 800')) {
                content = content.replace('loop: true,', 'loop: true,\n            speed: 800,\n            grabCursor: true,');
                modified = true;
            }

            // Duplicate slides so looping works smoothly when showing 4 cards
            const wrapperStart = content.indexOf('<div class="swiper-wrapper">', content.indexOf('testimonialsSwiper'));
            const wrapperEnd = content.indexOf('</div>\n            </div>\n            \n            <!-- Navigation Arrows -->');
            
            if (wrapperStart !== -1 && wrapperEnd !== -1) {
                const slidesContent = content.substring(wrapperStart + 28, wrapperEnd);
                // Only duplicate if we have just 4 cards (meaning we haven't duplicated yet)
                // Roughly checking length to see if it's been duplicated
                if (slidesContent.length < 5000) {
                    content = content.substring(0, wrapperEnd) + slidesContent + content.substring(wrapperEnd);
                    modified = true;
                }
            }
        }

        if (modified) {
            fs.writeFileSync(file, content);
            console.log(`Updated ${file} with FontAwesome/Swiper fixes`);
        }
    }
});
