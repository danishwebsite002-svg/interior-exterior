const fs = require('fs');
const path = require('path');

const replacementMap = {
    '1600607687920': 'https://images.unsplash.com/photo-1714894692377-f4cd26401ee8?q=80&w=1170&auto=format&fit=crop',
    '1618221195710': 'https://images.unsplash.com/photo-1479839672679-a46483c0e7c8?q=80&w=710&auto=format&fit=crop',
    '1505691938895': 'https://media.istockphoto.com/id/2227010613/photo/modern-mediterranean-apartment-towers-in-antalya-turkey.webp?a=1&b=1&s=612x612&w=0&k=20&c=29-x6C_2eZlgKmYVOVkYXJA1zA99p9TIlxPPLoTQiEQ=',
    '1617307074423': 'https://images.unsplash.com/photo-1721902024148-287438cf3e05?q=80&w=1170&auto=format&fit=crop',
    '1668911492786': 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=1169&auto=format&fit=crop',
    '1600210491892': 'https://images.unsplash.com/photo-1768226911839-6358bf44eee5?q=80&w=687&auto=format&fit=crop',
    '1600566753190': 'https://images.unsplash.com/photo-1750592039128-7bdd91fd6942?q=80&w=694&auto=format&fit=crop'
};

const dir = path.join('c:', 'Users', 'MSI 1', 'Downloads', 'ExteriorInterior', 'exterior');
const files = fs.readdirSync(dir).filter(f => f.endsWith('.html'));

files.forEach(file => {
    const p = path.join(dir, file);
    let c = fs.readFileSync(p, 'utf8');
    let changed = false;

    c = c.replace(/https?:\/\/[^'"\)\s]+/g, (url) => {
        for (const [badId, goodUrl] of Object.entries(replacementMap)) {
            if (url.includes(badId)) {
                changed = true;
                return goodUrl;
            }
        }
        return url;
    });

    if (changed) {
        fs.writeFileSync(p, c);
        console.log(`Purged generic images in ${file}`);
    }
});
