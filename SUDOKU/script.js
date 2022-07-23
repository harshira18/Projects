let arr = [[], [], [], [], [], [], [], [], []]
let temp = [[], [], [], [], [], [], [], [], []]

for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
        arr[i][j] = document.getElementById(i * 9 + j);

    }
}

function initializeTemp(temp) {

    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            temp[i][j] = false;

        }
    }
}


function setTemp(board, temp) {

    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            if (board[i][j] != 0) {
                temp[i][j] = true;
            }

        }
    }
}


function setColor(temp) {

    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            if (temp[i][j] == true) {
                arr[i][j].style.color = "#DC3545";
            }

        }
    }
}

function resetColor() {

    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {

            arr[i][j].style.color = "green";


        }
    }
}

let board = [[], [], [], [], [], [], [], [], []]


let button = document.getElementById('generate-sudoku')
let solve = document.getElementById('solve')

console.log(arr)
function changeBoard(board) {
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            if (board[i][j] != 0) {

                arr[i][j].innerText = board[i][j]
            }

            else
                arr[i][j].innerText = ''
        }
    }
}


button.onclick = function () {
    let xhrRequest = new XMLHttpRequest()
    xhrRequest.onload = function () {
        let response = JSON.parse(xhrRequest.response)
        console.log(response)
        initializeTemp(temp)
        resetColor()

        board = response.board
        setTemp(board, temp)
        setColor(temp)
        changeBoard(board)
    }
    xhrRequest.open('get', 'https://sugoku.herokuapp.com/board?difficulty=easy')
    //we can change the difficulty of the puzzle the allowed values of difficulty are easy, medium, hard and random
    xhrRequest.send()
}

function isSafe(board, sr, sc, val) {
    for (let i = 0; i < 9; i++) {
        if (board[i][sc] == val || board[sr][i] == val) {
            return false;
        }
    }

    let r = sr - sr % 3;
    let c = sc - sc % 3;

    for (let cr = r; cr < r + 3; cr++) {
        for (let cc = c; cc < c + 3; cc++) {
            if (board[cr][cc] == val) {
                return false;
            }
        }
    }
    return true;

}

function solveSudokuHelper(board, sr, sc) {
    console.log("1234")
    if (sr == 9) {
        changeBoard(board);
        return;
    }

    if (sc == 9) {
        solveSudokuHelper(board, sr + 1, 0)
        return;
    }

    if (board[sr][sc] != 0) {
        solveSudokuHelper(board, sr, sc + 1);
        return;
    }

    for (let i = 1; i <= 9; i++) {
        if (isSafe(board, sr, sc, i)) {
            board[sr][sc] = i;
            solveSudokuHelper(board, sr, sc + 1);
            board[sr][sc] = 0;
        }
    }
}

function solveSudoku(board) {
    solveSudokuHelper(board, 0, 0)
}

solve.onclick = function () {
    solveSudoku(board)

}
