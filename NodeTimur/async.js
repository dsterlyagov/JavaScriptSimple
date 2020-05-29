const fs = require('fs');

fs.readFile('fda1.txt', 'utf8',(err, buffer) =>{
    if(err){
        console.log(err);
        process.exit(0);
    }
    console.log('File size: '+buffer.length);
    const src = buffer.toString();
    const lines = src.split('\n').filter(line => !!line);
    const content = lines.join('\n');
    fs.writeFile('fda3.txt',content, err =>{
        if(err) console.log(err);
        console.log('New file size: '+content.length);
    })
})

console.log('Read file async ');