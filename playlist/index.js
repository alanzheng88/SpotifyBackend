const spotify = require('../ext/index').spotifyApi;


function search(accessToken, searchString, callback) {
	spotify.queryPlaylist(accessToken, searchString, callback);
}

module.exports = {
	search
};