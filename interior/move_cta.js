const fs = require('fs');

const file = 'index.html';
let content = fs.readFileSync(file, 'utf8');

// Find the Parallax CTA Section
const ctaStart = content.indexOf('<!-- 11. Parallax CTA Banner -->');
if (ctaStart !== -1) {
    const ctaEnd = content.indexOf('</section>', ctaStart) + 10;
    let ctaSection = content.substring(ctaStart, ctaEnd);
    
    // Remove it from current position
    content = content.substring(0, ctaStart) + content.substring(ctaEnd);
    
    // Update the background image to match the indoor staircase screenshot
    ctaSection = ctaSection.replace(
        /background-image: url\([^)]+\)/,
        "background-image: url('https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=2000&q=80')"
    );
    
    // Find where to insert it: After the "Comprehensive design" section
    const compIdx = content.indexOf('Comprehensive design');
    const compSectionEnd = content.indexOf('</section>', compIdx) + 10;
    
    // Insert the CTA section right after it
    content = content.substring(0, compSectionEnd) + '\n\n' + ctaSection + '\n\n' + content.substring(compSectionEnd);
    
    fs.writeFileSync(file, content);
    console.log('Moved CTA section successfully.');
} else {
    console.log('CTA section not found.');
}
