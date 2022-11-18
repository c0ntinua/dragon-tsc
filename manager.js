function plotLegalMoves() {
    legal.cell = Array(global_rows * global_cols).fill(0);
    cluster.cell = Array(global_rows * global_cols).fill(0);
    cluster_adjacent.cell = Array(global_rows * global_cols).fill(0);
    this_piece_code = world.get(target_col, target_row);
    switch (this_piece_code) {
        case 0:
            updateLegalEmpty();
            break;
        case 1:
            updateLegalBody();
            break;
        case 2:
            updateLegalArmor();
            break;
        case 3:
            updateLegalHead();
            break;
        case 4:
            updateLegalTunnel();
            break;
        case 5:
            updateLegalThetan();
            break;
        case 6:
            updateLegalKnight();
            break;
        default:
            updateLegalEmpty();
            break;
    }
    pen.clearRect(0, 0, 1000, 1000);
    if (selected_mode) {
        plotLegal();
        plotSelected();
    }
    plotGrid();
    plotWorld();
}
function tryRandomMove() {
    dest_col = Math.floor(Math.random() * global_rows);
    dest_row = Math.floor(Math.random() * global_cols);
    if (legal.get(dest_col, dest_row) == 1) {
        movePiece(target_col, target_row, dest_col, dest_row);
    }
    target_col = Math.floor(Math.random() * global_rows);
    target_row = Math.floor(Math.random() * global_cols);
}
//# sourceMappingURL=manager.js.map