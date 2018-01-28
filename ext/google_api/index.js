const env = require('../../config/index').environmentConfig;
const request = require('request');

function getImageDescriptions(url, callback) {
	console.log('getting image descriptions');
	const options = {
		url: `https://vision.googleapis.com/v1/images:annotate?key=${env.APP.GOOGLE.API_KEY}`,
		headers: {
			'Content-Type': 'application/json',
			'Accept': 'application/json'
		},
		body: {
			'requests': [
				{
			  		'image': {
						'source': {
						  'imageUri': 'https://cloud.google.com/vision/docs/images/ferris-wheel.jpg'
						}
					},
					'features': [
						{
						  'type': 'LABEL_DETECTION'
						}
					]
				}
			]
		},
		json: true
	}
	request.post(options, callback);
}

module.exports = {
	getImageDescriptions
}