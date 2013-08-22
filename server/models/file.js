var mongoose = require('mongoose');

var fileSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('File', fileSchema);