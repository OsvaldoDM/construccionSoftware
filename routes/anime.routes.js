const express = require('express');
const router = express.Router();
const controller = require('../controllers/anime.controller');
const auth = require('../util/isAuth');

router.get('/login',controller.getLogin);
router.get('/',auth,controller.getPrincipal);
router.get('/catalogo',auth,controller.getCatalogo);
router.get('/votar',auth,controller.getVotar);
router.get('/agregar',auth,controller.getAgregar);
router.get('/preguntas',auth,controller.getPreguntas);
router.get('/edit/:id',auth,controller.getEdit);
router.get('/delete/:id',auth,controller.getDelete);
router.get('/logout',auth,controller.getLogout);
router.get('/registrar',controller.getRegistrar);
router.get('/upload',auth,controller.getUpload);
router.get('/catalogo/buscar/:valor',auth,controller.getBuscar);

router.post('/login',controller.postLogin);
router.post('/',auth,controller.postPrincipal);
router.post('/agregar',auth,controller.postAgregar);
router.post('/edit',auth,controller.postEdit);
router.post('/registrar',controller.postRegistrar);
router.post('/upload',auth,controller.postUpload);


module.exports = router;