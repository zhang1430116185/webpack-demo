var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
// var CleanWebpackPlugin = require('clean-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
module.exports = {
    entry:{
        // lodash:'./src/lodash.js',
        main:'./src/index.js'
    },
    module:{
        rules:[
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
        new CleanWebpackPlugin()
    ],
    optimization: {
        splitChunks: {
            chunks: 'async',
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
    output:{
        // 配置前缀
        // publicPath: 'https://cdn.example.com/assets/',
        // publicPath: '/',//表示根路径
        // 输出文件名字
        filename:'[name].js',
        // 输出文件路径
        path:path.resolve(__dirname,'../dist')
    }
}