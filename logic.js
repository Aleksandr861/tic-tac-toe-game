let players = ['x', 'o'];
let activePlayer = 0;
let board;

function startGame() {
  board = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
  ];
  activePlayer = 0;
  renderBoard(board);
}


function click(row, column) {
  board[row][column] = players[activePlayer];
  renderBoard(board);
  if (board[0][0] === board[1][1] && board[1][1] === board[2][2] && board[0][0] != '' || board[0][0] === board[0][1] &&       
      board[0][1] === board[0][2] && board[0][0] != '' || board[1][0] === board[1][1] &&       
      board[1][1] === board[1][2] && board[1][0] != '' || board[2][0] === board[2][1] &&       
      board[2][1] === board[2][2] && board[2][0] != '' || board[0][0] === board[0][1] &&       
      board[0][1] === board[0][2] && board[0][0] != '' || board[0][0] === board[1][0] &&       
      board[1][0] === board[2][0] && board[0][0] != '' || board[0][1] === board[1][1] &&       
      board[1][1] === board[2][1] && board[0][1] != '' || board[0][2] === board[1][2] &&       
      board[1][2] === board[2][2] && board[0][2] != '' || board[0][2] === board[1][1] &&       
      board[1][1] === board[2][0] && board[0][2] != ''){
      showWinner(activePlayer);
      return;
    }
  activePlayer = Number(!Boolean(activePlayer));
}
