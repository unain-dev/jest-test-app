module.exports = {
  moduleFileExtensions: ["js", "jsx"],
  transform: {
    "^.+\\.(js|jsx)$": "babel-jest",
  },
  transformIgnorePatterns: ["/node_modules/(?!(axios)/)"],
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
};
