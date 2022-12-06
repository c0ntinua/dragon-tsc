function updateLegalHead() {
    legal_set = noSquaresYet();
    updateConnectedSet();
    updateConnectedAdjacentSet();
    for (let s of connected_adjacent_set) {
        if(isEmpty(s)) legal_set.add(s);
        if(!myPiece(s) && !invulnerable_pieces.has(pieceAt(s))) legal_set.add(s);
    }
    // if (!containsHead(legal_set) || !containsBody(legal_set)) {
    //     legal_set = noSquaresYet();
    // }
}
