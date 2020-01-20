const express = require("express");
const mongoose = require('mongoose')

require('dotenv').config({path: __dirname + '/config/.env'})

const app = express();

mongoose.connect(process.env.BD_STRING,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

app.use(express.json());

const rotas = require('./routes/routes')
rotas(app);

app.listen(4000);