function solution(n) {
    var result = [];
    var array = Array(n).fill(null);
    
    array.map((_,i)=> array.length%(i+1)===0&&result.push(i+1));
    
    return result.reduce((acc,cur)=> acc+cur,0);
}