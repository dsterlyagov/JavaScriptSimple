'use strict';

const fs = require('fs');

const main = async () => {
    const stream = fs.createReadStream('fda1.txt', 'utf8');
    for await (const chunk of stream) {
        console.log(chunk);
    }

    const data = await fs.promises.readFile('fda1.txt', 'utf8');
    console.log(data);
};

main().catch(console.error);