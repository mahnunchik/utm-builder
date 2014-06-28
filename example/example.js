
var builder = require('../');

var link = 'http://google.com/';
var utmLink = builder(link, 'my source', 'my medium', 'my campaign');

console.log(utmLink);
