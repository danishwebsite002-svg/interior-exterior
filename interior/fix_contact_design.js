const fs = require('fs');

let content = fs.readFileSync('contact.html', 'utf8');

const newFormAndMapContent = `
        <!-- Form and Map Section -->
        <section class="w-[90%] max-w-7xl mx-auto px-4 md:px-8 py-12 mb-24 relative z-20">
            <div class="text-center mb-16">
                <span class="text-[#D9873E] text-sm font-bold uppercase tracking-widest mb-4 block">Let's Discuss Your Project</span>
                <h2 class="text-4xl md:text-5xl font-bold text-primary-dark mb-4 tracking-tight">Send Us a Message</h2>
                <p class="text-slate-500 max-w-2xl mx-auto text-lg">Our senior architects and design consultants aim to respond to all inquiries within 24 hours.</p>
            </div>
            
            <div class="grid grid-cols-1 xl:grid-cols-5 gap-0 overflow-hidden rounded-3xl shadow-2xl shadow-slate-200/50 bg-white border border-slate-100">
                
                <!-- Left Side: Form (Takes up 3/5 of grid) -->
                <div class="p-8 md:p-14 xl:col-span-3 bg-white">
                    <div class="mb-8 border-b border-slate-100 pb-6">
                        <h3 class="text-3xl font-bold text-primary-dark mb-2">Inquiry Form</h3>
                        <p class="text-slate-500">Fill out the details below and we will be in touch shortly.</p>
                    </div>
                    
                    <form class="space-y-6">
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label class="block text-sm font-semibold text-primary-dark mb-2">First Name</label>
                                <input type="text" placeholder="e.g. John" class="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-[#D9873E] focus:bg-white focus:ring-1 focus:ring-[#D9873E] transition-all text-primary-dark placeholder-slate-400">
                            </div>
                            <div>
                                <label class="block text-sm font-semibold text-primary-dark mb-2">Last Name</label>
                                <input type="text" placeholder="e.g. Doe" class="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-[#D9873E] focus:bg-white focus:ring-1 focus:ring-[#D9873E] transition-all text-primary-dark placeholder-slate-400">
                            </div>
                        </div>
                        
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label class="block text-sm font-semibold text-primary-dark mb-2">Email Address</label>
                                <input type="email" placeholder="john@example.com" class="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-[#D9873E] focus:bg-white focus:ring-1 focus:ring-[#D9873E] transition-all text-primary-dark placeholder-slate-400">
                            </div>
                            <div>
                                <label class="block text-sm font-semibold text-primary-dark mb-2">Project Type</label>
                                <select class="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-[#D9873E] focus:bg-white focus:ring-1 focus:ring-[#D9873E] transition-all text-slate-500 cursor-pointer appearance-none">
                                    <option value="" disabled selected>Select an option</option>
                                    <option value="villa">Residential Villa</option>
                                    <option value="penthouse">Luxury Penthouse</option>
                                    <option value="commercial">Commercial Space</option>
                                    <option value="other">Other Inquiry</option>
                                </select>
                            </div>
                        </div>
                        
                        <div>
                            <label class="block text-sm font-semibold text-primary-dark mb-2">Project Details</label>
                            <textarea rows="5" placeholder="Tell us about your requirements, timeline, and vision..." class="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-[#D9873E] focus:bg-white focus:ring-1 focus:ring-[#D9873E] transition-all text-primary-dark placeholder-slate-400 resize-none"></textarea>
                        </div>
                        
                        <div class="pt-4">
                            <button type="submit" class="bg-primary-dark hover:bg-[#D9873E] text-white px-12 py-5 rounded-xl font-bold uppercase tracking-wider text-sm transition-all duration-400 w-full shadow-[0_10px_20px_rgba(46,49,51,0.15)] hover:shadow-[0_15px_30px_rgba(217,135,62,0.25)] hover:-translate-y-1 flex items-center justify-center group">
                                Submit Inquiry 
                                <span class="ml-3 w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                                    <i class="fas fa-arrow-right"></i>
                                </span>
                            </button>
                        </div>
                    </form>
                </div>
                
                <!-- Right Side: Google Map (Takes up 2/5 of grid) -->
                <div class="bg-slate-100 xl:col-span-2 relative min-h-[400px] xl:min-h-full">
                    <!-- Added an absolute overlay shadow to blend the edge between form and map -->
                    <div class="absolute inset-y-0 left-0 w-4 bg-gradient-to-r from-black/5 to-transparent z-10 hidden xl:block pointer-events-none"></div>
                    <iframe 
                        src="https://maps.google.com/maps?q=Downtown+Dubai,+UAE&t=&z=13&ie=UTF8&iwloc=&output=embed" 
                        width="100%" 
                        height="100%" 
                        style="border:0; position: absolute; top:0; left:0;" 
                        allowfullscreen="" 
                        loading="lazy" 
                        referrerpolicy="no-referrer-when-downgrade">
                    </iframe>
                </div>

            </div>
        </section>`;

// Target the section to replace
const startFormIdx = content.indexOf('<!-- Form and Map Section -->');
const endMapIdx = content.indexOf('</main>', startFormIdx);

if (startFormIdx !== -1 && endMapIdx !== -1) {
    content = content.substring(0, startFormIdx) + newFormAndMapContent + '\n    ' + content.substring(endMapIdx);
    fs.writeFileSync('contact.html', content);
    console.log('Successfully applied premium design to form and fixed map in contact.html');
} else {
    console.log('Could not find the section to replace.');
}
