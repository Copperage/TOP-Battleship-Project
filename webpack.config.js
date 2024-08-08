const path = require('path');

module.exports = {
	entry: {
		main: path.resolve(__dirname, './src/main.js'),
	},
	mode: 'development',
	output: {
		filename: '[name].js',
		path: path.resolve(__dirname, 'dist'),
	},
	devServer: {
		static: {
			directory: path.resolve(__dirname, 'dist'),
		},
		port: 3000,
		open: true,
		hot: true,
	},
	module: {
		rules: [
			{
				test: /\.(scss|css|js|mjs|jsx)$/,
				test: /\.s[ac]ss$/i,
				exclude: /node_modules/,
				use: [
					{
						loader: 'babel-loader',
						options: {
							presets: ['@babel/preset-env', '@babel/preset-react'],
						},
					},
					'style-loader',
					{
						loader: 'css-loader',
					},
					'sass-loader',
				],
			},
		],
	},
};
