const http = require('http');
const URL = require('url').URL;

const server = http.createServer((request, response) => {
    response.writeHead(200, {"Content-Type": "text/plain"});
    try {
        const incomingUrl = new URL(request.url, `http://${request.headers.host}`);
        let name = incomingUrl.searchParams.get('name');
        let message = `Hello ${name ? name : 'World'}!`;
        message = message.replace(/\W/g, '');
        console.log(message);
        response.end(message);
    } catch (error) {
        console.error(error);
        response.end('There was an error');
    }
});

const port = process.env.PORT || 1337;
server.listen(port);

console.log("Server running at http://localhost:%d", port);
