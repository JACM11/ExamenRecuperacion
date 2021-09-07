const { Router } = require('express');
const router = Router();
const EncuestaController = require('../controller/encuesta');

router.get('/',EncuestaController.index);

router.get('/add',EncuestaController.vistaAgregar);

router.post('/add', EncuestaController.create)

router.post('/editar/:id',EncuestaController.edit);

router.get('/edit/:id', EncuestaController.vistaEditar);

router.get('/delete/:id', EncuestaController.delete);

module.exports = router;