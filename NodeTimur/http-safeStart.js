'use strict';

const fs= require('fs');
const zlib = require('zlib');
const http = require('http');

const prepareCache = callback =>{
    let buffer = null;

    const rs = fs.createReadStream('stream.html');
    const gs = zlib.createGzip();

    const buffers = [];

    gs.on('data', buffer =>{
        buffers.push(buffer);
    });

    gs.once('end', () =>{
        buffer = Buffer.concat(buffers);
        if(callback){
            callback(null, buffer);
            callback = null;
        }

    });
    rs.on('error', error =>{
        callback(error);
        callback = null;
    });
    gs.on('error', error =>{
        callback(error);
        callback = null;
    });

    rs.pipe(gs);
};

const startServer = (err, buffer) =>{
    if(err) {
        throw err;
    }

    const server = http.createServer((req, res) =>{
        console.log(req.url);
        res.writeHead(200, {'Content-Encoding':'gzip'});
        res.end(buffer)
    });
    server.listen(8000);
};
prepareCache(startServer);