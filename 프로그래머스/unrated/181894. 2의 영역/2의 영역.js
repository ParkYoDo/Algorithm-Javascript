function solution(arr) {
    if(!arr.includes(2))  return [-1];
    
    if(arr.filter((a)=> a===2).length ===1) return [2];
    
    return arr.slice(arr.indexOf(2), arr.lastIndexOf(2)+1);
}