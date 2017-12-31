const spotify = require('../ext/index').spotifyApi;
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
	console.log('Logging in...');
	let spotifyAuthorizeUrl = spotify.getAuthorizeUrl();
	console.log(spotifyAuthorizeUrl);
	res.redirect(spotifyAuthorizeUrl);
});

router.get('/callback', (req, res) => {
	console.log('Calling callback');
	console.log('code is: ' + req.query.code);
	let accessTokenCallback = (error, response, body) => {
		let jsonBody = JSON.parse(body);
		console.log(`access token: ${jsonBody.access_token}`);
		console.log(`refresh token: ${jsonBody.refresh_token}`);
		let auth = {
			'access_token': jsonBody.access_token,
			'refresh_token': jsonBody.refresh_token
		};
		
		res.cookie('auth', JSON.stringify(auth), {
			'expires': new Date(Date.now() + (1000 * jsonBody.expires_in)),
			'httpOnly': true,
			'secure': false,
			'domain': '',
			'path': '/api/v1/'
		});
		res.sendStatus(200);
	}
	spotify.getAccessToken(req.query.code, accessTokenCallback);
});

module.exports = router;