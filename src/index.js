const express = require('express')
const mongoose = require('mongoose')
const axios = require('axios')
const route = require('./route/route')
const app = express()

app.use(express.json())

mongoose.connect("mongodb+srv://Nikhil99:YMdCuusWj73Jr20o@cluster0.wtmewxp.mongodb.net/nikhil9908-db", {
    useNewUrlParser:true
})

.then(()=> console.log("MongoDB is connected"))
.catch((error)=> console.log(error))

app.use('/',route)

app.listen(process.env.PORT || 3000 , function () {
    console.log("Express is running on PORT" , (process.env.PORT || 3000));
})