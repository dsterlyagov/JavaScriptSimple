const readLine = require(`readline`);

const rl = readLine.createInterface({
    input: process.stdin,
    output:process.stdout,
    prompt: `OHAI>`
});
rl.prompt();
rl.on(`line`, (line)=>{
    line = line.trim();
    switch (line) {
          case `hello`:
              console.log(`world!`);
              break;
        case `bye`:

            rl.close();
            return;
        default:
            console.log(`Say what? I might have heard '${line}'`);
            break;
    }
    rl.prompt();
}).on(`close`, ()=>{
    console.log(`Have a great day!`)
})

    .on(`error`, (err)=>{
    console.log(err);
    process.exit(1);
});