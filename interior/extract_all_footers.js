const fs = require('fs');

const logPath = 'C:/Users/MSI 1/.gemini/antigravity/brain/43a6785d-90af-4564-846f-d7f48c5a2982/.system_generated/logs/transcript.jsonl';
const text = fs.readFileSync(logPath, 'utf8');

// Match any <footer ...> ... </footer> block in the whole file
const matches = [...text.matchAll(/<footer[\s\S]*?<\/footer>/gi)];

let uniqueFooters = [];
for (let m of matches) {
    let footer = m[0].replace(/\\n/g, '\n').replace(/\\"/g, '"');
    if (!uniqueFooters.includes(footer)) {
        uniqueFooters.push(footer);
    }
}

fs.writeFileSync('all_footers.txt', uniqueFooters.join('\n\n=================================\n\n'));
console.log(`Found ${uniqueFooters.length} unique footers`);
