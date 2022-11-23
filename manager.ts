

function plotLegalMoves() {
    legal.cell = Array(global_rows*global_cols).fill(0);
    cluster.cell = Array(global_rows*global_cols).fill(0);
    cluster_adjacent.cell = Array(global_rows*global_cols).fill(0);
    this_piece_code = world.get(target_col, target_row);
    switch(this_piece_code) {
        case 0 : updateLegalEmpty();break;
        case 1 : updateLegalBody();break;
        case 2 : updateLegalArmor();break;
        case 3 : updateLegalHead();break;
        case 4 : updateLegalTunnel();break;
        case 5 : updateLegalThetan();break;
        case 6 : updateLegalKnight();break;
        default: updateLegalEmpty();break;
    }
    
    pen.clearRect(0, 0, 1000, 1000);

    plotGrid();
    plotGridChess();
    if (selected_mode ) {
        plotLegalChess();
        //plotLegal();  
        plotSelected();
    }  
    
    //plotWorld();
    plotWorldChess(); 

}



