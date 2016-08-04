module.exports = {
  devtool: 'inline-source-map',
  entry: {
    application: './src/javascripts/greet.jsx',
  },
  output: {
    path: '../app/assets/javascripts',
    filename: 'greet.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        loader: 'babel',
        query:{
          "presets":["react","es2015"]
        }
      }
    ]
  }
}
