function movePiece( from_square : Square , to_square : Square ) {
    let moving_piece = board[from_square.row][from_square.col];
    switch (moving_piece) {
        case "body" :
        case "head" :
        case "knight" :
        case "thetan" :
            board[from_square.row][from_square.col] = "empty";
            board[to_square.row][to_square.col] = moving_piece;
            player_set[current_player].add(to_square);
            player_set[current_player].delete(from_square);
        case "armor" :
            board[from_square.row][from_square.col] = "body";
            board[to_square.row][to_square.col] = moving_piece;
            break;
    }
    current_player = other_player(current_player);
}

function other_player(player : number) : number {
    if (player == 0) return 1;
    if (player ==  1) return 0;
}