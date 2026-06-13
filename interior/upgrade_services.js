const fs = require('fs');

const serviceData = {
    'doors-and-windows.html': {
        name: 'Doors and Windows',
        images: [
            'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
            'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1595515106969-1ce29566ff1c?auto=format&fit=crop&w=800&q=80'
        ],
        faqs: [
            { q: "What materials do you use for your doors and windows?", a: "We source only premium materials including high-grade aluminum, reinforced uPVC, and engineered timber, tailored to match your property's architectural style and climate requirements." },
            { q: "Are your windows energy efficient?", a: "Absolutely. All our installations feature advanced thermal breaks and double or triple glazing options to significantly reduce heat transfer and optimize your home's energy consumption." },
            { q: "How long does a typical installation take?", a: "Depending on the scale of the project, standard residential installations usually take between 3 to 7 days, meticulously planned to minimize disruption to your daily life." }
        ]
    },
    'skylight.html': {
        name: 'Skylights',
        images: [
            'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80',
            'https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1542665952-66b26d85918d?auto=format&fit=crop&w=800&q=80'
        ],
        faqs: [
            { q: "Will a skylight cause my room to overheat?", a: "No, we use high-performance, Low-E (low emissivity) glazing that blocks harmful UV rays and reflects solar heat, ensuring your space remains brightly lit without uncomfortable temperature spikes." },
            { q: "Are your skylights prone to leaking?", a: "We utilize advanced flashing techniques and integrated condensation gutters to ensure a 100% watertight seal, backed by our comprehensive installation warranty." },
            { q: "Can skylights be opened for ventilation?", a: "Yes, we offer both fixed and operable skylights. Operable units can be manual, motorized, or even integrated into smart home systems with rain sensors." }
        ]
    },
    'curtain-walls.html': {
        name: 'Curtain Walls',
        images: [
            'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80',
            'https://images.unsplash.com/photo-1481253127861-534498168948?auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=800&q=80'
        ],
        faqs: [
            { q: "What is the difference between a stick system and a unitized system?", a: "Stick systems are assembled piece-by-piece on-site, making them ideal for low-to-mid rise buildings with complex geometries. Unitized systems are pre-assembled in our factory and hoisted into place, significantly speeding up installation for high-rise projects." },
            { q: "How do curtain walls handle wind loads?", a: "Our engineering team meticulously calculates wind loads based on building height and geographic location, designing structural aluminum mullions that safely transfer these forces back to the building's primary structure." },
            { q: "Do curtain walls offer sound insulation?", a: "Yes, by utilizing specialized laminated acoustic glass and thermally broken mullions, our curtain wall systems provide excellent attenuation of exterior noise." }
        ]
    },
    'sliding-doors.html': {
        name: 'Sliding Doors',
        images: [
            'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80',
            'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80'
        ],
        faqs: [
            { q: "Can sliding doors be automated?", a: "Absolutely. We offer state-of-the-art motorized sliding systems that can be operated via wall switches, remote controls, or integrated smart home applications." },
            { q: "How heavy are the sliding panels?", a: "While the glass panels can be quite heavy, our precision-engineered stainless steel rollers ensure that even oversized doors glide open effortlessly with a gentle push." },
            { q: "Are sliding doors secure?", a: "Security is a top priority. Our sliding doors feature multi-point locking systems, anti-lift devices, and toughened safety glass to provide robust protection against forced entry." }
        ]
    },
    'sliding-folding-doors.html': {
        name: 'Sliding Folding Doors',
        images: [
            'https://images.unsplash.com/photo-1600566753086-00f18efc2291?auto=format&fit=crop&w=1200&q=80',
            'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80'
        ],
        faqs: [
            { q: "Do sliding folding doors require a bottom track?", a: "Yes, a bottom track is necessary for structural support and smooth operation. However, we offer low-threshold and flush-track options that provide a seamless, trip-free transition between indoor and outdoor spaces." },
            { q: "How wide can a folding door system be?", a: "Our premium systems can span massive openings, often accommodating up to 8 or 10 panels in a single run. We will assess your structural opening to recommend the optimal configuration." },
            { q: "Are folding doors energy efficient?", a: "Yes, despite the large glass area, our doors feature advanced thermal breaks and high-performance weather seals that prevent drafts and maintain interior climate control." }
        ]
    },
    'substation-louvers.html': {
        name: 'Substation Louvers',
        images: [
            'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1200&q=80',
            'https://images.unsplash.com/photo-1600121848594-d8644e57abab?auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1504307651254-35680f356f12?auto=format&fit=crop&w=800&q=80'
        ],
        faqs: [
            { q: "What is a storm-proof drainable blade?", a: "Drainable blades feature specialized gutters built into the leading edge. These capture water and channel it away down the jambs, preventing rain from being pulled into the building by high-velocity airflow." },
            { q: "Can louvers be custom color matched?", a: "Yes, all our architectural louvers can be finished in custom Kynar 500 coatings or anodized finishes to perfectly match the surrounding building envelope." },
            { q: "Do you offer acoustic louvers for noise reduction?", a: "Certainly. For environments where equipment noise must be mitigated (like generators or transformers), we provide acoustically baffled louvers that maintain airflow while significantly dampening sound transmission." }
        ]
    }
};

