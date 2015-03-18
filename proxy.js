var config = require('./config').proxy;
var httpProxy = require('http-proxy');
var proxy = httpProxy.createProxyServer(config);
var pathToRegexp = require('path-to-regexp');

module.exports = function(options) {
  var regex = pathToRegexp(options.path + '/:path+');
  return function(req, res, next) {
    m = req.url.match(regex);
    if (m) {
      req.url = '/' + m[1];
      proxy.web(req, res, { target: options.target });
    } else {
      next();
    }
  };
};
