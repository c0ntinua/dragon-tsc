
function getMousePosition(canvas : HTMLCanvasElement, event : MouseEvent) {
    let rect = canvas.getBoundingClientRect();
    let x = event.clientX - rect.left;
    let y = event.clientY - rect.top;
    square_last_clicked_on = asSquare(Math.floor(y/pixel_height),Math.floor(x/pixel_width));
    //if (!piece_is_selected && square_last_clicked_on != target_square) {
    if (!piece_is_selected) {
        piece_is_selected = true;
        target_square = square_last_clicked_on;
        return;
    }
    if (piece_is_selected && square_last_clicked_on == target_square) {
        piece_is_selected = false;
        return;
    }
    if (piece_is_selected && legal_set.has(square_last_clicked_on)) {
        piece_is_selected = false;
        dest_square = square_last_clicked_on;
        movePiece(target_square, dest_square);
        return;
    }
    if (piece_is_selected && !legal_set.has(square_last_clicked_on)) {
        piece_is_selected = true;
        target_square = square_last_clicked_on;
        return;
    }
}

  