//create and manage gameboard
let GameBoard = (function () {
    let board = [9];

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

    init();
    console.log(board)
    function init() {//set tiles to array positions
        board.push(tile0);
        board.push(tile1);
        board.push(tile2);
        board.push(tile3);
        board.push(tile4);
        board.push(tile5);
        board.push(tile6);
        board.push(tile7);
        board.push(tile8);
    }
    return {

    }
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

})(GameBoard, players);