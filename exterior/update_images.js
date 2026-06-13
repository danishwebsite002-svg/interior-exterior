const fs = require('fs');
const path = require('path');

const userImages = {
    'sliding': [
        'https://images.unsplash.com/photo-1721902024148-287438cf3e05?q=80&w=1170&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=1169&auto=format&fit=crop',
        'https://plus.unsplash.com/premium_photo-1661962732747-18c93b05292a?q=80&w=1160&auto=format&fit=crop'
    ],
    'sliding-folding': [
        'https://images.unsplash.com/photo-1721902024148-287438cf3e05?q=80&w=1170&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=1169&auto=format&fit=crop'
    ],
    'curtain-walls': [
        'https://images.unsplash.com/photo-1582174847297-a681c87719ad?q=80&w=1149&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1691845254952-b8ec4b95349e?q=80&w=1170&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1763811939659-3fb74ba665d9?q=80&w=1170&auto=format&fit=crop'
    ],
    'skylight': [
        'https://images.unsplash.com/photo-1542676012084-a4b1f610452a?q=80&w=1170&auto=format&fit=crop',
        'https://plus.unsplash.com/premium_photo-1661963152804-b11296cf1be3?q=80&w=1233&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1695173583062-df1efbfc000d?q=80&w=1170&auto=format&fit=crop'
    ],
    'louvers': [
        'https://images.unsplash.com/photo-1628012209120-d9db7abf7eab?q=80&w=736&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1527665830090-864a163d49ab?q=80&w=687&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1714894692377-f4cd26401ee8?q=80&w=1170&auto=format&fit=crop'
    ],
    'doors-windows': [
        'https://images.unsplash.com/photo-1768226911839-6358bf44eee5?q=80&w=687&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1750592039128-7bdd91fd6942?q=80&w=694&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1479839672679-a46483c0e7c8?q=80&w=710&auto=format&fit=crop'
    ],
    'general': [
        'https://images.unsplash.com/photo-1696846912973-3233cc80bf86?q=80&w=1170&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1656385959898-7496979e7fd5?q=80&w=1170&auto=format&fit=crop',
        'https://plus.unsplash.com/premium_photo-1676657954811-9409c4830467?q=80&w=687&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1776784995502-afb418b23d83?q=80&w=1170&auto=format&fit=crop'
    ]
};

// Generic old IDs
const genericIds = [
    '1507089947368-19c1da9775ae',
    '1616486338812-3dadae4b4ace',
    '1600585154340-be6161a56a0c',
    '1617307074423-6344f18d357f',
    '1555041469-a586c61ea9bc',
    '1600210491892-03d54c0aaf87',
    '1600566753190-17f0baa2a6c3',
    '1600121848594-d8644e57abab',
    '1600607687920-4e2a09cf159d',
    '1505691938895-1758d7feb511'
];

function isGeneric(url) {
    return genericIds.some(id => url.includes(id));
}

function getRandomImage(category) {
    const list = userImages[category] || userImages['general'];
    return list[Math.floor(Math.random() * list.length)];
}

const dir = path.join('c:', 'Users', 'MSI 1', 'Downloads', 'ExteriorInterior', 'exterior');

// Update gallery.html
const galleryPath = path.join(dir, 'gallery.html');
let galleryContent = fs.readFileSync(galleryPath, 'utf8');

const itemRegex = /<a[^>]*data-category="([^"]+)"[^>]*>[\s\S]*?<\/a>/g;
galleryContent = galleryContent.replace(itemRegex, (match, category) => {
    // replace any URL inside this match
    return match.replace(/https?:\/\/[^'"\)\s]+/g, (url) => {
        if (isGeneric(url)) {
            return getRandomImage(category);
        }
        return url;
    });
});
fs.writeFileSync(galleryPath, galleryContent);
console.log('Updated gallery.html');

// Update index.html
const indexPath = path.join(dir, 'index.html');
let indexContent = fs.readFileSync(indexPath, 'utf8');
indexContent = indexContent.replace(/https?:\/\/[^'"\)\s]+/g, (url) => {
    if (isGeneric(url)) {
        return getRandomImage('general');
    }
    return url;
});
fs.writeFileSync(indexPath, indexContent);
console.log('Updated index.html');

// Update services.html
const servicesPath = path.join(dir, 'services.html');
let servicesContent = fs.readFileSync(servicesPath, 'utf8');
servicesContent = servicesContent.replace(/https?:\/\/[^'"\)\s]+/g, (url) => {
    if (isGeneric(url)) {
        return getRandomImage('louvers'); // Only generic left is Louvers card
    }
    return url;
});
fs.writeFileSync(servicesPath, servicesContent);
console.log('Updated services.html');

// Update substation-louvers.html and sliding-folding-doors.html
['substation-louvers.html', 'sliding-folding-doors.html'].forEach(file => {
    const p = path.join(dir, file);
    let c = fs.readFileSync(p, 'utf8');
    const cat = file.includes('louvers') ? 'louvers' : 'sliding-folding';
    c = c.replace(/https?:\/\/[^'"\)\s]+/g, (url) => {
        if (isGeneric(url)) {
            return getRandomImage(cat);
        }
        return url;
    });
    fs.writeFileSync(p, c);
    console.log(`Updated ${file}`);
});
