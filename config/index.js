function config (app) {
	const path = require('path');
	const env = process.env.NODE_ENV || 'dev';

	console.log(`Setting configs for ${env} environment`)
	switch (env) {
		case 'dev':
			break;
		case 'prod':
			break;
		default:
	}
}

module.exports = config;