const mongoose = require('mongoose');
const { Schema } = mongoose;
const Model = mongoose.model;

const imageSchema = new Schema({
    creator: {
        type: String
    },
    location: {
        type: String
    },
    title: {
        type: String
    },
    createdAt: {
        type: String
    },
    url: {
        type: String
    },
    secureUrl: {
        type: String
    }
});
const model = new Model("Images", imageSchema);
module.exports = model