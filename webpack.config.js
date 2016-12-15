var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'sourcemap',
  entry: [
    "webpack-dev-server/client?http://0.0.0.0:3000",
    "webpack/hot/only-dev-server",
    "./client/App.js",
  ],
  output: {
    path: path.join(__dirname, "build"),
    filename: "app.js"
  },
  module: {
    loaders: [
      { test: /\.js$/, exclude: [/app\/lib/, /node_modules/], loader: 'babel' },
      { test: /.(gif|jpg|png)$/, loader: 'file?name=img-[hash].[ext]' },
      { test: /\.less$/, loader: 'style!css!less' }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
};
