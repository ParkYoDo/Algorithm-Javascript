function solution(n) {
    
    return [...n.toString()].reduce((acc,cur)=>Number(acc)+ Number(cur),0 );
}