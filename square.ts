function allSquares() : Set<string> {
    let all : Set<string> = new Set();
    for (let r = 0 ; r < global_rows  ; r++) {
        for (let c = 0 ; c < global_cols ; c++) {
            all.add(asSquare(r,c));
        }
    }
    return all;
}

function noSquaresYet() : Set<string> {
    let none : Set<string> = new Set();
    return none;
}



function playerAt(s : Square) : number {
    if (player_set[0].has(s)) return 0;
    if (player_set[1].has(s)) return 1;
    return 0;
}

function row(s : Square) : number {
    let raw = "";
    for (let char of s) {
        if (char == ",") break; 
        else raw += char;
    }
    return parseInt(raw);
}

function col(s : Square) : number {
    let raw = "";
    let found_comma = false;
    for (let char of s) {
        if (char == ",") {
            found_comma = true;
            continue; 
        }
        if (!found_comma) continue; 
        else raw += char;
    }
    return parseInt(raw);
}
function asSquare(row : number, col : number) : Square {
    return `${row},${col}`;
}