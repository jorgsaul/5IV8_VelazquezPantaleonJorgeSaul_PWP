export class Game {
  constructor() {
    function plantillaTablero() {
      return [
        ['', '', ''],
        ['', '', ''],
        ['', '', ''],
      ]
    }

    this.mainBoard = [];
    for(let i = 0; i < 3; i++) {
      this.mainBoard[i] = [];
      for(let j = 0; j < 3; j++) {
        this.mainBoard[i][j] = plantillaTablero();
      }
    }

    this.globalBoard = [
      ['', '', ''],
      ['', '', ''],
      ['', '', '']
    ];

    this.currentPlayer = "X";
    this.currentGrid = null;
    this.winner = null;
    this.gameOver = false;
  }
  
  makeMove(mainRow, mainCol, miniRow, miniCol) {
    console.log(`🔍 makeMove: [${mainRow},${mainCol}][${miniRow},${miniCol}]`);
    
    if (this.globalBoard[mainRow][mainCol] !== '') {
      console.log(`❌ Grid [${mainRow},${mainCol}] ya está ganado por ${this.globalBoard[mainRow][mainCol]}`);
      return {
        success: false,
        message: `Este grid ya fue ganado por ${this.globalBoard[mainRow][mainCol]}`
      };
    }

    if(this.mainBoard[mainRow][mainCol][miniRow][miniCol] !== '') {
      return {
        success: false,
        message: 'Celda ocupada'
      };
    }

    const jugadorQueMueve = this.currentPlayer;
    
    this.mainBoard[mainRow][mainCol][miniRow][miniCol] = jugadorQueMueve;

    const ganadorPequeño = this.checkSmallBoardWinner(mainRow, mainCol);
    
    if(ganadorPequeño && ganadorPequeño !== 'tie') {
      console.log(`🎉 ¡${ganadorPequeño} ganó grid [${mainRow},${mainCol}]!`);
      this.globalBoard[mainRow][mainCol] = ganadorPequeño;
    }

    const ganadorGlobal = this.checkWinner(this.globalBoard);
    
    if(ganadorGlobal && ganadorGlobal !== 'tie') {
      this.winner = ganadorGlobal;
      this.gameOver = true;
      console.log(`🏆 ¡${ganadorGlobal} GANÓ EL JUEGO!`);
      return {
        success: true,
        winner: ganadorGlobal,
        smallWinner: ganadorPequeño,
        gameOver: true,
        player: jugadorQueMueve
      };
    }

    this.currentPlayer = this.currentPlayer === "X" ? "O" : "X";
    
    return {
      success: true,
      winner: null,
      smallWinner: ganadorPequeño,
      gameOver: false,
      nextPlayer: this.currentPlayer,
      player: jugadorQueMueve
    };
  }

  checkWinner(board) {
    for (let row = 0; row < 3; row++) {
      if (board[row][0] !== '' && 
          board[row][0] === board[row][1] && 
          board[row][1] === board[row][2]) {
        return board[row][0];
      }
    }
    
    for (let col = 0; col < 3; col++) {
      if (board[0][col] !== '' && 
          board[0][col] === board[1][col] && 
          board[1][col] === board[2][col]) {
        return board[0][col];
      }
    }
    
    if (board[0][0] !== '' && 
        board[0][0] === board[1][1] && 
        board[1][1] === board[2][2]) {
      return board[0][0];
    }
    
    if (board[0][2] !== '' && 
        board[0][2] === board[1][1] && 
        board[1][1] === board[2][0]) {
      return board[0][2];
    }
    
    let hayEspacio = false;
    for (let row = 0; row < 3; row++) {
      for (let col = 0; col < 3; col++) {
        if (board[row][col] === '') {
          hayEspacio = true;
        }
      }
    }
    
    if (!hayEspacio) return 'tie';
    
    return null;
  }

  checkSmallBoardWinner(bigRow, bigCol) {
    return this.checkWinner(this.mainBoard[bigRow][bigCol]);
  }

}