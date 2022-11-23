function updateLegalHead() {
    legal.cell = Array(global_rows*global_cols).fill(0);
    cluster.cell = Array(global_rows*global_cols).fill(0);
    cluster_adjacent.cell = Array(global_rows*global_cols).fill(0);
    updateCluster(target_col,target_row);
    updateClusterAdjacent();
    for (let row = 0; row < global_rows ; row++) {
        for (let col = 0 ; col  < global_cols; col++) {
            if (cluster_adjacent.get(col, row) == 1 ) {
                if (world.get(col,row) == 0 ) legal.set(col, row, 1);
                if (world.get(col,row) == 1 && player.get(col,row) != current_player ) legal.set(col, row, 1);
                if (world.get(col,row) == 5 && player.get(col,row) != current_player ) legal.set(col, row, 1);
                if (world.get(col,row) == 6 && player.get(col,row) != current_player ) legal.set(col, row, 1);
            }    
        }
    }
    if (!clusterContainsHeadAndBody()) legal.cell = Array(global_rows*global_cols).fill(0);
}
