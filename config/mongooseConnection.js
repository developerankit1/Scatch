const mongoose = require('mongoose');

mongoose.connect("mongodb://127.0.0.1:27017/scatch").then(() => {
    console.log("Connected to MongoDB");
}).catch((err) => {
    console.log(err, "MongoDb Connection Failed!");
});

module.exports = mongoose.connection;