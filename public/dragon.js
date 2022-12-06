function containsHead(S) {
    for (let s of S) {
        if (board[row(s)][col(s)] == "head")
            return true;
    }
    return false;
}
function containsBody(S) {
    for (let s of S) {
        if (board[row(s)][col(s)] == "body")
            return true;
    }
    return false;
}
//# sourceMappingURL=dragon.js.map