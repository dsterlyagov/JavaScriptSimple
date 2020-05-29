const fs = require('fs');
const rs = fs.createReadStream('fda2.txt', 'utf8');
const ws = fs.createWriteStream('copy.txt', 'utf8');

rs.pipe(ws);
rs.on('end', () =>{
    console.log('Done');
})