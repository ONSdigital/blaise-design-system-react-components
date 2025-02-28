module.exports = {
    testEnvironment: "jsdom",
    setupFilesAfterEnv: [
        "<rootDir>/src/setupTests.ts"
    ],
    modulePathIgnorePatterns: ["node_modules", "build"]  
};