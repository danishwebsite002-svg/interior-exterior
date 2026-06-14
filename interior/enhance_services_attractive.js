const fs = require('fs');
const path = require('path');

const targetFile = path.join(__dirname, 'index.html');
let htmlContent = fs.readFileSync(targetFile, 'utf8');

// The goal is to make the services cards "more attractive".
// We will add premium hover effects: copper borders, copper icon hover, copper bottom strip hover.

// 1. Make the icon turn copper on hover
htmlContent = htmlContent.replace(/<i class="fas fa-(.*?) text-4xl text-navy"><\/i>/g, '<i class="fas fa-$1 text-4xl text-navy group-hover:text-copper transition-colors duration-300"></i>');

// 2. Make the watermark number turn solid copper on hover (instead of faint copper)
htmlContent = htmlContent.replace(/group-hover:text-copper\/20/g, 'group-hover:text-copper/40');

// 3. Add a transparent bottom border that becomes solid copper on hover to the main card
htmlContent = htmlContent.replace(/border border-gray-200 bg-white group flex flex-col h-full hover:shadow-2xl transition-all duration-500 hover:-translate-y-2/g, 'border border-gray-100 border-b-4 border-b-transparent bg-white group flex flex-col h-full hover:shadow-2xl hover:border-b-copper transition-all duration-500 hover:-translate-y-2');

// 4. Make the bottom "VIEW DETAILS" strip turn copper on hover
htmlContent = htmlContent.replace(/px-8 py-5 border-t border-gray-100 flex justify-between items-center group-hover:bg-offwhite transition-colors cursor-pointer/g, 'px-8 py-5 border-t border-gray-100 flex justify-between items-center group-hover:bg-copper group-hover:text-white transition-all duration-300 cursor-pointer');

// 5. Ensure the text inside the bottom strip changes color (we need to remove text-navy on hover)
// Let's replace the specific spans and icons inside that strip.
// It's tricky with regex, so let's just add group-hover:text-white to them.
htmlContent = htmlContent.replace(/<span class="text-\[10px\] font-bold text-navy tracking-widest uppercase">View Details<\/span>/g, '<span class="text-[10px] font-bold text-navy group-hover:text-white tracking-widest uppercase transition-colors duration-300">View Details</span>');
htmlContent = htmlContent.replace(/<i class="fas fa-arrow-right text-navy text-sm"><\/i>/g, '<i class="fas fa-arrow-right text-navy group-hover:text-white text-sm transition-colors duration-300"></i>');

fs.writeFileSync(targetFile, htmlContent);
console.log('Successfully enhanced services section to be more attractive.');
