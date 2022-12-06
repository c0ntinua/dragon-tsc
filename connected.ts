
function updateConnectedSet() {
    connected_set = noSquaresYet();
    if (myPiece(target_square)) {
        connected_set.add(target_square);
    }
    for (let round = 1 ; round <= rounds; round++) {
        for (let s of all_squares) {
            if (connectedPieceAdjacent(s) && nonEmpty(s) && myPiece(s)) connected_set.add(s); 
        }
    }
}
function updateConnectedAdjacentSet() {
    for (let s of all_squares) {
        if (connectedPieceAdjacent(s)) connected_adjacent_set.add(s);
    }
}
function connectedPieceAdjacent(check_square : Square) : boolean {
    for (let s of neighborsOf(check_square)) if (connected_set.has(s)) return true;
    return false;
}

function containsHead(S : Set<Square>) : boolean {
    for (let s of S ) {
        if (board[s.row][s.col] == "head") return true;
    }
    return false;
}

function containsBody(S : Set<Square>) : boolean {
    for (let s of S ) {
        if (board[s.row][s.col] == "body") return true;
    }
    return false;
}