# land-or-sea

Tells if your coordinates are on land or in the middle of the sea.

## How to use it?

Install it:

```
npm install land-or-sea --save-dev
```

Use it:

```javascript
var los = require('land-or-sea');

var regexFromRule = los.checkForCoordinates(40.440625, -79.995886, function(field, error) {
    if (!error) {
        if (field === 'land') {
            console.log('Location is on land');
        } else {
            console.log('Location is on sea');
        }
    } else {
        console.log(error.message);
    }
});

```
