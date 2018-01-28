const express = require('express');
const image = require('../image/index');
const router = express.Router();

router.get('/', getImageDescriptions);

function getImageDescriptions(req, res, next) {
	if (req.query.search) {
		let callback = (error, request, body) => {
			let labels = body.responses[0].labelAnnotations;
			let descriptions = labels.map((element) => { return element.description });
			res.status(200).json(descriptions);
		};
		image.getImageDescriptions(req.query.search, callback);
	} else {
		return next({
			statusCode: 400,
			message: 'Missing search parameter'
		});
	}
}

module.exports = router;