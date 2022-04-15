const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');
const db = require('./config/db')

const app = express();

const port = 7000;

app.use(bodyParser.urlencoded({extended: true}))
require('./app/routes')(app, {});

app.listen(port, () => {
    console.log(`we are running on port ${port}`);
})

MongoClient.connect(db.url)