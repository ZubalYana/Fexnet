const express = require('express');
const multer = require('multer');
const File = require('../models/fileModel');
const code = require('../utils/generatecode');
const generateCode = require('../utils/generatecode');
const router = express.Router();

const storage = multer.diskStorage({
    destination: (req, file, cb)=>{
        cb(null, 'uploads/')
    },
    filename: (req, file, cb)=>{
        cb(null, `${Date.now()}-${file.originalname}}`)
    }
})

const upload = multer({storage})

router.post('/upload', upload.single('file'), async (req,res)=>{
    try{
        const code = generateCode()
        const newFIle = new File({
            file: req.file.fieldname,
            file: req.file.originalname,code

        })

        await newFIle.save();
        res.sendStatus(201).json({message: `File uploaded successfully: ${code}`})
    }catch(err){
        res.sendStatus(201).json({message: err})
    }
})


router.get('/download/:code', async (req, res)=>{
    try{
        const file = await File.findOne({code: req.params.code});
        if(!file){
            return res.sendStatus(404).json({message: 'File not found'})
        }
        res.download(`/uploads/${file.filename}`, file.originalname);
    }catch(err){
        res.sendStatus(201).json({message: err})
    }
})
module.exports = router;