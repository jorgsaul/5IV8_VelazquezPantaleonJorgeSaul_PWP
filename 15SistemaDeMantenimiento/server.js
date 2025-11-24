const bd = require('./config/database');
const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const ejs = require('ejs');

const app = express();
const port = 3000;

bd.connect((error) => {
  error ?  console.log('Error de conexion en la base de datos' + error) : console.log('conexion exitosa')
});

