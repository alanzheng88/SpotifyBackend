'use strict'


const express = require('express');
const app = express();
require('./config/index')(app);

const hostname = 'localhost';
const port = 3000;

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}`);
});

require('./playlist/index');

app.all('*', (req, res) => {
	res.sendStatus(404);
});