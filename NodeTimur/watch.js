const fs = require('fs');

fs.watch('./async.js', (event, file)=>{
    console.dir({event, file});
})