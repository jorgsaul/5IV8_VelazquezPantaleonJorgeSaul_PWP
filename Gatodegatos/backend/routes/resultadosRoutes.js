import express from 'express';
import resultadoController from '../controllers/resultadoController.js';

const router = express.Router();
router.get('/vista', resultadoController.mostrarVistaResultados);

router.post('/', resultadoController.crearResultado);
router.get('/', resultadoController.obtenerResultados);
router.get('/:id', resultadoController.obtenerResultado);
router.delete('/:id', resultadoController.eliminarResultado);

export default router;