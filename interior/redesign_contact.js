const fs = require('fs');

let content = fs.readFileSync('contact.html', 'utf8');

const newContactContent = `
        <!-- Contact Information Cards (Overlapping Hero) -->
        <section class="relative z-20 w-[90%] max-w-6xl mx-auto px-4 md:px-8 -mt-24 mb-16">
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                <!-- Address Card -->
                <div class="bg-white p-8 rounded-2xl shadow-xl border border-slate-100 flex flex-col items-center text-center group hover:-translate-y-2 transition-all duration-300">
                    <div class="w-16 h-16 rounded-full bg-slate-50 flex items-center justify-center text-[#D9873E] text-2xl mb-6 group-hover:scale-110 group-hover:bg-[#D9873E] group-hover:text-white transition-all duration-300">
                        <i class="fas fa-map-marker-alt"></i>
                    </div>
                    <h3 class="text-xl font-bold text-primary-dark mb-3">Dubai Studio</h3>
                    <p class="text-slate-500 leading-relaxed text-sm">Boulevard Plaza Tower 1<br>Downtown Dubai, UAE<br>P.O. Box 123456</p>
                </div>
                
                <!-- Contact Card -->
                <div class="bg-white p-8 rounded-2xl shadow-xl border border-slate-100 flex flex-col items-center text-center group hover:-translate-y-2 transition-all duration-300">
                    <div class="w-16 h-16 rounded-full bg-slate-50 flex items-center justify-center text-[#D9873E] text-2xl mb-6 group-hover:scale-110 group-hover:bg-[#D9873E] group-hover:text-white transition-all duration-300">
                        <i class="fas fa-phone-alt"></i>
                    </div>
                    <h3 class="text-xl font-bold text-primary-dark mb-3">Direct Contact</h3>
                    <p class="text-slate-500 leading-relaxed text-sm mb-2"><a href="tel:+97141234567" class="hover:text-[#D9873E] transition-colors">+971 4 123 4567</a></p>
                    <p class="text-slate-500 leading-relaxed text-sm"><a href="mailto:studio@int-architects.ae" class="hover:text-[#D9873E] transition-colors">studio@int-architects.ae</a></p>
                </div>

                <!-- Hours Card -->
                <div class="bg-white p-8 rounded-2xl shadow-xl border border-slate-100 flex flex-col items-center text-center group hover:-translate-y-2 transition-all duration-300">
                    <div class="w-16 h-16 rounded-full bg-slate-50 flex items-center justify-center text-[#D9873E] text-2xl mb-6 group-hover:scale-110 group-hover:bg-[#D9873E] group-hover:text-white transition-all duration-300">
                        <i class="fas fa-clock"></i>
                    </div>
                    <h3 class="text-xl font-bold text-primary-dark mb-3">Business Hours</h3>
                    <p class="text-slate-500 leading-relaxed text-sm mb-2">Mon - Fri: 9:00 AM - 6:00 PM</p>
                    <p class="text-slate-500 leading-relaxed text-sm">Saturday & Sunday: Closed</p>
                </div>
            </div>
        </section>

        <!-- Form Section -->
        <section class="w-[90%] max-w-4xl mx-auto px-4 md:px-8 py-12 mb-20">
            <div class="text-center mb-12">
                <span class="text-[#D9873E] text-sm font-bold uppercase tracking-widest mb-4 block">Let's Discuss Your Project</span>
                <h2 class="text-3xl md:text-4xl font-bold text-primary-dark mb-4 tracking-tight">Send Us a Message</h2>
                <p class="text-slate-500 max-w-2xl mx-auto">Our senior architects and design consultants aim to respond to all inquiries within 24 hours.</p>
            </div>
            
            <div class="bg-white p-8 md:p-12 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-slate-50">
                <form class="space-y-8">
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div class="relative">
                            <input type="text" id="fname" placeholder=" " class="block w-full px-0 py-3 bg-transparent border-0 border-b-2 border-slate-200 appearance-none focus:outline-none focus:ring-0 focus:border-[#D9873E] peer text-primary-dark">
                            <label for="fname" class="absolute text-sm text-slate-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#D9873E] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">First Name</label>
                        </div>
                        <div class="relative">
                            <input type="text" id="lname" placeholder=" " class="block w-full px-0 py-3 bg-transparent border-0 border-b-2 border-slate-200 appearance-none focus:outline-none focus:ring-0 focus:border-[#D9873E] peer text-primary-dark">
                            <label for="lname" class="absolute text-sm text-slate-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#D9873E] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Last Name</label>
                        </div>
                    </div>
                    
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div class="relative">
                            <input type="email" id="email" placeholder=" " class="block w-full px-0 py-3 bg-transparent border-0 border-b-2 border-slate-200 appearance-none focus:outline-none focus:ring-0 focus:border-[#D9873E] peer text-primary-dark">
                            <label for="email" class="absolute text-sm text-slate-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#D9873E] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email Address</label>
                        </div>
                        <div class="relative">
                            <select id="project" class="block w-full px-0 py-3 bg-transparent border-0 border-b-2 border-slate-200 appearance-none focus:outline-none focus:ring-0 focus:border-[#D9873E] text-slate-500 cursor-pointer">
                                <option value="" disabled selected>Select Project Type</option>
                                <option value="villa">Residential Villa</option>
                                <option value="penthouse">Luxury Penthouse</option>
                                <option value="commercial">Commercial Space</option>
                                <option value="other">Other Inquiry</option>
                            </select>
                        </div>
                    </div>
                    
                    <div class="relative">
                        <textarea id="message" rows="5" placeholder=" " class="block w-full px-0 py-3 bg-transparent border-0 border-b-2 border-slate-200 appearance-none focus:outline-none focus:ring-0 focus:border-[#D9873E] peer text-primary-dark resize-none"></textarea>
                        <label for="message" class="absolute text-sm text-slate-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#D9873E] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Tell us about your requirements...</label>
                    </div>
                    
                    <div class="pt-6 text-center">
                        <button type="submit" class="bg-primary-dark hover:bg-black text-white px-10 py-4 rounded-full font-bold uppercase tracking-wider text-sm transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-1">
                            Submit Inquiry <i class="fas fa-arrow-right ml-2"></i>
                        </button>
                    </div>
                </form>
            </div>
        </section>

        <!-- Full Width Google Map -->
        <section class="w-full h-[500px] bg-slate-200">
            <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1m3!1d3610.1785448373854!2d55.27181057608226!3d25.197201831698716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43348a67e24b%3A0xff45e502e1ceb7e2!2sBurj%20Khalifa!5e0!3m2!1sen!2sae!4v1700000000000!5m2!1sen!2sae" 
                width="100%" 
                height="100%" 
                style="border:0;" 
                allowfullscreen="" 
                loading="lazy" 
                referrerpolicy="no-referrer-when-downgrade">
            </iframe>
        </section>`;

// Replace the old contact section with the new structure
const startIdx = content.indexOf('<!-- Contact Section -->');
if (startIdx !== -1) {
    const endIdx = content.indexOf('</main>', startIdx);
    content = content.substring(0, startIdx) + newContactContent + '\n    ' + content.substring(endIdx);
    fs.writeFileSync('contact.html', content);
    console.log('Successfully redesigned contact.html');
}
