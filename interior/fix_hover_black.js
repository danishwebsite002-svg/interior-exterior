const fs = require('fs');

const file = 'index.html';
let content = fs.readFileSync(file, 'utf8');

// Fix Testimonial Arrows
content = content.replace(
    /hover:bg-white transition-colors duration-300">\s*<i class="fas fa-chevron-left/g,
    'hover:bg-black hover:text-white transition-colors duration-300">\n                    <i class="fas fa-chevron-left'
);
content = content.replace(
    /hover:bg-white transition-colors duration-300">\s*<i class="fas fa-chevron-right/g,
    'hover:bg-black hover:text-white transition-colors duration-300">\n                    <i class="fas fa-chevron-right'
);

// Fallback if the regex above didn't match perfectly
content = content.replace(/"testi-prev([^>]+)hover:bg-white/g, '"testi-prev$1hover:bg-black hover:text-white');
content = content.replace(/"testi-next([^>]+)hover:bg-white/g, '"testi-next$1hover:bg-black hover:text-white');


// Fix Blog 'View All' Button
content = content.replace(
    /hover:bg-\[#F97316\] hover:text-white/g,
    'hover:bg-black hover:text-white'
);

fs.writeFileSync(file, content);
console.log('Fixed hover states to be black');
