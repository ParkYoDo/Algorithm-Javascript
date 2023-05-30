function solution(board, k) {
    var result = 0;
    for(var i=0; i<board.length; i++) {
        for(var j=0; j<board[i].length; j++) {
            if(i + j <= k)  {
                result += board[i][j]
            }
        }
    }
    return result;
}