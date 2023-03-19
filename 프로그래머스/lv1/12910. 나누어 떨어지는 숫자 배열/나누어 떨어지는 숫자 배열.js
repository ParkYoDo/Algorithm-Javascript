function solution(arr, divisor) {
    var array =  arr.filter((a)=>a%divisor===0);
    return arr.filter((a)=>a%divisor===0).length? array.sort((a,b)=>a-b):[-1];
}