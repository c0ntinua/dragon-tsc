function plotEverything() {
    updateLegal();
    updateConnectedSet();
    plotEmptyBoard();
    if (piece_is_selected) {
        plotTargetSquare();
        plotSquareSet(legal_set, legal_set_color);
    }
    plotPieces();
}
//# sourceMappingURL=manager.js.map