var los = require('./index');

// Blocking by address parts

module.exports = {
  testLand: function(test) {
    var regexFromRule = los.checkForCoordinates(40.440625, -79.995886, function(landOrSea, error) {
      test.Equal(landOrSea, 'land');
      test.Equal(error, null);
      test.done();
    });
  },
  testSea: function(test) {
    var regexFromRule = los.checkForCoordinates(0, 0, function(landOrSea, error) {
      test.Equal(landOrSea, 'sea');
      test.Equal(error, null);
      test.done();
    });
  }
};
