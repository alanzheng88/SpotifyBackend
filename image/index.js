const google = require('../ext/index').googleApi;

function getImageDescriptions(url, callback) {
	google.getImageDescriptions(url, callback);
}

module.exports = {
	getImageDescriptions
}
