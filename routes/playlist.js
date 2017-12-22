const express = require('express');
const playlist = require('../playlist/index');
const qs = require('querystring');
const router = express.Router();

router.get('/', validateSearchParams, getValidAccessToken, searchPlaylist);

function validateSearchParams(req, res, next) {
	console.log('Retrieving playlist');
	let searchString = req.query.search || '';
	if (!searchString) {
		return next({
			statusCode: 400,
			message: 'Missing search parameter'
		});
	}
	res.locals.searchString = searchString;
	next();
}

function getValidAccessToken(req, res, next) {
	next();
}

function searchPlaylist(req, res, next) {
	function callback(error, response, body) {
		console.log(`querystring: ${req.query.search}`);
		return res.status(200).json(JSON.parse(body));
	}
	let cookie = req.headers.cookie;
	var tokens;
	if (cookie) {
		tokens = JSON.parse(qs.parse(cookie).auth);
	}
	if (!tokens) {
		return next({
			statusCode: 401,
			message: 'User is not authenticated. Please log in.'
		});
	}
	playlist.search(tokens.access_token, res.locals.searchString, callback);
}

module.exports = router;