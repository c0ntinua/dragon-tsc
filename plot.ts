function plotEmptyBoard() {
    pen.clearRect(0, 0, 1000, 1000);
    let painted_squares = paintedSquares();
    for (let s of painted_squares) {
        pen.fillStyle = s.string;
        pen.beginPath();
        pen.rect(s.row*pixel_width, s.col*pixel_height, pixel_width, pixel_height);
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
                String.fromCharCode(chessSymbol(playerAt(s),board[s.row][s.col])), 
                s.col*pixel_width + glyph_col_shift,
                s.row*pixel_height + glyph_row_shift);
            pen.fill();        
        }   
    }
}
function plotLegalSet() {
    pen.strokeStyle = "#00FF00";
    for (let s of legal_set) {
        pen.beginPath();
        pen.rect(s.col*pixel_width, s.row*pixel_height, pixel_width, pixel_height);
        pen.fill();   
    }
}
function plotConnectedSet() {
    pen.strokeStyle = "#00FF00";
    pen.lineWidth = 3;
    for (let s of connected_set) {
        pen.beginPath();
        pen.rect(s.col*pixel_width, s.row*pixel_height, pixel_width, pixel_height);
        pen.fill();   
    }
}

function plotTargetSquare() {
    pen.strokeStyle = "#00FF00";
    pen.lineWidth = 3;
    pen.beginPath();
    pen.rect(target_square[0]*pixel_width, target_square.row*pixel_height, pixel_width, pixel_height);
    pen.stroke();  
}



