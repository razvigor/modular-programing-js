'use strict';

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: './src/app.js',
	context: path.resolve(__dirname),
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: '[name].bundle.js',
		clean: true,
		publicPath: '/',
	},
	module: {
		rules: [
			{
				test: /\.m?js$/,
				exclude: /(node_modules|bower_components)/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env'],
					},
				},
			},
			{
				test: /\.html$/,
				exclude: /node_modules/,
				use: 'html-loader',
			},
		],
	},
	plugins: [new HtmlWebpackPlugin({ template: './index.html' })],
	resolve: {},
	devtool: 'source-map',
	mode: 'production',
	devServer: {
		watchFiles: ['src/**/*', 'index.html'],
		static: './dist',
	},
};
