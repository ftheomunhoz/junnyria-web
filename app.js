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

console.log("process.env.NODE_ENV", process.env.NODE_ENV);

app.use(function (req, res, next) {
    if (process.env.NODE_ENV === 'production' && req.headers['x-forwarded-proto'] !== 'https') {
        return res.redirect('https://' + req.headers.host + req.url);
    } else {
        return next();
    }
});

app.set('view engine', 'html');
app.set('views', path.join(rootPath, 'app'));

app.listen(port, undefined, function () {
    console.log('Listening on port %d', port);
});