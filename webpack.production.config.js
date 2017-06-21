var path = require('path')
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: {
    app: path.resolve(__dirname, 'app/index.jsx'),
    // 将 第三方依赖 单独打包
    vendor: [
      'react',
      'react-dom',
      'react-redux',
      'react-router',
      'redux',
      'es6-promise',
      'whatwg-fetch'
    ]
  },
  output: {
    path: __dirname + "/build",
    filename: "[name].[chunkhash].js",
    publicPath: '/'
  },

  resolve: {
    extensions: ['.js', '.jsx']
  },

  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }, 
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [{loader: 'css-loader'}, {loader: 'postcss-loader'}]
        })
      }, 
      {
        test: /\.less$/,
        exclude: /node_modules/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [{loader: 'css-loader'}, {loader: 'postcss-loader'}, {loader: 'less-loader'}]
        })
      }, 
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'file-loader',
        options: {
          limit: 10000,
          name: 'img/[name].[hash:7].[ext]'
        }
      }, 
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'file-loader',
        options: {
          limit: 10000,
          name: 'img/[name].[hash:7].[ext]'
        }
      }
    ]
  },

  devtool: '#source-map',

  plugins: [
    // webpack 内置的 banner-plugin
    new webpack.BannerPlugin({banner: "Copyright by samuelZhang.com."}),

    // html 模板插件
    new HtmlWebpackPlugin({
      template: __dirname + '/app/index.tmpl.html'
    }),


    // 为组件分配ID，通过这个插件webpack可以分析和优先考虑使用最多的模块，
    // 并为它们分配最小的ID
    // webpack2.0 已经成为默认配置
    // new webpack.optimize.OccurenceOrderPlugin(),

    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      },
      sourceMap: true
    }),

    // 分离CSS和JS文件
    new ExtractTextPlugin('[name].[contenthash].css'),

    // 提供公共代码
    new webpack
      .optimize
      .CommonsChunkPlugin({name: 'vendor', filename: '[name].[chunkhash].js'}),

    // 可在业务 js 代码中使用 __DEV__ 判断是否是dev模式（dev模式下可以提示错误、测试报告等, production模式不提示）
    new webpack.DefinePlugin({
      __DEV__: JSON.stringify(JSON.parse((process.env.NODE_ENV == 'dev') || 'false'))
    }),

    new webpack.LoaderOptionsPlugin({
      minimize: true,
      options: {
        postcss: function () {
          return [require('autoprefixer')];
        }
      }
    })
  ]
}