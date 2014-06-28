/* jshint maxlen: false */
/* global describe, it */

var assert = require('assert');
var builder = require('../');

// links from https://support.google.com/analytics/answer/1033867
var utmLink1 = 'http://google.com/?utm_source=source&utm_medium=medium&utm_campaign=campaign';
var utmLink2 = 'http://google.com/?test=foo&utm_source=source&utm_medium=medium&utm_campaign=campaign';
var utmLink3 = 'http://google.com/?utm_source=my%20source&utm_medium=my%20medium&utm_campaign=my%20campaign';
var utmLink4 = 'http://google.com/?utm_source=%D0%B8%D1%81%D1%82%D0%BE%D1%87%D0%BD%D0%B8%D0%BA&utm_medium=%D0%BA%D0%B0%D0%BD%D0%B0%D0%BB&utm_campaign=%D0%BA%D0%BE%D0%BC%D0%BF%D0%B0%D0%BD%D0%B8%D1%8F';

describe('utm-builder', function() {
  it('should make the correct link', function() {
    var link = builder('http://google.com/', 'source', 'medium', 'campaign');
    assert.equal(link, utmLink1);
  });

  it('should make the correct link', function() {
    var link = builder('http://google.com', 'source', 'medium', 'campaign');
    assert.equal(link, utmLink1);
  });

  it('should make the correct link', function() {
    var link = builder('http://google.com/?test=foo', 'source', 'medium', 'campaign');
    assert.equal(link, utmLink2);
  });

  it('should make the correct link without spaces', function() {
    var link = builder('http://google.com/', 'my source', 'my medium', 'my campaign');
    assert.equal(link, utmLink3);
  });

  it('should make the correct link - rus latters', function() {
    var link = builder('http://google.com/', 'источник', 'канал', 'компания');
    assert.equal(link, utmLink4);
  });
});
