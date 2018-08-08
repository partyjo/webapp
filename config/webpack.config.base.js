const path = require('path')
const webpack = require('webpack')
const htmlwebpackplugin = require('html-webpack-plugin')
const utils = require('./utils')

const webpackConfig = {
	entry: {
		app: [
			path.resolve(__dirname, `../${utils.project}/index.js`)
		]
	},
	plugins: [

	],
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				loader: 'babel-loader',
				exclude: /node_modules/
			},
			{
				test: /\.(less|css)$/,
				use: [
					{
						loader: "style-loader"
					},
					{
						loader: "css-loader",
						options: {
							minimize: true
						}
					},
					{
						loader: "less-loader",
						options: {
							javascriptEnabled: true
						}
					}
				]
			}
		]
	},
	resolve: {
		extensions: ['.jsx', '.js'],
		alias: {
			'libs': path.join(__dirname, '../libs/'),
			'api': path.join(__dirname, `../${utils.project}/api/`),
			'components': path.join(__dirname, `../${utils.project}/components/`),
			'layouts': path.join(__dirname, `../${utils.project}/layouts/`),
			'pages': path.join(__dirname, `../${utils.project}/pages/`),
			'store': path.join(__dirname, `../${utils.project}/store/`),
			'utils': path.join(__dirname, `../${utils.project}/utils/`)
		}
	}
}

module.exports = webpackConfig
