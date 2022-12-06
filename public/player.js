function seedPlayerSets() {
    for (let s of all_squares) {
        if (board[row(s)][col(s)] != "empty") {
            if (Math.random() < 0.5) {
                player_set[0].add(s);
            }
            else {
                player_set[1].add(s);
            }
        }
    }
}
function myPiece(s) {
    if (player_set[current_player].has(s))
        return true;
    return false;
}
function updateLegal(s) {
    if (!myPiece(s)) {
        legal_set = noSquaresYet();
        return;
    }
    switch (board[row(target_square)][col(target_square)]) {
        case "body":
            updateLegalBody();
            break;
        case "armor":
            updateLegalArmor();
            break;
        case "head":
            updateLegalHead();
            break;
    }
    return;
}
//# sourceMappingURL=player.js.map