//big problem! directly manipulates dom elements, not good!!
//how to use setboard function without having the elements secondary class??


//create and manage gameboard
const GameBoard = (function () {

    //represents board on website
    let board = ["0", "1", "2", "3", "4", "5", "6", "7", "8"];

    function getboard() {
        return board;
    }

    function setboard(tile, value) {
        board[tile] = value;
    }

    function resetboard() {
        board = ["0", "1", "2", "3", "4", "5", "6", "7", "8"];
    }

    return { getboard, setboard, resetboard };

})();

//create and manage players
const players = (function () {

    let player1 = {
        symbol: "X",
    }

    let player2 = {
        symbol: "O",
    }
    return { player1, player2 };

})();

//manage gameflow
const displayControl = (function () {
    const winDrawOutput = document.querySelector(".win");//select field for output.
    let counter = 0;

    const tiles = document.querySelectorAll(".tile");
    const tile_array = [... tiles];
    
    tile_array.forEach(tile => {
        tile.addEventListener("click", () => {
            if(tile.textContent === "") {
                tile.textContent = currentPlayerSymbol();
                checkForWin();
                counter++;
            }
        });
    })

    function checkForWin() {
        const board = GameBoard.getboard();//get board.
        //x win horizontal:
        if((tiles[0].textContent === "X" && tiles[1].textContent === "X" && tiles[2].textContent === "X") ||
           (tiles[3].textContent === "X" && tiles[4].textContent === "X" && tiles[5].textContent === "X") ||
           (tiles[6].textContent === "X" && tiles[7].textContent === "X" && tiles[8].textContent === "X") ||
           (tiles[0].textContent === "X" && tiles[3].textContent === "X" && tiles[6].textContent === "X") || //x win vertical
           (tiles[1].textContent === "X" && tiles[4].textContent === "X" && tiles[7].textContent === "X") ||
           (tiles[2].textContent === "X" && tiles[5].textContent === "X" && tiles[8].textContent === "X") ||
           (tiles[0].textContent === "X" && tiles[4].textContent === "X" && tiles[8].textContent === "X") || //x win diagonal
           (tiles[6].textContent === "X" && tiles[4].textContent === "X" && tiles[2].textContent === "X")) {

                winDrawOutput.textContent = `X wins!`; //X wins
        } //same for O:
        else if ((tiles[0] === "O" && tiles[1] === "O" && tiles[2] === "O") ||
            (tiles[3].textContent === "O" && tiles[4].textContent === "O" && tiles[5].textContent === "O") ||
            (tiles[6].textContent === "O" && tiles[7].textContent === "O" && tiles[8].textContent === "O") ||
            (tiles[0].textContent === "O" && tiles[3].textContent === "O" && tiles[6].textContent === "O") ||
            (tiles[1].textContent === "O" && tiles[4].textContent === "O" && tiles[7].textContent === "O") ||
            (tiles[2].textContent === "O" && tiles[5].textContent === "O" && tiles[8].textContent === "O") ||
            (tiles[0].textContent === "O" && tiles[4].textContent === "O" && tiles[8].textContent === "O") ||
            (tiles[6].textContent === "O" && tiles[4].textContent === "O" && tiles[2].textContent === "O")) {

             winDrawOutput.textContent = `O wins!`; //O wins

        }//else if everything is occupied but no win has been registered -> draw
        else if(tiles[0].textContent !== "" && tiles[1].textContent !== "" && tiles[2].textContent !== "" &&
                tiles[3].textContent !== "" && tiles[4].textContent !== "" && tiles[5].textContent !== "" &&
                tiles[6].textContent !== "" && tiles[7].textContent !== "" && tiles[8].textContent !== "") {
                    console.log(tiles);
                    winDrawOutput.textContent = "It's a draw!";
                }
    }

    function currentPlayerSymbol() {
        let symbol = "";
        if(counter === 0 || counter % 2 === 0) {
            symbol = players.player1.symbol;
        }
        else if(counter % 2 !== 0) {
            symbol = players.player2.symbol;
        }
        return symbol;
    }

    //reset functionality:
    function resetView() {
        for(i = 0; i < tiles.length; i++) {
            tiles[i].textContent = "";
        }
    }

    function reset() {
        resetView();
        winDrawOutput.textContent = "";
        counter = 0;
    }
    //on click, reset everything.
    const resetButton = document.querySelector(".reset");
    resetButton.addEventListener("click", () => {
        reset();
    });
})();

