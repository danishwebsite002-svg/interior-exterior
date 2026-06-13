const fs = require('fs');
const path = require('path');

const rootIndexFile = path.join('c:', 'Users', 'MSI 1', 'Downloads', 'ExteriorInterior', 'index.html');
let content = fs.readFileSync(rootIndexFile, 'utf8');

// Replace the exterior image with a very obvious, iconic Burj Khalifa image
content = content.replace(
    "url('https://images.unsplash.com/photo-1582672060624-cb139e802a28?auto=format&fit=crop&w=2000&q=80')",
    "url('https://images.unsplash.com/photo-1512632578888-169bbbc64f33?auto=format&fit=crop&w=2000&q=80')"
);

fs.writeFileSync(rootIndexFile, content);
console.log('Successfully updated Burj Khalifa image.');
