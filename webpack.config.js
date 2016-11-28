var path    = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'sourcemap',
  entry: [
    "webpack-dev-server/client?http://0.0.0.0:3000",
    "webpack/hot/only-dev-server",
    "./src/demo.js",
  ],
  output:{
    path: path.join(__dirname, "build"),
    filename: "app.js"
  },
  module: {
    loaders: [
      { test: /\.js$/, exclude: [/app\/lib/, /node_modules/], loader: 'babel' },
    ]
  },
  plugins: [
      new webpack.HotModuleReplacementPlugin()
  ]
};
