function solution(n) {
    var answer = [];
    var index = 2;
    while(n!==1){
        if(!(n%index)) {
            n = n/index;
            answer.push(index);
        } else {
            index += 1;
        }
    }
    return [...new Set(answer)];
}