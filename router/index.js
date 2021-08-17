const express = require('express');
const router = express.Router();

const casesRouter = require('./casesRouter');
const petsRouter = require('./petsRouter');

router.use('/pets', petsRouter);
router.use('/cases', casesRouter);

module.exports = router;