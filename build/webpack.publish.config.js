var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');



module.exports = function(tranId){
  var root = './dist/temp/'+tranId+'/';
  var distPath = './dist/publish/'+tranId;
  return {
    devtool: 'sourcemap',
    entry: [
      root+ "app.js",
    ],
    output: {
      filename: '[name].js',
      path:  distPath
    },
    module: {
      loaders: [
        { test: /\.js$/, exclude: [/app\/lib/, /node_modules/], loader: 'babel' },
        { test: /.(gif|jpg|png)$/, loader: 'file?name=img-[hash].[ext]' },
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
        template: root+ 'index.html',
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

} 