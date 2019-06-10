var path = require('path');
module.exports = {
    mode:'development',
    entry:'./src/index.js',
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
    output:{
        filename:'bundle.js',
        path:path.resolve(__dirname,'dist')
    }
}