# land-or-sea

A little module telling you if a location is on land or on sea.

## How to use it?

Install it:

```
npm install land-or-sea --save-dev
```

Use it:

```javascript
var los = require('land-or-sea');

var regexFromRule = los.checkForCoordinates(40.440625, -79.995886, function(field, error) {
    if (error === null) {
        if (field === 'land') {
            console.log('Location is on land');
        } else {
            console.log('Location is on sea');
        }
    }
});

```
