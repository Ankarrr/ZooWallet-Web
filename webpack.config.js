var path = require('path');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: {
    test: './src/javascript/test.js',
    wallet_index: './src/javascript/wallet/index/index.js',
    app: './src/javascript/wallet/base/app.js',
    base: './src/styles/base.scss'
  },
  
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist')
  },

  module: {
    loaders: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ["es2015"]
        }
      },
      {
        test: /\.css$/,
        loaders: ['style-loader','css-loader']
      },
      {
        test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url-loader?limit=10000&mimetype=application/font-woff'
      },
      {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url-loader?limit=10000&mimetype=application/octet-stream'
      },
      {
        test: /\.(scss|sass)$/,
        loader: ExtractTextPlugin.extract(["css-loader", "sass-loader"])
      },
    ]
  },

  plugins: [
    new ExtractTextPlugin("css/[name].css")
  ],

  resolve: {
    alias: {
      vue: 'vue/dist/vue.js',
      jsappbase: path.resolve(__dirname, "src/javascript/wallet/base")
    }
  }
  
};
