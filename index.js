const express = require('express');

const bodyParser = require('body-parser')

const characters_roots = require('./src/roots/characters_root')

const app = express();
const port = 3002;

app.use(bodyParser.json());


//roots

app.use('/api/characters', characters_roots);

app.listen(port, ()=>{
    console.log("api excecuting on http://localhost:"+ port);
})