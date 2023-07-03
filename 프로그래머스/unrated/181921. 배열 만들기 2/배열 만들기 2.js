function solution(l, r) {
    var answer = [];
    
    for(var i=l; i<=r; i++) {
        if(i.toString().replaceAll('5','').replaceAll('0','') === '') {
            answer.push(i)
        }
    }
    return answer.length?answer:[-1];
}