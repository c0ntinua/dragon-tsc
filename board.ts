function emptyBoard() : Board {
    let new_board = new Array;
    for (let r = 0 ; r < global_rows; r++) {
        new_board.push(new Array(global_cols).fill("empty"));
    }
    return new_board;
}
function pieceAt(s: Square) : string {
    if(validSquare(s)) return board[s.row][s.col];
    return "invalid square!";
}

function neighborsOf(s : Square) : Set<Square> {
    let neighbors : Set<Square> = new Set();
    for (let r= -1 ; r <= 1; r++) {
        for (let c = -1; c <= 1; c++) {
            if (c !=0 || r != 0) {
                let candidate = {row : s.row +r, col : s.col +c};
                if (validSquare(candidate)) neighbors.add(candidate);
            }  
        }
    }
    return neighbors;
}

function validSquare(s : Square) : boolean {
    if (s.row > global_rows - 1) return false;
    if (s.col > global_cols - 1) return false;
    if (s.row < 0) return false;
    if (s.col < 0) return false;
    return true;
}

function seedBoard() {
    //board = emptyBoard();
    for (let s of all_squares) {
        let random_number = Math.random();
        if (Math.random() < density) board[s.row][s.col] = randomPiece();
        else board[s.row][s.col] = "empty";
    }
}

function addRandomPieces(num_pieces : number) {
    board = emptyBoard();
    let s = { row : 0, col : 0};
    for (let i = 0; i < num_pieces; i++) {
            s = {
                row : Math.floor(Math.random() * global_rows),
                col : Math.floor(Math.random() * global_cols),
            };
            board[s.row][s.col] = randomPiece();
    }
}

function seedPlayerSets() {
    for (let s of all_squares) {
        if (board[s.row][s.col] != "empty" ) {
            if (Math.random() < 0.5) {
                player_set[0].add(s);
            } else {
                player_set[1].add(s);
            }
        }
    }
}

function nonEmpty(s : Square) : boolean {
    if (board[s.row][s.col] == "empty") return false;
    return true;
}
function isEmpty(s : Square) : boolean {
    if (board[s.row][s.col] == "empty") return true;
    return false;
}
function myPiece(s : Square) : boolean {
    if (player_set[current_player].has(s)) return true;
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