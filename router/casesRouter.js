const express = require('express');
const controllers = require('../controllers');

const router = express.Router();

router.get('/', controllers.cases.findAll);

router.get('/:id', controllers.cases.findById);

router.post('/', controllers.cases.create);

module.exports = router;