function updateLegalThetan() {
    legal.cell = Array(global_rows * global_cols).fill(0);
    one_step_legal.cell = Array(global_rows * global_cols).fill(0);
    two_step_legal.cell = Array(global_rows * global_cols).fill(0);
    thetan_path.cell = Array(global_rows * global_cols).fill(0);
    updateOneStepLegal();
    updateTwoStepLegal();
    for (let row = 0; row < global_rows; row++) {
        for (let col = 0; col < global_cols; col++) {
            if (one_step_legal.get(col, row) == 1)
                legal.set(col, row, 1);
            if (two_step_legal.get(col, row) == 1)
                legal.set(col, row, 1);
        }
    }
}
function updateOneStepLegal() {
    legal.cell = Array(global_rows * global_cols).fill(0);
    one_step_legal.cell = Array(global_rows * global_cols).fill(0);
    two_step_legal.cell = Array(global_rows * global_cols).fill(0);
    thetan_path.cell = Array(global_rows * global_cols).fill(0);
    let this_col = 0;
    let this_row = 0;
    for (let row_mod = -1; row_mod <= 1; row_mod++) {
        for (let col_mod = -1; col_mod <= 1; col_mod++) {
            this_row = target_row + row_mod;
            this_col = target_col + col_mod;
            if ((this_row != target_row) || (this_col != target_col)) {
                if (this_row >= 0 && this_row < global_rows && this_col >= 0 && this_col < global_cols) {
                    if (thetanAccessible(world.get(this_col, this_row), player.get(this_col, this_row))) {
                        one_step_legal.set(this_col, this_row, 1);
                    }
                }
            }
        }
    }
}
function updateTwoStepLegal() {
    let this_col = 0;
    let this_row = 0;
    for (let row_mod = -1; row_mod <= 1; row_mod++) {
        for (let col_mod = -1; col_mod <= 1; col_mod++) {
            this_row = target_row + row_mod;
            this_col = target_col + col_mod;
            if ((this_row != target_row) || (this_col != target_col)) {
                if (this_row >= 0 && this_row < global_rows && this_col >= 0 && this_col < global_cols) {
                    if (world.get(this_col, this_row) == 0) {
                        thetan_path.set(this_col, this_row, 1);
                    }
                }
            }
        }
    }
    for (let row_mod = -2; row_mod <= 2; row_mod++) {
        for (let col_mod = -2; col_mod <= 2; col_mod++) {
            this_row = target_row + row_mod;
            this_col = target_col + col_mod;
            if ((this_row != target_row) || (this_col != target_col)) {
                if (this_row >= 0 && this_row < global_rows && this_col >= 0 && this_col < global_cols) {
                    if (pathNeighbor(this_col, this_row)) {
                        if (thetanAccessible(world.get(this_col, this_row), player.get(this_col, this_row))) {
                            two_step_legal.set(this_col, this_row, 1);
                        }
                    }
                }
            }
        }
    }
}
function thetanAccessible(piece_code, owning_player) {
    switch (piece_code) {
        case 0: return true;
        case 1:
            if (owning_player == current_player)
                return false;
            else
                return true;
        case 2:
            return false;
        case 3:
            return false;
        case 4:
            return false;
        case 5:
            return true;
        case 6:
            return true;
        default:
            return false;
    }
}
function pathNeighbor(check_col, check_row) {
    let this_col = 0;
    let this_row = 0;
    for (let row_mod = -1; row_mod <= 1; row_mod++) {
        for (let col_mod = -1; col_mod <= 1; col_mod++) {
            this_row = check_row + row_mod;
            this_col = check_col + col_mod;
            if ((this_row != check_row) || (this_col != check_col)) {
                if (this_row >= 0 && this_row < global_rows && this_col >= 0 && this_col < global_cols) {
                    if (thetan_path.get(this_col, this_row) == 1) {
                        return true;
                    }
                }
            }
        }
    }
    return false;
}
//# sourceMappingURL=thetan.js.map