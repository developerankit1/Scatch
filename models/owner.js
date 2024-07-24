const mongoose = require('mongoose');

const ownerSchema = mongoose.Schema({
    fullname: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },

    order: {
        type: [],
        default: [],
    },
    gst: {
        type: String,
        required: true,
    },
    picture: {
        type: String,
        required: true,
    },
});

module.exports = mongoose.model("owner", ownerSchema);