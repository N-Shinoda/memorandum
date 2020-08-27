const fs = require('fs');
const http = require('http');
const { userInfo } = require('os');

http.createServer((req, res) => {

    switch (req.url) {
        case '/':
            fs.readFile('./index.html', (err, data) => {
                res.writeHead(200, {'Content-Type': 'text/html'});
                res.write(data);
                res.end();
            });
            break;
        case '/css/style.css':
            fs.readFile('./css/style.css', (err, data) => {
                res.writeHead(200, {'Content-Type': 'text/css'});
                res.write(data);
                res.end();
            });
            break;
    }

}).listen(3000); // サーバをポート 3000 で起動する

console.log('http://192.168.33.10:3000');