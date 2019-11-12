const path = require('path');

module.exports = {
  displayName: 'ui',
  name: 'ui',
  verbose: false,
  collectCoverage: true,
  transform: {
    '^.+\\.jsx?$': [
      'babel-jest',
      { configFile: path.resolve(__dirname, 'babel.config.js') },
    ],
  },
};
