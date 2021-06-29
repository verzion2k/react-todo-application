const config = require('./webpack.config.common')

module.exports = {
	...config,
	mode: 'development',
	devtool: 'inline-source-map',
	devServer: {
		port: 3000,
		open: true,
		historyApiFallback: true,
		compress: true,
	},
}
