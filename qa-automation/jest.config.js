require('dotenv').config();

module.exports = {
  testEnvironment: 'node',
  testMatch: [
    '**/unit/**/*.test.js',
    '**/integration/**/*.test.js',
    '**/edge/**/*.test.js'
  ],
  setupFiles: ['dotenv/config'],
  // 10 second timeout for API integration tests
  testTimeout: 10000,
};
