const fs = require('fs');
const path = require('path');

const dir = path.join('c:', 'Users', 'MSI 1', 'Downloads', 'ExteriorInterior', 'exterior');
const files = fs.readdirSync(dir).filter(f => f.endsWith('.html'));

const urlRegex = /https?:\/\/(images\.unsplash\.com|media\.istockphoto\.com|plus\.unsplash\.com)[^'"\)\s]+/g;
const uniqueUrls = new Set();
const urlLocations = {};

files.forEach(file => {
    const content = fs.readFileSync(path.join(dir, file), 'utf8');
    let match;
    while ((match = urlRegex.exec(content)) !== null) {
        uniqueUrls.add(match[0]);
        if (!urlLocations[match[0]]) urlLocations[match[0]] = [];
        urlLocations[match[0]].push(file);
    }
});

console.log(`Found ${uniqueUrls.size} unique URLs.`);
Array.from(uniqueUrls).forEach(url => {
    console.log(`\nURL: ${url}`);
    console.log(`In files: ${[...new Set(urlLocations[url])].join(', ')}`);
});
