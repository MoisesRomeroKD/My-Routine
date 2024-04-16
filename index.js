const app = require('./app');
const http = require('http');
const { PAGE_URL } = require('./config');

const server = http.createServer(app);

server.listen(3003, () => {
    console.log('Running server');
    console.log(PAGE_URL);
});
