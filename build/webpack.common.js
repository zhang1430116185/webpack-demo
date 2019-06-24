var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
let BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
// var CleanWebpackPlugin = require('clean-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const AddAssetHtmlPlugin = require("add-asset-html-webpack-plugin");

const webpack = require("webpack");
module.exports = {
    entry:{
        // lodash:'./src/lodash.js',
        main:'./src/index.js'
    },
    resolveLoader:{
        modules:['node_modules','./loaders']
    },
    module:{
        rules:[
            { 
                test: /\.js$/, 
                use:[{
                    // loader:path.resolve(__dirname,'../loader/replaceLoader.js'),
                    loader:'replaceLoader',
                    options:{
                        name:'yananz'
                    }
                },{
                    loader: "babel-loader"
                }]
            },
            // { 
            //     test: /\.js$/, 
            //     exclude: /node_modules/, 
            //     loader: "babel-loader"
            // },
            { 
                test: /\.tsx?$/, 
                exclude: /node_modules/, 
                use: "ts-loader"
            },
            {
                test: /\.(png|jpe?g|gif)$/,
                use:[{
                    loader: 'url-loader',
                    options:{
                        name: '[name].[ext]',
                        outputPath: 'images',
                        limit: 20480,
                    }
                  }]
            },
            {
                test: /\.(eot|ttf|svg|woff)$/,
                use:[{
                    loader: 'file-loader'
                  }]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template:'src/index.html'
        }),
        new CleanWebpackPlugin(),
        // new BundleAnalyzerPlugin(),
        new webpack.DllReferencePlugin({
            context:__dirname,
            manifest:require('../dll/manifest.json'),//通过require引入manifest.json文件
            name:'vendors'//引入dll文件的变量名
        }),
        new AddAssetHtmlPlugin([{
            // 要添加到编译中的文件的绝对路径由于含有hash值所以引入所有js
            filepath: path.resolve(__dirname, "../dll/*.js"),
            outputPath: "dll",
            publicPath: "dll",
            includeSourcemap: false
        }])
    ],
    optimization: {
        // development配置  要在package.json  中使用sideEffects属性
        
         usedExports:true,
        splitChunks: {
            chunks: 'all',
            minSize: 30000,
            maxSize: 0,
            minChunks: 1,
            maxAsyncRequests: 5,
            maxInitialRequests: 3,
            automaticNameDelimiter: '~',
            name: true,
            cacheGroups: {
              vendors: false,
              default:false
            }
          }
    },
    performance:false,
    output:{
        // 配置前缀
        // publicPath: 'https://cdn.example.com/assets/',
        // publicPath: '/',//表示根路径
        // 输出文件名字
        // filename:'[name].js',
        // chunkFilename:'[name].chunk.js',
        // 输出文件路径
        path:path.resolve(__dirname,'../dist')
    }
}