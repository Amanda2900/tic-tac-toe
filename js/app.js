/*-------------------------------- Constants --------------------------------*/
const winningCombos = [
  [0, 1, 2], //top across
  [3, 4, 5], //center across
  [6, 7, 8], //bottom across
  [0, 3, 6], //left down
  [1, 4, 7], //center down
  [2, 5, 8], //right down
  [0, 4, 8], //diagonal l-r
  [2, 4, 6] //diagonal r-l
];


/*---------------------------- Variables (state) ----------------------------*/
let boardSquares, turnOrder, winner;


/*------------------------ Cached Element References ------------------------*/

const gameStatus = document.querySelector('#message');
const replayBtn = document.querySelector('#replay-button');
const squares = document.querySelectorAll('.square'); 
const board = document.querySelector('.board');
const form = document.querySelector("form");

/*----------------------------- Event Listeners -----------------------------*/
board.addEventListener('click', handleClick);
form.addEventListener("reset", init);

/*-------------------------------- Functions --------------------------------*/

init();

function init() {

  // set array elements to null
  boardSquares = [null, null, null, null, null, null, null, null, null];
  // set the turnOrder back to 1(X)
  turnOrder = 1;
  // set winner to null
  winner = null; 
  // reset game message
  gameStatus.innerText = "Let's play! X goes first";
  // clear out the inner text from the squares and clears the color
  squares.forEach(element => element.innerText = '');
  squares.forEach(element => element.style.backgroundColor = '');
  render();
};

function render() {

  // set the values in the boardSquares array and bg color of 
  // square based on the inner text of the square
  for (i = 0; i < boardSquares.length; i++) {
    if (squares[i].innerText === 'X'){
      boardSquares[i] = 1;
      squares[i].style.backgroundColor = 'blue';
    } else if(squares[i].innerText === 'O') {
      boardSquares[i] = -1;
      squares[i].style.backgroundColor = 'red';
    } else {
      boardSquares[i] = null;
    }
    // declare end of the game based on winner value
    if (winner !== null) {
      gameStatus.innerText = (winner === 1) ? 'X has won the game!' : 'O has won the game!';
    } 
    if (winner === 'T') {
      gameStatus.innerText = 'The games ends in a tie!';
    }
  };
};

function handleClick(event) {

  // obtain the id from the clicked square on the board and make it an integer
  let i = parseInt(event.target.id);
  // check if square is empty 
  if (boardSquares[i] !== null) {
    return;
  }
  // check if a winner has been declared
  if (winner !== null || winner === 'T') {
    return;
  }
  // if square is empty, add an X or O to game board based 
  // on turn order and change message
  if (boardSquares[i] === null && turnOrder === 1) {
    event.target.innerText = 'X';
    gameStatus.innerText = "It is O's turn"
  }
  if (boardSquares[i] === null && turnOrder === -1) {
    event.target.innerText = 'O';
    gameStatus.innerText = "It is X's turn"
  }

  // Update board index with the value of turn
  boardSquares[i] = turnOrder; 
  // Change the turn order to the next player
  turnOrder = turnOrder * -1;

  getWinner();
  render();
}

function getWinner() {
  // loop through the winningCombo array to count up amount of 1 and -1
  winningCombos.forEach(function (array) {
    let counter = 0;
    array.forEach(function (element) {
      counter += boardSquares[element];
      // if the amount of 1 or -1 is equal to 3, set winner to the 
      // value of winning element in boardSquare
      if (Math.abs(counter) === 3) {
        winner = boardSquares[element];
        // if the board is full and no winner has been declared, change winner to T
      } else if (boardSquares.includes(null) === false && winner === null) {
        winner = 'T';
      }else {
        return null;
      }
    })
  }) 
}