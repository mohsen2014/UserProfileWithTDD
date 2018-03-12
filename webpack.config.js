const {
	resolve,
} = require('path');

const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
// const CopyWebpackPlugin = require('copy-webpack-plugin');
const OpenBrowserPlugin = require('open-browser-webpack-plugin');

const config = {
	devtool: 'cheap-module-eval-source-map',

	entry: [
		'webpack-dev-server/client?http://localhost:8080',
		'webpack/hot/only-dev-server',
		'./app.js'
	],

	output: {
		filename: 'bundle.js',
		path: resolve(__dirname, 'public'),
		publicPath: '',
	},

	// context: resolve(__dirname),

	devServer: {
		hot: true,
		contentBase: resolve(__dirname, 'public'),
		publicPath: '/',
		historyApiFallback: true,
	},
	resolve: {
		extensions: ['.js', '.jsx'],
	},
	module: {
		rules: [
		// 	{
		// 	enforce: 'pre',
		// 	test: /\.js$/,
		// 	exclude: /node_modules/,
		// 	loader: 'eslint-loader',
		// },
			{
				test: /\.js|jsx$/,
				loaders: [
					'babel-loader',
				],
				exclude: /node_modules/,
			},
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader']
			},
			{
				test: /\.(scss)$/,
				use: [{
					loader: 'style-loader', // inject CSS to page
				}, {
					loader: 'css-loader', // translates CSS into CommonJS modules
				}, {
					loader: 'postcss-loader', // Run post css actions
					options: {
						plugins: function () { // post css plugins, can be exported to postcss.config.js
							return [
								require('precss'),
								require('autoprefixer')
							];
						}
					}
				}, {
					loader: 'sass-loader' // compiles Sass to CSS
				}]
			},
			{
				test: /\.(png|jpg|gif)$/,
				use: [{
					loader: 'url-loader',
					options: {
						limit: 10,
						name: 'images/[name].[ext]',
					},
				}],
			},
			{
				test: /\.eot(\?v=\d+.\d+.\d+)?$/,
				use: 'file-loader?&name=fonts/[name].[ext]'
			},
			{
				test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
				use: 'url-loader?limit=10000&mimetype=application/font-woff&name=fonts/[name].[ext]'
			},
			{
				test: /\.[ot]tf(\?v=\d+.\d+.\d+)?$/,
				use: 'url-loader?limit=10000&mimetype=application/octet-stream&name=fonts/[name].[ext]'
			},
			{
				test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
				use: 'url-loader?limit=10000&mimetype=image/svg+xml&name=images/[name].[ext]'
			}
		],
	},

	plugins: [
		new webpack.LoaderOptionsPlugin({
			test: /\.js$/,
			options: {
				eslint: {
					configFile: resolve(__dirname, '.eslintrc'),
					cache: false,
				},
			},
		}),
		new webpack.ProvidePlugin({
			jQuery: 'jquery'
		}),
		new webpack.optimize.ModuleConcatenationPlugin(),
		new ExtractTextPlugin({
			filename: './styles/style.css',
			disable: false,
			allChunks: true,
		}),
		// new CopyWebpackPlugin([{
		//   from: 'assets/images',
		//   to: 'images'
		// }]),
		new OpenBrowserPlugin({
			url: 'http://localhost:8080',
		}),
		new webpack.HotModuleReplacementPlugin(),
	],
};

module.exports = config;