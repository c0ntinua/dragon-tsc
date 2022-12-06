function updateLegalArmor() {
    legal_set = noSquaresYet();
    updateConnectedSet();
    for (let s of connected_set) {
        if (myPiece(s) && pieceAt(s) == "body")
            legal_set.add(s);
    }
    if (!containsHead(legal_set) || !containsBody(legal_set)) {
        legal_set = noSquaresYet();
    }
}
//# sourceMappingURL=armor.js.map