function plotEmptyBoard() {
    pen.clearRect(0, 0, 1000, 1000);
    for (let s of all_squares) {
        pen.fillStyle = board_color[row(s)][col(s)];
        pen.beginPath();
        pen.rect(row(s) * pixel_width, col(s) * pixel_height, pixel_width, pixel_height);
        pen.fill();
    }
}
function plotPieces() {
    pen.fillStyle = "#000000";
    pen.font = font_description;
    for (let s of all_squares) {
        if (nonEmpty(s)) {
            pen.beginPath();
            pen.fillText(String.fromCharCode(chessSymbol(playerAt(s), board[row(s)][col(s)])), col(s) * pixel_width + glyph_col_shift, row(s) * pixel_height + glyph_row_shift);
            pen.fill();
        }
    }
}
function plotLegalSet() {
    pen.strokeStyle = "#FF0000";
    pen.lineWidth = 1;
    for (let s of legal_set) {
        pen.beginPath();
        pen.arc((col(s) + 0.5) * pixel_width, (row(s) + 0.5) * pixel_height, pixel_width / 2 - 1, 0, 2 * Math.PI, true);
        pen.stroke();
    }
}
function plotConnectedSet() {
    pen.strokeStyle = "#FF0000";
    pen.lineWidth = 3;
    for (let s of connected_set) {
        pen.beginPath();
        pen.rect(col(s) * pixel_width, row(s) * pixel_height, pixel_width, pixel_height);
        pen.stroke();
    }
}
function plotTargetSquare() {
    pen.strokeStyle = "#00FF00";
    pen.lineWidth = 3;
    pen.beginPath();
    pen.arc((col(target_square) + 0.5) * pixel_width, (row(target_square) + 0.5) * pixel_height, pixel_width / 2 - 1, 0, 2 * Math.PI, true);
    pen.stroke();
}
function paintBoard() {
    let color = "#000000";
    for (let r = 0; r < global_rows; r++) {
        for (let c = 0; c < global_cols; c++) {
            if ((r + c) % 2 == 0)
                color = "#D2B48C";
            else
                color = "#E5D3B3";
            board_color[r][c] = color;
        }
    }
}
//# sourceMappingURL=plot.js.map