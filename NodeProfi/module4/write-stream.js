const fs = require(`fs`);
const stream = fs.createWriteStream(`example.txt`);
stream.on(`error`, (err) => console.error(err.message));
stream.write(`hello, `, `utf-8`);
stream.end(`world!` , `utf-8`);
//stream.write(`Hi`);