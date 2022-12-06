function plotEverything() {
    switch(board[target_square.row][target_square.col]) {
        case "body" : updateLegalBody();break;
        case "armor" : updateLegalArmor();break;
        case "head" : updateLegalHead();break;
    }
    plotEmptyBoard();
    if (selected_mode ) {
        //plotLegalSet(); 
        
        plotTargetSquare();
    }  
    plotPieces(); 
    plotConnectedSet();
}



