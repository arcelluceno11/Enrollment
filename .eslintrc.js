module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    parser: '@babel/eslint-parser',
    requireConfigFile: false,
  },
  extends: ['@nuxtjs', 'plugin:nuxt/recommended', 'prettier'],
  plugins: [],
  // add your custom rules here
  "rules": {
    "max-len": ["error", 140, 2, {
       ignoreComments: false,
       ignoreRegExpLiterals: true,
       ignoreStrings: false,
       ignoreTemplateLiterals: false,
    }],
     "vue/max-attributes-per-line": "off"
  }
}
