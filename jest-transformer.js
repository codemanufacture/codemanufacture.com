const babelOptions = {
  presets: [`@babel/react`, `@babel/env`],
  plugins: [
    `@babel/plugin-proposal-optional-chaining`,
    `@babel/plugin-proposal-class-properties`,
  ],
}

module.exports = require("babel-jest").default.createTransformer(babelOptions)
