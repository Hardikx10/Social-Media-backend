const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const UserSubmission = require('../models/UserSubmission');

// Set up storage engine for multer
const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        // Set destination to the correct uploads directory
        cb(null, path.join(__dirname, '../uploads')); // This points to src/uploads
    },
    filename: function(req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname);
    }
});

// File filter to accept images only
const fileFilter = (req, file, cb) => {
    const allowedTypes = /jpeg|jpg|png|gif/;
    const extname = allowedTypes.test(path.extname(file.originalname).toLowerCase());
    const mimetype = allowedTypes.test(file.mimetype);

    if (mimetype && extname) {
        return cb(null, true);
    } else {
        cb('Error: Images Only!');
    }
};

const upload = multer({ storage, fileFilter });


router.post('/', upload.array('images'), async (req, res) => {
    try {
        const { name, socialHandle } = req.body;
        const images = req.files.map(file => `${req.protocol}://${req.get('host')}/uploads/${file.filename}`);

        const newSubmission = new UserSubmission({
            name,
            socialHandle,
            images
        });

        await newSubmission.save();
        res.status(201).json({ message: 'Submission successful', submission: newSubmission });
    } catch (error) {
        res.status(500).json({ message: 'Server Error', error });
    }
});


router.get('/', async (req, res) => {
    try {
        const submissions = await UserSubmission.find().sort({ createdAt: -1 });
        res.status(200).json(submissions);
    } catch (error) {
        res.status(500).json({ message: 'Server Error', error });
    }
});

module.exports = router;

