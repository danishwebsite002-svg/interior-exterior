const https = require('https');
const fs = require('fs');
const path = require('path');

const checkUrl = (url) => {
    return new Promise((resolve) => {
        https.get(url, (res) => {
            resolve({ url, status: res.statusCode });
        }).on('error', () => resolve({ url, status: 500 }));
    });
};

const extractUrls = (content) => {
    const urls = [];
    const regex = /background-image:\s*url\('([^']+)'\)/g;
    let match;
    while ((match = regex.exec(content)) !== null) {
        if (!urls.includes(match[1])) urls.push(match[1]);
    }
    return urls;
};

const fallbackImage = 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80';

const run = async () => {
    const files = fs.readdirSync('.').filter(f => f.endsWith('.html'));
    for (const file of files) {
        let content = fs.readFileSync(file, 'utf8');
        const urls = extractUrls(content);
        
        let modified = false;
        for (const url of urls) {
            if (url.includes('unsplash.com')) {
                const res = await checkUrl(url);
                if (res.status === 404 || res.status === 403 || res.status === 401) {
                    console.log(`Broken image found in ${file}: ${url} (Status: ${res.status})`);
                    content = content.replace(new RegExp(url.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g'), fallbackImage);
                    modified = true;
                }
            }
        }
        
        if (modified) {
            fs.writeFileSync(file, content);
            console.log(`Updated ${file} to replace broken images.`);
        }
    }
    console.log('Image check complete.');
};

run();
