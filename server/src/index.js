
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const router = require('./routes/routes')
require('dotenv').config()

const app = express()

app.use(express.json())
app.use(cors())

const portId = 5000 || process.env.PORT ;


mongoose.connect(process.env.MongooseDB)
    .then(() => { console.log('MongoDB connected') })
    .catch((err) => { console.log(err); })

app.use('/',router) 
app.listen(portId, () => { console.log(`Server is running ${portId}`); })