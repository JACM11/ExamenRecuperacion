const { Router } = require('express');
const EncuentaController = require('../controllers/encuesta');
const router = Router();

router.get('/', EncuentaController.index);

router.get('/:id', EncuentaController.get);

router.post('/', EncuentaController.create);

router.patch('/:id', EncuentaController.update);

router.delete('/:id', EncuentaController.delete);

module.exports = router;