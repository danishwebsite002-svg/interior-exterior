const fs = require('fs');
const path = require('path');

const exteriorDir = path.join('c:', 'Users', 'MSI 1', 'Downloads', 'ExteriorInterior', 'exterior');
const files = fs.readdirSync(exteriorDir).filter(f => f.endsWith('.html'));

const badIds = [
    '1518173946091-a8330452a5f7',
    '1497384401174-8b6a37fc1e2c',
    '1513328224021-9659bfa5f69a',
    '1600566753190-1732928043af',
    '1600607688969-ce516e872082',
    '1560945842-88fdfb2390a0',
    '1595843468924-a21235b377b2',
    '1540304380120-edbf0327f12a',
    '1565011333333-8c460cf61e1b',
    '1555529733-0e670560f0e1',
    '1600566752538-349f7d08ee7a'
];

const goodIds = [
    '1616486338812-3dadae4b4ace',
    '1584622650111-993a426fbf0a',
    '1600596542815-ffad4c1539a9',
    '1595515106969-1ce29566ff1c',
    '1600607687920-4e2a09cf159d',
    '1600210492486-724fe5c67fb0',
    '1618221195710-dd6b41faaea6',
    '1505691938895-1758d7feb511',
    '1486406146926-c627a92ad1ab',
    '1600607686527-6fb886090705',
    '1600585154340-be6161a56a0c',
    '1513694203232-719a280e022f',
    '1555041469-a586c61ea9bc',
    '1600566753190-17f0baa2a6c3',
    '1600121848594-d8644e57abab',
    '1507089947368-19c1da9775ae',
    '1600210491892-03d54c0aaf87'
];

let replacementCount = 0;

files.forEach(file => {
    const filePath = path.join(exteriorDir, file);
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    badIds.forEach(badId => {
        if (content.includes(badId)) {
            const regex = new RegExp(`images\\.unsplash\\.com\\/photo-${badId}`, 'g');
            content = content.replace(regex, () => {
                const goodId = goodIds[replacementCount % goodIds.length];
                replacementCount++;
                return `images.unsplash.com/photo-${goodId}`;
            });
            modified = true;
        }
    });

    if (modified) {
        fs.writeFileSync(filePath, content);
        console.log(`Fixed broken images in ${file}`);
    }
});

console.log(`Total replacements made: ${replacementCount}`);
