const fs = require('fs');

const content = fs.readFileSync('legacy.css', 'utf8');
const lines = content.split('\n');

console.log('Checking for non-printable characters around line 2226:');

for (let i = 2220; i <= 2230 && i < lines.length; i++) {
    const line = lines[i-1];
    console.log(`\nLine ${i}:`);
    console.log(`Raw: "${line}"`);
    console.log(`Length: ${line.length}`);
    
    // Check for non-printable characters
    let hasNonPrintable = false;
    for (let j = 0; j < line.length; j++) {
        const char = line[j];
        const code = char.charCodeAt(0);
        if (code < 32 && code !== 9 && code !== 10 && code !== 13) { // Not tab, newline, or carriage return
            console.log(`  Non-printable char at position ${j}: code ${code}`);
            hasNonPrintable = true;
        }
    }
    
    if (!hasNonPrintable) {
        console.log('  No non-printable characters found');
    }
}
