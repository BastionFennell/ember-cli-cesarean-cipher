'use strict';

var path = require("path");
var fs = require("fs");

function EmberCLICesareanCipher(project) {
  this.project = project;
  this.name    = 'Ember CLI Cesarean Cipher';
}

function unwatchedTree(dir) {
  return {
    read:    function() { return dir; },
    cleanup: function() { }
  };
}

EmberCLICesareanCipher.prototype.treeFor = function treeFor(name) {
  var treePath =  path.join('node_modules', 'ember-cli-cesarean-cipher', name + '-addon');

  if (fs.existsSync(treePath)) {
    return unwatchedTree(treePath);
  }
};

module.exports = EmberCLICesareanCipher;
