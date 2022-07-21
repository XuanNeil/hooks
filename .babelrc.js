//https://www.npmjs.com/package/babel-plugin-module-resolver

module.exports = {
  "plugins": [
    ["module-resolver", {
      "root": ["./"],
      "alias": {
        "@src": "./src"
      }
    }]
  ],
  presets: [
    ['@babel/preset-env', {targets: {node: 'current'}}],
    '@babel/preset-typescript',
  ]
}
