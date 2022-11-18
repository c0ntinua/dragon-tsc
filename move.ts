function movePiece(from_col : number, from_row : number , to_col : number, to_row : number ) {
    player.set(to_col, to_row, current_player);
    let this_piece_type = world.get(from_col, from_row);
    current_player = other_player(current_player);
    console.log("current player " + current_player);
    switch (this_piece_type) {
        case 0:
            break;
        case 1:
            world.set(to_col, to_row, 1);
            world.set(from_col, from_row, 0);
            player.set(from_col, from_row, 0);
            break;
        case 2:
            world.set(to_col, to_row, 2);
            world.set(from_col, from_row, 1);
            break;
        case 3:
            world.set(to_col, to_row, 3);
            world.set(from_col, from_row, 0);
            player.set(from_col, from_row, 0);
            break;
        case 4:
            world.set(to_col, to_row, 4);
            world.set(from_col, from_row, 0);
            player.set(from_col, from_row, 0);
            break;
        case 5:
            world.set(to_col, to_row, 5);
            world.set(from_col, from_row, 0);
            player.set(from_col, from_row, 0);
        default:
            break;
    }
}
function other_player(player : number) {
    if (player == -1) return 1;
    if (player ==  1) return -1;
    console.log('function other_player recieved invalid input');
}