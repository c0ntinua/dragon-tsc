function getMousePosition(canvas, event) {
    let rect = canvas.getBoundingClientRect();
    let x = event.clientX - rect.left;
    let y = event.clientY - rect.top;
    let new_target_col = Math.floor(x / pixel_width);
    let new_target_row = Math.floor(y / pixel_height);
    if (selected_mode) {
        if ((new_target_col == target_col) && (new_target_row == target_row)) {
            selected_mode = false;
        }
        else {
            if (legal.get(new_target_col, new_target_row) == 1) {
                dest_col = new_target_col;
                dest_row = new_target_row;
                movePiece(target_col, target_row, dest_col, dest_row);
                selected_mode = false;
            }
            else {
                target_col = new_target_col;
                target_row = new_target_row;
            }
        }
    }
    else {
        target_col = new_target_col;
        target_row = new_target_row;
        selected_mode = true;
    }
}
//# sourceMappingURL=input.js.map