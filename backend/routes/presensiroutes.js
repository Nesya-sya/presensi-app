const express = require('express');
const router = express.Router();
const { test } = require('../controllers/presensiController');

router.get('/test', test);

module.exports = router;
