const fs = require('fs');
const path = require('path');

const exteriorDir = path.join('c:', 'Users', 'MSI 1', 'Downloads', 'ExteriorInterior', 'exterior');

const servicesData = [
    { 
        name: 'Fixed & Foldable Systems', slug: 'fixed-and-foldable', 
        p1: 'Discover unparalleled versatility with our premium fixed and foldable glass systems. Designed to create a seamless transition between your indoor sanctuary and outdoor landscapes, these systems offer maximum natural light while maintaining exceptional weather resistance.',
        p2: 'Whether you are looking to enclose a terrace, create a flexible sunroom, or partition large commercial spaces, our foldable systems operate with smooth, silent precision and stack effortlessly to the side.',
        imgs: ['1600566753190-1732928043af', '1600607688969-ce516e872082', '1600585154340-be6161a56a0c', '1513694203232-719a280e022f']
    },
    { 
        name: 'Aluminium Fences', slug: 'aluminium-fences', 
        p1: 'Secure your property with our ultra-modern, heavy-duty aluminium fencing systems. Combining uncompromising security with sleek architectural lines, our fences are the perfect boundary solution for luxury villas and high-end commercial properties.',
        p2: 'Manufactured from premium-grade extruded aluminium and finished with UV-resistant powder coating, our fences are guaranteed against rust, corrosion, and fading, ensuring a pristine appearance for decades with zero maintenance.',
        imgs: ['1584622650111-993a426fbf0a', '1600596542815-ffad4c1539a9', '1518173946091-a8330452a5f7', '1497384401174-8b6a37fc1e2c']
    },
    { 
        name: 'Doors & Windows', slug: 'doors-and-windows', 
        p1: 'Elevate your property aesthetics and functionality with our premium architectural doors and windows. Designed to offer maximum durability, top-tier security, and unmatched elegance for the most discerning clients.',
        p2: 'We meticulously source the finest materials to construct fenestration solutions that dramatically enhance natural lighting while optimizing energy efficiency. Available in sleek modern minimalism or classic luxury profiles.',
        imgs: ['1600607686527-6fb886090705', '1600566753190-1732928043af', '1618221195710-dd6b41faaea6', '1600210492486-724fe5c67fb0']
    },
    { 
        name: 'Sliding Doors', slug: 'sliding-doors', 
        p1: 'Experience the perfect blend of minimalist design and high-performance engineering with our luxury sliding door systems. Built for smooth gliding and long-lasting durability, bringing sophisticated modernity to any project.',
        p2: 'Built with heavy-duty aluminum or reinforced profiles, our sliding doors guarantee structural integrity even in oversized, floor-to-ceiling glass panels, offering unobstructed panoramic views.',
        imgs: ['1513694203232-719a280e022f', '1600585154340-be6161a56a0c', '1600607687920-4e2a09cf159d', '1600566752538-349f7d08ee7a']
    },
    { 
        name: 'Sliding Folding Doors', slug: 'sliding-folding-doors', 
        p1: 'Transform your living spaces with our state-of-the-art sliding folding (bi-fold) doors. These innovative systems are engineered to entirely eliminate walls and blur the boundaries between indoor and outdoor environments.',
        p2: 'Our multi-slide systems feature ultra-smooth bottom-rolling mechanisms, weather-tight sealing technology, and flush track options for a seamless, trip-free transition into your garden or patio.',
        imgs: ['1600585154340-be6161a56a0c', '1600566753190-1732928043af', '1600210492486-724fe5c67fb0', '1600596542815-ffad4c1539a9']
    },
    { 
        name: 'Curtain Walls', slug: 'curtain-walls', 
        p1: 'Redefine the skyline with our striking curtain wall installations. We specialize in cutting-edge structural glass facades that provide impressive architectural statements while ensuring robust performance and weather resistance.',
        p2: 'Our curtain wall solutions are custom-engineered for each project, handling extreme wind loads, thermal expansion, and water penetration. They deliver brilliant natural illumination and an iconic, modern look.',
        imgs: ['1486406146926-c627a92ad1ab', '1616486338812-3dadae4b4ace', '1505691938895-1758d7feb511', '1497384401174-8b6a37fc1e2c']
    },
    { 
        name: 'Skylights', slug: 'skylight', 
        p1: 'Invite the sky inside with our custom structural skylight installations. Whether you desire a dramatic architectural focal point or subtle overhead lighting, our skylights breathe life into dark exterior corridors and expansive atriums alike.',
        p2: 'Our bespoke skylights are engineered to withstand extreme weather conditions while eliminating the risk of leaks, utilizing UV-blocking and self-cleaning glass options with thermally broken frames.',
        imgs: ['1507089947368-19c1da9775ae', '1600566753190-1732928043af', '1600607686527-6fb886090705', '1600585154340-be6161a56a0c']
    },
    { 
        name: 'Substation Louvers', slug: 'substation-louvers', 
        p1: 'Ensure optimal ventilation and absolute equipment protection with our heavy-duty architectural substation louvers. Engineered to meet the strictest airflow, acoustic, and weather-resistance requirements for critical infrastructure.',
        p2: 'Manufactured from robust extruded aluminum, our storm-proof drainable blade designs facilitate massive heat dissipation while entirely blocking rain, dust, and sand from entering the enclosure.',
        imgs: ['1513328224021-9659bfa5f69a', '1497384401174-8b6a37fc1e2c', '1518173946091-a8330452a5f7', '1486406146926-c627a92ad1ab']
    },
    { 
        name: 'Aluminium Decorative Fins', slug: 'aluminium-decorative-fins', 
        p1: 'Enhance your building elevation with our architectural aluminium decorative fins. These sleek, vertical elements provide dramatic visual texture to modern facades while offering highly effective solar shading.',
        p2: 'Custom-fabricated to any depth, profile, or color, our decorative fins reduce solar heat gain and glare, significantly lowering HVAC costs while giving your property an unmistakable contemporary signature.',
        imgs: ['1518173946091-a8330452a5f7', '1497384401174-8b6a37fc1e2c', '1486406146926-c627a92ad1ab', '1616486338812-3dadae4b4ace']
    },
    { 
        name: 'Aluminium Decorative Louvers', slug: 'aluminium-decorative-louvers', 
        p1: 'Add privacy, shading, and sophisticated texture to your exterior with our custom aluminium decorative louvers. Perfect for screening mechanical equipment or creating stunning architectural feature walls.',
        p2: 'Available in fixed or operable configurations, our horizontal slat systems are powder-coated to perfectly match or contrast with your primary facade, delivering both immense functionality and striking aesthetics.',
        imgs: ['1497384401174-8b6a37fc1e2c', '1513328224021-9659bfa5f69a', '1518173946091-a8330452a5f7', '1584622650111-993a426fbf0a']
    },
    { 
        name: 'Mashrabiya', slug: 'mashrabiya', 
        p1: 'Honor traditional Islamic architecture with our modern, precision-cut Mashrabiya screens. We fabricate these intricate geometric patterns using advanced CNC-machined aluminium for unparalleled durability and elegance.',
        p2: 'Serving as an exquisite cultural statement, our Mashrabiya panels provide critical passive cooling and privacy for luxury villas and commercial towers, casting beautiful, dynamic shadows throughout the day.',
        imgs: ['1560945842-88fdfb2390a0', '1540304380120-edbf0327f12a', '1565011333333-8c460cf61e1b', '1518173946091-a8330452a5f7']
    },
    { 
        name: 'Pergolas', slug: 'pergolas', 
        p1: 'Create the ultimate outdoor living experience with our bespoke luxury pergolas. Engineered to expand your usable space, our shaded structures are perfect for outdoor dining, lounging, and entertaining.',
        p2: 'Featuring optional motorized bioclimatic louvers, integrated LED lighting, and weather sensors, our premium aluminium pergolas allow you to instantly adapt to the sun and rain at the touch of a button.',
        imgs: ['1595843468924-a21235b377b2', '1600585154340-be6161a56a0c', '1618221195710-dd6b41faaea6', '1600210492486-724fe5c67fb0']
    },
    { 
        name: 'Private Majlis', slug: 'private-majlis', 
        p1: 'Design a space of supreme hospitality with our exclusive external Private Majlis structures. We engineer and construct bespoke annexes dedicated to traditional gatherings and luxurious entertainment.',
        p2: 'From the structural shell and ornate facades to the integration of premium sliding doors and Mashrabiya screens, we deliver a completely turnkey Majlis that honors tradition while embracing modern architectural luxury.',
        imgs: ['1618221195710-dd6b41faaea6', '1600596542815-ffad4c1539a9', '1600210492486-724fe5c67fb0', '1555529733-0e670560f0e1']
    },
    { 
        name: 'Facades', slug: 'facade', 
        p1: 'Transform your entire building envelope with our comprehensive Facade engineering and cladding services. We provide end-to-end solutions that dictate the visual identity and thermal performance of your property.',
        p2: 'Utilizing a mix of glass curtain walls, aluminium composite panels, stone cladding, and decorative louvers, our expert team executes highly complex, multi-material facades for the most prestigious properties in the region.',
        imgs: ['1600596542815-ffad4c1539a9', '1486406146926-c627a92ad1ab', '1616486338812-3dadae4b4ace', '1600607687920-4e2a09cf159d']
    }
];

