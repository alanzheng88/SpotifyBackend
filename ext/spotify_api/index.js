const authentication = require('./authentication');
const search = require('./search');

module.exports = {
	getAuthorizeUrl: authentication.getAuthorizeUrl,
	getAccessToken: authentication.getAccessToken,
	queryPlaylist: search.queryPlaylist
};