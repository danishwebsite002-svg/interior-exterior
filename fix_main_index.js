const fs = require('fs');
const path = require('path');

const filePath = path.join('c:', 'Users', 'MSI 1', 'Downloads', 'ExteriorInterior', 'index.html');
let content = fs.readFileSync(filePath, 'utf8');

// 1. Fix the CSS
const oldCSS = `      /* Desktop Hover Interactions */
      @media (min-width: 768px) {
        .panel:hover {
          flex: 2; /* Expand the hovered panel */
        }

        .content-desc {
          opacity: 0;
          max-height: 0;
          transform: translateY(20px);
          transition: all 0.6s cubic-bezier(0.25, 1, 0.5, 1);
        }

        .panel:hover .content-desc {
          opacity: 1;
          max-height: 300px;
          transform: translateY(0);
          margin-top: 1.5rem;
        }
      }`;

const newCSS = `      /* Desktop Hover Interactions */
      @media (min-width: 768px) {
        .panel:hover {
          flex: 2; /* Expand the hovered panel */
        }

        .content-desc {
          opacity: 1;
          max-height: 300px;
          transform: translateY(0);
          margin-top: 1.5rem;
          transition: all 0.6s cubic-bezier(0.25, 1, 0.5, 1);
        }
      }`;

content = content.replace(oldCSS, newCSS);

// 2. Fix the tailwind classes on the glass card so it doesn't jump
content = content.replace(/md:translate-y-12 md:group-hover:translate-y-0/g, '');

// Also remove group-hover:bg-transparent from the black overlay so the text is always legible
content = content.replace(/group-hover:bg-transparent/g, '');

fs.writeFileSync(filePath, content);
console.log('Fixed main index.html');
