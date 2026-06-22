const fs = require('fs');

const file = 'c:\\Users\\MSI 1\\Downloads\\ExteriorInterior\\interior\\index.html';
let content = fs.readFileSync(file, 'utf8');

// Replace side social icons
const sideSocialRegex = /<a\s+href="#"\s+class="p-3 text-navy hover:text-copper transition-colors text-sm"\s*><i class="fab fa-facebook-f"><\/i\s*><\/a>\s*<a\s+href="#"\s+class="p-3 text-navy hover:text-copper transition-colors text-sm"\s*><i class="fab fa-twitter"><\/i\s*><\/a>\s*<a\s+href="#"\s+class="p-3 text-navy hover:text-copper transition-colors text-sm"\s*><i class="fab fa-instagram"><\/i\s*><\/a>\s*<a\s+href="#"\s+class="p-3 text-navy hover:text-copper transition-colors text-sm"\s*><i class="fab fa-youtube"><\/i\s*><\/a>/gs;

const sideSocialNew = `<a
        href="https://www.instagram.com/kiianprime/?hl=en" target="_blank"
        class="p-3 text-navy hover:text-copper transition-colors text-sm"
        ><i class="fab fa-instagram"></i
      ></a>
      <a
        href="https://www.youtube.com/channel/UCvDvB1lCBboo-tusaVES3Vw" target="_blank"
        class="p-3 text-navy hover:text-copper transition-colors text-sm"
        ><i class="fab fa-youtube"></i
      ></a>`;

// Replace footer social icons
const footerSocialRegex = /<a\s+href="#"\s+class="w-10 h-10 border border-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:border-copper hover:text-copper transition-all duration-300"\s*><i class="fab fa-facebook-f text-sm"><\/i\s*><\/a>\s*<a\s+href="#"\s+class="w-10 h-10 border border-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:border-copper hover:text-copper transition-all duration-300"\s*><i class="fab fa-instagram text-sm"><\/i\s*><\/a>\s*<a\s+href="#"\s+class="w-10 h-10 border border-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:border-copper hover:text-copper transition-all duration-300"\s*><i class="fab fa-twitter text-sm"><\/i\s*><\/a>\s*<a\s+href="#"\s+class="w-10 h-10 border border-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:border-copper hover:text-copper transition-all duration-300"\s*><i class="fab fa-pinterest-p text-sm"><\/i\s*><\/a>/gs;

const footerSocialNew = `<a
                href="https://www.instagram.com/kiianprime/?hl=en" target="_blank"
                class="w-10 h-10 border border-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:border-copper hover:text-copper transition-all duration-300"
                ><i class="fab fa-instagram text-sm"></i
              ></a>
              <a
                href="https://www.youtube.com/channel/UCvDvB1lCBboo-tusaVES3Vw" target="_blank"
                class="w-10 h-10 border border-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:border-copper hover:text-copper transition-all duration-300"
                ><i class="fab fa-youtube text-sm"></i
              ></a>`;

content = content.replace(sideSocialRegex, sideSocialNew);
content = content.replace(footerSocialRegex, footerSocialNew);

fs.writeFileSync(file, content, 'utf8');
console.log('Updated interior/index.html');
