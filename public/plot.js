function plotGrid() {
    pen.strokeStyle = "#222222";
    pen.lineWidth = 1;
    for (let row = 0; row < global_rows; row++) {
        for (let col = 0; col < global_cols; col++) {
            pen.beginPath();
            pen.rect(col * pixel_width, row * pixel_height, pixel_width, pixel_height);
            pen.stroke();
        }
    }
}
function plotGridChess() {
    let grid_player = -1;
    let counter = 0;
    for (let row = 0; row < global_rows; row++) {
        switch (grid_player) {
            case -1:
                counter = 1;
                break;
            case 1:
                counter = 0;
                break;
        }
        for (let col = 0; col < global_cols; col++) {
            switch (counter % 2) {
                case 0:
                    pen.fillStyle = "#D2B48C";
                    break;
                case 1:
                    pen.fillStyle = "#E5D3B3";
                    break;
            }
            pen.beginPath();
            pen.rect(col * pixel_width, row * pixel_height, pixel_width, pixel_height);
            pen.fill();
            counter++;
        }
        grid_player = other_player(grid_player);
    }
}
function plotGridChessSet() {
    let painted_squares = paintedSquares();
    for (let s of painted_squares) {
        pen.fillStyle = s.string;
        pen.beginPath();
        pen.rect(s.col * pixel_width, s.row * pixel_height, pixel_width, pixel_height);
        pen.fill();
    }
}
function plotWorld() {
    let this_code = 0;
    pen.font = "50px Courier New";
    for (let row = 0; row < global_rows; row++) {
        for (let col = 0; col < global_cols; col++) {
            this_code = world.get(col, row);
            if (this_code > 0) {
                pen.strokeStyle = player_color(player.get(col, row));
                pen.fillStyle = player_color(player.get(col, row));
                switch (world.get(col, row)) {
                    case 1:
                        pen.lineWidth = 3;
                        pen.beginPath();
                        pen.arc(col * pixel_width + pixel_width / 2, row * pixel_height + pixel_height / 2, 7, 0, 2 * Math.PI, false);
                        pen.fill();
                        break;
                    case 2:
                        pen.lineWidth = 3;
                        pen.beginPath();
                        pen.arc(col * pixel_width + pixel_width / 2, row * pixel_height + pixel_height / 2, 7, 0, 2 * Math.PI, false);
                        pen.fill();
                        pen.beginPath();
                        pen.arc(col * pixel_width + pixel_width / 2, row * pixel_height + pixel_height / 2, 12, 0, 2 * Math.PI, false);
                        pen.stroke();
                        break;
                    case 3:
                        pen.font = "50px Courier New";
                        pen.beginPath();
                        pen.fillText(String.fromCharCode(936), col * pixel_width + 9, row * pixel_height + 42);
                        pen.fill();
                        break;
                    case 4:
                        pen.font = "40px Courier New";
                        pen.beginPath();
                        pen.fillText(String.fromCharCode(936), col * pixel_width + 8, row * pixel_height + 39);
                        pen.fill();
                        pen.font = "50px Courier New";
                        break;
                    case 5:
                        pen.font = "40px Times New Roman";
                        pen.beginPath();
                        pen.fillText(String.fromCharCode(571), col * pixel_width + 8, row * pixel_height + 39);
                        pen.fill();
                        pen.font = "50px Courier New";
                        break;
                    case 6:
                        pen.font = "40px Times New Roman";
                        pen.beginPath();
                        pen.fillText(String.fromCharCode(915), col * pixel_width + 8, row * pixel_height + 39);
                        pen.fill();
                        pen.font = "50px Courier New";
                        break;
                    default: break;
                }
            }
        }
    }
}
function player_color(code) {
    switch (code) {
        case -1: return color[0];
        case 1: return color[1];
        default: console.log('problem in function player_color');
    }
}
function isDragon(piece_code) {
    if (piece_code > 0)
        return true;
    else
        return false;
}
function plotCluster() {
    for (let row = 0; row < global_rows; row++) {
        for (let col = 0; col < global_cols; col++) {
            pen.fillStyle = "#FF6666";
            if (cluster.get(col, row) > 0) {
                pen.beginPath();
                pen.rect(col * pixel_width, row * pixel_height, pixel_width, pixel_height);
                pen.fill();
            }
        }
    }
}
function plotWorldChess() {
    let this_code = 0;
    let this_glyph = 0;
    let this_player = -1;
    pen.strokeStyle = "#000000";
    pen.fillStyle = "#000000";
    pen.font = font_description;
    for (let row = 0; row < global_rows; row++) {
        for (let col = 0; col < global_cols; col++) {
            this_code = world.get(col, row);
            this_player = player.get(col, row);
            if (this_code > 0) {
                this_glyph = chessSymbol(this_player, this_code);
                pen.beginPath();
                pen.fillText(String.fromCharCode(this_glyph), col * pixel_width + glyph_col_shift, row * pixel_height + glyph_row_shift);
                pen.fill();
            }
        }
    }
}
function plotClusterAdjacent() {
    for (let row = 0; row < global_rows; row++) {
        for (let col = 0; col < global_cols; col++) {
            pen.fillStyle = "#FFBBBB";
            if (cluster_adjacent.get(col, row) > 0) {
                pen.beginPath();
                pen.rect(col * pixel_width, row * pixel_height, pixel_width, pixel_height);
                pen.fill();
            }
        }
    }
}
function plotClusterAdjacentPlayer() {
    for (let row = 0; row < global_rows; row++) {
        for (let col = 0; col < global_cols; col++) {
            pen.fillStyle = "#FFBBBB";
            if (cluster_adjacent.get(col, row) > 0) {
                pen.beginPath();
                pen.rect(col * pixel_width, row * pixel_height, pixel_width, pixel_height);
                pen.fill();
            }
        }
    }
}
function plotLegal() {
    for (let row = 0; row < global_rows; row++) {
        for (let col = 0; col < global_cols; col++) {
            pen.fillStyle = "#FFBBBB";
            if (legal.get(col, row) == 1) {
                pen.beginPath();
                pen.rect(col * pixel_width, row * pixel_height, pixel_width, pixel_height);
                pen.fill();
            }
        }
    }
}
function plotLegalChess() {
    for (let row = 0; row < global_rows; row++) {
        for (let col = 0; col < global_cols; col++) {
            pen.strokeStyle = "#00FF00";
            pen.lineWidth = 3;
            if (legal.get(col, row) == 1) {
                pen.beginPath();
                pen.rect(col * pixel_width, row * pixel_height, pixel_width, pixel_height);
                pen.stroke();
            }
        }
    }
}
function plotSelected() {
    pen.strokeStyle = "#00FF00";
    pen.lineWidth = 3;
    pen.beginPath();
    pen.rect(target_col * pixel_width, target_row * pixel_height, pixel_width, pixel_height);
    pen.stroke();
}
function plotDestination() {
    pen.strokeStyle = "#00FFFF";
    pen.lineWidth = 3;
    pen.beginPath();
    pen.rect(dest_col * pixel_width, dest_row * pixel_height, pixel_width, pixel_height);
    pen.stroke();
}
//# sourceMappingURL=plot.js.map