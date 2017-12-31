const request = require('request');
const qs = require('querystring');

class Search {

	static queryPlaylist(accessToken, searchString, callback) {

		searchString = searchString.replace(' ', '+');
		let options = {
			url: `https://api.spotify.com/v1/search?q=${searchString}&type=playlist`,
			headers: {
				'Authorization': `Bearer ${accessToken}`
			}
		};
		request.get(options, callback);
	}

}

module.exports = Search;