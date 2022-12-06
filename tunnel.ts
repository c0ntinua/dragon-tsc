// function updateLegalTunnel() {
//     legal.cell = Array(global_rows*global_cols).fill(0);
//     cluster.cell = Array(global_rows*global_cols).fill(0);
//     cluster_adjacent.cell = Array(global_rows*global_cols).fill(0);
//     tunnel_cluster.cell = Array(global_rows*global_cols).fill(0);
//     tunnel_cluster_adjacent.cell = Array(global_rows*global_cols).fill(0);
//     updateCluster(target_col,target_row);
//     updateClusterAdjacent();
//     updateTunnelCluster(target_col,target_row);
//     updateTunnelClusterAdjacent();
//     for (let row = 0; row < global_rows ; row++) {
//         for (let col = 0 ; col  < global_cols; col++) {
//             if (tunnel_cluster_adjacent.get(col, row) == 1 && world.get(col,row) == 0  ) {
//                 legal.set(col, row, 1);
//             }         
//         }
//     }
// }

// function updateTunnelCluster(target_col : number, target_row : number) {
//     tunnel_cluster.cell = Array(global_rows*global_cols).fill(0);
//     let counter = 2;
//     if (world.get(target_col, target_row ) > 0 && player.get(target_col,target_row) == current_player) {
//         tunnel_cluster.set(target_col, target_row , 1);   
//     }
//     for (let round = 1 ; round <= rounds; round++) {
//         for (let row = 0; row < global_rows ; row++) {
//             for (let col = 0 ; col  < global_cols; col++) {
//                 if (tunnelClusterNeighbor(col, row) && world.get(col,row) > 0 && player.get(col,row) == current_player  ) {
//                     tunnel_cluster.set(col,row,1);      
//                 }           
//             }
//         }
//     }
// }

// function updateTunnelClusterAdjacent() {
//     for (let row = 0; row < global_rows ; row++) {
//         for (let col = 0 ; col  < global_cols; col++) {
//             if (tunnelClusterNeighbor(col, row)  ) {
//                     tunnel_cluster_adjacent.set(col, row, 1);
//             }         
//         }
//     }
// }

// function connectAllTunnels() {
//     for (let row = 0; row < global_rows ; row++) {
//         for (let col = 0 ; col  < global_cols; col++) {
//             if (isTunnel(world.get(col,row)) && player.get(col,row) == current_player) {
//                     cluster.set(col, row, 1);
//             }         
//         }
//     }
// }

// function isTunnel( code : number) {
//     if (code == 4) return true; else return false;
// }

// function tunnelClusterNeighbor(check_col : number , check_row : number) {
//     let this_col : number = 0;
//     let this_row : number = 0;
//     for (let row_mod = -1; row_mod <= 1; row_mod++) {
//         for (let col_mod = -1; col_mod <= 1; col_mod++) {
//             this_row = check_row + row_mod;
//             this_col = check_col + col_mod;
//             if ((this_row != check_row) || (this_col != check_col)) {
//                 if (this_row >= 0 && this_row < global_rows && this_col >= 0 && this_col < global_cols ) {
//                     if (tunnel_cluster.get(this_col, this_row) == 1 ) {
//                             return true;
//                     }
//                 }
//             }
//         }
//     }
//     return false;
// }
