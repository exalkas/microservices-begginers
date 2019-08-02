const express = require('express');

const app = express();

app.get('/db', (req, res) => {
    const data = "Hello this is server microservices for beginners";
    res.send(data);
})

app.listen(4546, () => console.log("Server is up and listening at 4546"));

// const databaseFunction
// module.exports = {
//     databaseFunction: () => [{
//         title : "First post",
//         content: "First content"
//     }]
// }