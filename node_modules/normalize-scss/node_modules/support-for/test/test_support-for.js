'use strict';

describe('@function support-for()', function() {
  before(function(done) {
    sassyTest.configurePaths({
      // Path to Sass library.
      fixtures: path.join(__dirname, 'fixtures/support-for')
    });
    done();
  });

  describe('$support-for variable', function() {
    it('should, by default, support last 4 versions of all browsers except IE 8', function(done) {
      sassyTest.renderFixture('defaults', {}, function(error, result, expectedOutput) {
        should.not.exist(error);
        done();
      });
    });

    it('should support last X versions when given a negative version', function(done) {
      sassyTest.renderFixture('negative-version', {}, function(error, result, expectedOutput) {
        should.not.exist(error);
        done();
      });
    });

    it('should not support a browser when version is null', function(done) {
      sassyTest.renderFixture('null-version', {}, function(error, result, expectedOutput) {
        should.not.exist(error);
        done();
      });
    });

    it('should support a browser by using the wildcard \'*\' browser version', function(done) {
      sassyTest.renderFixture('wildcard-browser', {}, function(error, result, expectedOutput) {
        should.not.exist(error);
        done();
      });
    });

    it('should error when version is not a number', function(done) {
      sassyTest.renderFixture('error-browser-number', {}, function(error, result, expectedOutput) {
        error.should.exist;
        error.message.should.equal('$support-for: (safari: 9) must be set to an integer (or null); 9 is a string.');
        done();
      });
    });

    it('should error when version is not an integer', function(done) {
      sassyTest.renderFixture('error-browser-integer', {}, function(error, result, expectedOutput) {
        error.should.exist;
        error.message.should.equal('$support-for: (ie: 5.5) must be set to an integer (or null); 5.5 is not an integer.');
        done();
      });
    });
  });

  describe('$browser parameter', function() {
    it('should error when not in $support-for-current-browser-version', function(done) {
      sassyTest.renderFixture('error-current-browser', {}, function(error, result, expectedOutput) {
        error.should.exist;
        error.message.should.equal('mosaic not found in $support-for-current-browser-version map; it must be set to an integer.');
        done();
      });
    });
  });

  describe('$version parameter', function() {
    it('should error when not an integer', function(done) {
      sassyTest.renderFixture('error-version', {}, function(error, result, expectedOutput) {
        error.should.exist;
        error.message.should.equal('The $version parameter of support-for() must be an integer; string given.');
        done();
      });
    });
  });
});
