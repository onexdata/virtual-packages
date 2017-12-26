/*
 * Adds the folder requested to the require path so you can use private/unpublished packages as if they were published.
 */
module.exports = function(folder) {
  var path = require('path')
  process.env.NODE_PATH = path.join(__dirname, folder);
  require('module').Module._initPaths();
}
