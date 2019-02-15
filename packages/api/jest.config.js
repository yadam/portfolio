module.exports = {
  displayName: 'api',
  name: 'api',
  coveragePathIgnorePatterns: ['/node_modules/', '/config/'],
  testPathIgnorePatterns: ['/node_modules/', '/config/'],
  transform: {
    '^.+\\.jsx?$': '<rootDir>/jest.preprocess.js',
  },
};
