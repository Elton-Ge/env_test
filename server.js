const express = require('express');
const dotenv = require('dotenv');

dotenv.config()
const app = express();
app.get("/welcome",(req, res) => {
    res.send({message: 'Welcome'})
})

const PORT=  process.env.PORT || 5050;
console.log(PORT,"localPORT");
app.listen(PORT,() => {
    console.log("server is going on"+PORT)
})
