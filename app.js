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
app.set('view engine', 'html');
app.set('views', path.join(rootPath, 'app'));

app.listen(port, function() {
    console.log('Listening on port %d', port);
});