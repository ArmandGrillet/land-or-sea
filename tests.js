var los = require('./index');

// Blocking by address parts

module.exports = {
    testLand: function(test) {
        los.checkForCoordinates(40.440625, -79.995886, function(landOrSea, error) {
            test.equals(landOrSea, 'land');
            test.equals(error, null);
            test.done();
        });
    },
    testSea: function(test) {
        los.checkForCoordinates(0, 0, function(landOrSea, error) {
            test.equals(landOrSea, 'sea');
            test.equals(error, null);
            test.done();
        });
    }
};
