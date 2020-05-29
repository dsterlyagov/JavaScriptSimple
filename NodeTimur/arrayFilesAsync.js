const fs = require('fs');
const files = ['fda1.txt','fda2.txt','fda3.txt'];
const stats = new Array(files.length);
const maxIndex = files.length -1;
const printResult = () =>{
    console.dir({stats});
}
files.forEach((file, i)=>{
    console.dir({file, i});
    fs.lstat(file, (err, stat) =>{
        if(err){
            console.log(`File ${file} not found`);
        } else{
            stats[i] = stat;
        }
        if(i===maxIndex) printResult();
    })
})