function solution(keyinput, board) {
    let result = [0,0];
    let scope = [parseInt(board[0]/2),parseInt(board[1]/2)]
    for(var i=0; i<keyinput.length; i++) {
        if(keyinput[i] === 'left' && result[0] > -scope[0]) {
            result[0] -= 1;
        }
        if(keyinput[i] === 'right' && result[0] < scope[0]) {
            result[0] += 1;
        }
        if(keyinput[i] ==='up' && result[1] <scope[1]) {
            result[1] +=1 ; 
        } 
        if(keyinput[i] === 'down' && result[1] > -scope[1]) {
            result[1] -= 1;
        }
     }
    return result;
}