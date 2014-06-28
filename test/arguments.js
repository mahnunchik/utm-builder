/* global describe, it */

var assert = require('assert');
var builder = require('../');

describe('utm-builder', function() {
  it('should throw error when no arguments', function() {
    assert.throws(function(){
      builder();
    }, /link can not be empty/);
  });

  it('should throw error when argument is empty string', function() {
    assert.throws(function(){
      builder('');
    }, /link can not be empty/);
  });

  it('should throw error when one argument', function() {
    assert.throws(function(){
      builder('link');
    }, /source can not be empty/);
  });

  it('should throw error when two arguments', function() {
    assert.throws(function(){
      builder('link', 's');
    }, /medium can not be empty/);
  });

  it('should throw error when three arguments', function() {
    assert.throws(function(){
      builder('link', 's', 'm');
    }, /campaign can not be empty/);
  });

  it('should not throw error when four arguments', function() {
    assert.doesNotThrow(function(){
      builder('link', 's', 'm', 'c');
    });
  });
});
