function newWorld() {
    return {
        cell: new Array(global_rows * global_cols).fill(0),
        get: function (col, row) {
            if (row >= 0 && row < global_rows && col >= 0 && col < global_cols) {
                return this.cell[col * global_rows + row];
            }
            else {
                console.log(`invalid access at ${row} , ${col}`);
            }
        },
        set: function (col, row, value) {
            if (row >= 0 && row < global_rows && col >= 0 && col < global_cols) {
                this.cell[col * global_rows + row] = value;
            }
            else {
                console.log('invalid index for setting');
            }
        },
    };
}
function seedWorld() {
    for (let row = 0; row < global_rows; row++) {
        for (let col = 0; col < global_cols; col++) {
            if (Math.random() < density) {
                world.set(col, row, randomPiece());
            }
        }
    }
}
function seedPlayer() {
    for (let row = 0; row < global_rows; row++) {
        for (let col = 0; col < global_cols; col++) {
            if (world.get(col, row) > 0) {
                if (Math.random() > 0.5)
                    player.set(col, row, -1);
                else
                    player.set(col, row, 1);
            }
        }
    }
}
function clusterContainsHeadAndBody() {
    let contains_head = false;
    let contains_body = false;
    for (let row = 0; row < global_rows; row++) {
        for (let col = 0; col < global_cols; col++) {
            if (cluster.get(col, row) == 1 && world.get(col, row) == 1)
                contains_body = true;
            if (cluster.get(col, row) == 1 && world.get(col, row) == 3)
                contains_head = true;
        }
    }
    if (contains_head && contains_body)
        return true;
    else
        return false;
}
function updateLegalEmpty() {
    legal.cell = Array(global_rows * global_cols).fill(0);
}
function clusterNeighbor(check_col, check_row) {
    let this_col = 0;
    let this_row = 0;
    for (let row_mod = -1; row_mod <= 1; row_mod++) {
        for (let col_mod = -1; col_mod <= 1; col_mod++) {
            this_row = check_row + row_mod;
            this_col = check_col + col_mod;
            if ((this_row != check_row) || (this_col != check_col)) {
                if (this_row >= 0 && this_row < global_rows && this_col >= 0 && this_col < global_cols) {
                    if (cluster.get(this_col, this_row) > 0) {
                        return true;
                    }
                }
            }
        }
    }
    return false;
}
function fixedIndex(x, modulus) {
    while (x < 0 || x >= modulus) {
        if (x < 0)
            x += modulus;
        if (x >= 0)
            x -= modulus;
    }
    return x;
}
function isArmor(piece_code) {
    if (piece_code == 3)
        return true;
    else
        return false;
}
function isBody(piece_code) {
    if (piece_code == 1)
        return true;
    else
        return false;
}
function randomPiece() {
    let code = Math.floor(Math.random() * 15);
    switch (code) {
        case 0: return 1;
        case 1: return 1;
        case 2: return 1;
        case 3: return 1;
        case 4: return 1;
        case 5: return 1;
        case 6: return 1;
        case 7: return 1;
        case 8: return 6;
        case 9: return 6;
        case 10: return 2;
        case 11: return 2;
        case 12: return 3;
        case 13: return 3;
        case 14: return 5;
    }
}
//# sourceMappingURL=dragon.js.map