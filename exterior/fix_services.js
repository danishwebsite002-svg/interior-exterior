const fs = require('fs');
const path = require('path');

const servicesImages = {
    'Fixed & Foldable Systems': 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=1169&auto=format&fit=crop',
    'Aluminium Fences': 'https://media.istockphoto.com/id/2227010613/photo/modern-mediterranean-apartment-towers-in-antalya-turkey.webp?a=1&b=1&s=612x612&w=0&k=20&c=29-x6C_2eZlgKmYVOVkYXJA1zA99p9TIlxPPLoTQiEQ=',
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

// Fix services.html
const servicesPath = path.join(dir, 'services.html');
let content = fs.readFileSync(servicesPath, 'utf8');

const regex = /<div class="absolute inset-0 bg-cover bg-center img-hover-zoom" style="background-image: url\('([^']+)'\);"><\/div>\s*<div class="absolute inset-0 bg-gradient-[^>]+><\/div>\s*<div class="absolute bottom-0[^>]+>[\s\S]*?<h3 class="text-xl font-bold text-white mb-2 group-hover:text-accent transition-colors">([^<]+)<\/h3>/g;

content = content.replace(regex, (match, oldUrl, serviceName) => {
    let cleanName = serviceName.trim().replace('&amp;', '&');
    if (servicesImages[cleanName]) {
        return match.replace(oldUrl, servicesImages[cleanName]);
    }
    return match;
});

fs.writeFileSync(servicesPath, content);
console.log('Fixed services.html');

// Fix 1595515106969
['aluminium-decorative-louvers.html', 'blog.html', 'gallery.html', 'services.html'].forEach(file => {
    const p = path.join(dir, file);
    if(fs.existsSync(p)){
        let c = fs.readFileSync(p, 'utf8');
        c = c.replace(/https?:\/\/[^'"\)\s]+/g, (url) => {
            if (url.includes('1595515106969')) {
                return 'https://images.unsplash.com/photo-1527665830090-864a163d49ab?q=80&w=687&auto=format&fit=crop';
            }
            return url;
        });
        fs.writeFileSync(p, c);
    }
});
console.log('Fixed 1595515106969 globally.');

// Any other generic images remaining across the whole project? Let's check!
// E.g. '1505691938895' in other files...
