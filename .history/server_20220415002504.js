const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');

const app = express();

const port = 7000;

app.use
require('./app/routes')(app, {});

app.listen(port, () => {
    console.log(`we are running on port ${port}`);
})