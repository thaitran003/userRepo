var mongoose = require('mongoose');
require("dotenv").config();

const {DB_URL} = process.env;
let mongoClient = null;
module.exports = {
    init: () => {
        mongoose.connect(
            DB_URL
        )
        mongoClient = mongoose.connection;
        mongoClient.on('error', console.error.bind(console, 'connection error:'));
        mongoClient.once('open', function callback() {
            console.log("connect to mongo is successfuly!!!");
        });
    },

}