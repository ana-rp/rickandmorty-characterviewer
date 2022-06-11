// 1
const path = require('path');

// 2
module.exports = {
	entry: './src/app.js',
	output: {
		filename: 'bundle.js',
		path: path.join(__dirname, 'public')	
	},
	// 3
	module: {
	rules: [{
		loader: 'babel-loader',
		test: /\.js$/,
		exclude: /node_modules/
		}
		]
	},
	// 5
//	devServer: {
//		contentBase: path.join(__dirname, 'public')
//	}
}
