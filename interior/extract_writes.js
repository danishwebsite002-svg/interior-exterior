const fs = require('fs');

const logPath = 'C:/Users/MSI 1/.gemini/antigravity/brain/43a6785d-90af-4564-846f-d7f48c5a2982/.system_generated/logs/transcript.jsonl';
const lines = fs.readFileSync(logPath, 'utf8').split('\n');

for (let line of lines) {
    if (!line.trim()) continue;
    try {
        const data = JSON.parse(line);
        if (data.tool_calls) {
            for (let call of data.tool_calls) {
                if (call.name === 'write_to_file' || call.name === 'multi_replace_file_content' || call.name === 'replace_file_content') {
                    if (call.args && call.args.TargetFile && call.args.TargetFile.includes('index.html')) {
                        if (call.args.CodeContent) {
                            fs.appendFileSync('index_writes.txt', '\n--- WRITE TO FILE ---\n' + call.args.CodeContent.substring(call.args.CodeContent.length - 2000));
                        }
                    }
                }
            }
        }
    } catch(e) {}
}
console.log('Done');
