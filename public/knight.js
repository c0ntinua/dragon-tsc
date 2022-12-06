function updateLegalKnight() {
    legal_set = noSquaresYet();
    updateKnightSet();
    for (let s of knight_set) {
        if (isEmpty(s))
            legal_set.add(s);
        if (!invulnerable_pieces.has(pieceAt(s)) && !myPiece(s))
            legal_set.add(s);
    }
}
function updateKnightSet() {
    knight_set = noSquaresYet();
    let col_mod = [2, 2, 1, -1, -2, -2, 1, -1];
    let row_mod = [1, -1, -2, -2, 1, -1, 2, 2];
    let candidate = asSquare(0, 0);
    for (let m = 0; m < col_mod.length; m++) {
        let candidate = asSquare(row(target_square) + row_mod[m], col(target_square) + col_mod[m]);
        if (validSquare(candidate))
            knight_set.add(candidate);
    }
}
//# sourceMappingURL=knight.js.map