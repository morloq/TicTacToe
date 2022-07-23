//create and manage gameboard
const GameBoard = (function () {

    //represents board on website
    let board = ["0", "1", "2", "3", "4", "5", "6", "7", "8"];
    /*         col     col     col
      row  0   0,0     0,1     0,2       -> row, col
      row  1   1,0     1,1     1,2       -> row, col
      row  2   2,0     2,1     2,2       -> row, col
    */

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
    const name1 = document.querySelector(".playerOneName").value;
    const name2 = document.querySelector(".playerTwoName").value;

    const playerName1 = !name1.length ? "player 1" : name1;//name1.length -> false?, yes -> player 1, else name
    const playerName2 = !name2.length ? "player 2" : name2;
    //names are always player1 and player2 respectively as there is not even a chance to type something in, whoops
    //change that later.
    //also, maybe add something to reset the names once reset button is clicked.
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

//manage gameflow
const displayControl = (function () {
    const winDrawOutput = document.querySelector(".win");//select field for output.
    let counter = 0;

    let start = false;

    document.querySelector(".start").addEventListener("click", () => {
        start = true;
    })

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

            console.log(GameBoard.getboard());

            counter++;
        }
    });
    
    tile1.addEventListener("click", () => {
        if(tile1.textContent === "") {//if empty, add symbol, otherwise dont
            tile1.textContent = currentPlayerSymbol();
            GameBoard.setboard(1, currentPlayerSymbol());//set symbol to board array.
            checkForWin();

            console.log(GameBoard.getboard());

            counter++;
        }
    });

    tile2.addEventListener("click", () => {
        if(tile2.textContent === "") {//if empty, add symbol, otherwise dont
            tile2.textContent = currentPlayerSymbol();
            GameBoard.setboard(2, currentPlayerSymbol());//set symbol to board array.
            checkForWin();

            console.log(GameBoard.getboard());

            counter++;
        }
    });

    tile3.addEventListener("click", () => {
        if(tile3.textContent === "") {//if empty, add symbol, otherwise dont
            tile3.textContent = currentPlayerSymbol();
            GameBoard.setboard(3, currentPlayerSymbol());//set symbol to board array.
            checkForWin();

            console.log(GameBoard.getboard());

            counter++;
        }
    });

    tile4.addEventListener("click", () => {
        if(tile4.textContent === "") {//if empty, add symbol, otherwise dont
            tile4.textContent = currentPlayerSymbol();
            GameBoard.setboard(4, currentPlayerSymbol());//set symbol to board array.
            checkForWin();

            console.log(GameBoard.getboard());

            counter++;
        }
    });

    tile5.addEventListener("click", () => {
        if(tile5.textContent === "") {//if empty, add symbol, otherwise dont
            tile5.textContent = currentPlayerSymbol();
            GameBoard.setboard(5, currentPlayerSymbol());//set symbol to board array.
            checkForWin();

            console.log(GameBoard.getboard());

            counter++;
        }
    });

    tile6.addEventListener("click", () => {
        if(tile6.textContent === "") {//if empty, add symbol, otherwise dont
            tile6.textContent = currentPlayerSymbol();
            GameBoard.setboard(6, currentPlayerSymbol());//set symbol to board array.
            checkForWin();

            console.log(GameBoard.getboard());

            counter++;
        }
    });

    tile7.addEventListener("click", () => {
        if(tile7.textContent === "") {//if empty, add symbol, otherwise dont
            tile7.textContent = currentPlayerSymbol();
            GameBoard.setboard(7, currentPlayerSymbol());//set symbol to board array.
            checkForWin();

            console.log(GameBoard.getboard());

            counter++;
        }
    });

    tile8.addEventListener("click", () => {
        if(tile8.textContent === "") {//if empty, add symbol, otherwise dont
            tile8.textContent = currentPlayerSymbol();
            GameBoard.setboard(8, currentPlayerSymbol());//set symbol to board array.
            checkForWin();

            console.log(GameBoard.getboard());

            counter++;
        }
    });

    function checkForWin() {
        /*
            what is possible?
            -> horizontal win -> xxx/ooo: dont just check for occupied, check that symbols match
                                    -> 0,0 and 0,1 and 0,2 -> first row horiz. win
                                    -> 1,0 and 1,1 and 1,2 -> sec. row horiz. win
                                    -> 2,0 and 2,1 and 2,2 -> third row horiz. win
            -> vertical win -> 
                                    -> 0,0 and 1,0 and 2,0 -> first col
                                    -> 0,1 and 1,1 and 2,1 -> second col
                                    -> 0,2 and 1,2 and 2,2 -> third col
            -> diagonal win ->
                                    -> 0,0 and 1,1 and 2,2 -> top left to bottom right or vice versa
                                    -> 2,0 and 1,1 and 0,2 -> bottom left to top right or vice versa

            -> draw -> everyting occupied but no win registered.
        */
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

                winDrawOutput.textContent = `${players.player1.name} wins!`; //X wins
        } //same for O:
        else if ((board[0] === "X" && board[1] === "X" && board[2] === "X") ||
            (board[3] === "X" && board[4] === "X" && board[5] === "X") ||
            (board[6] === "X" && board[7] === "X" && board[8] === "X") ||
            (board[0] === "X" && board[3] === "X" && board[6] === "X") ||
            (board[1] === "X" && board[4] === "X" && board[7] === "X") ||
            (board[2] === "X" && board[5] === "X" && board[8] === "X") ||
            (board[0] === "X" && board[4] === "X" && board[8] === "X") ||
            (board[6] === "X" && board[4] === "X" && board[2] === "X")) {

             winDrawOutput.textContent = `${players.player2.name} wins!`; //O wins

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