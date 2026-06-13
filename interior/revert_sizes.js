const fs = require('fs');
const path = require('path');

const directory = './';

const sizeDecreases = [
    { from: /<h1([^>]+)text-7xl([^>]*)>/g, to: '<h1$1text-6xl$2>' },
    { from: /<h1([^>]+)text-6xl([^>]*)>/g, to: '<h1$1text-5xl$2>' },
    { from: /<h2([^>]+)text-6xl([^>]*)>/g, to: '<h2$1text-5xl$2>' },
    { from: /<h2([^>]+)text-5xl([^>]*)>/g, to: '<h2$1text-4xl$2>' },
    { from: /md:text-8xl/g, to: 'md:text-7xl' },
    { from: /md:text-7xl/g, to: 'md:text-6xl' },
    { from: /md:text-6xl/g, to: 'md:text-5xl' },
];

fs.readdirSync(directory).forEach(file => {
    if (path.extname(file) === '.html') {
        let content = fs.readFileSync(file, 'utf8');
        let originalContent = content;

        sizeDecreases.forEach(dec => {
            content = content.replace(dec.from, dec.to);
        });

        if (content !== originalContent) {
            fs.writeFileSync(file, content);
            console.log(`Reverted heading sizes in ${file}`);
        }
    }
});
