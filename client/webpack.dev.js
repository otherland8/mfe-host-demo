const path = require("path");
const merge = require("lodash/merge");

const getCommonConfig = require("./webpack.common");

const commonConfig = getCommonConfig("style-loader");

module.exports = merge(commonConfig, {
	entry: "./src/index.tsx",
	mode: "development",
	output: {
		filename: "[name].js",
	},
	devServer: {
		open: true,
		hot: true,
		host: "localhost",
		port: "9000",
		compress: true,
		client: {
			progress: true,
		},
		proxy: {
			"/alpha": {
				target: "http://localhost:9002",
				pathRewrite: { "^/alpha": "" },
			},
			"/beta": {
				target: "http://localhost:9004",
				pathRewrite: { "^/beta": "" },
			},
			"/gamma": {
				target: "http://localhost:9006",
				pathRewrite: { "^/gamma": "" },
			},
			"/": {
				secure: false,
				target: "http://localhost:9001",
				bypass: ({ headers: { accept: acceptHeader } }) =>
					acceptHeader?.includes("html") ? "/index.html" : undefined,
			},
		},
	},
});
