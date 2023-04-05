const express = require('express');
const router = express.Router();
const controller = require('../controllers/anime.controller');

router.get('/login',controller.getLogin);
router.post('/login',controller.postLogin);
router.get('/',controller.getPrincipal);
router.post('/',controller.postPrincipal);
router.get('/catalogo',controller.getCatalogo);
router.get('/votar',controller.getVotar);
router.get('/agregar',controller.getAgregar);
router.post('/agregar',controller.postAgregar);
router.get('/catalogo/buscar/:valor', controller.getBuscar);
router.get('/preguntas',controller.getPreguntas);
module.exports = router;