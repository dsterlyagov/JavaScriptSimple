const fs = require('fs');
const rs = fs.createReadStream('watch.js', 'utf8');
const ws = fs.createWriteStream('copy.js');
rs.on('data', buffer =>{
    console.log('Copy' + buffer.length+' chars');
    ws.write(buffer);
});

rs.on('end', ()=>{
    console.log('Done');
})