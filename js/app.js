/*-------------------------------- Constants --------------------------------*/



/*---------------------------- Variables (state) ----------------------------*/
let boardSquares, squares, turnOrder, winner;


/*------------------------ Cached Element References ------------------------*/
const topLeft = document.querySelector(".top-left");
const topCenter = document.querySelector(".top-center");
const topRight = document.querySelector(".top-right");
const centerLeft = document.querySelector(".center-left");
const centerCenter = document.querySelector(".center-center");
const centerRight = document.querySelector(".center-right");
const bottomleft = document.querySelector(".bottom-left");
const bottomCenter = document.querySelector(".bottom-center");
const bottomRight = document.querySelector(".bottom-right");
const gameStatus = document.querySelector("#message");


/*----------------------------- Event Listeners -----------------------------*/



/*-------------------------------- Functions --------------------------------*/
init();

squares = [topLeft.innerText, topCenter.innerText, topRight.innerText, centerLeft.innerText, centerCenter.innerText, centerRight.innerText, bottomleft.innerText, bottomCenter.innerText, bottomRight.innerText];

function init() {
  boardSquares = [null, null, null, null, null, null, null, null, null];
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
