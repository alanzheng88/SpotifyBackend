const authentication = require('./authentication')

module.exports = {
	getAuthorizeUrl: authentication.getAuthorizeUrl,
	getAccessToken: authentication.getAccessToken
};