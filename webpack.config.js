var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
// var CleanWebpackPlugin = require('clean-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpack = require('webpack');
module.exports = {
    mode:'development',
    devtool:'source-map',
    // webpack-dev-server
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        open:true,
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