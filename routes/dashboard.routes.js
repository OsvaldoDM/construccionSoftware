const express = require('express');
const router = express.Router();
const control = require('../controllers/dashboard.controller')

router.get('/',control.getHome)
router.get('/profile',control.getProfile)

module.exports = router;