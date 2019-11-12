const path = require('path');

module.exports = {
  displayName: 'api',
  name: 'api',
  verbose: false,
  collectCoverage: true,
  coveragePathIgnorePatterns: ['/node_modules/', '/config/'],
  testPathIgnorePatterns: ['/node_modules/', '/config/'],
  transform: {
    '^.+\\.jsx?$': [
      'babel-jest',
      { configFile: path.resolve(__dirname, 'babel.config.js') },
    ],
  },
};
