function movePiece(from_square, to_square) {
    let moving_piece = board[row(from_square)][col(from_square)];
    switch (moving_piece) {
        case "body":
        case "head":
            board[row(from_square)][col(from_square)] = "empty";
            board[row(to_square)][col(to_square)] = moving_piece;
            player_set[current_player].add(to_square);
            player_set[current_player].delete(from_square);
            break;
        case "armor":
            board[row(from_square)][col(from_square)] = "body";
            board[row(to_square)][col(to_square)] = moving_piece;
            break;
        default: console.log("can't move unknown piece");
    }
    current_player = other_player(current_player);
}
function other_player(player) {
    if (player == 0)
        return 1;
    if (player == 1)
        return 0;
}
//# sourceMappingURL=move.js.map