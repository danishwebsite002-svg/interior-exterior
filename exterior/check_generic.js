const fs = require('fs');
const path = require('path');

const userImages = [
    'https://images.unsplash.com/photo-1721902024148-287438cf3e05',
    'https://images.unsplash.com/photo-1497366754035-f200968a6e72',
    'https://plus.unsplash.com/premium_photo-1661962732747-18c93b05292a',
    'https://images.unsplash.com/photo-1582174847297-a681c87719ad',
    'https://images.unsplash.com/photo-1691845254952-b8ec4b95349e',
    'https://images.unsplash.com/photo-1763811939659-3fb74ba665d9',
    'https://images.unsplash.com/photo-1542676012084-a4b1f610452a',
    'https://plus.unsplash.com/premium_photo-1661963152804-b11296cf1be3',
    'https://images.unsplash.com/photo-1695173583062-df1efbfc000d',
    'https://images.unsplash.com/photo-1628012209120-d9db7abf7eab',
    'https://images.unsplash.com/photo-1527665830090-864a163d49ab',
    'https://images.unsplash.com/photo-1714894692377-f4cd26401ee8',
    'https://images.unsplash.com/photo-1768226911839-6358bf44eee5',
    'https://images.unsplash.com/photo-1750592039128-7bdd91fd6942',
    'https://images.unsplash.com/photo-1696846912973-3233cc80bf86',
    'https://images.unsplash.com/photo-1580469322701-45b34d5e6e9b',
    'https://images.unsplash.com/photo-1696846913141-634e2b1652e3',
    'https://images.unsplash.com/photo-1643063231577-959abf98b59c',
    'https://images.unsplash.com/photo-1656385959898-7496979e7fd5',
    'https://images.unsplash.com/photo-1674758979141-4e3521ba7321',
    'https://images.unsplash.com/photo-1761347604632-944c4400093a',
    'https://images.unsplash.com/photo-1479839672679-a46483c0e7c8',
    'https://plus.unsplash.com/premium_photo-1676657954811-9409c4830467',
    'https://images.unsplash.com/photo-1707508093903-6604b40b15de',
    'https://images.unsplash.com/photo-1603294278610-b5bd0506303e',
    'https://media.istockphoto.com/id/2227010613/photo/modern-mediterranean-apartment-towers-in-antalya-turkey.webp',
    'https://images.unsplash.com/photo-1776784995502-afb418b23d83'
];

const dir = path.join('c:', 'Users', 'MSI 1', 'Downloads', 'ExteriorInterior', 'exterior');
const files = fs.readdirSync(dir).filter(f => f.endsWith('.html'));
const urlRegex = /https?:\/\/(images\.unsplash\.com|media\.istockphoto\.com|plus\.unsplash\.com)[^'"\)\s]+/g;

let foundGeneric = false;

files.forEach(file => {
    const content = fs.readFileSync(path.join(dir, file), 'utf8');
    let match;
    while ((match = urlRegex.exec(content)) !== null) {
        const url = match[0];
        // Strip query params to compare base
        const baseUrl = url.split('?')[0];
        if (!userImages.includes(baseUrl)) {
            console.log(`Generic image found in ${file}: ${url}`);
            foundGeneric = true;
        }
    }
});

if (!foundGeneric) {
    console.log("SUCCESS! Every single image is from the user-provided list.");
}
