const express = require('express');
const mongoose = require('mongoose');
const router = require('./routes/routes');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(express.json())
app.use(cors());

const port = process.env.PORT || 5000; 


mongoose.connect(process.env.DB)
.then(()=>{ console.log('Successfully Connected DataBase 😊💕😊')})
.catch((e)=>{console.log(e)})

app.use('/',router);

app.listen(port,()=>{console.log(`Server is Running ${port}💕`)})