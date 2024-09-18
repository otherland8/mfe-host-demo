const nodeEnvironmentToConfigPath = {
	production: "prod",
	development: "dev",
};

module.exports = require(`./webpack.${nodeEnvironmentToConfigPath[process.env.NODE_ENV]}`);
