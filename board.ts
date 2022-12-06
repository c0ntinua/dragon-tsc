function emptyBoard() : Board {
    let new_board : Board = new Array;
    for (let r = 0 ; r < global_rows; r++) {
        new_board.push(new Array(global_cols).fill("empty"));
    }
    return new_board;
}
function pieceAt(s: Square) : string {
    if(validSquare(s)) return board[row(s)][col(s)];
    return "invalid square!";
}

function neighborsOf(s : Square) : Set<Square> {
    let neighbors : Set<Square> = new Set();
    for (let r= -1 ; r <= 1; r++) {
        for (let c = -1; c <= 1; c++) {
            if (c !=0 || r != 0) {
                let candidate = asSquare(row(s) +r,col(s) +c);
                if (validSquare(candidate)) neighbors.add(candidate);
            }  
        }
    }
    return neighbors;
}

function validSquare(s : Square) : boolean {
    if (row(s) > global_rows - 1) return false;
    if (col(s) > global_cols - 1) return false;
    if (row(s) < 0) return false;
    if (col(s) < 0) return false;
    return true;
}

function seedBoard() {
    board = emptyBoard();
    for (let s of all_squares) {
        let random_number = Math.random();
        if (Math.random() < density) board[row(s)][col(s)] = randomPiece();
        else board[row(s)][col(s)] = "empty";
    }
}




function nonEmpty(s : Square) : boolean {
    if (board[row(s)][col(s)] == "empty") return false;
    return true;
}
function isEmpty(s : Square) : boolean {
    if (board[row(s)][col(s)] == "empty") return true;
    return false;
}


function randomPiece() : string {
    let code = Math.floor(Math.random() * 4);
    switch(code)  {
        case 0 : return "body";
        case 1 : return "head";
        case 2 : return "armor";
        default : return "body";
    }
}