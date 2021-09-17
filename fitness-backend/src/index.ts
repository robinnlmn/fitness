require('dotenv').config()

const express = require('express');
const app = express();
const port = process.env.PORT || 8080;

const mongoose = require('mongoose');

app.use(express.urlencoded({ extended: false }));

mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true });
const db = mongoose.connection
db.on('error', (err: any) => console.error(err))
db.once('open', () => console.log("connected to database"))

app.use(express.json())

const usersRouter = require('./routes/users.js')
app.use('/users', usersRouter)

app.listen(port, () => {
    console.log(`listening on port: ${port}`);
});