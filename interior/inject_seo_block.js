const fs = require('fs');

const seoData = {
    'doors-and-windows.html': {
        h3_1: "The Architectural Impact of Premium Windows and Doors",
        p_1: "In Dubai's dynamic luxury real estate market, architectural fenestration is more than just a functional requirement; it is a profound design statement. High-end doors and windows define the aesthetic character of your property, seamlessly bridging the gap between bespoke interior design and striking exterior facades. By investing in custom-engineered aluminum and uPVC solutions, architects and homeowners can achieve sweeping panoramic views, flood interior spaces with natural light, and create a sophisticated visual rhythm that elevates the entire structure's value.",
        h3_2: "Advanced Materials & Thermal Technology",
        p_2: "Operating in the Middle East demands rigorous engineering. Our bespoke window and door systems are manufactured using state-of-the-art materials designed to withstand extreme thermal loads and high-salinity coastal environments. Utilizing cutting-edge thermal break technology, low-E (low emissivity) double and triple glazing, and precision weather stripping, our installations drastically reduce solar heat gain. This not only ensures unparalleled indoor comfort year-round but also significantly lowers HVAC energy consumption, contributing to sustainable, eco-friendly luxury living.",
        h3_3: "Why Choose Our Expertise in Dubai",
        p_3: "As a premier design and execution firm in Dubai, we deliver turnkey fenestration solutions tailored to your exacting standards. From the initial structural survey to meticulous fabrication and flawless installation, our dedicated team ensures every hinge, lock, and pane of glass meets rigorous international quality standards. We combine localized environmental knowledge with global design trends to offer doors and windows that are as secure and resilient as they are breathtakingly beautiful."
    },
    'skylight.html': {
        h3_1: "The Architectural Impact of Custom Skylights",
        p_1: "Skylights are transformative architectural elements that redefine how a space interacts with the sky above. By introducing a 'fifth facade' to your property, custom skylights break up monotonous ceiling planes and draw the eye upward, creating an immediate sense of grandeur and volume. In luxury Dubai villas and high-end commercial spaces, strategically placed overhead glazing bathes interiors in diffused, shifting daylight, dramatically enhancing the mood, perceived space, and overall aesthetic brilliance of the environment.",
        h3_2: "Advanced Materials & Thermal Technology",
        p_2: "Overhead glazing requires the highest level of structural integrity and climate control. Our premium skylight systems are engineered with heavy-duty extruded aluminum frames and specialized laminated safety glass. To combat intense direct sunlight, we employ advanced solar-reflective coatings, Low-E glazing, and argon gas fills. This state-of-the-art thermal engineering prevents greenhouse-effect overheating and UV degradation of your interior furnishings, ensuring your skylight is a source of brilliant light, not unwanted heat.",
        h3_3: "Why Choose Our Expertise in Dubai",
        p_3: "Designing and installing skylights in Dubai requires absolute precision to guarantee zero water ingress and optimal thermal performance. Our expert team provides end-to-end solutions, from structural load calculations to seamless integration with your existing roof membrane. Whether you require a sleek, fixed minimalist pane or a massive, motorized operable system for ventilation, we deliver unparalleled craftsmanship, transforming dark interior spaces into luminous, world-class architectural statements."
    },
    'curtain-walls.html': {
        h3_1: "The Architectural Impact of Curtain Wall Systems",
        p_1: "Curtain walls represent the pinnacle of modern architectural design, defining the iconic skylines of cities like Dubai. These non-load bearing, multi-story glass facades wrap buildings in a sleek, sheer envelope of reflective elegance. By replacing traditional solid walls with expansive curtain glazing, architects can achieve maximum transparency, blurring the lines between the interior workspace and the exterior urban landscape. The result is a monumental aesthetic that commands attention while providing occupants with unobstructed, breathtaking panoramic views.",
        h3_2: "Advanced Materials & Structural Engineering",
        p_2: "Our curtain wall systems—both stick-built and unitized—are masterpieces of structural engineering. Designed to gracefully absorb and transfer immense wind loads, seismic forces, and thermal expansion back to the building's primary framework, they ensure absolute structural stability. We utilize thermally broken aluminum transoms and mullions combined with high-performance acoustic and solar-control glazing. This complex integration prevents water penetration, mitigates urban noise pollution, and strictly regulates indoor climates across massive facade areas.",
        h3_3: "Why Choose Our Expertise in Dubai",
        p_3: "Executing a flawless curtain wall installation in a demanding environment requires a highly specialized skill set. As a leading facade engineering firm in Dubai, we manage the entire lifecycle of your glazing project. From rigorous 3D structural modeling and factory-controlled fabrication to precise crane-assisted installation, our methodology guarantees a perfect, weather-tight envelope. Trust us to deliver a high-performance facade that enhances your building's energy efficiency, aesthetic prestige, and long-term asset value."
    },
    'sliding-doors.html': {
        h3_1: "The Architectural Impact of Minimalist Sliding Doors",
        p_1: "Premium sliding doors are the ultimate architectural tool for indoor-outdoor living, seamlessly merging luxurious interior spaces with expansive exterior patios, pools, and gardens. Characterized by massive panels of glass and ultra-slim sightlines, modern sliding systems disappear into the architecture, framing the outside world like a living piece of art. In high-end Dubai residences, these elegant, flush-mounted installations create an unparalleled sense of openness, allowing for the effortless flow of light, air, and movement throughout the property.",
        h3_2: "Advanced Hardware & Thermal Technology",
        p_2: "Moving massive panes of architectural glass requires extraordinary engineering. Our high-performance sliding doors utilize heavy-duty, stainless steel precision rollers and multi-track systems, ensuring that even the heaviest double-glazed panels glide open silently with a mere push. Built with robust thermal breaks and specialized interlocking weather seals, these systems offer uncompromising resistance to wind, dust, and heat. The integration of multi-point locking mechanisms ensures that this expansive transparency never compromises your property's security.",
        h3_3: "Why Choose Our Expertise in Dubai",
        p_3: "We specialize in the design and execution of bespoke, large-format sliding door systems tailored for Dubai's elite properties. Our team meticulously surveys your structural openings to ensure perfectly level, flush-track installations that eliminate tripping hazards and provide a flawless finish. Whether you seek manual oversized panels or fully automated, smart-home integrated motorized sliders, we deliver a turnkey solution that redefines luxury living and elevates your home's modern aesthetic."
    },
    'sliding-folding-doors.html': {
        h3_1: "The Architectural Impact of Bifold Door Systems",
        p_1: "Sliding folding doors, or bifold systems, offer unparalleled architectural flexibility, completely dissolving the boundary between the inside and outside. Unlike standard sliders that overlap, folding doors concertina gracefully to the side, opening up entire walls to create massive, unobstructed apertures. This dramatic transformation instantly expands your living or dining area into the garden, making them the ultimate feature for high-end entertaining in luxury Dubai villas, maximizing both space and spatial grandeur.",
        h3_2: "Advanced Hardware & Thermal Technology",
        p_2: "The complexity of a folding door system requires flawless mechanical precision. Our bespoke bifold doors hang from heavily engineered top-tracks and glide on bottom guides, utilizing advanced articulated hinges that ensure decades of smooth, reliable folding action. Despite the ability to open completely, when closed, the system employs high-compression gaskets and multi-point locking mechanisms across every panel. Combined with thermally broken aluminum and Low-E glazing, they provide a formidable barrier against Dubai's extreme heat and dust.",
        h3_3: "Why Choose Our Expertise in Dubai",
        p_3: "Installing a massive sliding folding door system requires exact structural tolerances and expert execution. Our dedicated installation teams in Dubai ensure that the overhead lintels are properly rated for the hanging weight and that the flush thresholds are flawlessly integrated into your flooring for a seamless transition. We offer highly customizable panel configurations, premium hardware finishes, and robust warranties, guaranteeing a spectacular, high-performance architectural feature that completely transforms your lifestyle."
    },
    'substation-louvers.html': {
        h3_1: "The Architectural Impact of Industrial Louver Systems",
        p_1: "While highly functional, modern substation and plant room louvers play a critical role in the architectural continuity of a building's exterior. Rather than leaving industrial equipment exposed, custom architectural louvers provide a sleek, uniform visual screen that blends seamlessly with the surrounding facade. In Dubai's meticulously designed urban landscape, premium aluminum louvers ensure that functional requirements—such as massive airflow and equipment protection—are met without sacrificing the building's aesthetic integrity or premium finish.",
        h3_2: "Advanced Engineering & Aerodynamic Design",
        p_2: "Substation louvers must perform under extreme conditions. Our heavy-duty architectural louvers are aerodynamically engineered to maximize free area for critical equipment ventilation while providing robust protection against wind-driven rain, sandstorms, and debris. We specialize in storm-proof drainable blade designs that capture and channel water away, and acoustic louvers featuring specialized baffles that significantly mitigate the severe noise pollution generated by transformers and heavy generators, ensuring compliance with strict urban noise regulations.",
        h3_3: "Why Choose Our Expertise in Dubai",
        p_3: "We are the trusted partner for executing specialized architectural louvers in demanding industrial and commercial environments across Dubai. Our engineering team conducts rigorous airflow and pressure-drop calculations to custom-fabricate louvers that perfectly match the mechanical requirements of your substation or plant room. Finished in highly durable, custom-matched Kynar or anodized coatings, our louver systems provide decades of corrosion-resistant, maintenance-free performance, flawlessly executed by our expert installation crews."
    }
};

