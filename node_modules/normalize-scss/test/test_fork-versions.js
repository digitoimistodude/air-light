'use strict';

describe('Fork versions', function() {
  describe('Default fork', function() {
    beforeEach(function(done) {
      sassyTest.configurePaths({
        fixtures: path.join(__dirname, 'fixtures/fork-versions'),
        includePaths: [
          // Path to Fork version.
          path.join(__dirname, '../fork-versions/default'),
          // Path to normalize-scss' dependencies.
          path.join(__dirname, '../node_modules/support-for/sass')
        ]
      });
      done();
    });

    it('should render properly', function(done) {
      sassyTest.renderFixture('default', {}, function(error, result, expectedOutput) {
        should.not.exist(error);
        done();
      });
    });
  });

  describe('Ruby Sass with Compass fork', function() {
    beforeEach(function(done) {
      sassyTest.configurePaths({
        fixtures: path.join(__dirname, 'fixtures'),
        includePaths: [
          // Path to Fork version.
          path.join(__dirname, '../fork-versions/ruby-sass-compass'),
          // Path to normalize-scss' dependencies.
          path.join(__dirname, '../node_modules/support-for/sass')
        ]
      });
      done();
    });

    it('should render properly', function(done) {
      sassyTest.renderFixture('fork-versions/ruby-sass-compass', {}, function(error, result, expectedOutput) {
        should.not.exist(error);
        done();
      });
    });
  });

  describe('Typey fork', function() {
    beforeEach(function(done) {
      sassyTest.configurePaths({
        fixtures: path.join(__dirname, 'fixtures'),
        includePaths: [
          // Path to Fork version.
          path.join(__dirname, '../fork-versions/typey'),
          // Path to normalize-scss' dependencies.
          path.join(__dirname, '../node_modules/support-for/sass'),
          path.join(__dirname, '../node_modules/typey/stylesheets')
        ]
      });
      done();
    });

    it('should render properly', function(done) {
      sassyTest.renderFixture('fork-versions/typey', {}, function(error, result, expectedOutput) {
        should.not.exist(error);
        done();
      });
    });
  });

  describe('Typey, Chroma and KSS fork', function() {
    beforeEach(function(done) {
      sassyTest.configurePaths({
        fixtures: path.join(__dirname, 'fixtures'),
        includePaths: [
          // Path to Fork version.
          path.join(__dirname, '../fork-versions/typey-chroma-kss'),
          // Path to normalize-scss' dependencies.
          path.join(__dirname, '../node_modules/chroma-sass/sass'),
          path.join(__dirname, '../node_modules/support-for/sass'),
          path.join(__dirname, '../node_modules/typey/stylesheets')
        ]
      });
      done();
    });

    it('should render properly', function(done) {
      sassyTest.renderFixture('fork-versions/typey-chroma-kss', {}, function(error, result, expectedOutput) {
        should.not.exist(error);
        done();
      });
    });
  });
});
