const express = require("express");
const bodyParser = require("body-parser");
const db = require('./queries');
const app = express();

app.use(
    bodyParser.urlencoded({
        extended: true
    })
)

app.get('/robot', db.getRobots)
app.get('/robot/:id', db.getRobotyId)
app.post('/robot', db.createRobot)

app.listen(3000)

// ^ server side language