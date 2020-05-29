const fs = require('fs');
const buffer = fs.readFileSync('fda1.txt', 'utf8');
const src = buffer.toString();
const lines = src.split('\n').filter(line => !!line);
fs.writeFileSync('fda2.txt', lines.join('\n'));