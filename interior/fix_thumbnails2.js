const fs = require('fs');
const file = 'gallery.html';

if (fs.existsSync(file)) {
    let content = fs.readFileSync(file, 'utf8');

    // Find all portfolio-item anchor tags and add data-src and a hidden img tag for thumbnails
    content = content.replace(/<a href="([^"]+)" data-thumb="([^"]+)"([^>]*)>/g, (match, href, thumb, rest) => {
        return `<a href="${href}" data-src="${href}" data-thumb="${thumb}"${rest}>
                    <img src="${thumb}" style="display:none;" alt="thumbnail" />`;
    });

    // Also explicitly set exThumbImage in the lightGallery config just in case
    content = content.replace(/plugins: \[lgZoom, lgThumbnail\],/g, `plugins: [lgZoom, lgThumbnail],\n                exThumbImage: 'data-thumb',`);

    fs.writeFileSync(file, content);
    console.log('Fixed thumbnails by adding hidden img tag and config');
}