const insertSEOBlock = (file, data) => {
    let content = fs.readFileSync(file, 'utf8');
    
    // We want to insert the dark SEO block right AFTER the "Our Proven Process" section
    // and BEFORE the "Project Showcase" section.
    // Let's find the closing tag of the Process section or the heading of Project Showcase.
    
    const showcaseMarker = '<h3 class="text-3xl font-bold text-primary-dark mb-8">Project Showcase</h3>';
    const showcaseIdx = content.indexOf(showcaseMarker);
    
    if (showcaseIdx !== -1) {
        const seoHTML = `
<!-- Dark SEO Content Block -->
<div class="bg-primary-dark text-slate-300 p-8 md:p-12 rounded-3xl mb-16 shadow-2xl relative overflow-hidden group">
    <!-- Decorative background elements for luxury feel -->
    <div class="absolute top-0 right-0 w-64 h-64 bg-accent opacity-5 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
    <div class="absolute bottom-0 left-0 w-64 h-64 bg-accent opacity-5 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2 pointer-events-none"></div>
    
    <div class="relative z-10 space-y-10">
        <div>
            <div class="flex items-center space-x-3 mb-4">
                <i class="fas fa-gem text-accent text-xl"></i>
                <h3 class="text-2xl font-bold text-white tracking-wide">${data.h3_1}</h3>
            </div>
            <p class="leading-relaxed text-[15px] opacity-90">${data.p_1}</p>
        </div>
        
        <div>
            <div class="flex items-center space-x-3 mb-4">
                <i class="fas fa-shield-alt text-accent text-xl"></i>
                <h3 class="text-2xl font-bold text-white tracking-wide">${data.h3_2}</h3>
            </div>
            <p class="leading-relaxed text-[15px] opacity-90">${data.p_2}</p>
        </div>
        
        <div>
            <div class="flex items-center space-x-3 mb-4">
                <i class="fas fa-map-marker-alt text-accent text-xl"></i>
                <h3 class="text-2xl font-bold text-white tracking-wide">${data.h3_3}</h3>
            </div>
            <p class="leading-relaxed text-[15px] opacity-90">${data.p_3}</p>
        </div>
    </div>
</div>
`;
        
        const finalContent = content.substring(0, showcaseIdx) + seoHTML + '\n' + content.substring(showcaseIdx);
        fs.writeFileSync(file, finalContent);
        console.log('Injected Dark SEO Block into: ' + file);
    }
};

Object.keys(seoData).forEach(file => {
    if (fs.existsSync(file)) {
        insertSEOBlock(file, seoData[file]);
    }
});
