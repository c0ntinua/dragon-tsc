function updateLegalArmor() {
    legal_set = noSquaresYet();
    updateConnectedSet();
    for (let s of connected_set) {
        if (myPiece(s) && pieceAt(s) == "body")
            legal_set.add(s);
    }
}
//# sourceMappingURL=armor.js.map