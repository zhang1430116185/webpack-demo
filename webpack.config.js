var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
// var CleanWebpackPlugin = require('clean-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpack = require('webpack');
module.exports = {
    mode:'development',
    devtool:'cheap-module-eval-source-map',
    // webpack-dev-server
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        open:false,
        port: 8080,
        hot:true,
        hotOnly:true
        // compress: true,
        // port: 9000
    },
    entry:{
        main:'./src/index.js',
        // sub:'./src/index.js'
    },
    module:{
        rules:[
            // 第二个参数表示 只对使用es6语法的进行编译 减少生成代码的大小  提高性能
    // "presets": [["@babel/preset-env",{
    //     targets:{
    //         // 只用兼容chrome 67版本 对于低版本不用去转换 节省性能
    //         chrome:"67"
    //     },
    //     useBuiltIns:'usage'
    // }]]
    // "plugins": [
    //     [
    //         "@babel/plugin-transform-runtime",
    //         {
    //             "corejs": 2,
    //             "helpers": true,
    //             "regenerator": true,
    //             "useESModules": false
    //       }
    //     ]
    // ]
            { 
                test: /\.js$/, 
                exclude: /node_modules/, 
                loader: "babel-loader"
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
            },
            {
                test: /\.css$/,
                use:[
                        {loader:"style-loader"},
                        {
                            loader: "css-loader",
                            // options:{
                            //     modules:true
                            // }
                        },
                        {
                            loader: "postcss-loader"
                        }
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template:'src/index.html'
        }),
        new CleanWebpackPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ],
    output:{
        // 配置前缀
        // publicPath: 'https://cdn.example.com/assets/',
        publicPath: '/',//表示根路径
        // 输出文件名字
        filename:'[name].js',
        // 输出文件路径
        path:path.resolve(__dirname,'dist')
    }
}