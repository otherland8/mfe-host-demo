const path = require("path");

const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

const { dependencies } = require("./package.json");
const { react: reactVersion } = dependencies;

module.exports = (styleLoader) => ({
	output: {
		publicPath: "/",
	},
	module: {
		rules: [
			{
				test: /\.(ts|js)x?$/,
				loader: "babel-loader",
				exclude: /node_modules/,
			},
			{
				test: /\.s?[ac]ss$/i,
				use: [styleLoader, "css-loader", "postcss-loader", "sass-loader"],
			},
			{
				test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
				type: "asset",
			},
		],
	},
	plugins: [
		new ModuleFederationPlugin({
			name: "hostModule",
			remotes: {
				alphaModule: "alphaModule@http://localhost:9002/alphaModule.js",
				betaModule: "betaModule@/beta/betaModule.js",
				gammaModule: "promise import('/gamma/assets/gammaModule.js')",
			},
			shared: {
				react: {
					eager: true,
					singleton: true,
					requiredVersion: reactVersion,
				},
			},
		}),
		new HtmlWebpackPlugin({
			template: path.join("public", "index.html"),
			inject: true,
		}),
	],
	resolve: {
		extensions: [".js", ".ts", ".jsx", ".tsx", ".css"],
		alias: {
			"~": path.resolve(__dirname, "src"),
			"@cy": path.resolve(__dirname, "cypress"),
			"@dev-server": path.resolve(__dirname, "devServer"),
		},
	},
});
