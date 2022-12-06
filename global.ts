const all_squares = allSquares();
let board = emptyBoard();
let connected_set = noSquaresYet();
let connected_adjacent_set = noSquaresYet();
let legal_set = noSquaresYet();
let thetan_path_set = noSquaresYet();
let one_step_legal_set = noSquaresYet();
let two_step_legal_set = noSquaresYet();
let player_set : Set<Square>[] = [noSquaresYet(),noSquaresYet()];
let source_square : Square = {row : 0, col : 0};
let target_square : Square = {row : 0, col : 0};
let new_target_square : Square = {row : 0, col : 0};
let dest_square : Square = {row : 0, col : 0};
let this_piece_code : number = 0;
let random_move_mode : boolean = false;
let selected_mode : boolean = false;
let destination_mode : boolean = false;

