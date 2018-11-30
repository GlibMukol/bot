const express = require('express');
const app = express();
// const creaential = require('./google/credentials.json');
require('./google');

// console.log(creaential.installed);

app.get('/', (req, res) => {
    res.status(200).send('hello');
});

module.exports = app;