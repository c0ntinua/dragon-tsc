
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
    connected_adjacent_set = noSquaresYet();
    for (let s of all_squares) {
        if (connectedPieceAdjacent(s)) connected_adjacent_set.add(s);
    }
}
function connectedPieceAdjacent(check_square : Square) : boolean {
    for (let s of neighborsOf(check_square)) if (connected_set.has(s)) return true;
    return false;
}

