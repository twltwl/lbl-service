const models = require('../entities')

module.exports.add = async (obj) => {
    const model = new models.label(obj)
    const label = await model.save()

    return label
}

module.exports.get = async () => {
    const labels = await models.label.find()

    return labels
}

module.exports.getByKey = async (key) => {
    const label = await models.label.findOne({
        key: key
    })
    return label
}

module.exports.edit = async (key, obj) => {
    const label = await models.label.findOneAndUpdate({
        key: key
    }, obj, { new: true })
    return label
}

module.exports.deleteByKey = async (key) => {
    const label = await models.label.findOneAndRemove({
        key: key
    })
    return label
}