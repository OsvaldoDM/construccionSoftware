const filesystem = require('fs');
//filesystem.writeFileSync('hola.txt','Hola desde node');+

const http = require("http");

const server = http.createServer((req, res)=>{
        console.log(req.url);
        res.setHeader('Content-Type', 'text/html');
        res.write("");
        res.end();
});

server.listen(3000);