const spotify = require('../spotify/index')


function search(accessToken, searchString, callback) {
	spotify.queryPlaylist(accessToken, searchString, callback);
}

module.exports = {
	search
};