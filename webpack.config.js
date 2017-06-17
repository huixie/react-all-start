var path = require('path')
var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
//一些常用的路径
var Root_Path=path.resolve(__dirname);
var App_Path=path.resolve(Root_Path,'app')
var Build_Path=path.resolve(Root_Path,'build')

module.exports={
    entry:{
        app:path.resolve(App_Path,'index')
    },
    output:{
        path:Build_Path,
        publicPath: '/',
        filename:"./bundle.js"
    },
    module:{
        loaders:[{
          test:/\.js/,
          loaders:["babel-loader"],
          include:App_Path
        },{
          test:/\.css$/,
          loaders:['style-loader','css-loader','autoprefixer-loader'],
        },{
          test:/\.less$/,
          loaders:['style-loader','css-loader','autoprefixer-loader','less-loader']
        },{
          test:/\.(jpg|png)$/,
          loader:"url-loader?limit=8192&name=[hash].[ext]"
        },{
          test: /\.(eot|woff|svg|ttf|woff2|gif)(\?|$)/,
          loader: 'file-loader?name=[hash].[ext]'
        }]
    },
    resolve:{
      alias: {
        style: path.resolve(App_Path,'style'),
        component:  path.resolve(App_Path,'component')
      },
      extensions:['.js','.json',"jsx"]
    },
    devtool:'eval-source-map',
    devServer: {
        open:true,
        port:3000,
        hot:true,
        contentBase: "./app",//本地服务器所加载的页面所在的目录
        historyApiFallback: false,//不跳转
        inline: true//实时刷新
    },
    plugins:[
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false,
                drop_console: false,
            }
        }),
        new webpack.HotModuleReplacementPlugin(),
    ]
}