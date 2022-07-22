//create and manage gameboard
let GameBoard = (function () {

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

    return {
        getboard: getboard(),
        setboard: setboard(),
        resetboard: resetboard(),
    };

})();

//create and manage players
let players = (function () {
    let player1 = {
        name: name1,
        symbol: "X",
    }

    let player2 = {
        name: name2,
        symbol: "O",
    }

})(name1, name2);

//manage gameflow
let displayControl = (function () {
    
    //get all 9 tiles:
    const tile0 = document.querySelector(".tile.zero").addEventListener("click", addSymbolToTile());
    const tile1 = document.querySelector(".tile.one").addEventListener("click", addSymbolToTile());
    const tile2 = document.querySelector(".tile.two").addEventListener("click", addSymbolToTile());
    const tile3 = document.querySelector(".tile.three").addEventListener("click", addSymbolToTile());
    const tile4 = document.querySelector(".tile.four").addEventListener("click", addSymbolToTile());
    const tile5 = document.querySelector(".tile.five").addEventListener("click", addSymbolToTile());
    const tile6 = document.querySelector(".tile.six").addEventListener("click", addSymbolToTile());
    const tile7 = document.querySelector(".tile.seven").addEventListener("click", addSymbolToTile());
    const tile8 = document.querySelector(".tile.eight").addEventListener("click", addSymbolToTile());




})();