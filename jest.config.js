module.exports = {
  verbose: true,
  // testEnvironment: "jest-environment-node",
  transform: {
    "^.+\\.js?$": "babel-jest",
  },
  coveragePathIgnorePatterns: ["/node_modules/"],
};
