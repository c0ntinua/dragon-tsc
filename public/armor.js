function updateLegalArmor() {
    legal_set = noSquaresYet();
    updateConnectedSet();
    for (let s of connected_set) {
        if (pieceAt(s) == "body")
            legal_set.add(s);
    }
    if (!containsHead(connected_set) || !containsBody(connected_set)) {
        legal_set = noSquaresYet();
    }
}
//# sourceMappingURL=armor.js.map