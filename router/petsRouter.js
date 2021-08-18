const express = require('express');
const controllers = require('../controllers');

const router = express.Router();

router.get('/', controllers.pets.findAll);

router.get('/:id', controllers.pets.findById);

router.post('/', controllers.pets.create);

module.exports = router;