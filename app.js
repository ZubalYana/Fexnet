const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000
const mongoose = require('mongoose')
const dotenv = require('dotenv').config();
const fileRoutes = require('./routes/fileroutes');
const multer = require('multer');

app.use(express.json())
app.use(express.static('public'))
app.use('/uploads', express.static('uploads'))
app.use('/api', fileRoutes)
mongoose.connect(process.env.MONGODB_URI)
.then(()=>{
    console.log(`Connected to MongoDB`)
})


app.get('/', (req, res)=>{
    res.sendFile(__dirname, 'public', 'index.html')
})
app.listen(PORT, ()=>{
    console.log(`Server runs on PORT: ${PORT}`)
})