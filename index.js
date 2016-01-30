var request = require('request').defaults({
  encoding: null
});

var land = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABAQMAAAAl21bKAAAABlBMVEUAAAD///+l2Z/dAAAAAWJLR0QB/wIt3gAAAApJREFUCNdjYAAAAAIAAeIhvDMAAAAASUVORK5CYII=";
var sea = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABAQMAAAAl21bKAAAABlBMVEX///////9VfPVsAAAAAWJLR0QB/wIt3gAAAApJREFUCNdjYAAAAAIAAeIhvDMAAAAASUVORK5CYII=";
var map = '';

module.exports = {
  checkForCoordinates: function(latitude, longitude, callback) {
    map = 'http://maps.googleapis.com/maps/api/staticmap?center=' + latitude + ',' + longitude + '&zoom=21&format=png&sensor=false&size=1x1&maptype=roadmap&style=feature:administrative|visibility:off&style=feature:landscape|color:0x000000&style=feature:water|color:0xffffff&style=feature:road|visibility:off&style=feature:transit|visibility:off&style=feature:poi|visibility:off';
    request.get(map, function(error, response, body) {
      if (!error && response.statusCode == 200) {
        data = "data:" + response.headers["content-type"] + ";base64," + new Buffer(body).toString('base64');
        if (data === land) {
          callback('land', null);
        } else if (data === sea) {
          callback('sea', null);
        } else {
          return new Error("Unable to find if the location is on land or sea, check the coordinates and your internet connection.");
        }
      }
    });
  }
};
