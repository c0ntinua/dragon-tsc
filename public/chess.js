function chessSymbol(player_code, piece_code) {
    switch (player_code) {
        case 0:
            switch (piece_code) {
                case "body": return 9817;
                case "armor": return 9814;
                case "head": return 9812;
                case "thetan": return 9813;
                case "knight": return 9816;
            }
            break;
        case 1:
            switch (piece_code) {
                case "body": return 9823;
                case "armor": return 9820;
                case "head": return 9818;
                case "thetan": return 9819;
                case "knight": return 9822;
            }
    }
}
//# sourceMappingURL=chess.js.map