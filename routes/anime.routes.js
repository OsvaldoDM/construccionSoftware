const express = require('express');
const router = express.Router();
const controller = require('../controllers/anime.controller')

router.get('/',controller.getPrincipal);
router.post('/',controller.postPrincipal)
router.get('/catalogo',controller.getCatalogo);
router.get('/votar',controller.getVotar);

module.exports = router;