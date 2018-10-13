module.exports = {
  notify: true,
  verbose: true,
  transform: {
    '^.+\\.tsx?$': `ts-jest`,
    '^.+\\.jsx?$': `<rootDir>/jest-transformer.js`
  },
  testRegex: `\\.spec\\.(ts|tsx|js)$`,
  moduleNameMapper: {
    '.+\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': `<rootDir>/__mocks__/fileMock.js`
  },
  testPathIgnorePatterns: [
    `node_modules`,
    `/templates/`,
    `.cache`
  ],
  transformIgnorePatterns: [
    `node_modules/(?!(gatsby)/)`
  ],
  globals: {
    "__LINK_PREFIX__": ``,
    "__PATH_PREFIX__": ``
  },
  setupFiles: [
    `<rootDir>/loadershim.js`
  ],
  collectCoverage: false,
  coverageReporters: [
    `json-summary`,
    `text`,
    `html`
  ],
  moduleFileExtensions: [
    `ts`,
    `tsx`,
    `js`
  ],
  coverageThreshold: {
    global: {
      lines: 45,
      statements: 44,
      functions: 42,
      branches: 43
    }
  }
}
