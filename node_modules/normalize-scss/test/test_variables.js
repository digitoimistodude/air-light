'use strict';

describe('Configuration variables', function() {
  before(function(done) {
    sassyTest.configurePaths({
      fixtures: path.join(__dirname, 'fixtures')
    });
    done();
  });

  describe('default values', function() {
    it('should limit output to the same output as normalize.css', function(done) {
      sassyTest.renderFixture('variables/default', {}, function(error, result, expectedOutput) {
        should.not.exist(error);
        done();
      });
    });
  });

  describe('$base-* and $h*-font-size', function() {
    it('should alter the font, font size, and line-height', function(done) {
      sassyTest.renderFixture('variables/font', {}, function(error, result, expectedOutput) {
        should.not.exist(error);
        done();
      });
    });
  });

  describe('$indent-amount', function() {
    it('should alter the indent amount of elements', function(done) {
      sassyTest.renderFixture('variables/indent-amount', {}, function(error, result, expectedOutput) {
        should.not.exist(error);
        done();
      });
    });
  });

  describe('$support-for', function() {
    it('should support Chrome 9', function(done) {
      sassyTest.renderFixture('variables/support-for/chrome9', {}, function(error, result, expectedOutput) {
        should.not.exist(error);
        done();
      });
    });

    it('should support Firefox 28', function(done) {
      sassyTest.renderFixture('variables/support-for/firefox28', {}, function(error, result, expectedOutput) {
        should.not.exist(error);
        done();
      });
    });

    it('should support IE 6', function(done) {
      sassyTest.renderFixture('variables/support-for/ie6', {}, function(error, result, expectedOutput) {
        should.not.exist(error);
        done();
      });
    });

    it('should support IE 7', function(done) {
      sassyTest.renderFixture('variables/support-for/ie7', {}, function(error, result, expectedOutput) {
        should.not.exist(error);
        done();
      });
    });

    it('should support IE 8', function(done) {
      sassyTest.renderFixture('variables/support-for/ie8', {}, function(error, result, expectedOutput) {
        should.not.exist(error);
        done();
      });
    });

    it('should support IE 9', function(done) {
      sassyTest.renderFixture('variables/support-for/ie9', {}, function(error, result, expectedOutput) {
        should.not.exist(error);
        done();
      });
    });

    it('should support IE 10', function(done) {
      sassyTest.renderFixture('variables/support-for/ie10', {}, function(error, result, expectedOutput) {
        should.not.exist(error);
        done();
      });
    });

    it('should support IE 11', function(done) {
      sassyTest.renderFixture('variables/support-for/ie11', {}, function(error, result, expectedOutput) {
        should.not.exist(error);
        done();
      });
    });

    it('should support Safari 5', function(done) {
      sassyTest.renderFixture('variables/support-for/safari5', {}, function(error, result, expectedOutput) {
        should.not.exist(error);
        done();
      });
    });

    it('should support Safari 6', function(done) {
      sassyTest.renderFixture('variables/support-for/safari6', {}, function(error, result, expectedOutput) {
        should.not.exist(error);
        done();
      });
    });

    it('should support Safari 7', function(done) {
      sassyTest.renderFixture('variables/support-for/safari7', {}, function(error, result, expectedOutput) {
        should.not.exist(error);
        done();
      });
    });

    it('should support "last X versions" with -X value', function(done) {
      sassyTest.renderFixture('variables/support-for/negative-value', {}, function(error, result, expectedOutput) {
        should.not.exist(error);
        done();
      });
    });
  });
});
