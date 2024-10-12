const mongoose = require('mongoose');

const UserSubmissionSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    socialHandle: {
        type: String,
        required: true
    },
    images: [{
        type: String, // URL or path to the image
        required: true
    }],
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('UserSubmission', UserSubmissionSchema);
