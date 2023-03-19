function solution(n) {
    var array = [];
    for(var k=n; k>0;k--) {
        Array(k).fill(null).map((_,i)=>i+1).filter((a)=>k%a===0).length>=3&&array.push(k)
    }
    return array.length;
}