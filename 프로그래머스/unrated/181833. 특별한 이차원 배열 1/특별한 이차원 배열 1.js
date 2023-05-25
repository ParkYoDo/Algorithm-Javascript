function solution(n) {
    var answer = [];
    for(var i=0; i<n; i++) {
        answer.push(Array(n).fill(null).map((_,j)=>i===j?1:0))
    }
    return answer;
}