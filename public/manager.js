function plotEverything() {
    updateLegal();
    updateConnectedSet();
    plotEmptyBoard();
    if (piece_is_selected) {
        plotSquareSet(new Set([target_square]), "#FF0000");
        plotSquareSet(legal_set, legal_set_color);
    }
    plotPieces();
}
function updateLegal() {
    if (!myPiece(target_square)) {
        legal_set = noSquaresYet();
        return;
    }
    switch (board[row(target_square)][col(target_square)]) {
        case "body":
            updateLegalBody();
            break;
        case "armor":
            updateLegalArmor();
            break;
        case "head":
            updateLegalHead();
            break;
        case "thetan":
            updateLegalThetan();
            break;
        case "knight":
            updateLegalKnight();
            break;
    }
    return;
}
//# sourceMappingURL=manager.js.map