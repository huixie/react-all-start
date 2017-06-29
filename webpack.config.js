var path = require('path')
var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
// 一些常用的路径
var Root_Path = path.resolve(__dirname)
var App_Path = path.resolve(Root_Path, 'app')
var Build_Path = path.resolve(Root_Path, 'build')

module.exports = {
  entry: {
    app: path.resolve(App_Path, 'index'),
    lib: [
      // 公共组件
      'react',
      'react-dom',
      'antd',
      'moment'

      // 'lodash',
    ]
  },
  output: {
    path: Build_Path,
    publicPath: '/',
    filename: './[name]-[hash].js',
    library: '[name]'
  },
  module: {
    loaders: [
      {
        test: /\.js/,
        loaders: ['babel-loader'],
        include: App_Path
      },
      {
        test: /\.css$/,
        loaders: ExtractTextPlugin.extract({
          fallback: 'style',
          use: ['css-loader', 'autoprefixer-loader']
        })
      },
      {
        test: /\.less$/,
        loaders: [
          'style-loader',
          'css-loader',
          'autoprefixer-loader',
          'less-loader'
        ]
      },
      {
        test: /\.(jpg|png)$/,
        loader: 'url-loader?limit=8192&name=[hash].[ext]'
      },
      {
        test: /\.(eot|woff|svg|ttf|woff2|gif)(\?|$)/,
        loader: 'file-loader?name=[hash].[ext]'
      }
    ]
  },
  resolve: {
    alias: {
      style: path.resolve(App_Path, 'style'),
      component: path.resolve(App_Path, 'component'),
      actions: path.resolve(App_Path, 'actions'),
      redux: path.resolve(App_Path, 'redux'),
      container: path.resolve(App_Path, 'container'),
      reducers: path.resolve(App_Path, 'reducers'),
      utils: path.resolve(App_Path, 'utils')
    },
    extensions: ['.js', '.json', 'jsx'],
    modules: [App_Path, 'node_modules']
  },
  devtool: 'eval-source-map',
  devServer: {
    open: true,
    port: 3000,
    hot: true,
    contentBase: './app', // 本地服务器所加载的页面所在的目录
    historyApiFallback: false, // 不跳转
    inline: true // 实时刷新
  },
  plugins: [
    // new webpack.optimize.CommonsChunkPlugin({
    //   name: 'vendor',
    //   filename: 'vendor.js',
    //   minChunks: Infinity
    // }),
    // new webpack.optimize.UglifyJsPlugin({
    //     compress: {
    //         warnings: false,
    //         drop_console: false,
    //     }
    // }),
    new webpack.HotModuleReplacementPlugin(),
    new ExtractTextPlugin({
      filename: '[name].bundle.css',
      allChunks: true
    }),
    new HtmlWebpackPlugin({
      filename: './index.html',
      template: App_Path + '/index.html',
      inject: true,
      hash: true,
      minify: {
        removeComments: true,
        collapseWhitespace: true
      }
    })
  ]
}
