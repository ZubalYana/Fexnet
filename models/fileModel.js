const mongoose = require('mongoose')
const fileSchema = new mongoose.Schema({
    filename:{
        type:String,
        required: true
    },
    originalname:{
        type:String,
        required: true
    },
    code:{
        type:String,
        required: true,
        unique: true
    },
    uploaded:{
        type:Date,
        default: Date.now(),
    },
})
const file = mongoose.model('File', fileSchema)
module.exports = file;