const path = require("path");
const webpack = require("webpack");
const {
  BundleAnalyzerPlugin
} = require('webpack-bundle-analyzer')

const vendor = [
    "jquery",
    "lodash",
	'axios'
];

const dllPath = path.join(__dirname, '../dll');

module.exports = {
  entry: {
    dll: vendor
  },
  output: {
    path: dllPath,
    filename: "[name].js",
    library: "_dll_[name]"
  },
  plugins: [
		new webpack.DllPlugin({
      name: "_dll_[name]",
      path: path.resolve(__dirname,'../dll/manifest.json')
	  }),
		new BundleAnalyzerPlugin({
			analyzerMode: 'static'
		}),
	]
}