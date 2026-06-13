const fs = require('fs');

let content = fs.readFileSync('contact.html', 'utf8');

const newFormAndMapContent = `
        <!-- Form and Map Section -->
        <section class="w-[90%] max-w-7xl mx-auto px-4 md:px-8 py-12 mb-24">
            <div class="text-center mb-16">
                <span class="text-[#D9873E] text-sm font-bold uppercase tracking-widest mb-4 block">Let's Discuss Your Project</span>
                <h2 class="text-4xl md:text-5xl font-bold text-primary-dark mb-4 tracking-tight">Send Us a Message</h2>
                <p class="text-slate-500 max-w-2xl mx-auto text-lg">Our senior architects and design consultants aim to respond to all inquiries within 24 hours.</p>
            </div>
            
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-0 overflow-hidden rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.08)] bg-white border border-slate-100">
                
                <!-- Left Side: Form -->
                <div class="p-10 md:p-14">
                    <h3 class="text-2xl font-bold text-primary-dark mb-8">Inquiry Form</h3>
                    <form class="space-y-8">
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div class="relative z-0">
                                <input type="text" id="fname" placeholder=" " class="block w-full px-0 py-3 bg-transparent border-0 border-b-2 border-slate-200 appearance-none focus:outline-none focus:ring-0 focus:border-[#D9873E] peer text-primary-dark text-base">
                                <label for="fname" class="absolute text-base text-slate-400 duration-300 transform -translate-y-6 scale-75 top-3 z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#D9873E] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 pointer-events-none">First Name</label>
                            </div>
                            <div class="relative z-0">
                                <input type="text" id="lname" placeholder=" " class="block w-full px-0 py-3 bg-transparent border-0 border-b-2 border-slate-200 appearance-none focus:outline-none focus:ring-0 focus:border-[#D9873E] peer text-primary-dark text-base">
                                <label for="lname" class="absolute text-base text-slate-400 duration-300 transform -translate-y-6 scale-75 top-3 z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#D9873E] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 pointer-events-none">Last Name</label>
                            </div>
                        </div>
                        
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div class="relative z-0">
                                <input type="email" id="email" placeholder=" " class="block w-full px-0 py-3 bg-transparent border-0 border-b-2 border-slate-200 appearance-none focus:outline-none focus:ring-0 focus:border-[#D9873E] peer text-primary-dark text-base">
                                <label for="email" class="absolute text-base text-slate-400 duration-300 transform -translate-y-6 scale-75 top-3 z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#D9873E] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 pointer-events-none">Email Address</label>
                            </div>
                            <div class="relative z-0">
                                <select id="project" class="block w-full px-0 py-3 bg-transparent border-0 border-b-2 border-slate-200 appearance-none focus:outline-none focus:ring-0 focus:border-[#D9873E] text-slate-500 cursor-pointer text-base">
                                    <option value="" disabled selected>Select Project Type</option>
                                    <option value="villa">Residential Villa</option>
                                    <option value="penthouse">Luxury Penthouse</option>
                                    <option value="commercial">Commercial Space</option>
                                    <option value="other">Other Inquiry</option>
                                </select>
                            </div>
                        </div>
                        
                        <div class="relative z-0">
                            <textarea id="message" rows="4" placeholder=" " class="block w-full px-0 py-3 bg-transparent border-0 border-b-2 border-slate-200 appearance-none focus:outline-none focus:ring-0 focus:border-[#D9873E] peer text-primary-dark resize-none text-base"></textarea>
                            <label for="message" class="absolute text-base text-slate-400 duration-300 transform -translate-y-6 scale-75 top-3 z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#D9873E] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 pointer-events-none">Tell us about your requirements...</label>
                        </div>
                        
                        <div class="pt-4">
                            <button type="submit" class="bg-primary-dark hover:bg-black text-white px-10 py-4 rounded-full font-bold uppercase tracking-wider text-sm transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-1 w-full md:w-auto">
                                Submit Inquiry <i class="fas fa-arrow-right ml-2"></i>
                            </button>
                        </div>
                    </form>
                </div>
                
                <!-- Right Side: Google Map -->
                <div class="bg-slate-200 w-full h-[400px] lg:h-full min-h-[400px]">
                    <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1m3!1d3610.1785448373854!2d55.27181057608226!3d25.197201831698716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43348a67e24b%3A0xff45e502e1ceb7e2!2sBurj%20Khalifa!5e0!3m2!1sen!2sae!4v1700000000000!5m2!1sen!2sae" 
                        width="100%" 
                        height="100%" 
                        style="border:0;" 
                        allowfullscreen="" 
                        loading="lazy" 
                        referrerpolicy="no-referrer-when-downgrade">
                    </iframe>
                </div>

            </div>
        </section>`;

// Replace from "<!-- Form Section -->" to the end of "<!-- Full Width Google Map -->"
const startFormIdx = content.indexOf('<!-- Form Section -->');
const endMapIdx = content.indexOf('</main>', startFormIdx);

if (startFormIdx !== -1 && endMapIdx !== -1) {
    content = content.substring(0, startFormIdx) + newFormAndMapContent + '\n    ' + content.substring(endMapIdx);
    fs.writeFileSync('contact.html', content);
    console.log('Successfully updated layout and fixed labels in contact.html');
} else {
    console.log('Could not find the sections to replace.');
}
