var mongoose = require('mongoose');
require("dotenv").config();

const {
    DB_HOST,
    DB_PORT,
    DB_DATABASE
} = process.env;
let mongoClient = null;
module.exports = {
    init: () => {
        mongoose.connect(
            `mongodb://${DB_HOST}:${DB_PORT}/${DB_DATABASE}`,
        );
        mongoClient = mongoose.connection;

        mongoClient.on('error', console.error.bind(console, 'connection error:'));

        mongoClient.once('open', function callback() {
            console.log("connect to mongo is successfuly!!!");
        });
    },

}