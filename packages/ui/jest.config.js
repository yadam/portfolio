module.exports = {
  displayName: 'ui',
  name: 'ui',
  coveragePathIgnorePatterns: [
    '/node_modules/',
    '<rootDir>/src/index.jsx', // FIXME: Jest issue - https://github.com/facebook/jest/issues/7758
  ],
  transform: {
    '^.+\\.jsx?$': '<rootDir>/jest.preprocess.js', // FIXME: This should simplify when this is pulled: https://github.com/facebook/jest/pull/7288
  },
};
