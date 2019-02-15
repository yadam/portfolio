module.exports = {
  name: 'portfolio',
  collectCoverage: true,
  collectCoverageFrom: [
    '**/*.{js,jsx}',
    '!**/*.config.js',
    '!**/*.preprocess.js',
    '!**/node_modules/**',
    '!**/coverage/**',
    '!**/build/**',
    '!/packages/ui/src/index.jsx', // FIXME: Jest issue - https://github.com/facebook/jest/issues/7758
  ],
  projects: ['<rootDir>/packages/*'],
};
