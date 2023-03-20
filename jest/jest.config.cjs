module.exports = {
  rootDir: '../',
  setupFilesAfterEnv: ['<rootDir>/jest/jest.setup.js'],
  collectCoverage: true,
  coverageDirectory: 'coverage',
  testEnvironment: 'jsdom',
  moduleFileExtensions: ['js', 'jsx'],
  collectCoverageFrom: ['src/**/*.{js,jsx}'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1'
  },
  transform: {
    '^.+\\.[jt]sx?$': 'babel-jest',
    '.+\\.(css|styl|less|sass|scss)$': 'jest-css-modules-transform'
  }
}
