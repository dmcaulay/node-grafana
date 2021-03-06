var connect = require('connect');
var http = require('http');

var config = require('./config');
var logger = require('./logger');
var proxy = require('./proxy');
var file = require('./file');

var app = connect();

app.use(logger);
app.use(proxy(config.graphite));
app.use(proxy(config.elasticsearch));
app.use(file(config.dir));

http.createServer(app).listen(config.port, function() {
  console.log('listing on port', config.port);
});
