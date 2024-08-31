const express = require('express');
const mongoose = require('mongoose');
const router = require('./routes/routes');
require('dotenv').config();

const app = express();
app.use(express.json())


const port = process.env.PORT || 5000; 
const DB = `mongodb+srv://${process.env.MongoDBUserName}:${process.env.MongoDBPassword}@bloggerproject.blenntu.mongodb.net/ALLMovies`;

mongoose.connect(DB)
.then(()=>{ console.log('Successfully Connected DataBase 😊💕😊')})
.catch((e)=>{console.log(e)})

app.use('/',router);

app.listen(port,()=>{console.log(`Server is Running ${port}💕`)})