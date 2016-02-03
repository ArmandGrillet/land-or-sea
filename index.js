var request = require('request');

var land = '77+9UE5HDQoaCgAAAA1JSERSAAAAAQAAAAEBAwAAACXvv71W77+9AAAABlBMVEUAAADvv73vv73vv73vv73Zn++/vQAAAAFiS0dEAe+/vQIt77+9AAAACklEQVQI77+9Y2AAAAACAAHvv70h77+9MwAAAABJRU5E77+9QmDvv70=';
var sea = '77+9UE5HDQoaCgAAAA1JSERSAAAAAQAAAAEBAwAAACXvv71W77+9AAAABlBMVEXvv73vv73vv73vv73vv73vv71VfO+/vWwAAAABYktHRAHvv70CLe+/vQAAAApJREFUCO+/vWNgAAAAAgAB77+9Ie+/vTMAAAAASUVORO+/vUJg77+9';
var map = '';

module.exports = {
    checkForCoordinates: function(latitude, longitude, callback) {
        map = 'http://maps.googleapis.com/maps/api/staticmap?center=' + latitude + ',' + longitude + '&zoom=21&format=png&sensor=false&size=1x1&maptype=roadmap&style=feature:administrative|visibility:off&style=feature:landscape|color:0x000000&style=feature:water|color:0xffffff&style=feature:road|visibility:off&style=feature:transit|visibility:off&style=feature:poi|visibility:off';
        request(map, function(error, response, body) {
            if (!error && response.statusCode == 200) {
                data = new Buffer(body).toString('base64');
                if (data === land) {
                    callback('land', null);
                } else if (data === sea) {
                    callback('sea', null);
                } else {
                    callback(null, new Error('Unable to find if the location is on land or sea.'));
                }
            } else {
                callback(null, error);
            }
        });
    }
};
