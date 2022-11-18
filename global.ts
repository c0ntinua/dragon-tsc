let canvas = document.getElementById("canvas") as HTMLCanvasElement;
let pen = canvas.getContext("2d");
let density = 0.5;

let global_rows : number = 21;
let global_cols : number = 21;

let target_col : number = 0;
let target_row : number = 0;

let dest_col : number  = 0;
let dest_row : number = 0;

let pixel_height : number = canvas.height/global_rows;
let pixel_width : number  = canvas.width/global_cols;
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
