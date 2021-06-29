const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')
const Dotenv = require('dotenv-webpack')
const TSconfigPathsWebpackPlugin = require('tsconfig-paths-webpack-plugin')

module.exports = {
	entry: './src/index.tsx',
	resolve: {
		plugins: [new TSconfigPathsWebpackPlugin()],
		extensions: ['.ts', '.tsx', '.js'],
	},
	output: {
		filename: '[name].[contenthash].js',
		path: path.resolve(process.cwd(), 'build'),
	},
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				loader: 'ts-loader',
				options: {
					transpileOnly: true,
				},
				exclude: /build/,
			},
			{
				test: /\.s?css$/,
				use: ['style-loader', 'css-loader', 'sass-loader'],
			},
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './public/index.html',
		}),
		new ForkTsCheckerWebpackPlugin({
			eslint: {
				files: './src/**/*.{ts,tsx,js,jsx}',
			},
		}),
		new Dotenv({
			path: '.env',
		}),
	],
}