const buildLeftColHtml = (data, origLeftCol) => {
    // Extract existing paragraphs and features to reuse
    const h2Match = origLeftCol.match(/<h2[^>]*>(.*?)<\/h2>/s);
    const h2Text = h2Match ? h2Match[1] : `Elevating Spaces with Premium ${data.name}`;
    
    // Find paragraphs
    const paragraphs = [];
    const pRegex = /<p[^>]*>(.*?)<\/p>/gs;
    let match;
    while ((match = pRegex.exec(origLeftCol)) !== null) {
        if (!match[1].includes('<h4')) { // avoid matching nested paragraphs inside features
            paragraphs.push(match[1]);
        }
    }
    const p1 = paragraphs[0] || `Elevate your property aesthetics and functionality with our premium ${data.name.toLowerCase()}.`;
    const p2 = paragraphs[1] || `From sleek modern designs to timeless classics, we use the finest materials to construct solutions that enhance natural light, ensure optimal insulation, and provide seamless transitions.`;

    // Extract features
    let featuresHTML = '';
    const featuresMatch = origLeftCol.match(/<div class="grid grid-cols-1 md:grid-cols-2 gap-6[^>]*>(.*?)<\/div>\s*<div class="grid grid-cols-2 gap-4">/s);
    if (featuresMatch) {
        featuresHTML = `<div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">${featuresMatch[1]}</div>`;
    } else {
        // Fallback features if not found
        featuresHTML = `<div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <div class="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                <h4 class="text-lg font-bold text-primary-dark mb-2">Unmatched Durability</h4>
                <p class="text-slate-500 text-sm leading-relaxed">Engineered to withstand harsh environments while maintaining peak performance over time.</p>
            </div>
            <div class="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                <h4 class="text-lg font-bold text-primary-dark mb-2">Aesthetic Excellence</h4>
                <p class="text-slate-500 text-sm leading-relaxed">Available in customized finishes that blend seamlessly with your interior architecture.</p>
            </div>
        </div>`;
    }

    // Process steps
    const processSteps = [
        { title: "Consultation & Survey", desc: "Understanding your vision, requirements, and taking precise architectural measurements." },
        { title: "Design & Engineering", desc: "Crafting detailed CAD drawings and structural calculations tailored to your project." },
        { title: "Custom Fabrication", desc: "Manufacturing your bespoke systems in our state-of-the-art facility using premium materials." },
        { title: "Expert Installation", desc: "Professional installation by our seasoned team, ensuring absolute perfection and cleanliness." }
    ];

    let processHTML = `<div class="bg-off-cool rounded-3xl p-8 md:p-12 mb-16 border border-slate-100 relative overflow-hidden group">
        <div class="bg-shape-1 opacity-[0.05]"></div>
        <div class="relative z-10">
            <h3 class="text-3xl font-bold text-primary-dark mb-10">Our Proven Process</h3>
            <div class="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-accent/40 before:to-transparent">`;
    
    processSteps.forEach((step, idx) => {
        const num = idx + 1;
        processHTML += `
                <div class="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                    <div class="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-accent text-white font-bold shadow-lg shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">${num}</div>
                    <div class="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                        <h4 class="font-bold text-primary-dark mb-2">${step.title}</h4>
                        <p class="text-sm text-slate-500 leading-relaxed">${step.desc}</p>
                    </div>
                </div>`;
    });
    processHTML += `</div></div></div>`;

    // Dynamic Gallery HTML
    let galleryHTML = `
        <h3 class="text-3xl font-bold text-primary-dark mb-8">Project Showcase</h3>
        <div class="grid grid-cols-2 gap-4 mb-16">
            <div class="col-span-2 h-80 md:h-96 rounded-2xl overflow-hidden group shadow-md">
                <div class="w-full h-full bg-cover bg-center img-hover-zoom" style="background-image: url('${data.images[0]}');"></div>
            </div>
            <div class="h-48 md:h-64 rounded-2xl overflow-hidden group shadow-md">
                <div class="w-full h-full bg-cover bg-center img-hover-zoom" style="background-image: url('${data.images[1]}');"></div>
            </div>
            <div class="h-48 md:h-64 rounded-2xl overflow-hidden group shadow-md">
                <div class="w-full h-full bg-cover bg-center img-hover-zoom" style="background-image: url('${data.images[2]}');"></div>
            </div>
        </div>`;

    // FAQ HTML
    let faqHTML = `<h3 class="text-3xl font-bold text-primary-dark mb-8">Frequently Asked Questions</h3>
        <div class="space-y-4 mb-8">`;
    data.faqs.forEach(faq => {
        faqHTML += `
            <details class="group bg-white border border-slate-200 rounded-2xl overflow-hidden [&_summary::-webkit-details-marker]:hidden shadow-sm">
                <summary class="flex items-center justify-between gap-3 px-6 py-5 font-semibold text-primary-dark cursor-pointer hover:bg-slate-50 transition-colors">
                    <span>${faq.q}</span>
                    <span class="transition-transform duration-300 group-open:rotate-180 text-accent">
                        <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                    </span>
                </summary>
                <div class="px-6 pb-6 text-slate-500 text-sm leading-relaxed border-t border-slate-50 pt-4">
                    ${faq.a}
                </div>
            </details>`;
    });
    faqHTML += `</div>`;

    // Build the final full HTML
    return `
<h2 class="text-4xl md:text-5xl font-bold text-primary-dark mb-10 leading-tight">${h2Text}</h2>
<p class="text-slate-600 mb-6 leading-relaxed text-lg first-letter:text-6xl first-letter:font-serif first-letter:font-bold first-letter:text-accent first-letter:mr-3 first-letter:float-left">${p1}</p>
<p class="text-slate-600 mb-12 leading-relaxed text-lg">${p2}</p>

<hr class="border-slate-100 my-12" />

<h3 class="text-3xl font-bold text-primary-dark mb-8">Key Features & Benefits</h3>
${featuresHTML}

${processHTML}

${galleryHTML}

${faqHTML}
`;
};

Object.keys(serviceData).forEach(file => {
    if (fs.existsSync(file)) {
        let content = fs.readFileSync(file, 'utf8');
        
        // Find the left column
        // We know the structure is:
        // <div class="grid grid-cols-1 lg:grid-cols-12 gap-16">
        //     <div class="lg:col-span-8" data-aos="fade-right">
        //         ... STUFF TO REPLACE ...
        //     </div>
        //     <div class="lg:col-span-4...
        
        const startMarker = '<div class="lg:col-span-8" data-aos="fade-right">';
        const endMarker = '<div class="lg:col-span-4';
        
        const startIdx = content.indexOf(startMarker);
        if (startIdx !== -1) {
            // Find the closing </div> of the left column.
            // Since there are multiple nested divs, finding endMarker and looking backwards for </div> is safer.
            let endIdx = content.indexOf(endMarker, startIdx);
            if (endIdx !== -1) {
                // backtrack to the closing </div> of the lg:col-span-8
                const beforeEndCol4 = content.substring(0, endIdx);
                const actualEndIdx = beforeEndCol4.lastIndexOf('</div>');
                
                const origLeftCol = content.substring(startIdx + startMarker.length, actualEndIdx);
                
                const newLeftColHtml = buildLeftColHtml(serviceData[file], origLeftCol);
                
                const finalContent = content.substring(0, startIdx + startMarker.length) + 
                                     '\n' + newLeftColHtml + '\n' + 
                                     content.substring(actualEndIdx);
                                     
                fs.writeFileSync(file, finalContent);
                console.log('Upgraded design and content in: ' + file);
            }
        }
    }
});
