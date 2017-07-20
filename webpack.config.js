var webpack = require("webpack");
module.exports = {
entry: "./src/index.js",
output: {
path: __dirname + "/dist",
filename: "bundle.js",
},
devServer: {
    inline: true,
    contentBase: __dirname + "/dist",
    port: 3000
},
module: {
  rules: [{
    test: /\.js$/,
    exclude: /node_modules/,
    use: [{
      loader: 'babel-loader',
      options: {
        babelrc: false,
        presets: [
          'es2015',
          'react'
        ]
      }
    }]
  }]
}
}
