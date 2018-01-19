const express = require('express')
const router = express.Router()

const labelController = require('../controllers/label-controller')

router.route('/labels').get(labelController.get)
router.route('/labels').post(labelController.add)
router.route('/labels/:key').get(labelController.getByKey)
router.route('/labels/:key').put(labelController.edit)
router.route('/labels/:key').delete(labelController.deleteByKey)

module.exports = router