function updateLegalKnight() {
    legal.cell = Array(global_rows*global_cols).fill(0);
    let space_code :number = 0;
    let space_player : number = 0;
    let col_mod : number[] = [2, 2, 1,-1,-2,-2, 1,-1];
    let row_mod : number[] = [1,-1,-2,-2, 1,-1, 2, 2];
    let this_col : number = 0;
    let this_row : number = 0;
    
    for (let s = 0 ; s < 8; s++) {
        this_col = target_col + col_mod[s];
        this_row = target_row+row_mod[s];
        space_code = world.get(this_col,this_row);
        space_player = player.get(this_col,this_row);
        if (knightAccessible(space_code,space_player)) {
            legal.set(this_col,this_row,1);
        }
    }
}

function knightAccessible(piece_code : number, owning_player : number) : boolean {
    switch (piece_code) {
        case 0 : return true;
        case 1 :
            if (owning_player == current_player) return false; else return true;
        case 2 :
            return false;
        case 3 :
            return false;
        case 4 :
            return false;
        case 5 :
            if (owning_player == current_player) return false; else return true;
        case 6 : 
            if (owning_player == current_player) return false; else return true;
        default:
            return false;
    }
}
