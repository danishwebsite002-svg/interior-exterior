const fs = require('fs');

const cssToAdd = `        /* Background Shapes */
        .bg-shape-1 {
            position: absolute;
            top: -10%;
            right: -5%;
            width: 400px;
            height: 400px;
            background-color: #D9873E;
            opacity: 0.05;
            border-radius: 40% 60% 70% 30% / 40% 50% 60% 50%;
            z-index: 0;
            animation: morph 8s ease-in-out infinite;
            pointer-events: none;
        }

        .bg-shape-2 {
            position: absolute;
            bottom: 10%;
            left: -10%;
            width: 500px;
            height: 500px;
            background-color: #2E3133;
            opacity: 0.03;
            border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
            z-index: 0;
            animation: morph 12s ease-in-out infinite reverse;
            pointer-events: none;
        }

        .bg-shape-3 {
            position: absolute;
            top: 20%;
            left: 50%;
            transform: translateX(-50%);
            width: 800px;
            height: 800px;
            background-image: radial-gradient(#D9873E 1px, transparent 1px);
            background-size: 40px 40px;
            opacity: 0.15;
            z-index: 0;
            border-radius: 50%;
            mask-image: radial-gradient(circle, black 40%, transparent 70%);
            -webkit-mask-image: radial-gradient(circle, black 40%, transparent 70%);
            pointer-events: none;
        }

        @keyframes morph {
            0%, 100% { border-radius: 40% 60% 70% 30% / 40% 50% 60% 50%; }
            34% { border-radius: 70% 30% 50% 50% / 30% 30% 70% 70%; }
            67% { border-radius: 100% 60% 60% 100% / 100% 100% 60% 60%; }
        }

        /* Off colors */
        .bg-off-warm { background-color: #FCFAF8; }
        .bg-off-cool { background-color: #F8F9FA; }
    </style>`;

const files = [
    'doors-and-windows.html',
    'sliding-folding-doors.html',
    'sliding-doors.html',
    'curtain-walls.html',
    'skylight.html',
    'substation-louvers.html',
    'contact.html',
    'about.html',
    'gallery.html',
    'blog.html'
];

for (const f of files) {
    if (fs.existsSync(f)) {
        let content = fs.readFileSync(f, 'utf8');
        
        if (!content.includes('bg-shape-1')) {
            content = content.replace('    </style>', cssToAdd);
            
            // For the 6 inner service pages
            if (content.includes('<section class="max-w-7xl mx-auto px-4 md:px-8 py-20">')) {
                content = content.replace(
                    '<section class="max-w-7xl mx-auto px-4 md:px-8 py-20">',
                    '<section class="relative max-w-7xl mx-auto px-4 md:px-8 py-20 overflow-hidden">\n            <div class="bg-shape-1"></div>\n            <div class="bg-shape-2"></div>\n            <div class="relative z-10">'
                );
                
                content = content.replace(
                    '                </div>\n            </div>\n        </section>',
                    '                </div>\n            </div>\n            </div>\n        </section>'
                );
            }
            
            fs.writeFileSync(f, content);
            console.log(`Updated ${f}`);
        }
    }
}
