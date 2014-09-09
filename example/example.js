
var builder = require('../');

var link = 'http://google.com/foo?bar=123#myhash';
var utmLink = builder(link, 'my source', 'my medium', 'my campaign');

console.log(utmLink);
