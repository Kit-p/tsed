module.exports = {
  ...require("@tsed/jest-config"),
  coverageThreshold: {
    global: {
      branches: 81.25,
      functions: 100,
      lines: 100,
      statements: 100
    }
  }
};
