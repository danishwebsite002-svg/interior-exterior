const fs = require('fs');
const path = require('path');

const dir = path.join('c:', 'Users', 'MSI 1', 'Downloads', 'ExteriorInterior', 'exterior');
const filePath = path.join(dir, 'gallery.html');

let content = fs.readFileSync(filePath, 'utf8');

const categoryMap = {
    'doors-windows': 'https://images.unsplash.com/photo-1768226911839-6358bf44eee5?q=80&w=687&auto=format&fit=crop',
    'sliding-folding': 'https://plus.unsplash.com/premium_photo-1661962732747-18c93b05292a?q=80&w=1160&auto=format&fit=crop',
    'sliding': 'https://images.unsplash.com/photo-1721902024148-287438cf3e05?q=80&w=1170&auto=format&fit=crop',
    'curtain-walls': 'https://images.unsplash.com/photo-1582174847297-a681c87719ad?q=80&w=1149&auto=format&fit=crop',
    'skylight': 'https://images.unsplash.com/photo-1542676012084-a4b1f610452a?q=80&w=1170&auto=format&fit=crop',
    'louvers': 'https://images.unsplash.com/photo-1714894692377-f4cd26401ee8?q=80&w=1170&auto=format&fit=crop'
};

// We will use Cheerio to manipulate the HTML safely since regex for this many attributes is messy.
// Wait, Cheerio isn't installed. Let's do it via Regex based on the block structure.

// A portfolio item starts with <a href="..." data-src="..." data-thumb="..." class="portfolio-item..." data-category="...">
// Inside it has <img src="..."> and <div ... style="background-image: url('...');">

const itemRegex = /<a href="[^"]+" data-src="[^"]+" data-thumb="[^"]+" class="portfolio-item group cursor-pointer transition-all duration-300 block" data-category="([^"]+)" data-aos="fade-up"([^>]*)>\s*<img src="[^"]+" style="display:none;" alt="thumbnail" \/>\s*<div class="h-80 w-full overflow-hidden rounded-xl mb-6 shadow-sm">\s*<div class="w-full h-full bg-cover bg-center img-hover-zoom" style="background-image: url\('([^']+)'\);"><\/div>\s*<\/div>/g;

let matchCount = 0;
content = content.replace(itemRegex, (match, category, extraAosAttrs, oldBgUrl) => {
    matchCount++;
    const targetUrl = categoryMap[category] || 'https://images.unsplash.com/photo-1479839672679-a46483c0e7c8?q=80&w=710&auto=format&fit=crop';
    
    // Construct the new block, replacing all 5 URL instances with targetUrl
    return `<a href="${targetUrl}" data-src="${targetUrl}" data-thumb="${targetUrl}" class="portfolio-item group cursor-pointer transition-all duration-300 block" data-category="${category}" data-aos="fade-up"${extraAosAttrs}>
                    <img src="${targetUrl}" style="display:none;" alt="thumbnail" />
                    <div class="h-80 w-full overflow-hidden rounded-xl mb-6 shadow-sm">
                        <div class="w-full h-full bg-cover bg-center img-hover-zoom" style="background-image: url('${targetUrl}');"></div>
                    </div>`;
});

fs.writeFileSync(filePath, content);
console.log(`Updated gallery.html items: ${matchCount}`);
