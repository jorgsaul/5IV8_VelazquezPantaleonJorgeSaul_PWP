//este es el middleware

const { Router } = require('express');

//definir la ruta del consumo del endpoint

const cursosController = require('../controllers/cursosControl.js');

const cursosRouter = Router();

//definir cada endpoint

cursosRouter.get('/', cursosController.getCursos);
cursosRouter.get('/:id', cursosController.getCursosByid);
/*
cursosRouter.post('/registrar-curso', cursosController.postCurso);
cursosRouter.put(':id', cursosController.putCurso);
cursosRouter.delete(':id', cursosController.deleteCurso);
*/
module.exports = cursosRouter;