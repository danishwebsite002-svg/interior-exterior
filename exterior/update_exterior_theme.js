const fs = require('fs');
const path = require('path');

const targetFile = path.join(__dirname, 'index.html');
let content = fs.readFileSync(targetFile, 'utf8');

// 1. Update Accent Colors from Copper/Orange (#D9873E, #d9873e, rgba(217, 135, 62) to Champagne Gold (#C5A059, #c5a059, rgba(197, 160, 89))
content = content.replace(/#d9873e/gi, '#C5A059');
content = content.replace(/217,\s*135,\s*62/g, '197, 160, 89');

// 2. Change Dark Backgrounds to Light/White Backgrounds
// Replace bg-[#0F172A] with bg-[#FAFAFA] or bg-white
content = content.replace(/bg-\[#0F172A\]/g, 'bg-[#FAFAFA]');
// Replace bg-slate-900 or bg-gray-900 with bg-white or bg-gray-50
content = content.replace(/bg-slate-900/g, 'bg-white');
content = content.replace(/bg-gray-900/g, 'bg-gray-50');
content = content.replace(/bg-\[#1E293B\]/g, 'bg-white');
content = content.replace(/bg-\[#1e293b\]/g, 'bg-white');

// 3. Text Color Adjustments in Lightened Sections
// Let's replace 'text-white' with 'text-gray-900' in certain contexts, but maybe it's better to update global CSS or specific tags.
// Let's try replacing text-white on section headings/paragraphs.
content = content.replace(/class="([^"]*)text-white([^"]*)"/g, (match, p1, p2) => {
    // If it's a button or absolute overlay, keep it white. Otherwise make it dark.
    if (p1.includes('btn') || p2.includes('btn') || p1.includes('absolute') || p2.includes('absolute')) {
        return match;
    }
    return `class="${p1}text-gray-900${p2}"`;
});

content = content.replace(/class="([^"]*)text-gray-300([^"]*)"/g, (match, p1, p2) => {
    if (p1.includes('absolute') || p2.includes('absolute')) return match;
    return `class="${p1}text-gray-600${p2}"`;
});

content = content.replace(/class="([^"]*)text-gray-400([^"]*)"/g, (match, p1, p2) => {
    if (p1.includes('absolute') || p2.includes('absolute')) return match;
    return `class="${p1}text-gray-500${p2}"`;
});

// 4. Update Animations (Make durations longer for luxury feel)
content = content.replace(/data-aos-duration="[0-9]+"/g, 'data-aos-duration="1200"');
content = content.replace(/data-aos-delay="100"/g, 'data-aos-delay="200"');
content = content.replace(/data-aos-delay="200"/g, 'data-aos-delay="400"');
content = content.replace(/data-aos-delay="300"/g, 'data-aos-delay="600"');

// 5. Typography: add font-serif to more headings to make it look premium
content = content.replace(/<h2 class="([^"]*)"/g, (match, p1) => {
    if (!p1.includes('font-serif')) {
        return `<h2 class="${p1} font-serif tracking-wide"`;
    }
    return match;
});

content = content.replace(/<h3 class="([^"]*)"/g, (match, p1) => {
    if (!p1.includes('font-serif')) {
        return `<h3 class="${p1} font-serif tracking-wide"`;
    }
    return match;
});

// 6. Overlays: Make dark image overlays lighter and more sophisticated (e.g., from-black/80 to from-black/50)
content = content.replace(/from-black\/80/g, 'from-black/50');
content = content.replace(/from-black\/60/g, 'from-black/40');
content = content.replace(/from-black\/90/g, 'from-black/60');
content = content.replace(/bg-black\/50/g, 'bg-black/30');

// 7. Add Luxury Global CSS adjustments
const luxuryCSS = `
      /* Luxury Theme Enhancements */
      body {
        background-color: #FFFFFF;
      }
      .font-serif {
        font-family: "Playfair Display", serif !important;
      }
      .glass-panel {
        background: rgba(255, 255, 255, 0.85);
        backdrop-filter: blur(12px);
        -webkit-backdrop-filter: blur(12px);
        border: 1px solid rgba(255, 255, 255, 0.5);
        box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.05);
      }
      .luxury-shadow {
        box-shadow: 0 20px 40px rgba(0,0,0,0.06) !important;
      }
      .btn-orange {
        background-color: #C5A059 !important;
        box-shadow: 0 4px 14px 0 rgba(197, 160, 89, 0.39) !important;
      }
      .btn-orange:hover {
        background-color: #B38E4A !important;
        box-shadow: 0 6px 20px rgba(197, 160, 89, 0.23) !important;
      }
      .btn-outline:hover {
        border-color: #C5A059 !important;
        color: #C5A059 !important;
        background-color: rgba(197, 160, 89, 0.05) !important;
      }
      h1, h2, h3 {
        color: #1A1A1A;
      }
      h1 span, h2 span, h3 span {
        color: #C5A059 !important;
      }
      .text-accent {
        color: #C5A059 !important;
      }
      .bg-accent {
        background-color: #C5A059 !important;
      }
      .border-accent {
        border-color: #C5A059 !important;
      }
      .img-hover-zoom {
        transition: transform 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94) !important;
      }
      .group:hover .img-hover-zoom {
        transform: scale(1.08) !important;
      }
      .check-icon {
        color: #C5A059 !important;
      }
      .swiper-pagination-bullet-active {
        background-color: #C5A059 !important;
      }
      .bg-shape-1 {
        background-color: #C5A059 !important;
      }
`;

content = content.replace(/<\/style>/, luxuryCSS + '\n    </style>');

// 8. Find cards and make them glass-panel or white
content = content.replace(/bg-white/g, 'bg-white luxury-shadow');
content = content.replace(/shadow-lg/g, 'luxury-shadow');

fs.writeFileSync(targetFile, content);
console.log('Successfully updated exterior theme to White and Champagne Gold.');
