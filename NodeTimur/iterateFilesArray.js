const fs = require('fs');
const files = ['fda1.txt','fda2.txt','fda3.txt'];
const stats = new Array(files.length);
const count = files.length -1;

const printResult = () =>{
    console.dir({stats});
}

const addToStats = (file, i, err, stat) => {
    if(err){
        console.log(`File ${file} not found`);
    } else{
        stats[i] =stat;
    }
    if(i=== count)printResult();
};

const iterate = (file, i) => {
    console.dir({file, i});
    const cb = addToStats.bind(null, file, i);
    fs.lstat(file, cb);
};
files.forEach(iterate);