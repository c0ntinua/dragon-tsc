function getMousePosition(canvas, event) {
    let rect = canvas.getBoundingClientRect();
    let x = event.clientX - rect.left;
    let y = event.clientY - rect.top;
    new_target_square.col = Math.floor(x / pixel_width);
    new_target_square.row = Math.floor(y / pixel_height);
    if (selected_mode) {
        if ((new_target_square.col == target_square.col) && (new_target_square.row == target_square.row)) {
            selected_mode = false;
        }
        else {
            if (legal_set.has(new_target_square)) {
                dest_square = new_target_square;
                movePiece(target_square, dest_square);
                selected_mode = false;
            }
            else {
                target_square = new_target_square;
            }
        }
    }
    else {
        target_square = new_target_square;
        selected_mode = true;
    }
}
//# sourceMappingURL=input.js.map