const mongoose = require('mongoose')

module.exports = mongoose.model('label', {
    key: String,
    value: String,
    tags: [
        {
            key: String,
            value: String
        }
    ]
})