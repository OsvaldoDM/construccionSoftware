const express = require('express');
const router = express.Router();
const controller = require('../controllers/anime.controller');

router.get('/login',controller.getLogin);
router.get('/',controller.getPrincipal);
router.get('/catalogo',controller.getCatalogo);
router.get('/votar',controller.getVotar);
router.get('/agregar',controller.getAgregar);
router.get('/catalogo/buscar/:valor', controller.getBuscar);
router.get('/preguntas',controller.getPreguntas);
router.get('/edit/:id',controller.getEdit);
router.get('/delete/:id',controller.getDelete);

router.post('/login',controller.postLogin);
router.post('/',controller.postPrincipal);
router.post('/agregar',controller.postAgregar);
router.post('/edit',controller.postEdit);

module.exports = router;