function updateLegalHead() {
    legal_set = noSquaresYet();
    updateConnectedSet();
    updateConnectedAdjacentSet();
    for (let s of connected_adjacent_set) {
        if(isEmpty(s)) legal_set.add(s);
        if(!myPiece(s) && !invulnerable_pieces.has(pieceAt(s))) legal_set.add(s);
    }
    if (!containsHead(connected_set) || !containsBody(connected_set)) {
        legal_set = noSquaresYet();
    }
}
