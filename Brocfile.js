/* global require, module */

var EmberApp = require('ember-cli/lib/broccoli/ember-app');

var app = new EmberApp();

// Use `app.import` to add additional libraries to the generated
// output files.
//
// If you need to use different assets in different
// environments, specify an object as the first parameter. That
// object's keys should be the environment name and the values
// should be the asset to use in that environment.
//
// If the library that you are including contains AMD or ES6
// modules that you would like to import into your application
// please specify an object with the list of modules as keys
// along with the exports of each module as its value.
var mergeTrees = require('broccoli-merge-trees');

var appTree = mergeTrees(['app', 'app-addon'], { overwrite: true });
var templateTree = mergeTrees(['app/templates', 'app-addon/templates']);

var EmberApp = require('ember-cli/lib/broccoli/ember-app');

var app = new EmberApp({
  trees: {
    app: appTree,
    templates: templateTree
  }
});

module.exports = app.toTree();
