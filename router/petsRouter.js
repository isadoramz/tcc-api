const express = require('express');
const controllers = require('../controllers');

const router = express.Router();

router.get('/', async function(_, res) {
    res.send(501)
});

router.get('/:id', async function(_, res) {
    res.send(501)
});

router.post('/', controllers.pets.create);