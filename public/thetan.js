function updateLegalThetan() {
    legal_set = noSquaresYet();
    thetan_path_set = noSquaresYet();
    for (let s of neighborsOf(target_square)) {
        if (isEmpty(s))
            thetan_path_set.add(s);
        if (isEmpty(s))
            legal_set.add(s);
        if (!invulnerable_pieces.has(pieceAt(s)) && !myPiece(s))
            legal_set.add(s);
    }
    for (let p of thetan_path_set) {
        for (let n of neighborsOf(p)) {
            if (!invulnerable_pieces.has(pieceAt(n)) && !myPiece(n))
                legal_set.add(n);
        }
    }
}
//# sourceMappingURL=thetan.js.map