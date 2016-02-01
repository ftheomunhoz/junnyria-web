/**
 *
 * @module
 * @author ftheomunhoz
 */

var path = require('path');
var express = require('express');

var port = process.env.PORT || '9001';
var rootPath = path.normalize(__dirname);

var app = express();

var staticPath = path.resolve(path.join(__dirname, 'app'));
app.use(express.static(staticPath));

app.use(function (req, res, next) {
    if (process.env.NODE_ENV === 'production' && req.headers['x-forwarded-proto'] !== 'https') {
        console.log('@@@@@@@@@@@@@@@@@@@@', "OK", 'https://' + req.headers.host + req.url);
        return res.redirect('https://' + req.headers.host + req.url);
    } else {
        console.log('@@@@@@@@@@@@@@@@@@@@@@', process.env.NODE_ENV, req.headers['x-forwarded-proto']);

        return next();
    }
});

app.set('view engine', 'html');
app.set('views', path.join(rootPath, 'app'));

app.listen(port, undefined, function () {
    console.log('Listening on port %d', port);
});