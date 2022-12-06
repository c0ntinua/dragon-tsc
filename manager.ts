function plotEverything() {
    updateLegal(target_square);
    plotEmptyBoard();
    if (piece_is_selected ) {
        plotLegalSet(); 
        //plotConnectedSet();
        
        plotTargetSquare();
    }  
    plotPieces(); 
    
}



