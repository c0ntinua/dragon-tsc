function plotEverything() {
    updateLegal();
    updateConnectedSet();
    plotEmptyBoard();
    //plotSquareSet(connected_adjacent_set, legal_set_color);
    if (piece_is_selected ) {
        plotTargetSquare();
        plotSquareSet(legal_set, legal_set_color);
    }  
    plotPieces(); 
    
}



