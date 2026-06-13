const fs = require('fs');
const lines = fs.readFileSync('C:/Users/MSI 1/.gemini/antigravity/brain/43a6785d-90af-4564-846f-d7f48c5a2982/.system_generated/logs/transcript.jsonl', 'utf8').split('\n');

let footerStr = '';
for(let line of lines) {
    if (line.includes('"step_index":8,')) {
        try {
            const data = JSON.parse(line);
            const match = data.content.match(/<footer[\s\S]*?<\/footer>/i);
            if (match) {
                // Strip the line numbers (e.g. "600: ")
                footerStr = match[0].replace(/^\d+:\s/gm, '');
                console.log("FOUND FOOTER");
            }
        } catch (e) {
            console.error(e);
        }
    }
}

if (footerStr) {
    fs.writeFileSync('original_footer.html', footerStr);
} else {
    console.log("Not found.");
}
