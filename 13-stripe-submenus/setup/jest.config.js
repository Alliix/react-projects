const config = {
  verbose: true,
  testEnvironment: `jsdom`,
  setupFilesAfterEnv: ["<rootDir>/setup-jest.js"],
  transform: {
    "^.+\\.svg$": "<rootDir>/svgTransform.js",
    "^.+\\.[t|j]sx?$": "babel-jest"
  },
};

module.exports = config;
