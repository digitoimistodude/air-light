'use strict';

describe('@import "normalize/import-now";', function() {
  before(function(done) {
    sassyTest.configurePaths({
      fixtures: path.join(__dirname, 'fixtures')
    });
    done();
  });

  it('should import the CSS immediately on @import', function(done) {
    sassyTest.renderFixture('import-now', {}, function(error, result, expectedOutput) {
      should.not.exist(error);
      done();
    });
  });
});
