require('colors');

var statusColor = function(statusCode) {
  statusCode = statusCode + '';
  var color = 'green';

  if (statusCode >= 500) color = 'red';
  else if (statusCode >= 400) color = 'yellow';
  else if (statusCode >= 300) color = 'cyan';
  return statusCode[color];
};

module.exports = function(req, res, next) {
  var startTime = new Date;
  var url = req.url;
  var log = function() {
    console.log(statusColor(res.statusCode), (new Date - startTime) + 'ms', url); 
  };
  res.once('finish', log);
  next();
};
