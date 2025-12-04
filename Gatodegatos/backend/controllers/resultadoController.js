import Resultado from '../models/Resultado.js';

const resultadoController = {
  async mostrarVistaResultados(req, res) {
    try {
      const resultados = await Resultado.obtenerTodos();
      
      res.render('resultados', {
        resultados: resultados || []
      });
    } catch (error) {
      console.error('Error mostrando vista:', error);
      res.status(500).send('Error cargando resultados');
    }
  },

  async crearResultado(req, res) {
    try {
      const { ganador, jugador_x, jugador_o } = req.body;
      
      if (!ganador) {
        return res.status(400).json({ 
          error: 'El campo "ganador" es requerido' 
        });
      }

      const id = await Resultado.crear({
        ganador,
        jugador_x: jugador_x || 'Jugador X',
        jugador_o: jugador_o || 'Jugador O',
      });

      res.status(201).json({ 
        success: true, 
        message: 'Resultado guardado',
        id 
      });
    } catch (error) {
      console.error('Error en crearResultado:', error);
      res.status(500).json({ 
        error: 'Error al guardar el resultado' 
      });
    }
  },

  async obtenerResultados(req, res) {
    try {
      const resultados = await Resultado.obtenerTodos();
      res.json({ 
        success: true, 
        count: resultados.length,
        data: resultados 
      });
    } catch (error) {
      res.status(500).json({ 
        error: 'Error al obtener resultados' 
      });
    }
  },

  async obtenerResultado(req, res) {
    try {
      const { id } = req.params;
      const resultado = await Resultado.obtenerPorId(id);
      
      if (!resultado) {
        return res.status(404).json({ 
          error: 'Resultado no encontrado' 
        });
      }
      
      res.json({ 
        success: true, 
        data: resultado 
      });
    } catch (error) {
      res.status(500).json({ 
        error: 'Error al obtener resultado' 
      });
    }
  },

  async eliminarResultado(req, res) {
    try {
      const { id } = req.params;
      const eliminados = await Resultado.eliminar(id);
      
      if (eliminados === 0) {
        return res.status(404).json({ 
          error: 'Resultado no encontrado' 
        });
      }
      
      res.json({ 
        success: true, 
        message: 'Resultado eliminado' 
      });
    } catch (error) {
      res.status(500).json({ 
        error: 'Error al eliminar resultado' 
      });
      console.error('Error en eliminarResultado:', error);
    }
  }
};

export default resultadoController;