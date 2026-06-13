const fs = require('fs');
const file = 'gallery.html';

if (fs.existsSync(file)) {
    let content = fs.readFileSync(file, 'utf8');

    // Add data-thumb to the anchor tags so lightGallery can display the thumbnail
    content = content.replace(/<a href="([^"]+)" class="portfolio-item/g, (match, href) => {
        // Unsplash URLs have w=2000, we can use a smaller size for the thumbnail
        let thumbUrl = href.replace('w=2000', 'w=400');
        return `<a href="${href}" data-thumb="${thumbUrl}" class="portfolio-item`;
    });

    fs.writeFileSync(file, content);
    console.log('Fixed thumbnails in gallery.html');
}
