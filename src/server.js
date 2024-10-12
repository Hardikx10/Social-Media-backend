const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

const submissionsRoute = require('./routes/submissions');

const app = express();
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));



app.use('/api/submissions', submissionsRoute);


mongoose.connect(process.env.MONGO_URI)

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
