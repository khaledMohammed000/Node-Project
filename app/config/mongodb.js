var mongoose = require("mongoose");
var connection = require("./config");

module.exports = function () {
    console.log("connection to mongodb");
    mongoose.connect(connection.dbConnection);
};
