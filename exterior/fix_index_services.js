const fs = require('fs');
const path = require('path');

const servicesImages = {
    'Fixed &amp; Foldable Systems': 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=1169&auto=format&fit=crop',
    'Fixed & Foldable Systems': 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=1169&auto=format&fit=crop',
    'Aluminium Fences': 'https://media.istockphoto.com/id/2227010613/photo/modern-mediterranean-apartment-towers-in-antalya-turkey.webp?a=1&b=1&s=612x612&w=0&k=20&c=29-x6C_2eZlgKmYVOVkYXJA1zA99p9TIlxPPLoTQiEQ=',
    'Doors &amp; Windows': 'https://images.unsplash.com/photo-1768226911839-6358bf44eee5?q=80&w=687&auto=format&fit=crop',
    'Doors & Windows': 'https://images.unsplash.com/photo-1768226911839-6358bf44eee5?q=80&w=687&auto=format&fit=crop',
    'Sliding Doors': 'https://images.unsplash.com/photo-1721902024148-287438cf3e05?q=80&w=1170&auto=format&fit=crop',
    'Sliding Folding Doors': 'https://plus.unsplash.com/premium_photo-1661962732747-18c93b05292a?q=80&w=1160&auto=format&fit=crop',
    'Curtain Walls': 'https://images.unsplash.com/photo-1582174847297-a681c87719ad?q=80&w=1149&auto=format&fit=crop',
    'Skylights': 'https://images.unsplash.com/photo-1542676012084-a4b1f610452a?q=80&w=1170&auto=format&fit=crop',
    'Substation Louvers': 'https://images.unsplash.com/photo-1714894692377-f4cd26401ee8?q=80&w=1170&auto=format&fit=crop',
    'Aluminium Decorative Fins': 'https://images.unsplash.com/photo-1628012209120-d9db7abf7eab?q=80&w=736&auto=format&fit=crop',
    'Aluminium Decorative Louvers': 'https://images.unsplash.com/photo-1527665830090-864a163d49ab?q=80&w=687&auto=format&fit=crop',
    'Mashrabiya': 'https://images.unsplash.com/photo-1768226911839-6358bf44eee5?q=80&w=687&auto=format&fit=crop',
    'Pergolas': 'https://images.unsplash.com/photo-1696846912973-3233cc80bf86?q=80&w=1170&auto=format&fit=crop',
    'Private Majlis': 'https://images.unsplash.com/photo-1656385959898-7496979e7fd5?q=80&w=1170&auto=format&fit=crop',
    'Facades': 'https://images.unsplash.com/photo-1479839672679-a46483c0e7c8?q=80&w=710&auto=format&fit=crop'
};

const dir = path.join('c:', 'Users', 'MSI 1', 'Downloads', 'ExteriorInterior', 'exterior');
const indexPath = path.join(dir, 'index.html');

let content = fs.readFileSync(indexPath, 'utf8');

const regex = /url\('([^']+)'\);"><\/div>\s*<div class="absolute inset-0 bg-slate-900\/20[^>]+><\/div>\s*<\/div>\s*<h3 class="text-xl font-bold text-primary-dark mb-2 group-hover:text-accent transition-colors">([^<]+)<\/h3>/g;

content = content.replace(regex, (match, oldUrl, serviceName) => {
    let cleanName = serviceName.trim();
    if (servicesImages[cleanName]) {
        console.log(`Mapping ${cleanName}`);
        return match.replace(oldUrl, servicesImages[cleanName]);
    }
    console.log(`Failed to map: ${cleanName}`);
    return match;
});

fs.writeFileSync(indexPath, content);
console.log('Fixed index.html service mappings!');
