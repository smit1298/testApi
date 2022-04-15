const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');
const db = require('./config/db')

const app = express();

const port = 9000;

require('')


app.listen(port, () => {
    console.log(`we are running on port ${port}`);
})

