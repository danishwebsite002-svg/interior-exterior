const fs = require('fs');
const path = require('path');

const filePath = path.join('c:', 'Users', 'MSI 1', 'Downloads', 'ExteriorInterior', 'exterior', 'sliding-doors.html');
let content = fs.readFileSync(filePath, 'utf8');

const oldUrl = "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2000&q=80";
const newUrl = "https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

if (content.includes(oldUrl)) {
    content = content.replace(oldUrl, newUrl);
    fs.writeFileSync(filePath, content);
    console.log("Successfully injected the second Sliding Doors image.");
} else {
    console.log("Could not find the target image URL to replace.");
}
