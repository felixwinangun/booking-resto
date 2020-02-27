require('dotenv').config()
const router = require('./routes');
const express = require('express');
const session = require('express-session');
const app = express();
const PORT = process.env.PORT;

app.set("view engine", "ejs");
app.use(express.static(__dirname + '/public'));
app.use(express.urlencoded({ extended: true }))
app.use(session({
    secret: 'secret',
    resave: false,
    saveUninitialized: false
}));
app.use(router);

app.listen(PORT, () => console.log("booking-resto is listening to", PORT))