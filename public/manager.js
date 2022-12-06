function plotEverything() {
    updateLegal(target_square);
    plotEmptyBoard();
    if (piece_is_selected) {
        plotLegalSet();
        plotTargetSquare();
    }
    plotPieces();
}
//# sourceMappingURL=manager.js.map