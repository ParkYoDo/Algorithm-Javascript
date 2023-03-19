function solution(n) {
        var array = [];
    for(var i =2; i<=(n-1);i++) {
        if((n-1)%i===0) {
            array.push(i);
        }
    }
    
    
    return array[0];
}