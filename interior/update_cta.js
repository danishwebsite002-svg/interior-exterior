const fs = require('fs');
const path = require('path');

const directory = './';

fs.readdirSync(directory).forEach(file => {
    if (path.extname(file) === '.html') {
        let content = fs.readFileSync(file, 'utf8');
        let modified = false;

        // 1. Add Caveat font
        if (content.includes('@import url(') && !content.includes('family=Caveat')) {
            content = content.replace(
                /family=Playfair\+Display[^&]+/,
                '$&&family=Caveat:wght@400;500;600;700'
            );
            modified = true;
        }

        // 2. Add .font-signature class
        if (content.includes('</style>') && !content.includes('.font-signature')) {
            content = content.replace(
                '</style>',
                '      .font-signature {\n        font-family: "Caveat", cursive;\n      }\n    </style>'
            );
            modified = true;
        }

        // 3. Update CTA Section
        if (content.includes('Ready to design your<br />dream space?')) {
            content = content.replace(
                'Ready to design your<br />dream space?',
                'Ready to design your<br /><span class="font-signature text-accent text-6xl md:text-7xl font-medium tracking-wide block mt-4 transform -rotate-2">dream space?</span>'
            );
            modified = true;
        } else if (content.includes('Ready to design your<br>dream space?')) {
             content = content.replace(
                'Ready to design your<br>dream space?',
                'Ready to design your<br><span class="font-signature text-accent text-6xl md:text-7xl font-medium tracking-wide block mt-4 transform -rotate-2">dream space?</span>'
            );
            modified = true;
        }

        if (modified) {
            fs.writeFileSync(file, content);
            console.log(`Updated CTA in ${file}`);
        }
    }
});
