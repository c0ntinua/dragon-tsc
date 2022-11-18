function plotGrid() {
    pen.strokeStyle = "#222222";
    pen.lineWidth = 1;
    for (let row = 0 ; row < global_rows  ; row++) {
        for (let col = 0 ; col < global_cols ; col++) {
            pen.beginPath();
            pen.rect(col*pixel_width, row*pixel_height, pixel_width, pixel_height);
            pen.stroke();   
        }
    }

}

function plotWorld() {
    let this_code = 0;
    pen.font = "50px Courier New";
    
    for (let row = 0 ; row < global_rows  ; row++) {
        for (let col = 0 ; col < global_cols ; col++) {
            this_code = world.get(col,row);
            if (this_code > 0) {
                pen.strokeStyle = player_color(player.get(col,row));
                pen.fillStyle = player_color(player.get(col,row));
                switch (world.get(col,row)) {
                    case 1 :
                        pen.lineWidth = 3;
                        pen.beginPath(); 
                        pen.arc(col*pixel_width + pixel_width/2, row*pixel_height + pixel_height/2, 
                        7, 0, 2 * Math.PI, false);
                        pen.fill();
                        break;   
                    case 2:
                        pen.lineWidth = 3;
                        pen.beginPath(); 
                        pen.arc(col*pixel_width + pixel_width/2, row*pixel_height + pixel_height/2, 
                        7, 0, 2 * Math.PI, false);
                        pen.fill();
                        pen.beginPath(); 
                        //pen.strokeRect(col*pixel_width + pixel_width/4, row*pixel_height + pixel_height/4,pixel_width/2,pixel_height/2 );
                        // pen.stroke();
                        pen.arc(col*pixel_width + pixel_width/2, row*pixel_height + pixel_height/2, 
                        12, 0, 2 * Math.PI, false);
                        pen.stroke();
                        break;  
                    case 3:
                        //9819,9035
                        //scissors 9986
                        pen.font = "50px Courier New";
                        pen.beginPath();
                        pen.fillText(String.fromCharCode(936), 
                        col*pixel_width + 9, row*pixel_height + 42);
                        pen.fill();
                        break;   
                    case 4:
                        //scissors 1421
                        pen.font = "40px Courier New";
                        pen.beginPath();
                        //pen.fillText(String.fromCharCode(8859);
                        //pen.fillText(String.fromCharCode(8984),
                        pen.fillText(String.fromCharCode(936),  
                        col*pixel_width + 8 , row*pixel_height + 39);

                        pen.fill();
                        pen.font = "50px Courier New";
                        break;
                    case 5:
                        pen.font = "40px Times New Roman";
                        pen.beginPath();
                        //pen.fillText(String.fromCharCode(8859);
                        //pen.fillText(String.fromCharCode(8984),
                        pen.fillText(String.fromCharCode(571),  
                        col*pixel_width + 8 , row*pixel_height + 39);

                        pen.fill();
                        pen.font = "50px Courier New";
                        break;
                    case 6:
                        pen.font = "40px Times New Roman";
                        pen.beginPath();
                        //pen.fillText(String.fromCharCode(8859);
                        //pen.fillText(String.fromCharCode(8984),
                        pen.fillText(String.fromCharCode(915),  
                        col*pixel_width + 8 , row*pixel_height + 39);
    
                        pen.fill();
                        pen.font = "50px Courier New";
                        break;

                    default: break;  
                }
            }   
        }
    }
}

function player_color(code : number) : string {
    switch(code) {
        case -1 : return color[0];
        case 1 : return color[1];
        default: console.log('problem in function player_color');
    }
}






function isDragon(piece_code : number) {
    if (piece_code > 0) return true; else return false;
}

function plotCluster() { 
    for (let row = 0 ; row < global_rows ; row++) {
        for (let col = 0 ; col < global_cols ; col++) {
            pen.fillStyle = "#FF6666";
            //pen.fillStyle = color[0];
            if (cluster.get(col,row) > 0) {
                pen.beginPath();
                pen.rect(col*pixel_width, row*pixel_height, pixel_width, pixel_height);
                //pen.fillText(avatar(world.get(row,col)), col*pixel_width, row*pixel_height);
                pen.fill();   
            }

        }
            
    }

}
function plotClusterAdjacent() { 
    for (let row = 0 ; row < global_rows ; row++) {
        for (let col = 0 ; col < global_cols ; col++) {
            pen.fillStyle = "#FFBBBB";
            //pen.fillStyle = color[0];
            if (cluster_adjacent.get(col,row) > 0) {
                pen.beginPath();
                pen.rect(col*pixel_width, row*pixel_height, pixel_width, pixel_height);
                //pen.fillText(avatar(world.get(row,col)), col*pixel_width, row*pixel_height);
                pen.fill();   
            }

        }
            
    }
}
function plotClusterAdjacentPlayer() { 
    for (let row = 0 ; row < global_rows ; row++) {
        for (let col = 0 ; col < global_cols ; col++) {
            pen.fillStyle = "#FFBBBB";
            //pen.fillStyle = color[0];
            if (cluster_adjacent.get(col,row) > 0) {
                pen.beginPath();
                pen.rect(col*pixel_width, row*pixel_height, pixel_width, pixel_height);
                //pen.fillText(avatar(world.get(row,col)), col*pixel_width, row*pixel_height);
                pen.fill();   
            }

        }
            
    }
}
function plotLegal() {
    for (let row = 0 ; row < global_rows ; row++) {
        for (let col = 0 ; col < global_cols ; col++) {
            pen.fillStyle = "#FFBBBB";
            //pen.fillStyle = color[0];
            if (legal.get(col,row) == 1) {
                pen.beginPath();
                pen.rect(col*pixel_width, row*pixel_height, pixel_width, pixel_height);
                pen.fill();   
            }

        }
    }
}


function plotSelected() {
    pen.strokeStyle = "#00FF00";
    pen.lineWidth = 3;
    pen.beginPath();
    pen.rect(target_col*pixel_width, target_row*pixel_height, pixel_width, pixel_height);
    pen.stroke();  

}
function plotDestination() {
    pen.strokeStyle = "#00FFFF";
    pen.lineWidth = 3;
    pen.beginPath();
    pen.rect(dest_col*pixel_width, dest_row*pixel_height, pixel_width, pixel_height);
    pen.stroke();  

}


