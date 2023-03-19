function solution(n) {
    return Array(n).fill(null).map((_,i)=>i+1).filter((_,i)=>n%(i+1)===0);
}