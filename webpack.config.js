module.exports = {
  entry: './src/index/js',
  output: {
    path:'./dist',
    filename:'bundle.js'
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude:/node_modules/,
      loader:babel-loader,
      query: {
        presets: ['es2015', 'react']
      }
    }]
  }
}
