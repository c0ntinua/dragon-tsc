let canvas = document.getElementById("canvas");
let pen = canvas.getContext("2d");
const global_rows = 8;
const global_cols = 8;
const pixel_height = Math.floor(canvas.height / global_rows);
const pixel_width = Math.floor(canvas.width / global_cols);
let cluster_set = noSquaresYet();
let cluster_adjacent_set = noSquaresYet();
let legal_set = noSquaresYet();
let thetan_path_set = noSquaresYet();
let one_step_legal_set = noSquaresYet();
let two_step_legal_set = noSquaresYet();
let player_set = [noSquaresYet(), noSquaresYet()];
const all_squares = allSquares();
const density = 0.5;
let target_col = 0;
let target_row = 0;
let source_square = { row: 0, col: 0 };
let target_square = { row: 0, col: 0 };
let dest_col = 0;
let dest_row = 0;
let piece_types = 2;
let output_colors = 2;
let color = ["#AA0000", "#003300"];
let delay = 100;
let tiny_updates = 100;
let world = newWorld();
let cluster = newWorld();
let cluster_adjacent = newWorld();
let tunnel_cluster = newWorld();
let tunnel_cluster_adjacent = newWorld();
let thetan_path = newWorld();
let one_step_legal = newWorld();
let two_step_legal = newWorld();
let legal = newWorld();
let player = newWorld();
let current_player = -1;
let rounds = 40;
let this_piece_code = 0;
let random_move_mode = false;
let selected_mode = false;
let destination_mode = false;
let old_target_col = 0;
let old_target_row = 0;
let glyph_row_shift = 46;
let glyph_col_shift = 5;
let font_description = "60px Noto Sans Light";
//# sourceMappingURL=global.js.map