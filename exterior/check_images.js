const https = require('https');
const fs = require('fs');
const path = require('path');

const exteriorDir = path.join('c:', 'Users', 'MSI 1', 'Downloads', 'ExteriorInterior', 'exterior');
const files = fs.readdirSync(exteriorDir).filter(f => f.endsWith('.html'));

const images = new Set();
const regex = /images\.unsplash\.com\/photo-([a-zA-Z0-9\-]+)/g;

files.forEach(file => {
    const content = fs.readFileSync(path.join(exteriorDir, file), 'utf8');
    let match;
    while ((match = regex.exec(content)) !== null) {
        images.add(match[1]);
    }
});

const imageArray = Array.from(images);
console.log(`Testing ${imageArray.length} unique images...`);

async function testImage(id) {
    return new Promise((resolve) => {
        const req = https.request({
            hostname: 'images.unsplash.com',
            port: 443,
            path: `/photo-${id}?w=10`,
            method: 'HEAD'
        }, (res) => {
            if (res.statusCode >= 400) {
                console.log(`404 NOT FOUND: ${id}`);
                resolve({ id, ok: false });
            } else {
                resolve({ id, ok: true });
            }
        });
        
        req.on('error', (e) => {
            console.error(e);
            resolve({ id, ok: false });
        });
        
        req.end();
    });
}

async function run() {
    const badIds = [];
    for (const id of imageArray) {
        const res = await testImage(id);
        if (!res.ok) {
            badIds.push(id);
        }
    }
    console.log(`\nFound ${badIds.length} broken images.`);
    fs.writeFileSync(path.join(exteriorDir, 'bad_images.json'), JSON.stringify(badIds));
}

run();
