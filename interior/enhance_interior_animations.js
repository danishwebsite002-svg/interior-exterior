const fs = require('fs');
const path = require('path');
const { JSDOM } = require('jsdom');

const targetFile = path.join(__dirname, 'index.html');
let htmlContent = fs.readFileSync(targetFile, 'utf8');

const dom = new JSDOM(htmlContent);
const document = dom.window.document;

// 1. Add Complex CSS Keyframes
const styleTag = document.querySelector('style');
styleTag.innerHTML += `
  @keyframes float {
    0% { transform: translateY(0px); }
    50% { transform: translateY(-15px); }
    100% { transform: translateY(0px); }
  }
  .animate-float {
    animation: float 5s ease-in-out infinite;
  }
  @keyframes pulse-glow {
    0% { box-shadow: 0 0 0 0 rgba(178, 124, 90, 0.4); }
    70% { box-shadow: 0 0 0 20px rgba(178, 124, 90, 0); }
    100% { box-shadow: 0 0 0 0 rgba(178, 124, 90, 0); }
  }
  .animate-pulse-glow {
    animation: pulse-glow 2s infinite;
  }
  @keyframes scroll-bounce {
    0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
    40% { transform: translateY(-10px); }
    60% { transform: translateY(-5px); }
  }
  .animate-scroll {
    animation: scroll-bounce 2s infinite;
  }
  @keyframes marquee {
    0% { transform: translateX(0); }
    100% { transform: translateX(-50%); }
  }
  .marquee-content {
    display: inline-flex;
    animation: marquee 20s linear infinite;
    min-width: 200%;
  }
  /* Button slide effect */
  .btn-slide {
    position: relative;
    overflow: hidden;
    z-index: 1;
  }
  .btn-slide::before {
    content: '';
    position: absolute;
    top: 0; left: -100%;
    width: 100%; height: 100%;
    background: #161B29;
    transition: left 0.4s ease;
    z-index: -1;
  }
  .btn-slide:hover::before {
    left: 0;
  }
  .btn-copper.btn-slide:hover { color: #fff; background: transparent; }
`;

// 2. Enhance Hero Section
const heroImg = document.querySelector('section.h-\\[85vh\\] img');
if (heroImg) {
  heroImg.style.backgroundAttachment = 'fixed'; // Parallax
  heroImg.classList.add('transform', 'scale-105'); // Slight zoom
}

// Add a scroll down indicator
const heroSection = document.querySelector('section.h-\\[85vh\\]');
if (heroSection) {
  const scrollIndicator = document.createElement('div');
  scrollIndicator.className = 'absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30 text-white opacity-70 animate-scroll flex flex-col items-center';
  scrollIndicator.innerHTML = '<span class="text-[10px] uppercase tracking-widest mb-2 font-bold text-copper">Scroll</span><div class="w-6 h-10 border-2 border-white rounded-full flex justify-center p-1"><div class="w-1 h-2 bg-copper rounded-full"></div></div>';
  heroSection.appendChild(scrollIndicator);
}

// 3. Enhance Services Strip with Staggered Hover & Shadows
const serviceCols = document.querySelectorAll('.grid-cols-1.md\\:grid-cols-5 > div');
serviceCols.forEach((col, index) => {
  col.classList.add('transition-all', 'duration-500', 'hover:-translate-y-4', 'hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)]', 'hover:bg-white', 'rounded-2xl', 'p-6', 'cursor-pointer', 'border-transparent');
  col.setAttribute('data-aos', 'fade-up');
  col.setAttribute('data-aos-delay', (index * 100).toString());
});

// 4. Enhance About Section (Floating 25 Years Badge)
const badge25 = document.querySelector('.bg-copper.text-white.p-8.w-48');
if (badge25) {
  badge25.classList.add('animate-float', 'shadow-2xl');
}
const aboutImage = document.querySelector('img[src*="1545324418"]');
if (aboutImage) {
  aboutImage.classList.add('transition-transform', 'duration-[2s]', 'hover:scale-110');
}

