const fs = require('fs');

const files = [
    'doors-and-windows.html',
    'skylight.html',
    'curtain-walls.html',
    'sliding-doors.html',
    'sliding-folding-doors.html',
    'substation-louvers.html'
];

const newProcessHtml = `
            <h3 class="text-3xl font-bold text-primary-dark mb-12 text-center">Our Proven Process</h3>
            
            <div class="relative max-w-3xl mx-auto">
                <!-- Vertical Line -->
                <div class="absolute left-[28px] md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-transparent via-slate-300 to-transparent md:-translate-x-1/2 hidden md:block"></div>
                <div class="absolute left-[24px] top-0 bottom-0 w-[2px] bg-gradient-to-b from-transparent via-slate-300 to-transparent block md:hidden"></div>

                <div class="space-y-12 relative z-10">
                    <!-- Step 1 -->
                    <div class="flex flex-col md:flex-row items-start md:items-center w-full justify-between group">
                        <div class="w-full md:w-[45%] md:text-right md:pr-8 mb-4 md:mb-0 pl-16 md:pl-0">
                            <div class="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm group-hover:border-[#D9873E]/50 group-hover:shadow-lg transition-all duration-300 relative">
                                <span class="text-[#D9873E] text-sm font-bold uppercase tracking-widest mb-1 block">Step 01</span>
                                <h4 class="font-bold text-primary-dark mb-2 text-lg">Consultation & Survey</h4>
                                <p class="text-sm text-slate-500 leading-relaxed">Understanding your vision, requirements, and taking precise architectural measurements.</p>
                            </div>
                        </div>
                        <div class="absolute md:relative left-0 md:left-auto w-12 h-12 md:w-[10%] flex justify-center shrink-0">
                            <div class="w-12 h-12 rounded-full border-4 border-white bg-[#D9873E] text-white flex items-center justify-center shadow-xl relative z-10 group-hover:scale-110 transition-transform duration-300">
                                <i class="fas fa-comments text-lg"></i>
                            </div>
                        </div>
                        <div class="hidden md:block w-[45%]"></div>
                    </div>

                    <!-- Step 2 -->
                    <div class="flex flex-col md:flex-row items-start md:items-center w-full justify-between group">
                        <div class="hidden md:block w-[45%]"></div>
                        <div class="absolute md:relative left-0 md:left-auto w-12 h-12 md:w-[10%] flex justify-center shrink-0">
                            <div class="w-12 h-12 rounded-full border-4 border-white bg-slate-800 text-white flex items-center justify-center shadow-xl relative z-10 group-hover:scale-110 group-hover:bg-[#D9873E] transition-all duration-300">
                                <i class="fas fa-pencil-ruler text-lg"></i>
                            </div>
                        </div>
                        <div class="w-full md:w-[45%] md:pl-8 mb-4 md:mb-0 pl-16 md:pl-0">
                            <div class="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm group-hover:border-[#D9873E]/50 group-hover:shadow-lg transition-all duration-300">
                                <span class="text-[#D9873E] text-sm font-bold uppercase tracking-widest mb-1 block">Step 02</span>
                                <h4 class="font-bold text-primary-dark mb-2 text-lg">Design & Engineering</h4>
                                <p class="text-sm text-slate-500 leading-relaxed">Crafting detailed CAD drawings and structural calculations tailored to your project.</p>
                            </div>
                        </div>
                    </div>

                    <!-- Step 3 -->
                    <div class="flex flex-col md:flex-row items-start md:items-center w-full justify-between group">
                        <div class="w-full md:w-[45%] md:text-right md:pr-8 mb-4 md:mb-0 pl-16 md:pl-0">
                            <div class="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm group-hover:border-[#D9873E]/50 group-hover:shadow-lg transition-all duration-300">
                                <span class="text-[#D9873E] text-sm font-bold uppercase tracking-widest mb-1 block">Step 03</span>
                                <h4 class="font-bold text-primary-dark mb-2 text-lg">Custom Fabrication</h4>
                                <p class="text-sm text-slate-500 leading-relaxed">Manufacturing your bespoke systems in our state-of-the-art facility using premium materials.</p>
                            </div>
                        </div>
                        <div class="absolute md:relative left-0 md:left-auto w-12 h-12 md:w-[10%] flex justify-center shrink-0">
                            <div class="w-12 h-12 rounded-full border-4 border-white bg-slate-800 text-white flex items-center justify-center shadow-xl relative z-10 group-hover:scale-110 group-hover:bg-[#D9873E] transition-all duration-300">
                                <i class="fas fa-hammer text-lg"></i>
                            </div>
                        </div>
                        <div class="hidden md:block w-[45%]"></div>
                    </div>

                    <!-- Step 4 -->
                    <div class="flex flex-col md:flex-row items-start md:items-center w-full justify-between group">
                        <div class="hidden md:block w-[45%]"></div>
                        <div class="absolute md:relative left-0 md:left-auto w-12 h-12 md:w-[10%] flex justify-center shrink-0">
                            <div class="w-12 h-12 rounded-full border-4 border-white bg-[#D9873E] text-white flex items-center justify-center shadow-xl relative z-10 group-hover:scale-110 transition-transform duration-300">
                                <i class="fas fa-check-circle text-lg"></i>
                            </div>
                        </div>
                        <div class="w-full md:w-[45%] md:pl-8 mb-4 md:mb-0 pl-16 md:pl-0">
                            <div class="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm group-hover:border-[#D9873E]/50 group-hover:shadow-lg transition-all duration-300">
                                <span class="text-[#D9873E] text-sm font-bold uppercase tracking-widest mb-1 block">Step 04</span>
                                <h4 class="font-bold text-primary-dark mb-2 text-lg">Expert Installation</h4>
                                <p class="text-sm text-slate-500 leading-relaxed">Professional installation by our seasoned team, ensuring absolute perfection and cleanliness.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>`;

files.forEach(file => {
    if (fs.existsSync(file)) {
        let content = fs.readFileSync(file, 'utf8');
        
        // Find the start of the title
        const startMarker = '<h3 class="text-3xl font-bold text-primary-dark mb-10">Our Proven Process</h3>';
        const startIdx = content.indexOf(startMarker);
        
        if (startIdx !== -1) {
            // Find the end by looking for the next major section, like "Project Showcase"
            const endMarker = '<!-- Dark SEO Content Block -->';
            let endIdx = content.indexOf(endMarker, startIdx);
            
            if (endIdx === -1) {
                // Try Project Showcase if SEO block wasn't found
                endIdx = content.indexOf('<h3 class="text-3xl font-bold text-primary-dark mb-8">Project Showcase</h3>', startIdx);
            }
            
            if (endIdx !== -1) {
                // The structure is inside a <div class="relative z-10"> inside <div class="bg-off-cool...
                // So we actually want to replace just the contents of that z-10 div.
                // It ends before the endMarker. 
                // Let's replace from startMarker to the closing </div></div></div> before the endMarker.
                
                // Let's just find the exact block.
                const originalBlock = content.substring(startIdx, endIdx);
                
                // Since original block contains closing tags for the container, let's keep the container intact.
                // The container closes with: </div></div></div>
                // Let's just do a regex replace or manual slice.
                const blockToReplace = originalBlock.substring(0, originalBlock.lastIndexOf('</div></div></div>'));
                
                const finalContent = content.substring(0, startIdx) + newProcessHtml + '\n' + content.substring(startIdx + blockToReplace.length);
                fs.writeFileSync(file, finalContent);
                console.log('Upgraded process section in ' + file);
            }
        }
    }
});
