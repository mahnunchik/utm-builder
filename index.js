/* jshint sub: true */

var url = require('url');

/**
 * Add custom campaign parameters to your URLs.
 * @module utm-builder
 *
 * @param {String} link - Original URL
 * @param {String} source
 * @param {String} medium
 * @param {String} campaign
 * @param {String} [content]
 * @param {String} [term]
 */

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

  // remove 'search' property according documentation
  // http://nodejs.org/api/url.html#url_url_format_urlobj
  delete parsedLink.search;

  return url.format(parsedLink);
};
