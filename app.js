/**
 *
 * @module
 * @author ftheomunhoz
 */

var httpServer = require('http-server');

var server = httpServer.createServer({
    root: 'app'
});

var port = process.env.PORT || '9001';
var host = '127.0.0.1';

server.listen(port, host, function () {
    console.log('Server started');
});