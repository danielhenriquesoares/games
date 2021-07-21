const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const MinifyPlugin = require("babel-minify-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
	mode: 'development',
	name: 'sword',
    entry: [path.resolve(__dirname, './src/index.js'),path.resolve(__dirname, './src/sass/main.scss')],
	module: {
		rules: [
			{
				test: /\.(js)$/,
				exclude: /node_modules/,
				use: ['babel-loader']
			},
			{
				test: /\.(scss)$/,
				use: [MiniCssExtractPlugin.loader, {loader: 'css-loader', options:{sourceMap: true, url: false}}, {loader: 'sass-loader', options:{sourceMap: true}}]
			}
		]
	},
	resolve: {
		extensions: ['*', '.js']
	},
	devtool: 'inline-source-map',
    output: {
		path: path.resolve(__dirname, './build'),
		filename: 'bundle.js'
    },
    devServer: {
		contentBase: path.resolve(__dirname, './build'),
		watchContentBase: true,
		hot: true
    },
	plugins: [
		new MiniCssExtractPlugin({ // define where to save the file
			filename: 'main.css'
		}),
		new MinifyPlugin(),
		new HtmlWebpackPlugin({
			template: './src/index.template.html',
			filename: 'index.html'
		}),
		new CopyWebpackPlugin({
			patterns: [{
				from: './src/assets/fonts',
				to: 'assets/fonts'
			}, {
				from: './src/assets/img',
				to: 'assets/img'
			}]
		})
	]
};
