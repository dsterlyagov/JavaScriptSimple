const fs = require('fs');
const zlib = require('zlib');

const rs = fs.createReadStream('copy.txt');
const ws = fs.createWriteStream('copy.gz');
const gs = zlib.createGzip();

rs.pipe(gs).pipe(ws);

rs.on('end', ()=>{
    console.log('Done');
})