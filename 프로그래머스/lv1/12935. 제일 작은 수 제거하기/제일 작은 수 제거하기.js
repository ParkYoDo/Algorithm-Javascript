function solution(arr) {
    var smallNum = [...arr].sort((a,b)=>b-a)[arr.length-1]
    var array = arr.filter((a)=>a!==smallNum);
    return array.length? array: [-1];
}