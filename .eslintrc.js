module.exports = {
  env: {
    es6: true,
    node: true
  },
  extends: [
    'standard',
    'prettier'
  ],
  plugins:['prettier'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  rules: {
    //"prettier/prettier": "error", I'm not using prettier because it does no work well with StandardJS. see https://github.com/prettier/prettier/issues/3845
    "class-methods-use-this": "off",
    "no-param-reassign": "off",
    "camelcase": "off",
    "no-unused-vars": ["error", { "argsIgnorePattern": "next" }]
  }
}
