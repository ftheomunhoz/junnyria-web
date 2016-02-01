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

app.use(function (req, res, next) {
    if (!req.secure && process.env.NODE_ENV === 'production' && req.headers['x-forwarded-proto'] !== 'https') {
        return res.redirect('https://' + req.headers.host + req.url);
    }

    next();
});

app.use(express.static(path.resolve(path.join(__dirname, 'app'))));

app.set('view engine', 'html');
app.set('views', path.join(rootPath, 'app'));

app.listen(port, undefined, function () {
    console.log('Listening on port %d', port);
});