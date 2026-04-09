module.exports = {
  testEnvironment: "jsdom",
  
  transform: {
    "^.+\\.(t|j)sx?$": "babel-jest",
  },

  setupFilesAfterEnv: [
    "<rootDir>/src/setupTests.ts"
  ],

  transformIgnorePatterns: [
    "[/\\\\]node_modules[/\\\\].+\\.(js|jsx|mjs|cjs|ts|tsx)$",
  ],

  moduleNameMapper: {
    "\\.(css|less|scss|sass)$": "identity-obj-proxy",
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/__mocks__/fileMock.js",
  },

  modulePathIgnorePatterns: [
    "<rootDir>/node_modules/",
    "<rootDir>/build/",
    "<rootDir>/docs-build/"
  ],

  testEnvironmentOptions: {
    customExportConditions: ['node', 'node-addons'],
  },
};