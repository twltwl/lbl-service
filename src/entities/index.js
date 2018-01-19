const mongoose = require('mongoose')
mongoose.connect(`mongodb://${process.env.MONGO_URL}`)

module.exports = {
    label: require('./label')
}