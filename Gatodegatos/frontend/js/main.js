import { Game } from "./game.js";

let game;
let turnoTexto;

const initGame = () => {
  game = new Game();
  actualizarTurno();
};

async function guardarResultados(ganador){
  try {
    let ganadorBD = ganador;
    console.log(ganadorBD)
    if (!ganador || ganador === 'EMPATE' || ganador === 'tie') {
      ganadorBD = 'EMPATE';
    }
    
    const response = await fetch('/api/resultados', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        ganador: ganadorBD,
        jugador_x: 'Jugador X',
        jugador_o: 'Jugador O'
      })
    });
    
    const data = await response.json();
    
    if (data.success) {
      console.log('✅ Resultado guardado en BD con ID:', data.id);
      return true;
    } else {
      console.error('❌ Error guardando resultado:', data.error);
      return false;
    }
  } catch (error) {
    console.error('❌ Error de conexión:', error);
    return false;
  }
}

const actualizarCelda = (celda, jugador) => {
  celda.classList.remove('x-mark', 'o-mark');
  if (jugador === 'X') {
    celda.classList.add('x-mark');
  } else {
    celda.classList.add('o-mark');
  }
};

const actualizarTurno = () => {
  if (!turnoTexto) {
    turnoTexto = document.createElement('div');
    turnoTexto.id = 'turno-texto';
    turnoTexto.style.cssText = `
      position: fixed;
      top: 20px;
      left: 20px;
      font-size: 20px;
      font-weight: bold;
      color: #333;
      background: white;
      padding: 10px 20px;
      border-radius: 8px;
      box-shadow: 0 2px 5px rgba(0,0,0,0.1);
    `;
    document.body.appendChild(turnoTexto);
  }
  turnoTexto.textContent = `Turno de: ${game.currentPlayer}`;
};

document.addEventListener("DOMContentLoaded", () => {
  initGame();
  
  const celdas = document.querySelectorAll('.col1');
  
  celdas.forEach((celda) => {
    celda.addEventListener('click', () => {
      const idParts = celda.id.split('-');
      
      if (idParts.length >= 5 && idParts[0] === 'cell') {
        const mainRow = parseInt(idParts[1]);
        const mainCol = parseInt(idParts[2]);
        const miniRow = parseInt(idParts[3]);
        const miniCol = parseInt(idParts[4]);
        
        if (!game) return;
        
        const resultado = game.makeMove(mainRow, mainCol, miniRow, miniCol);
        
        if (resultado && resultado.success) {
          actualizarCelda(celda, resultado.player);
          
          if (resultado.smallWinner && resultado.smallWinner !== 'tie') {
            alert(`¡${resultado.smallWinner} ganó un grid!`);
          }
          
          if (resultado.gameOver && resultado.winner) {
            turnoTexto.textContent = `🏆 ¡${resultado.winner} GANÓ!`;
            turnoTexto.style.background = '#FEF3C7';
            celdas.forEach(c => c.style.pointerEvents = 'none');

            guardarResultados(resultado.winner);
          } else {
            actualizarTurno();
          }
          
        } else {
          alert(resultado.message || 'Movimiento inválido');
        }
      }
    });
  });
  
  const botonReiniciar = document.createElement('button');
  botonReiniciar.textContent = 'Reiniciar';
  botonReiniciar.onclick = () => {
    celdas.forEach(celda => {
      celda.classList.remove('x-mark', 'o-mark');
      celda.style.pointerEvents = 'auto';
    });
    turnoTexto.style.background = 'white';
    initGame();
  };
  
  Object.assign(botonReiniciar.style, {
    position: 'fixed',
    bottom: '20px',
    right: '20px',
    padding: '12px 24px',
    background: '#10B981',
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    fontWeight: 'bold',
    cursor: 'pointer'
  });
  
  document.body.appendChild(botonReiniciar);
});