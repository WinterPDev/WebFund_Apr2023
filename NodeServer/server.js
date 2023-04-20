const http = require('http');
const url = require('url');
const fs = require('fs');

http.createServer((req, res) => {
    fs.readFile('index.html', (err, data) => {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        // let q = url.parse(req.url, true).query;
        // let txt = q.year + " " + q.month;
        res.write(data);
        res.end();
    });
}).listen(8000);

console.log('Server Online! Listening on Port 8000');