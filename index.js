const { readFileSync } = require('fs');
const https = require('https');
const v1 = require('./lib/handlers/api/v1');

const server = https.createServer({
    key: readFileSync('./ca-key.pem'),
    cert: readFileSync('./ca-cert.pem')
});

server.on('request', (req, res) => {
    let requrl = new URL(req.url, `https://${req.headers.host}`)
    switch (requrl.pathname) {
        case '/api/v1':
            v1.apicall(req, res, requrl.searchParams);
            break;
        default: {
            res.writeHead(404)
            res.write(readFileSync('./page/errors/404.html'));
            res.end();
            break;
        }
    }
});

server.on('listening', () => {
    console.log(`Listening on 443`);
})

server.listen(443);