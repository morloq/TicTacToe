let GameBoard = (function () {
    let gameBoard = [9];

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
    console.log(gameBoard)
    function init() {//set tiles to array positions
        gameBoard.push(tile0);
        gameBoard.push(tile1);
        gameBoard.push(tile2);
        gameBoard.push(tile3);
        gameBoard.push(tile4);
        gameBoard.push(tile5);
        gameBoard.push(tile6);
        gameBoard.push(tile7);
        gameBoard.push(tile8);
    }
    return {
        
    }
})();


let player = (function () {

})();

let displayControl = (function () {

})();