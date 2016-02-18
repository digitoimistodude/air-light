'use strict';

describe('@include normalize()', function() {
  before(function(done) {
    sassyTest.configurePaths({
      fixtures: path.join(__dirname, 'fixtures/normalize')
    });
    done();
  });

  describe('$include parameter', function() {
    it('should accept a list with multiple values', function(done) {
      sassyTest.renderFixture('include-multiple', {}, function(error, result, expectedOutput) {
        should.not.exist(error);
        done();
      });
    });

    it('should accept a list with a single value', function(done) {
      sassyTest.renderFixture('include-single', {}, function(error, result, expectedOutput) {
        should.not.exist(error);
        done();
      });
    });

    it('should accept a string', function(done) {
      sassyTest.renderFixture('include-string', {}, function(error, result, expectedOutput) {
        should.not.exist(error);
        done();
      });
    });
  });

  describe('$exclude parameter', function() {
    it('should accept a list with multiple values', function(done) {
      sassyTest.renderFixture('exclude-multiple', {}, function(error, result, expectedOutput) {
        should.not.exist(error);
        done();
      });
    });

    it('should accept a list with a single value', function(done) {
      sassyTest.renderFixture('exclude-single', {}, function(error, result, expectedOutput) {
        should.not.exist(error);
        done();
      });
    });

    it('should accept a string', function(done) {
      sassyTest.renderFixture('exclude-string', {}, function(error, result, expectedOutput) {
        should.not.exist(error);
        done();
      });
    });
  });
});
