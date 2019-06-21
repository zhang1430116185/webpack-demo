const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const merge = require('webpack-merge');
const commonConfig = require('./webpack.common.js');
const prodConfig = {
    mode:'production',
    devtool:'cheap-module-source-map',
    module:{
        rules:[
            {
                test: /\.css$/,
                use:[
                        { loader: MiniCssExtractPlugin.loader},
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
    optimization: {
        minimizer: [new OptimizeCSSAssetsPlugin({})],
        splitChunks: {
            // cacheGroups: {
            //     styles: {
            //         name: 'styles',
            //         test: /\.css$/,
            //         chunks: 'all',
            //         enforce: true,
            //     },
            // },
        }
    },
    plugins: [
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            filename: '[name].css',
            chunkFilename: '[id].css',
        }),
    ],
    output:{
        // 配置前缀
        // publicPath: 'https://cdn.example.com/assets/',
        // publicPath: '/',//表示根路径
        // 输出文件名字
        filename:'[name].[contenthash].js',
        chunkFilename:'[name].js'
    }
}
module.exports = merge(commonConfig,prodConfig);