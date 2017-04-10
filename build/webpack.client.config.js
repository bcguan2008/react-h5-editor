var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  devtool: 'sourcemap',
  entry: [
    "./client/App.js",
  ],
  output: {
    filename: '[name].js',
    path: path.join(__dirname, "../dist/client"),
  },
  module: {
    loaders: [
      { test: /\.js$/, exclude: [/app\/lib/, /node_modules/], loader: 'babel' },
      { test: /.(gif|jpg|png)$/, loader: 'file?name=img-[hash].[ext]' },
      { test: /\.css$/, loader: 'style!css' },
      { test: /\.less$/, loader: 'style!css!less' }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production'),
        'DEBUG': true
      }
    }),

    new HtmlWebpackPlugin({
      template: 'build/index.html',
      inject: 'body',
      hash: true
    }),

    // Reduces bundles total size
    new webpack.optimize.UglifyJsPlugin({
      mangle: {

        // You can specify all variables that should not be mangled.
        // For example if your vendor dependency doesn't use modules
        // and relies on global variables. Most of angular modules relies on
        // angular global variable, so we should keep it unchanged
        except: ['$super', '$', 'exports', 'require', 'react']
      }
    }),

    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: function (module, count) {
        return module.resource && module.resource.indexOf(path.resolve(__dirname, '../client')) === -1;
      }
    })
  ]
};
