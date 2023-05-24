function solution(numbers, n) {
    var result = 0;
    
    for(var i=0; i<numbers.length; i++){
        if(result>n) {
            return result;
        } else result += numbers[i];
    }
    return result;
}