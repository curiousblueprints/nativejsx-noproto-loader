var loaderUtils = require('loader-utils');
var nativejsx = require('nativejsx-noproto');

module.exports = function(source) {
  this.cacheable && this.cacheable(true);

  var query = loaderUtils.parseQuery(this.query);
  var tree = [];

  if (query && (query.prototypes !== 'inline') && (query.prototypes !== 'module')) {
    tree.push("require('nativejsx-noproto/dist/nativejsx-prototypes.js');");
  }
  tree.push(nativejsx.transpile(source, query));

  return tree.join('\n');
};
