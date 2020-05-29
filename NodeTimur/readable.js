const fs = require('fs');
const rs = fs.createReadStream('fda2.txt', 'utf8');
rs.on('readable', ()=>{
    console.log('readable');
    const buffer = rs.read();
    if(buffer){
        console.log(buffer);
        console.log(buffer.toString());
    }
});

rs.on('data', chunk =>{
    console.log('data');
    console.log(chunk);
})