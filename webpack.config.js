const path = require('path');
//const sass = require('./webpack/sass');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './client/index.html',
  filename: 'index.html',
  inject: 'body'
})

const common = {
  entry: './client/index.js',
  output: {
    path: path.resolve('dist'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.sass$/, use: [{
          loader: 'style-loader'
        },{
          loader: 'css-loader',
          options: {
            minimize: true
          }
        },
        {
          loader: 'postcss-loader'

        },{
          loader: 'sass-loader'
         }
      ]}
    ]
  },
  plugins: [
    HtmlWebpackPluginConfig
  ]
}

const developmentConfig = {
  devServer: {
    inline: true,
    host: 'localhost', // Defaults to `localhost`
    proxy: {
      '/api/**': {
        target: 'http://localhost:8081/api/',
        pathRewrite: {
        "^/api": ""
        },
        secure: false
      }
    }
  }
};

module.exports = function(env) {
  if (env === 'production'){
    return common;
  }
  if (env === 'development'){
    return Object.assign(
      {},
      common,
      developmentConfig
    )
  }
}