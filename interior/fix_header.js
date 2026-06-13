const fs = require('fs');

const files = fs.readdirSync('.').filter(f => f.endsWith('.html') && f !== 'index.html');

files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    
    let modified = false;
    
    // Fix Logo text color
    const logoRegex = /<a href="index\.html" class="text-xl font-bold tracking-tight text-white uppercase">Interior<\/a>/g;
    if (logoRegex.test(content)) {
        content = content.replace(logoRegex, '<a href="index.html" class="text-xl font-bold tracking-tight text-primary-dark uppercase">Interior</a>');
        modified = true;
    }
    
    // Fix Contact button text color
    const btnRegex = /<a href="contact\.html" class="btn-outline px-6 py-2\.5 rounded-full text-sm font-semibold text-slate-300">Contact Us<\/a>/g;
    if (btnRegex.test(content)) {
        content = content.replace(btnRegex, '<a href="contact.html" class="btn-outline px-6 py-2.5 rounded-full text-sm font-semibold text-slate-700">Contact Us</a>');
        modified = true;
    }
    
    if (modified) {
        fs.writeFileSync(file, content);
        console.log('Fixed header text colors in ' + file);
    }
});
