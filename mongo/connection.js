require("dotenv").config()
const mongoose = require("mongoose");

const url = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@imagesapi.ot9sj.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;

mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, () => {
    console.log("*".repeat(30));
    console.log("Database connected successful...");
    console.log("*".repeat(30));
})

module.exports.DB_CONNECTION = mongoose.connection;