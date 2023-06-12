function solution(code) {
    var answer = '';
    var mode = 0;
    
    for(var i=0; i<code.length; i++) {
        if(mode === 0 && code[i]=== '1') {
            mode = 1;
        } else if(mode === 0 && !(i%2)) {
            answer += code[i];
        } else if(mode === 1 && code[i] === '1') {
            mode = 0;
        } else if(mode === 1 && i%2) {
            answer += code[i];
        }
    }
    return answer ? answer : 'EMPTY';
}

