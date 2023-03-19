function solution(before, after) {
    var sortBefore = [...before].sort();
    var sortAfter = [...after].sort();
    
    return Array(before.length).fill(null).filter((_,i)=>sortBefore[i]===sortAfter[i]).length === before.length?1:0;
}