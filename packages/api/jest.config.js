module.exports = {
  displayName: 'api',
  name: 'api',
  transform: {
    '^.+\\.jsx?$': '<rootDir>/jest.preprocess.js',
  },
};
