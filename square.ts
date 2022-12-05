function allSquares() : Set<Square> {
    let all : Set<Square> = new Set();
    for (let r = 0 ; r < global_rows  ; r++) {
        for (let c = 0 ; c < global_cols ; c++) {
            all.add( { row : r, col : c });
        }
    }
    return all;
}
function noSquaresYet() : Set<Square> {
    let none : Set<Square> = new Set();
    return none;
}
function paintedSquares() : Set<SquareWithString> {
    let squares = allSquares();
    let color = "#000000"
    let painted_squares : Set<SquareWithString> = new Set();
    for (let s of squares) {
        if ((s.row + s.col) % 2 == 0) color = "#D2B48C";
        else color = "#E5D3B3";
        painted_squares.add({row : s.row, col: s.col, string : color});
    }
    return painted_squares;
}
