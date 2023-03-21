function solution(n) {
    return Array(n).fill(null).map((_,i)=>(i+1)%2===0?'박':'수').join('');
}