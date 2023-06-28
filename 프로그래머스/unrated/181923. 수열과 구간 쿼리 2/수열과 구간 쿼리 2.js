function solution(arr, queries) {
    var answer = [];
    
    for(var i=0; i<queries.length; i++) {
        const [s,e,k] = queries[i];
        const value = arr.slice(s, e+1).filter((a)=>a>k);
        answer.push(value.length ? Math.min(...value) : -1)
    }
    return answer;
}