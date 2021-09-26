const mongoose = require('mongoose');
const { Schema } = mongoose;
const Model = mongoose.model;

const imageSchema = new Schema({
    test: {
        type: String
    }
});
const model = new Model("Images", imageSchema);
module.exports = model