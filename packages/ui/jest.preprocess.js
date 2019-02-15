const path = require('path');

// This is only used for tests so the dependency does belong in devDependencies
// eslint-disable-next-line import/no-extraneous-dependencies
module.exports = require('babel-jest').createTransformer({
  configFile: path.resolve(__dirname, 'babel.config.js'),
});
