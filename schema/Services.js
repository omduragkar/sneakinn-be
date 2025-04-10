const mongoose = require('mongoose');

const ServiceSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    variants: [
        {
            name: {
                type: String,
                required: true
            },
            price: {
                type: Number,
                required: true
            }
        }
    ],
    addons: [
        {
            name: {
                type: String,
                required: true
            },
            price: {
                type: Number,
                required: true
            }
        }
    ]
}, {
    timestamps: true
});

module.exports = mongoose.model('Service', ServiceSchema);