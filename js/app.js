/*-------------------------------- Constants --------------------------------*/



/*---------------------------- Variables (state) ----------------------------*/
let boardSquares, turnOrder, winner;


/*------------------------ Cached Element References ------------------------*/
const topLeft = document.querySelector("#sq0");
const topCenter = document.querySelector("#sq1");
const topRight = document.querySelector("#sq2");
const centerLeft = document.querySelector("#sq3");
const centerCenter = document.querySelector("#sq4");
const centerRight = document.querySelector("#sq5");
const bottomleft = document.querySelector("#sq6");
const bottomCenter = document.querySelector("#sq7");
const bottomRight = document.querySelector("#sq8");
const gameStatus = document.querySelector("#message");

const squares = [...document.querySelectorAll('.square')].map((square) => square.innerText); //converts the static node list to an array of items


/*----------------------------- Event Listeners -----------------------------*/



/*-------------------------------- Functions --------------------------------*/
init();

function init() {
  boardSquares = [null, null, null, null, null, null, null, null];
  turnOrder = 1; //1 is player X, -1 is player O
  winner = null; // will hold either 1, -1, or T for tie
};

render();

function render() {
  for (i = 0; i < boardSquares.length; i++) {
    if (squares[i] === 'X'){
      boardSquares[i] = 1;
    } else if(squares[i] === 'O') {
      boardSquares[i] = -1;
    } else {
      boardSquares[i] = null;
    }
  };
  console.log(boardSquares)
};
console.log(squares);
