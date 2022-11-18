function updateLegalArmor() {
    legal.cell = Array(global_rows*global_cols).fill(0);
    cluster.cell = Array(global_rows*global_cols).fill(0);
    cluster_adjacent.cell = Array(global_rows*global_cols).fill(0);
    updateCluster(target_col,target_row);
    updateClusterAdjacent();
    for (let row = 0; row < global_rows ; row++) {
        for (let col = 0 ; col  < global_cols; col++) {
            if (cluster.get(col, row) == 1 && world.get(col,row) == 1 && player.get(col,row) == current_player  ) {
                    legal.set(col, row, 1);
            }         
        }
    }
    if (!clusterContainsHeadAndBody()) legal.cell = Array(global_rows*global_cols).fill(0);
}