// 5. Enhance Projects Section (Floating Center Card)
const projectCard = document.querySelector('.absolute.top-1\\/2.left-1\\/2');
if (projectCard) {
  projectCard.classList.add('transition-all', 'duration-500', 'hover:scale-110', 'hover:shadow-[0_30px_60px_rgba(0,0,0,0.3)]', 'cursor-pointer');
}

// Enhance Partner Logos to Marquee
const partnerContainer = document.querySelector('.flex.justify-between.items-center.opacity-50');
if (partnerContainer) {
  partnerContainer.classList.remove('justify-between');
  partnerContainer.classList.add('overflow-hidden', 'w-full', 'py-4');
  partnerContainer.innerHTML = '<div class="marquee-content flex justify-around w-full items-center gap-16">' + innerHTML + ' ' + innerHTML + ' ' + innerHTML + '</div>';

// 6. Enhance Video Button
const videoBtn = document.querySelector('.w-20.h-20.bg-copper');
if (videoBtn) {
  videoBtn.classList.add('animate-pulse-glow', 'rounded-full');
}

// 7. Enhance Process Steps (Hover Color Fill & Lift)
const processCards = document.querySelectorAll('.grid-cols-1.md\\:grid-cols-3 > .border-gray-200');
processCards.forEach(card => {
  card.classList.add('transition-all', 'duration-500', 'hover:-translate-y-4', 'hover:shadow-2xl', 'hover:bg-navy', 'group-hover:text-white', 'cursor-pointer');
  const textTitle = card.querySelector('h4');
  const textDesc = card.querySelector('p');
  if (textTitle) textTitle.classList.add('group-hover:text-white', 'transition-colors');
  if (textDesc) textDesc.classList.add('group-hover:text-gray-300', 'transition-colors');
  const bigNum = card.querySelector('.text-6xl');
  if (bigNum) bigNum.classList.add('group-hover:text-copper/20');
});

// 8. Enhance Stats/Features Hover
const statBoxes = document.querySelectorAll('.grid-cols-2.gap-6 > .bg-white');
statBoxes.forEach(box => {
  box.classList.add('transition-all', 'duration-300', 'hover:-translate-y-2', 'hover:shadow-xl', 'hover:border-copper', 'cursor-pointer');
});

// 9. Enhance Blog Cards
const blogCards = document.querySelectorAll('.grid-cols-1.md\\:grid-cols-3 > .bg-white.flex-col');
blogCards.forEach(card => {
  card.classList.add('transition-all', 'duration-500', 'hover:-translate-y-4', 'hover:shadow-[0_20px_40px_rgba(0,0,0,0.1)]');
});

// 10. Add JS Counter Animation Script
const body = document.querySelector('body');
const counterScript = document.createElement('script');
counterScript.innerHTML = "document.addEventListener('DOMContentLoaded', () => { const counters = document.querySelectorAll('h3.text-5xl'); const animateCounters = () => { counters.forEach(counter => { const target = +counter.innerText.replace(/[^0-9]/g, ''); const duration = 2000; const increment = target / (duration / 16); let current = 0; const updateCounter = () => { current += increment; if (current < target) { counter.innerText = Math.ceil(current) + 'K+'; requestAnimationFrame(updateCounter); } else { counter.innerText = target + 'K+'; } }; updateCounter(); }); }; const observer = new IntersectionObserver((entries) => { entries.forEach(entry => { if (entry.isIntersecting) { animateCounters(); observer.unobserve(entry.target); } }); }); const counterSection = document.querySelector('.grid-cols-2.md\\\\:grid-cols-4'); if (counterSection) observer.observe(counterSection); });";
body.appendChild(counterScript);

// Apply button slide class
const copperBtns = document.querySelectorAll('.btn-copper');
copperBtns.forEach(btn => btn.classList.add('btn-slide'));

fs.writeFileSync(targetFile, dom.serialize());
console.log('Successfully injected rich animations, hover states, parallax, and JS counters into interior/index.html');
