const fs = require('fs');
const path = require('path');

const interiorDir = path.join('c:', 'Users', 'MSI 1', 'Downloads', 'ExteriorInterior', 'interior');
const exteriorDir = path.join('c:', 'Users', 'MSI 1', 'Downloads', 'ExteriorInterior', 'exterior');

// Ensure exterior directory exists
if (!fs.existsSync(exteriorDir)){
    fs.mkdirSync(exteriorDir, { recursive: true });
}

// Get all HTML files in interior directory
const files = fs.readdirSync(interiorDir).filter(f => f.endsWith('.html'));

files.forEach(file => {
    const interiorFilePath = path.join(interiorDir, file);
    const exteriorFilePath = path.join(exteriorDir, file);
    
    let content = fs.readFileSync(interiorFilePath, 'utf8');
    
    // Case-sensitive replacements to ensure formatting is preserved
    // Replace specific exact phrases first if needed
    content = content.replace(/Interior Architecture/g, 'Exterior Landscapes');
    content = content.replace(/Interior Design/g, 'Exterior Architecture');
    content = content.replace(/interior space/g, 'exterior space');
    
    // General replacements
    content = content.replace(/Interior/g, 'Exterior');
    content = content.replace(/INTERIOR/g, 'EXTERIOR');
    
    // Be careful with lowercase 'interior' as it might be in URLs or paths.
    // However, since it's just relative paths between identical folders, 'interior.html' -> 'exterior.html' is fine.
    // Let's replace 'interior' with 'exterior' only in text content (not inside tags) if we want to be safe, 
    // but in this case, replacing it globally is exactly what is needed since even hrefs to 'interior' should become 'exterior'.
    content = content.replace(/interior/g, 'exterior');
    
    // Write the new content to the exterior directory
    fs.writeFileSync(exteriorFilePath, content);
    console.log(`Cloned and adapted: ${file}`);
});

console.log('All files successfully cloned to the exterior folder!');
