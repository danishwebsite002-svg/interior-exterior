const fs = require('fs');
const path = require('path');

const rootIndexFile = path.join('c:', 'Users', 'MSI 1', 'Downloads', 'ExteriorInterior', 'index.html');
let content = fs.readFileSync(rootIndexFile, 'utf8');

// Extract the two panels
const interiorStart = content.indexOf('<!-- Interior Panel -->');
const exteriorStart = content.indexOf('<!-- Exterior Panel -->');
const exteriorEnd = content.indexOf('</div>\n\n</body>');

if (interiorStart !== -1 && exteriorStart !== -1) {
    let interiorPanel = content.substring(interiorStart, exteriorStart);
    let exteriorPanel = content.substring(exteriorStart, exteriorEnd);

    // Update images
    // Burj Khalifa for exterior
    exteriorPanel = exteriorPanel.replace(
        "background-image: url('assets/exterior.png');", 
        "background-image: url('https://images.unsplash.com/photo-1582672060624-cb139e802a28?auto=format&fit=crop&w=2000&q=80');"
    );
    // Villa interior for interior
    interiorPanel = interiorPanel.replace(
        "background-image: url('assets/interior.png');", 
        "background-image: url('https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=2000&q=80');"
    );

    // Swap the order: Exterior first, then Interior
    const newContent = content.substring(0, interiorStart) + 
                       exteriorPanel + 
                       interiorPanel + 
                       content.substring(exteriorEnd);

    fs.writeFileSync(rootIndexFile, newContent);
    console.log('Successfully swapped panels and updated images.');
} else {
    console.log('Could not find panels to swap.');
}
