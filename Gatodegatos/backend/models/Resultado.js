import pool from '../config/database.js';

const Resultado = {
  async crear(datos) {
    const { ganador, jugador_x, jugador_o } = datos;
    const [result] = await pool.execute(
      'INSERT INTO resultados (ganador, jugador_x, jugador_o) VALUES (?, ?, ?)',
      [ganador, jugador_x, jugador_o]
    );
    return result.insertId;
  },
  
  async obtenerTodos() {
    const [rows] = await pool.execute(
      'SELECT * FROM resultados ORDER BY fecha DESC LIMIT 20'
    );
    return rows;
  },
  
  async obtenerEstadisticas() {
    const [rows] = await pool.execute(`
      SELECT 
        ganador,
        COUNT(*) as total,
        AVG(duracion_minutos) as promedio_minutos
      FROM resultados 
      GROUP BY ganador
    `);
    return rows;
  },

  async eliminar(id) {
    const [result] = await pool.execute(
      'DELETE FROM resultados WHERE id = ?',
      [id]
    );
    return result.affectedRows;
  }
};

export default Resultado;