// We will use curtain-walls.html as the base template since it has the correct layout
const templatePath = path.join(exteriorDir, 'curtain-walls.html');
const templateContent = fs.readFileSync(templatePath, 'utf8');

// The original repeated image string in the template
const targetImgString = "background-image: url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2000&q=80')";

servicesData.forEach(srv => {
    let newContent = templateContent;
    
    // 1. Replace Title
    newContent = newContent.replace(/<title>.*?<\/title>/g, `<title>${srv.name} | Exterior Architecture</title>`);
    
    // 2. Replace Main H1
    newContent = newContent.replace(/<h1[^>]*>.*?<\/h1>/g, `<h1 class="text-5xl md:text-6xl font-bold text-white mb-6 uppercase tracking-tight">${srv.name}</h1>`);
    
    // 3. Replace Breadcrumb active item
    newContent = newContent.replace(/<span class="text-accent">Curtain Walls<\/span>/g, `<span class="text-accent">${srv.name}</span>`);
    
    // 4. Replace H2 and paragraphs
    newContent = newContent.replace(/<h2 class="text-4xl md:text-5xl font-bold text-primary-dark mb-10 leading-tight">.*?<\/h2>/s, `<h2 class="text-4xl md:text-5xl font-bold text-primary-dark mb-10 leading-tight">Elevating Spaces with Premium ${srv.name}</h2>`);
    
    // Replace paragraph 1
    newContent = newContent.replace(/<p class="text-slate-600 mb-6 leading-relaxed text-lg first-letter:text-6xl first-letter:font-serif first-letter:font-bold first-letter:text-accent first-letter:mr-3 first-letter:float-left">.*?<\/p>/s, `<p class="text-slate-600 mb-6 leading-relaxed text-lg first-letter:text-6xl first-letter:font-serif first-letter:font-bold first-letter:text-accent first-letter:mr-3 first-letter:float-left">${srv.p1}</p>`);
    
    // Replace paragraph 2
    newContent = newContent.replace(/<p class="text-slate-600 mb-12 leading-relaxed text-lg">.*?<\/p>/s, `<p class="text-slate-600 mb-12 leading-relaxed text-lg">${srv.p2}</p>`);
    
    // 5. Replace 4 Images sequentially
    let imgCounter = 0;
    while(newContent.indexOf(targetImgString) !== -1 && imgCounter < 4) {
        newContent = newContent.replace(targetImgString, `background-image: url('https://images.unsplash.com/photo-${srv.imgs[imgCounter]}?auto=format&fit=crop&w=2000&q=80')`);
        imgCounter++;
    }
    
    // If there are any remaining targetImgStrings (due to earlier replacement bugs), force them to use img 0
    newContent = newContent.replace(new RegExp(targetImgString.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g'), `background-image: url('https://images.unsplash.com/photo-${srv.imgs[0]}?auto=format&fit=crop&w=2000&q=80')`);
    
    // 6. Write the file
    fs.writeFileSync(path.join(exteriorDir, `${srv.slug}.html`), newContent);
    console.log(`Successfully generated dynamic content for: ${srv.slug}`);
});

console.log("All 14 pages completely rewritten with bespoke content and unique 4-image arrays!");
