var jsdom = require('jsdom').jsdom;

var exposedProperties = ['window', 'navigator', 'document'];

// Silence the errors!
console.error = function() {};

global.document = jsdom('');
global.window = document.defaultView;
Object.keys(document.defaultView).forEach((property) => {
  if (typeof global[property] === 'undefined') {
    exposedProperties.push(property);
    global[property] = document.defaultView[property];
  }
});

global.navigator = {
  userAgent: 'node.js'
};
