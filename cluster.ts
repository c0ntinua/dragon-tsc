function updateCluster(target_col : number, target_row : number) {
    cluster.cell = Array(global_rows*global_cols).fill(0);
    let counter = 2;
    if (world.get(target_col, target_row ) > 0 && player.get(target_col,target_row) == current_player) {
        cluster.set(target_col, target_row , 1);
        if (world.get(target_col,target_row) == 4) {
            connectAllTunnels();
        }

    }
    for (let round = 1 ; round <= rounds; round++) {
        for (let row = 0; row < global_rows ; row++) {
            for (let col = 0 ; col  < global_cols; col++) {
                if (clusterNeighbor(col, row) && world.get(col,row) > 0 && player.get(col,row) == current_player  ) {
                    if (cluster.get(col, row) == 0) {
                        cluster.set(col, row, 1);
                        counter++;
                    }
                    if (world.get(col,row) == 4 && player.get(col,row) == current_player ) {
                        connectAllTunnels();
                    }
                }           
            }
        }
    }
}

function updateClusterAdjacent() {
    for (let row = 0; row < global_rows ; row++) {
        for (let col = 0 ; col  < global_cols; col++) {
            if (clusterNeighbor(col, row)  ) {
                    cluster_adjacent.set(col, row, 1);
            }         
        }
    }
}