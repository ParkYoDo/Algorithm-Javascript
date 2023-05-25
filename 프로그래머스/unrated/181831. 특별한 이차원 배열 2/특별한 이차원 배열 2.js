function solution(arr) {
    var result = [];
    
    for(var i=0; i<arr.length; i++) {
        for(var j=0; j<arr.length; j++){
        result.push(arr[i][j] === arr[j][i])
        }
    }
    
    return result.filter((a)=>a===false).length?0:1;
    
}