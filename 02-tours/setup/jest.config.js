const config = {
  verbose: true,
  testEnvironment: `jsdom`,
  "automock": false,
  "resetMocks": false,
  setupFilesAfterEnv: ["<rootDir>/setup-jest.js"],
};

module.exports = config;
