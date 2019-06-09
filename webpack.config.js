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
                test: /\.css$/,
                use:[
                        {loader:"style-loader"},
                        { loader: "css-loader" },
                        {
                            loader: "postcss-loader",
                            options: {
                                // plugins: [
                                //     require("autoprefixer") /*在这里添加*/
                                // ]
                            }
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