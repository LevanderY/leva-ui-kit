const path = require('path');

module.exports = {
	mode: 'production',
	entry: './src/index.ts',
	output: {
		filename: "index.js",
		path: path.resolve(__dirname, 'dist'),
		libraryTarget: "umd",
		clean: true
	},
	resolve: {
		extensions: ['.ts', '.tsx']
	},
	externals: {
		react: 'react',
		'@mui/material': '@mui/material',
		'@mui/x-data-grid': '@mui/x-data-grid',
		'@mui/icons-material': '@mui/icons-material'
	},
	module: {
		rules: [
			{
				test: /\.scss$/,
				use: ['style-loader', 'css-loader', 'sass-loader'],
			},
			{
				test: /\.css/,
				use: ['style-loader', 'css-loader'],
			},
			{
				test: /\.(ts|tsx)?$/,
				use: ['ts-loader'],
				exclude: /node_modules/
			}
		],
	}
	
}
