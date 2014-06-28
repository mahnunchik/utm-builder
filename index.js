/* jshint sub: true */

var url = require('url');

module.exports = function(link, source, medium, campaign, content, term) {
  if (!link) {
    throw new Error('link can not be empty');
  }
  if (!source) {
   throw new Error('source can not be empty');
  }
  if (!medium) {
   throw new Error('medium can not be empty');
  }
  if (!campaign) {
   throw new Error('campaign can not be empty');
  }

  var parsedLink = url.parse(link, true);

  parsedLink.query = parsedLink.query || {};

  parsedLink.query['utm_source'] = source;
  parsedLink.query['utm_medium'] = medium;
  parsedLink.query['utm_campaign'] = campaign;

  if (content != null) {
    parsedLink.query['utm_content'] = content;
  }
  if (term != null) {
    parsedLink.query['utm_term'] = term;
  }

  // fix strange behavior of url.format

  delete parsedLink.href;
  delete parsedLink.path;
  delete parsedLink.search;

  return url.format(parsedLink);
};
