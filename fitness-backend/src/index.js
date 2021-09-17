require('dotenv').config();
var express = require('express');
var app = express();
var port = process.env.PORT || 8080;
var mongoose = require('mongoose');
app.use(express.urlencoded({ extended: false }));
mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true });
var db = mongoose.connection;
db.on('error', function (err) { return console.error(err); });
db.once('open', function () { return console.log("connected to database"); });
app.use(express.json());
var usersRouter = require('./routes/users.js');
app.use('/users', usersRouter);
app.listen(port, function () {
    console.log("listening on port: " + port);
});
