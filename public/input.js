function getMousePosition(canvas, event) {
    let rect = canvas.getBoundingClientRect();
    let x = event.clientX - rect.left;
    let y = event.clientY - rect.top;
    square_last_clicked_on = asSquare(Math.floor(y / pixel_height), Math.floor(x / pixel_width));
    if (piece_is_selected && square_last_clicked_on == target_square) {
        piece_is_selected = false;
    }
    if (piece_is_selected && legal_set.has(square_last_clicked_on)) {
        piece_is_selected = false;
        dest_square = square_last_clicked_on;
        movePiece(target_square, dest_square);
    }
    if (piece_is_selected && !legal_set.has(square_last_clicked_on)) {
        piece_is_selected = true;
        target_square = square_last_clicked_on;
    }
    if (!piece_is_selected && square_last_clicked_on != target_square) {
        piece_is_selected = true;
        target_square = square_last_clicked_on;
    }
    console.log("square_last_clicked_on : " + square_last_clicked_on);
    console.log("target_square : " + target_square);
}
//# sourceMappingURL=input.js.map