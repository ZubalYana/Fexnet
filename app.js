const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const fileRoutes = require('./routes/fileroutes');
const path = require('path');
const File = require('./models/fileModel');

dotenv.config();

const app = express();

mongoose.connect(process.env.MONGODB_URI)
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Could not connect to MongoDB', err));

app.use(express.json());
app.use('/uploads', express.static('uploads'));
app.use('/api', fileRoutes);
app.use(express.static('public'));

app.get('/file-count', async (req, res) => {
    try {
        const filesAmount = await File.countDocuments();
        res.json({ count: filesAmount });
    } catch (error) {
        res.status(500).json({ error: 'Error fetching file count' });
    }
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});



