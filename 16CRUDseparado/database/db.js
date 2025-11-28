import mysql from 'mysql2';

const bd = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'n0m3l0',
  database: 'circulo_infernal'
})

export const dbConection = bd;