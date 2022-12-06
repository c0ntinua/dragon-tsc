function switch_current_player() {
    if (current_player == 0) {
        current_player = 1;
        other_player = 0;
    } else {
        current_player = 0;
        other_player = 1;
    }
}

function seedPlayerSets() {
    for (let s of all_squares) {
        if (board[row(s)][col(s)] != "empty" ) {
            if (Math.random() < 0.5) {
                player_set[0].add(s);
            } else {
                player_set[1].add(s);
            }
        }
    }
}
function myPiece(s : Square) : boolean {
    if (player_set[current_player].has(s)) return true;
    return false;
}


