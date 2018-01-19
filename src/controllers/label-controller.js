const labelRepo = require('../repos/label-repo')

module.exports.add = async (req, res, next) => {
    const label = await labelRepo.add(req.body)
    return res.status(201).json(label)
}

module.exports.get = async (req, res, next) => {
    const labels = await labelRepo.get()
    return res.status(200).json(labels)
}

module.exports.edit = async (req, res, next) => {
    const key = req.params.key
    const obj = req.body
    const label = await labelRepo.edit(key, obj)

    if(!label) return res.status(404).send()
    return res.status(200).json(label)
}

module.exports.getByKey = async (req, res, next) => {
    const key = req.params.key
    const label = await labelRepo.getByKey(key)
    
    if(!label) return res.status(404).send()
    return res.status(200).json(label)
}

module.exports.deleteByKey = async (req, res, next) => {
    const key = req.params.key
    const label = await labelRepo.deleteByKey(key)

    if(!label) return res.status(404).send()
    return res.status(200).json(label)
}