const fs = require('fs');
const path = require('path');

const directory = './';

// The new fonts to import
const newImport = '@import url("https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Outfit:wght@300;400;500;600;700;800&family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400;1,600;1,700&display=swap");';

const newCssRules = `
      h1, h2, h3, h4, h5, h6 {
        font-family: "Outfit", sans-serif;
      }
      .font-serif {
        font-family: "Playfair Display", serif !important;
      }
      h1 span, h2 span, h3 span {
        color: #D9873E;
      }
`;

fs.readdirSync(directory).forEach(file => {
    if (path.extname(file) === '.html') {
        let content = fs.readFileSync(file, 'utf8');
        let modified = false;

        // 1. Update font import
        if (content.includes('@import url("https://fonts.googleapis.com/css2?family=Inter:')) {
            content = content.replace(/@import url\("https:\/\/fonts\.googleapis\.com\/css2\?family=Inter[^"]+"\);/g, newImport);
            modified = true;
        }

        // 2. Add heading CSS rules
        if (!content.includes('font-family: "Outfit"')) {
            content = content.replace('body {', newCssRules + '\n      body {');
            modified = true;
        }

        // 3. Increase heading sizes
        // Only increase 4xl to 5xl, 5xl to 6xl, 6xl to 7xl if it's on an h1 or h2 to be safe
        const sizeIncreases = [
            { from: /<h1([^>]+)text-5xl([^>]*)>/g, to: '<h1$1text-6xl$2>' },
            { from: /<h1([^>]+)text-6xl([^>]*)>/g, to: '<h1$1text-7xl$2>' },
            { from: /<h2([^>]+)text-4xl([^>]*)>/g, to: '<h2$1text-5xl$2>' },
            { from: /<h2([^>]+)text-5xl([^>]*)>/g, to: '<h2$1text-6xl$2>' },
            { from: /md:text-5xl/g, to: 'md:text-6xl' },
            { from: /md:text-6xl/g, to: 'md:text-7xl' },
            { from: /md:text-7xl/g, to: 'md:text-8xl' },
        ];

        let originalContent = content;
        sizeIncreases.forEach(inc => {
            content = content.replace(inc.from, inc.to);
        });

        if (content !== originalContent) {
            modified = true;
        }

        if (modified) {
            fs.writeFileSync(file, content);
            console.log(`Updated typography in ${file}`);
        }
    }
});
