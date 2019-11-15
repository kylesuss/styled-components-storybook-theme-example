module.exports = {
  modulePaths: ['<rootDir>/src'],
  moduleNameMapper: {
    '\\.(css)$': 'identity-obj-proxy'
  },
  setupFiles: ['jest-localstorage-mock'],
  setupFilesAfterEnv: ['<rootDir>/src/test/setup-framework.js'],
  testURL: 'http://localhost/',
  verbose: true
}
