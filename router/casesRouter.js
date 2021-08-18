const express = require('express');
const router = express.Router();

router.get('/', async function(_, res) {
    res.send(501)
});

router.get('/:id', async function(_, res) {
    res.send(501)  
});

router.post('/', async function(_, res) {
    res.send(501)
});

module.exports = router;