const fs = require('fs');
const path = require('path');

const directory = './';

const newFooter = `    <!-- Main Footer -->
    <footer class="bg-slate-900 text-slate-300 py-16 mt-20 border-t border-slate-800">
        <div class="max-w-7xl mx-auto px-4 md:px-8">
            <div class="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                <div class="col-span-1 md:col-span-1">
                    <h2 class="text-2xl font-bold text-white mb-6">Exterior<span class="text-accent">Interior</span></h2>
                    <p class="text-slate-400 text-sm leading-relaxed mb-6">
                        Premium exterior and interior design solutions. We bring your vision to life with precision, elegance, and uncompromised quality.
                    </p>
                    <div class="flex space-x-4">
                        <a href="#" class="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-accent hover:text-white transition-all"><i class="fab fa-facebook-f"></i></a>
                        <a href="#" class="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-accent hover:text-white transition-all"><i class="fab fa-instagram"></i></a>
                        <a href="#" class="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-accent hover:text-white transition-all"><i class="fab fa-twitter"></i></a>
                        <a href="#" class="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-accent hover:text-white transition-all"><i class="fab fa-linkedin-in"></i></a>
                    </div>
                </div>
                
                <div>
                    <h3 class="text-white font-bold mb-6 text-lg">Quick Links</h3>
                    <ul class="space-y-3 text-sm">
                        <li><a href="index.html" class="hover:text-accent transition-colors">Home</a></li>
                        <li><a href="about.html" class="hover:text-accent transition-colors">About Us</a></li>
                        <li><a href="services.html" class="hover:text-accent transition-colors">Our Services</a></li>
                        <li><a href="gallery.html" class="hover:text-accent transition-colors">Portfolios</a></li>
                        <li><a href="contact.html" class="hover:text-accent transition-colors">Contact Us</a></li>
                    </ul>
                </div>

                <div>
                    <h3 class="text-white font-bold mb-6 text-lg">Our Services</h3>
                    <ul class="space-y-3 text-sm">
                        <li><a href="doors-and-windows.html" class="hover:text-accent transition-colors">Doors & Windows</a></li>
                        <li><a href="sliding-folding-doors.html" class="hover:text-accent transition-colors">Sliding Folding Doors</a></li>
                        <li><a href="sliding-doors.html" class="hover:text-accent transition-colors">Sliding Doors</a></li>
                        <li><a href="curtain-walls.html" class="hover:text-accent transition-colors">Curtain Walls</a></li>
                        <li><a href="skylight.html" class="hover:text-accent transition-colors">Skylights</a></li>
                    </ul>
                </div>

                <div>
                    <h3 class="text-white font-bold mb-6 text-lg">Contact Info</h3>
                    <ul class="space-y-4 text-sm">
                        <li class="flex items-start">
                            <i class="fas fa-map-marker-alt mt-1 mr-3 text-accent"></i>
                            <span>123 Design Boulevard,<br>Creative District, NY 10012</span>
                        </li>
                        <li class="flex items-center">
                            <i class="fas fa-phone-alt mr-3 text-accent"></i>
                            <span>+1 (555) 123-4567</span>
                        </li>
                        <li class="flex items-center">
                            <i class="fas fa-envelope mr-3 text-accent"></i>
                            <span>info@exteriorinterior.com</span>
                        </li>
                    </ul>
                </div>
            </div>
            
            <div class="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500">
                <p>&copy; 2026 ExteriorInterior. All rights reserved.</p>
                <div class="space-x-4 mt-4 md:mt-0">
                    <a href="#" class="hover:text-white transition-colors">Privacy Policy</a>
                    <a href="#" class="hover:text-white transition-colors">Terms of Service</a>
                </div>
            </div>
        </div>
    </footer>`;

fs.readdir(directory, (err, files) => {
    if (err) throw err;
    files.forEach(file => {
        if (path.extname(file) === '.html') {
            let content = fs.readFileSync(file, 'utf8');
            const existingFooterMatch = content.match(/<footer[\s\S]*?<\/footer>/);
            if (existingFooterMatch) {
                content = content.replace(existingFooterMatch[0], newFooter);
                fs.writeFileSync(file, content);
                console.log(`Restored homepage-style footer in ${file}`);
            }
        }
    });
});
