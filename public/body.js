function updateLegalBody() {
    legal_set = noSquaresYet();
    updateConnectedSet();
    updateConnectedAdjacentSet();
    for (let s of connected_adjacent_set) {
        if (isEmpty(s))
            legal_set.add(s);
    }
}
//# sourceMappingURL=body.js.map