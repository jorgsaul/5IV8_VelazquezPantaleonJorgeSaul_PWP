//necesitamos crear un crud de cursos

//necesitamos es la conexion con la bd
const dbConection = require('../database/db.js');

//vamos a crear los endponits
const getCursos = (req, res) => {
  try{
    dbConection.query('SELECT * FROM cursos', (error, results) => {
  if(error) {
    return res.status(400).json({ message: 'Error al obtener los cursos' });
  } else {
    return res.status(200).json(results);  
  }
  })
  }catch (error) {
    return res.status(500).json({ message: 'Error del servidor' });
  }
}

const getCursosByid = (req, res) => {
  try{
    dbConection.query('SELECT * FROM cursos WHERE id = ?', [id], (error, results) => {
    if(error) {
      return res.status(400).json({ message: 'Error al obtener los cursos' });
    } else {
      return res.status(200).json(results);  
    }
  })  
  }catch (error) {
    return res.status(500).json({ message: 'Error del servidor' });
  } 
}

module.exports = {
  getCursos,
  getCursosByid
}