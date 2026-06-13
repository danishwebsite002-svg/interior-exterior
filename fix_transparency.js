const fs = require('fs');
const path = require('path');

const filePath = path.join('c:', 'Users', 'MSI 1', 'Downloads', 'ExteriorInterior', 'index.html');
let content = fs.readFileSync(filePath, 'utf8');

// 1. Reduce the heavy gradient overlay so the image is brighter
content = content.replace(/from-slate-900\/90 via-slate-900\/40/g, 'from-slate-900/60 via-slate-900/10');
content = content.replace(/bg-black\/20/g, 'bg-black/10');

// 2. Make the glass card more transparent and less blurry
content = content.replace(/bg-white\/10 backdrop-blur-md border border-white\/20/g, 'bg-slate-900/30 backdrop-blur-sm border border-white/10');

// 3. Make the card a bit narrower so it doesn't take up the whole screen
// max-w-xl is 36rem (576px). Let's change to max-w-md (28rem, 448px)
content = content.replace(/max-w-xl/g, 'max-w-lg');

// 4. Reduce padding slightly
content = content.replace(/p-8 md:p-10/g, 'p-8');

fs.writeFileSync(filePath, content);
console.log('Fixed card transparency and size');
