
const merge = require('webpack-merge');
const commonConfig = require('./webpack.common.js');
const webpack = require('webpack');
const devConfig = {
    mode:'development',
    devtool:'cheap-module-eval-source-map',
    // webpack-dev-server
    devServer: {
        // contentBase: path.join(__dirname, 'dist'),
        open:false,
        port: 8080,
        hot:true,
        hotOnly:true,
        proxy: {
            // index: '', // 如果要代理根路径，需要把index设置为false或者''
            '/react/api': {
                target: 'http://www.dell-lee.com', // 代理请求接口
                // secure: false, // 如果是https网址，这里需要设置为false
                // pathRewrite: { // 代理接口，访问header.json时会帮你请求demo.json
                //     'header.json': 'demo.json'
                // },
                // changeOrigin: true, // 后端可能设置了changeOrigin防止爬虫，这里我们设置true以后就可以避开这个限制了
                // headers: { // 设置请求头
                //     host: 'www.dell-lee.com',
                //                 cookie: ....
                // },
                // bypass: function(req, res, proxyOptions) { // 拦截，如果请求的是一个html内容，则返回index.html
                //     if (req.headers.accept.indexOf('html') !== -1) {
                //         console.log('Skipping proxy for browser request.');
                //         return '/index.html';
                //     }
                // }
            }
        }
        // compress: true,
        // port: 9000
    },
    // babel-loader opitons
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
    module:{
        rules:[
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
        new webpack.HotModuleReplacementPlugin()
    ],
    output:{
        // 配置前缀
        // publicPath: 'https://cdn.example.com/assets/',
        // publicPath: '/',//表示根路径
        // 输出文件名字
        filename:'[name].js',
        chunkFilename:'[name].js'
    }
}
module.exports = merge(commonConfig,devConfig);
