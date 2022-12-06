function allSquares() {
    let all = new Set();
    for (let r = 0; r < global_rows; r++) {
        for (let c = 0; c < global_cols; c++) {
            all.add({ row: r, col: c });
        }
    }
    return all;
}
function noSquaresYet() {
    let none = new Set();
    return none;
}
function paintedSquares() {
    let squares = allSquares();
    let color = "#000000";
    let painted_squares = new Set();
    for (let s of squares) {
        if ((s.row + s.col) % 2 == 0)
            color = "#D2B48C";
        else
            color = "#E5D3B3";
        painted_squares.add({ row: s.row, col: s.col, string: color });
    }
    return painted_squares;
}
function playerAt(s) {
    if (player_set[0].has(s))
        return 0;
    if (player_set[1].has(s))
        return 1;
    return 0;
}
//# sourceMappingURL=square.js.map