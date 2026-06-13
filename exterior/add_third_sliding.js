const fs = require('fs');
const path = require('path');

const filePath = path.join('c:', 'Users', 'MSI 1', 'Downloads', 'ExteriorInterior', 'exterior', 'sliding-doors.html');
let content = fs.readFileSync(filePath, 'utf8');

const oldUrl = "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=2000&q=80";
const newUrl = "https://plus.unsplash.com/premium_photo-1661962732747-18c93b05292a?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

if (content.includes(oldUrl)) {
    content = content.replace(oldUrl, newUrl);
    fs.writeFileSync(filePath, content);
    console.log("Successfully injected the third Sliding Doors image.");
} else {
    console.log("Could not find the target image URL to replace.");
}
