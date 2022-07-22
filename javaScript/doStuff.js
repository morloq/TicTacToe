//create and manage gameboard
const GameBoard = (function () {

    //represents board on website
    let board = [['0', '1', '2'],['3', '4', '5'],['6', '7', '8']];
    /*         col     col     col
      row  0   0,0     1,0     2,0       
      row  1   0,1     1,1     2,1
      row  2   0,2     1,2     2,2
    */

    function getboard() {
        return board;
    }

    function setboard(row, column, value) {
        board[row, column] = value;
    }

    function resetboard() {
        board = [['0', '1', '2'],['3', '4', '5'],['6', '7', '8']];
    }

    return { getboard, setboard, resetboard };

})();

//create and manage players
const players = (function () {
    const playerName1 = document.querySelector(".playerOneName").value || "player 1";
    const playerName2 = document.querySelector(".playerTwoName").value || "player 2";
    
    let player1 = {
        name: playerName1,
        symbol: "X",
    }

    let player2 = {
        name: playerName2,
        symbol: "O",
    }

    return { player1, player2 };

})();
console.log(players);

//manage gameflow
const displayControl = (function () {
    let symbolsAdded = [];
    //get all 9 tiles:
    const tile0 = document.querySelector(".tile.zero");
    const tile1 = document.querySelector(".tile.one");
    const tile2 = document.querySelector(".tile.two");
    const tile3 = document.querySelector(".tile.three");
    const tile4 = document.querySelector(".tile.four");
    const tile5 = document.querySelector(".tile.five");
    const tile6 = document.querySelector(".tile.six");
    const tile7 = document.querySelector(".tile.seven");
    const tile8 = document.querySelector(".tile.eight");

    //reset functionality:
    function resetView() {
        tile0.textContent = "";
        tile1.textContent = "";
        tile2.textContent = "";
        tile3.textContent = "";
        tile4.textContent = "";
        tile5.textContent = "";
        tile6.textContent = "";
        tile7.textContent = "";
        tile8.textContent = "";
    }

    function reset() {
        //add reset button, on click, reset board and array for board.
        GameBoard.resetboard();
        resetView();
    }
    const resetButton = document.querySelector(".reset");
    resetButton.addEventListener("click", () => {
        reset();
        resetView();
    });

    //add event listeners:
    tile0.addEventListener("click", () => {
        tile0.textContent = players.player1.symbol;
    });

    function addSymbolToTile() {
        console.log(`click`);
    }

    function checkForWin() {
        //check
        //if win -> update win fild, yet to be created
    }


})();