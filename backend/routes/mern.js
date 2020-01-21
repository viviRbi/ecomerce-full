const express = require('express')
const router = express.Router()
const mernController = require("../controllers/mern")
router.get('/', mernController.get)
router.post('/', mernController.post)
router.put('/:id', mernController.put)
router.delete('/:id', mernController.delete)


module.exports = router