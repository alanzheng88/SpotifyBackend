const env = process.env.NODE_ENV || 'dev';

console.log(`Setting configs for ${env} environment`)

const dev = {
	APP: {
		'HOSTNAME': process.env.HOSTNAME,
		'PORT': process.env.PORT,
		'SPOTIFY': {
			'REDIRECT_URI': process.env.SPOTIFY_REDIRECT_URI,
			'CLIENT_ID': process.env.SPOTIFY_CLIENT_ID,
			'CLIENT_SECRET': process.env.SPOTIFY_CLIENT_SECRET,
			'SCOPE': 'user-read-private user-read-email'
		}
	},
	DB: {}
};

console.log('dev config');
console.log(`${JSON.stringify(dev)}`);

const prod = {
	APP: {
		'HOSTNAME': '',
		'PORT': 80
	},
	DB: {}
}

const config = { dev, prod }

module.exports = config[env];