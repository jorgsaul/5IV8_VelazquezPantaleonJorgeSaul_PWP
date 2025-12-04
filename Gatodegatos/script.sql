create database juegos_gato;
use juegos_gato;
CREATE TABLE resultados (
    id INT PRIMARY KEY AUTO_INCREMENT,
    ganador VARCHAR(50) NOT NULL,
    jugador_x VARCHAR(100) NOT NULL,
    jugador_o VARCHAR(100) NOT NULL,
    fecha TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);