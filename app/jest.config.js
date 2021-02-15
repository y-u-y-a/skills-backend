module.exports = {
  verbose: true,
  transform: {
    '^.+\\.js$': '<rootDir>/node_modules/babel-jest', // target test file
    // '.*\\.(ts)$': '<rootDir>/node_modules/ts-jest',
  },
  moduleFileExtensions: ['js'], // target extension
}
