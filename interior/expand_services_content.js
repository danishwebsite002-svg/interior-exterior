const fs = require('fs');

const file = 'services.html';
if (fs.existsSync(file)) {
    let content = fs.readFileSync(file, 'utf8');

    // Make sure we only replace the specific paragraphs that end with closing </p> and precede the <a href=...
    // Block 1
    content = content.replace(
        /(<p class="text-slate-500 mb-8 leading-relaxed">\s*Elevate your property aesthetics and functionality with our premium doors and windows. Designed to offer maximum durability, top-tier security, and unmatched elegance.\s*<\/p>)/,
        `$1
                    <p class="text-slate-500 mb-6 leading-relaxed">
                        We meticulously source the finest materials to construct fenestration solutions that dramatically enhance natural lighting while optimizing energy efficiency. Whether you desire the sleek minimalism of modern frames or the timeless appeal of classic wood finishes, our team works closely with you to realize your vision.
                    </p>
                    <ul class="space-y-3 mb-8">
                        <li class="flex items-start"><svg class="w-5 h-5 text-accent mt-1 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg><span class="text-slate-600">Advanced thermal insulation & acoustic dampening</span></li>
                        <li class="flex items-start"><svg class="w-5 h-5 text-accent mt-1 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg><span class="text-slate-600">Multi-point locking security systems</span></li>
                        <li class="flex items-start"><svg class="w-5 h-5 text-accent mt-1 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg><span class="text-slate-600">Customized architectural finishes</span></li>
                    </ul>`
    );

    // Block 2
    content = content.replace(
        /(<p class="text-slate-500 mb-8 leading-relaxed">\s*Transform your living spaces with our state-of-the-art sliding folding doors. These innovative systems are engineered to blur the boundaries between indoor sanctuaries and outdoor landscapes.\s*<\/p>)/,
        `$1
                    <p class="text-slate-500 mb-6 leading-relaxed">
                        Our bi-fold and multi-slide systems are designed for effortless operation, allowing you to open up entire walls with a gentle push. Perfect for patios, balconies, and large entertainment areas, these doors provide unobstructed panoramic views while maximizing floor space.
                    </p>
                    <ul class="space-y-3 mb-8">
                        <li class="flex items-start"><svg class="w-5 h-5 text-accent mt-1 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg><span class="text-slate-600">Ultra-smooth bottom-rolling mechanisms</span></li>
                        <li class="flex items-start"><svg class="w-5 h-5 text-accent mt-1 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg><span class="text-slate-600">Weather-tight sealing technology</span></li>
                        <li class="flex items-start"><svg class="w-5 h-5 text-accent mt-1 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg><span class="text-slate-600">Flush track options for seamless transitions</span></li>
                    </ul>`
    );

    // Block 3
    content = content.replace(
        /(<p class="text-slate-500 mb-8 leading-relaxed">\s*Discover the perfect blend of form and function with our high-performance sliding doors. Built for smooth gliding and long-lasting durability, bringing sophisticated modernity to any project.\s*<\/p>)/,
        `$1
                    <p class="text-slate-500 mb-6 leading-relaxed">
                        We offer a diverse range of configurations, including pocket sliders and bypass doors, tailored to fit your specific spatial requirements. Built with heavy-duty aluminum or reinforced uPVC, our sliding doors guarantee structural integrity even in oversized glass panels.
                    </p>
                    <ul class="space-y-3 mb-8">
                        <li class="flex items-start"><svg class="w-5 h-5 text-accent mt-1 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg><span class="text-slate-600">Slimline profiles for maximum glass area</span></li>
                        <li class="flex items-start"><svg class="w-5 h-5 text-accent mt-1 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg><span class="text-slate-600">High-performance double or triple glazing</span></li>
                        <li class="flex items-start"><svg class="w-5 h-5 text-accent mt-1 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg><span class="text-slate-600">Motorized automated opening options</span></li>
                    </ul>`
    );

    // Block 4
    content = content.replace(
        /(<p class="text-slate-500 mb-8 leading-relaxed">\s*Redefine the skyline with our striking curtain wall installations. We specialize in cutting-edge structural glass facades that provide impressive architectural statements.\s*<\/p>)/,
        `$1
                    <p class="text-slate-500 mb-6 leading-relaxed">
                        By suspending a lightweight aluminum frame on the building's exterior, our curtain walls allow for expansive floor-to-ceiling glass. This not only floods interiors with natural light but also significantly reduces the overall weight load on the building's structural foundation.
                    </p>
                    <ul class="space-y-3 mb-8">
                        <li class="flex items-start"><svg class="w-5 h-5 text-accent mt-1 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg><span class="text-slate-600">Unitized and stick-built system options</span></li>
                        <li class="flex items-start"><svg class="w-5 h-5 text-accent mt-1 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg><span class="text-slate-600">Superior wind and seismic load resistance</span></li>
                        <li class="flex items-start"><svg class="w-5 h-5 text-accent mt-1 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg><span class="text-slate-600">Integrated sun-shading & louver compatibility</span></li>
                    </ul>`
    );

    // Block 5
    content = content.replace(
        /(<p class="text-slate-500 mb-8 leading-relaxed">\s*Invite the sky inside with our custom skylight installations. Whether you desire a dramatic architectural focal point or subtle overhead lighting, our skylights transform spaces.\s*<\/p>)/,
        `$1
                    <p class="text-slate-500 mb-6 leading-relaxed">
                        Our bespoke skylights are engineered to withstand extreme weather conditions while eliminating the risk of leaks. From simple fixed roof windows to expansive structural glass pyramids and domes, we provide solutions that breathe life into dark interior corridors and expansive atriums alike.
                    </p>
                    <ul class="space-y-3 mb-8">
                        <li class="flex items-start"><svg class="w-5 h-5 text-accent mt-1 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg><span class="text-slate-600">UV-blocking and self-cleaning glass options</span></li>
                        <li class="flex items-start"><svg class="w-5 h-5 text-accent mt-1 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg><span class="text-slate-600">Thermally broken frames to prevent condensation</span></li>
                        <li class="flex items-start"><svg class="w-5 h-5 text-accent mt-1 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg><span class="text-slate-600">Operable variants for natural ventilation</span></li>
                    </ul>`
    );

    // Block 6
    content = content.replace(
        /(<p class="text-slate-500 mb-8 leading-relaxed">\s*Ensure optimal ventilation and equipment protection with our architectural substation louvers. Engineered to meet strict airflow and weather-resistance requirements.\s*<\/p>)/,
        `$1
                    <p class="text-slate-500 mb-6 leading-relaxed">
                        Specifically designed for industrial and commercial power enclosures, our louvers facilitate critical heat dissipation while entirely blocking rain, dust, and debris. We custom-fabricate each louver system to match the exact architectural profile of your facility.
                    </p>
                    <ul class="space-y-3 mb-8">
                        <li class="flex items-start"><svg class="w-5 h-5 text-accent mt-1 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg><span class="text-slate-600">Heavy-duty extruded aluminum construction</span></li>
                        <li class="flex items-start"><svg class="w-5 h-5 text-accent mt-1 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg><span class="text-slate-600">Storm-proof drainable blade designs</span></li>
                        <li class="flex items-start"><svg class="w-5 h-5 text-accent mt-1 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg><span class="text-slate-600">Acoustic baffling for noise reduction</span></li>
                    </ul>`
    );

    // We also need to change the first paragraph's mb-8 to mb-6 for consistency with the new paragraph
    content = content.replace(/<p class="text-slate-500 mb-8 leading-relaxed">/g, '<p class="text-slate-500 mb-6 leading-relaxed">');

    fs.writeFileSync(file, content);
    console.log('Added more content to services.html');
}
