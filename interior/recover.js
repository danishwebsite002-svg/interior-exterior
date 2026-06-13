const fs = require('fs');

const logPath = 'C:/Users/MSI 1/.gemini/antigravity/brain/43a6785d-90af-4564-846f-d7f48c5a2982/.system_generated/logs/transcript.jsonl';
const lines = fs.readFileSync(logPath, 'utf8').split('\n');

for (let line of lines) {
    if (!line.trim()) continue;
    try {
        const data = JSON.parse(line);
        if (data.type === 'VIEW_FILE' && data.content && data.content.includes('index.html')) {
            console.log('Found VIEW_FILE for index.html length:', data.content.length);
            const match = data.content.match(/<footer[\s\S]*?<\/footer>/i);
            if (match) {
                // Strip line numbers
                const cleanFooter = match[0].replace(/^\d+:\s/gm, '');
                fs.writeFileSync('recovered_footer.html', cleanFooter);
                console.log('Wrote to recovered_footer.html');
                return;
            }
        }
    } catch(e) {
        console.error(e);
    }
}
console.log('No footer found');
