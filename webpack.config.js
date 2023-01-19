const path = require("path");
const PugPlugin = require("pug-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

const isDev = process.env.NODE_ENV === "development";

module.exports = {
	entry: {
		// define all Pug files here
		index: "./src/index.pug",
	},

	output: {
		path: path.join(__dirname, "./dist/"),
		publicPath: isDev ? "/" : "./",
	},

	resolve: {
		alias: {
			// use alias to avoid relative paths like `./../../images/`
			Images: path.join(__dirname, "./src/images/"),
			Fonts: path.join(__dirname, "./src/fonts/"),
			Sass: path.join(__dirname, "./src/sass/"),
		},
	},

	plugins: [
		new CleanWebpackPlugin(),
		new PugPlugin({
			js: {
				// output filename of extracted JS file from source script
				filename: "assets/js/[name].[contenthash:8].js",
			},
			css: {
				// output filename of extracted CSS file from source style
				filename: "assets/css/[name].[contenthash:8].css",
			},
		}),
	],

	module: {
		rules: [
			{
				test: /\.pug$/,
				oneOf: [
					// import Pug in JavaScript/TypeScript as template function
					{
						issuer: /\.(js|ts)$/, // match scripts where Pug is used
						loader: PugPlugin.loader,
						options: {
							method: "compile", // compile Pug into template function
						},
					},
					// render Pug from Webpack entry into static HTML
					{
						loader: PugPlugin.loader, // default method is 'render'
					},
				],
			},
			{
				test: /\.(css|sass|scss)$/,
				use: ["css-loader", "sass-loader"],
			},
			{
				test: /\.(png|jpg|jpeg|ico)/,
				type: "asset/resource",
				generator: {
					// output filename of images
					filename: "assets/img/[name].[hash:8][ext]",
				},
			},
			{
				test: /\.(woff|woff2|eot|ttf|otf|svg)$/i,
				type: "asset/resource",
				generator: {
					// output filename of fonts
					filename: "assets/fonts/[name][ext][query]",
				},
			},
		],
	},
};
