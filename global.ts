type Square = {
    row: number;
    col: number;
};
type SquareWithString = {
    row: number;
    col: number;
    string: string;
}
let canvas = document.getElementById("canvas") as HTMLCanvasElement;
let pen = canvas.getContext("2d");


const global_rows : number = 8;const global_cols : number = 8;
const pixel_height : number = Math.floor(canvas.height/global_rows);
const pixel_width : number  = Math.floor(canvas.width/global_cols);

//we use sets instead of arrays, where membership represents what 1.0 use to,
//namely the possesion of that property by the square

let cluster_set = noSquaresYet();
let cluster_adjacent_set = noSquaresYet();
let legal_set = noSquaresYet();
let thetan_path_set = noSquaresYet();
let one_step_legal_set = noSquaresYet();
let two_step_legal_set = noSquaresYet();

//an array of sets, one for each player, containing exactly 
//the squares controlled by the indexed player

let player_set : Set<Square>[] = [noSquaresYet(),noSquaresYet()];


const all_squares = allSquares();
const density = 0.5;


let target_col : number = 0;let target_row : number = 0;
let source_square : Square = {row : 0, col : 0};
let target_square : Square = {row : 0, col : 0};
let dest_col : number  = 0;
let dest_row : number = 0;

let piece_types : number = 2;
let output_colors : number = 2;
let color : string[] = ["#AA0000","#003300"];
let delay : number = 100;
let tiny_updates : number = 100;
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
let current_player : number = -1;
let rounds : number = 40;
let this_piece_code : number = 0;
let random_move_mode : boolean = false;
let selected_mode : boolean = false;
let destination_mode : boolean = false;
let old_target_col : number = 0;
let old_target_row : number  = 0;
let glyph_row_shift = 46;
let glyph_col_shift = 5;
let font_description = "60px Noto Sans Light";
