const http = require('node:http');
const express = require('express')
require("dotenv").config();
const { HOSTNAME, PORT } = process.env;


const MongoDB = require('./libs/mongodb')
MongoDB.init()
var fs = require('fs');

const app = express()
app.use(express.static(__dirname + '/pages'));

app.get('/', (req, res) => {
  res.render('index.html');
})

app.listen(PORT, HOSTNAME, () => {
  console.log(`App listening on http://${HOSTNAME}:${PORT}`)
})




