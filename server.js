require('colors');
var config = require('./config');
var http = require('http');
var Server = require('node-static').Server;

var file = new Server(config.dir);

var statusColor = function(statusCode) {
  statusCode = statusCode + '';
  var color = 'green';

  if (statusCode >= 500) color = 'red';
  else if (statusCode >= 400) color = 'yellow';
  else if (statusCode >= 300) color = 'cyan';
  return statusCode[color];
};

var handler = function(req, res) {
  var startTime = new Date;
  var log = function() {
    console.log(statusColor(res.statusCode), (new Date - startTime) + 'ms', req.url); 
  };
  file.serve(req, res);
  res.once('finish', log);
};

http.createServer(handler).listen(config.port, function() {
  console.log('serving "' + config.dir + '" at http://' + '127.0.0.1:' + config.port);
});
