require('dotenv').config()
const router = require('./routes');
const express = require('express');
const session = require('express-session');
const app = express();
const port = process.env.PORT || 3000;

app.set("view engine", "ejs");
app.use(express.static(__dirname + '/public'));
app.use(express.urlencoded({ extended: true }))
app.use(session({
    secret: 'secret',
    resave: false,
    saveUninitialized: false
}));
app.use(router);

app.listen(port, () => console.log("booking-resto is listening to", port))