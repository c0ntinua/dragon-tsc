function chessSymbol(player_code : number, piece_code : number) : number {
    switch (player_code) {
        case -1 :
            switch (piece_code) {
                case 1 : return 9817;
                case 2 : return 9814;
                case 3 : return 9812;
                case 5 : return 9813;
                case 6 : return 9816;
            }
            break;
        case 1:
            switch (piece_code) {
                case 1 : return 9823;
                case 2 : return 9820;
                case 3 : return 9818;
                case 5 : return 9819;
                case 6 : return 9822;
            }
    }

}