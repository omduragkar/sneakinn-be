const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
    itemName: {
        type: String,
        required: true
    },
    itemPhoto: {
        type: String,
        required: true
    },
    itemState: {
        type: String,
        required: false,
    },
    itemType: {
        type: String,
        enum: ['SNEAKER', 'GEAR', 'CHAPPAL', 'SANDALS', 'HEELS', 'BOOTS', 'SLIPPERS', 'OTHER'],
        required: true
    }
});

module.exports = mongoose.model('Items', itemSchema);