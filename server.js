const express = require('express');

const app = express();

const axios = require('axios');

const {databaseFunction} = require('./database');

app.get('/', async (req, res) => {
    try {
        const result = await axios.get('http://localhost:4546/db');
        res.send(result.data);    
    } catch (error) {
        
    }
    
});

app.listen(3434, () => {
    console.log("Server microservices-beginners is up at 3434");
})