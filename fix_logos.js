const fs = require('fs');
const path = require('path');

const file = 'c:\\Users\\MSI 1\\Downloads\\ExteriorInterior\\exterior\\index.html';
let content = fs.readFileSync(file, 'utf8');

const extHeaderRegex = /<div class="flex items-center space-x-2">\s*<div[\s\S]*?class="w-6 h-6 rounded-full border-2 border-accent flex items-center justify-center"[\s\S]*?>\s*<div class="w-2 h-2 bg-accent rounded-full animate-pulse"><\/div>\s*<\/div>\s*<a[\s\S]*?href="index\.html"[\s\S]*?>Exterior\s*<\/a\s*>\s*<\/div>/g;

content = content.replace(extHeaderRegex, '<a href="index.html"><img src="../assets/logoheader.png" alt="Kiian Prime Technical Services L.L.C" class="h-10 w-auto"></a>');

const footerH2Regex = /<h2 class="text-2xl font-bold text-white mb-6">Kiian Prime Technical Services <span class="text-(?:accent|copper)">L\.L\.C<\/span><\/h2>/g;
content = content.replace(footerH2Regex, '<a href="index.html"><img src="../assets/logofooter.png" alt="Kiian Prime Technical Services L.L.C" class="mb-6 h-12 w-auto"></a>');

fs.writeFileSync(file, content, 'utf8');
console.log('Done fixing exterior/index.html');
