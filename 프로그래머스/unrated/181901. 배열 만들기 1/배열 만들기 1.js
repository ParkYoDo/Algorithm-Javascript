function solution(n, k) {
    return Array(parseInt(n/k)).fill(null).map((_,i)=>k*(i+1))
}