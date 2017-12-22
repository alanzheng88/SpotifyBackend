'use strict'
const express = require('express');
const app = module.exports = express();
const env = require('./config/index').environmentConfig;

const hostname = env.APP.HOSTNAME;
const port = env.APP.PORT;

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}`);
});

const loginRoutes = require('./routes/login');
const playlistRoutes = require('./routes/playlist');

app.use((req, res, next) => {
	next();
});

app.use('/api/v1/login', loginRoutes);
app.use('/api/v1/playlist', playlistRoutes);

// main error handler
app.use((err, req, res, next) => {
	console.log('there was an error triggered Alan!');
	if (err.statusCode && err.message) {
		return res.status(err.statusCode).send(err.message);
	}
	return res.status(500).send('You messed up somewhere Alan!');
});

app.all('*', (req, res) => {
	res.sendStatus(404);
});