function plotEmptyBoard() {
    pen.clearRect(0, 0, 1000, 1000);
    for (let s of all_squares) {
        pen.fillStyle = board_color[row(s)][col(s)];
        pen.beginPath();
        pen.rect(row(s)*pixel_width, col(s)*pixel_height, pixel_width, pixel_height);
        pen.fill();
    }
}

function plotPieces() {
    pen.fillStyle = "#000000";
    pen.font = font_description; 
    for (let s of all_squares) {
        if (nonEmpty(s)) {
            pen.beginPath();
            pen.fillText(
                String.fromCharCode(chessSymbol(playerAt(s),board[row(s)][col(s)])), 
                col(s)*pixel_width + glyph_col_shift,
                row(s)*pixel_height + glyph_row_shift);
            pen.fill();        
        }   
    }
}

function plotSquareSet(S : Set<Square>, color : string) {
    for (let s of S) plotCircle(row(s),col(s),color);
}

function paintBoard() {
    for (let s of all_squares) {
        if ((row(s) + col(s)) % 2 == 0) board_color[row(s)][col(s)] = "#D2B48C";
        else board_color[row(s)][col(s)] = "#E5D3B3";
    }
}
function plotCircle(row : number, col : number, color : string) {
    pen.strokeStyle = color;
    pen.lineWidth = circle_thickness;
    pen.beginPath();
    pen.arc(
        (col + 0.5)*pixel_width,
        (row + 0.5)*pixel_height,
        pixel_width/2-1,
        0,
        2*Math.PI,
        true
    );
    pen.stroke();
}