/*
OLD VERSION:

const GameBoard = (function () {

    let board = ["0", "1", "2", "3", "4", "5", "6", "7", "8"];
    
    function getboard() {
        return board;
    }

    function setboard(tile, value) {
        board[tile] = value;
    }

    function resetboard() {
        board = ["0", "1", "2", "3", "4", "5", "6", "7", "8"];
    }

    return { getboard, setboard, resetboard };

})();

//create and manage players
const players = (function () {

    let player1 = {
        symbol: "X",
    }

    let player2 = {
        symbol: "O",
    }
    return { player1, player2 };

})();

//manage gameflow
const displayControl = (function () {
    const winDrawOutput = document.querySelector(".win");//select field for output.
    let counter = 0;

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

    //add event listeners:
    tile0.addEventListener("click", () => {
        if(tile0.textContent === "") {//if empty, add symbol, otherwise dont
            tile0.textContent = currentPlayerSymbol();//placeholder for now
            GameBoard.setboard(0, currentPlayerSymbol());
            checkForWin();

            counter++;
        }
    });
    
    tile1.addEventListener("click", () => {
        if(tile1.textContent === "") {//if empty, add symbol, otherwise dont
            tile1.textContent = currentPlayerSymbol();
            GameBoard.setboard(1, currentPlayerSymbol());//set symbol to board array.
            checkForWin();

            counter++;
        }
    });

    tile2.addEventListener("click", () => {
        if(tile2.textContent === "") {//if empty, add symbol, otherwise dont
            tile2.textContent = currentPlayerSymbol();
            GameBoard.setboard(2, currentPlayerSymbol());//set symbol to board array.
            checkForWin();

            counter++;
        }
    });

    tile3.addEventListener("click", () => {
        if(tile3.textContent === "") {//if empty, add symbol, otherwise dont
            tile3.textContent = currentPlayerSymbol();
            GameBoard.setboard(3, currentPlayerSymbol());//set symbol to board array.
            checkForWin();

            counter++;
        }
    });

    tile4.addEventListener("click", () => {
        if(tile4.textContent === "") {//if empty, add symbol, otherwise dont
            tile4.textContent = currentPlayerSymbol();
            GameBoard.setboard(4, currentPlayerSymbol());//set symbol to board array.
            checkForWin();

            counter++;
        }
    });

    tile5.addEventListener("click", () => {
        if(tile5.textContent === "") {//if empty, add symbol, otherwise dont
            tile5.textContent = currentPlayerSymbol();
            GameBoard.setboard(5, currentPlayerSymbol());//set symbol to board array.
            checkForWin();

            counter++;
        }
    });

    tile6.addEventListener("click", () => {
        if(tile6.textContent === "") {//if empty, add symbol, otherwise dont
            tile6.textContent = currentPlayerSymbol();
            GameBoard.setboard(6, currentPlayerSymbol());//set symbol to board array.
            checkForWin();

            counter++;
        }
    });

    tile7.addEventListener("click", () => {
        if(tile7.textContent === "") {//if empty, add symbol, otherwise dont
            tile7.textContent = currentPlayerSymbol();
            GameBoard.setboard(7, currentPlayerSymbol());//set symbol to board array.
            checkForWin();

            counter++;
        }
    });

    tile8.addEventListener("click", () => {
        if(tile8.textContent === "") {//if empty, add symbol, otherwise dont
            tile8.textContent = currentPlayerSymbol();
            GameBoard.setboard(8, currentPlayerSymbol());//set symbol to board array.
            checkForWin();

            counter++;
        }
    });

    function checkForWin() {
        
        const board = GameBoard.getboard();//get board.
        //x win horizontal:
        if((board[0] === "X" && board[1] === "X" && board[2] === "X") ||
           (board[3] === "X" && board[4] === "X" && board[5] === "X") ||
           (board[6] === "X" && board[7] === "X" && board[8] === "X") ||
           (board[0] === "X" && board[3] === "X" && board[6] === "X") || //x win vertical
           (board[1] === "X" && board[4] === "X" && board[7] === "X") ||
           (board[2] === "X" && board[5] === "X" && board[8] === "X") ||
           (board[0] === "X" && board[4] === "X" && board[8] === "X") || //x win diagonal
           (board[6] === "X" && board[4] === "X" && board[2] === "X")) {

                winDrawOutput.textContent = `X wins!`; //X wins
        } //same for O:
        else if ((board[0] === "X" && board[1] === "X" && board[2] === "X") ||
            (board[3] === "X" && board[4] === "X" && board[5] === "X") ||
            (board[6] === "X" && board[7] === "X" && board[8] === "X") ||
            (board[0] === "X" && board[3] === "X" && board[6] === "X") ||
            (board[1] === "X" && board[4] === "X" && board[7] === "X") ||
            (board[2] === "X" && board[5] === "X" && board[8] === "X") ||
            (board[0] === "X" && board[4] === "X" && board[8] === "X") ||
            (board[6] === "X" && board[4] === "X" && board[2] === "X")) {

             winDrawOutput.textContent = `O wins!`; //O wins

        }//else if everything is occupied but no win has been registered -> draw
        else if(board[0] !== "0" && board[1] !== "1" && board[2] !== "2" &&
                board[3] !== "3" && board[4] !== "4" && board[5] !== "5" &&
                board[6] !== "6" && board[7] !== "7" && board[8] !== "8") {

                    winDrawOutput.textContent = "It's a draw!";
                }
    }

    function currentPlayerSymbol() {
        let symbol = "";
        if(counter === 0 || counter % 2 === 0) {
            symbol = players.player1.symbol;
        }
        else if(counter % 2 !== 0) {
            symbol = players.player2.symbol;
        }
        return symbol;
    }

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
        resetView();//reset content of all tiles.
        winDrawOutput.textContent = "";//reset output field
        counter = 0;
    }
    //on click, reset everything.
    const resetButton = document.querySelector(".reset");
    resetButton.addEventListener("click", () => {
        reset();
        resetView();
    });
})();

*/