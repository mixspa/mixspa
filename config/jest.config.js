module.exports = {
  rootDir: '../',
  testURL: 'http://localhost/',
  globals: { },
  testMatch: [
    '**/__tests__/*.js',
    '**/?(*.)+(spec|test).js'
  ],
  coverageDirectory: '<rootDir>/coverage',
  coverageReporters: ['html'],
  collectCoverageFrom: [
    '**/src/**',
    '!**/lib/**',
    '!**/index.js',
    '!**/coverage/**',
    '!**/node_modules/**'
  ]
}
