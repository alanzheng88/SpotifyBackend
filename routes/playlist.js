const express = require('express');
const playlist = require('../playlist/index');
const qs = require('querystring');
const router = express.Router();

router.get('/', validateSearchParams, searchPlaylist);

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

function searchPlaylist(req, res, next) {
	function callback(error, response, body) {
		console.log(`querystring: ${req.query.search}`);
		return res.status(200).json(JSON.parse(body));
	}
	
	playlist.search(res.locals.tokens.access_token, res.locals.searchString, callback);
}

module.exports = router;