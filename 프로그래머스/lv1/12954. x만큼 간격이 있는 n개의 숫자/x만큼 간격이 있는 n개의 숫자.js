function solution(x, n) {
    var array = Array(n).fill(null); 
    return array.map((_,i)=>x*(i+1));
}