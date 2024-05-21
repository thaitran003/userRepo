require("dotenv").config();
const { HTTP_HOST, HTTP_PORT } = process.env;
const express = require('express')
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();

const MongoDB = require('./libs/mongodb')
MongoDB.init()

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const IndexRouter = require("./routes/index");
IndexRouter.configRoute(app);

app.use(cors());
//handle error
app.use((err, req, res, next) => {
  console.log(err, res);
  next(err);
});

const server = app.listen(HTTP_PORT, HTTP_HOST, function () {
  console.log(`Server listen on host: http://${HTTP_HOST}:${HTTP_PORT} `);
});




