const env = require('../../config/index').environmentConfig;
const request = require('request');
const qs = require('querystring');
const btoa = require('btoa');

const REDIRECT_URI = env.APP.SPOTIFY.REDIRECT_URI;
const CLIENT_ID = env.APP.SPOTIFY.CLIENT_ID;
const CLIENT_SECRET = env.APP.SPOTIFY.CLIENT_SECRET;
const SCOPE = env.APP.SPOTIFY.SCOPE;

class Authentication {

	// TODO: implement state parameter to mitigate csrf attacks 
	static getAuthorizeUrl(state) {
		console.log('getting token');
		let querystring = {
			'client_id': CLIENT_ID,
			'redirect_uri': REDIRECT_URI,
			'response_type': 'code',
			'scope': SCOPE
		}
		console.log(`calling ${JSON.stringify(querystring)}`)
		let url = `https://accounts.spotify.com/authorize/?${qs.stringify(querystring)}`;
		return url;
	}

	static getAccessToken(code, callback) {
		console.log('Getting access token');
		let options = {
			url: 'https://accounts.spotify.com/api/token',
			headers: {
				'Authorization': `Basic ${btoa(`${CLIENT_ID}:${CLIENT_SECRET}`)}`,
				'Content-Type': 'application/x-www-form-urlencoded',
				'Accept': 'application/json'
			},
			form: {
				'grant_type': 'authorization_code',
				'code': code,
				'redirect_uri': REDIRECT_URI
			}
		};
		request.post(options, callback);
	}
}

module.exports = Authentication;