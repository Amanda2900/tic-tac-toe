/*-------------------------------- Constants --------------------------------*/
const winningCombos = [
  [0, 1, 2], //top across
  [3, 4, 5], //center across
  [6, 7, 8], //bottom across
  [0, 3, 6], //left down
  [1, 4, 7], //center down
  [3, 5, 8], //right down
  [0, 4, 8], //diagonal l-r
  [2, 4, 6] //diagonal r-l
];


/*---------------------------- Variables (state) ----------------------------*/
let boardSquares, turnOrder, winner;


/*------------------------ Cached Element References ------------------------*/

const gameStatus = document.querySelector('#message');

const squares = document.querySelectorAll('.square'); 
const board = document.querySelector('.board');

/*----------------------------- Event Listeners -----------------------------*/
board.addEventListener('click', handleClick);


/*-------------------------------- Functions --------------------------------*/

init();

function init() {
  boardSquares = [null, null, null, null, null, null, null, null];
  turnOrder = 1; //1 is player X, -1 is player O
  winner = null; // will hold either 1, -1, or T for tie

  render();
};

function render() {
  for (i = 0; i <= boardSquares.length; i++) {
    if (squares[i].innerText === 'X'){
      boardSquares[i] = 1;
      squares[i].style.backgroundColor = "blue";
    } else if(squares[i].innerText === 'O') {
      boardSquares[i] = -1;
      squares[i].style.backgroundColor = "red";
    } else {
      boardSquares[i] = null;
    }
    if (winner === 1) {
      'X has won the game!';
    } else if (winner === -1) {
      'O has won the game!';
    } else if (winner === 'T') {
      'The games ends in a tie!';
    } else {
      'The game is still in progress. It is (players) turn';
    }
  };
};

function handleClick(event) {

  let i = parseInt(event.target.id);

  if (boardSquares[i] !== null) {
    return;
  }
  if (winner !== null) {
    return;
  }
  if (boardSquares[i] === null && turnOrder === 1) {
    event.target.innerText = 'X';
    gameStatus.innerText = "It is O's turn"
  }
  if (boardSquares[i] === null && turnOrder === -1) {
    event.target.innerText = 'O';
    gameStatus.innerText = "It is X's turn"
  }

  boardSquares[i] = turnOrder; // update board index with the value of turn
  turnOrder = turnOrder * -1;
  render();
}

function getWinner() {
  winningCombos.forEach(function (array) {
    let counter = 0;
    array.forEach(function (element) {
      counter += boardSquares[element];
      if (Math.abs(counter) === 3) {
        winner === boardSquares[element]
        console.log(counter)
      }
      else {
        
        return null;
      }
    })
  }) 
}