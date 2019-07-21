const express = require('express');

const app = express();
const {databaseFunction} = require('./database');

app.get('/', (req, res) => {
    res.send(databaseFunction());
});

app.listen(3434, () => {
    console.log("Server microservices-beginners is up at 3434");
})