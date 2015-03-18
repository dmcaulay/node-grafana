var Server = require('node-static').Server;

module.exports = function(dir) {
  var file = new Server(dir);
  return function(req, res, next) {
    file.serve(req, res);
  };
};
