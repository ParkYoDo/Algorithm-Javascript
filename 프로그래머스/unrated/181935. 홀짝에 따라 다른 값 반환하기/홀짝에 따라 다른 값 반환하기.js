function solution(n) {
    var result = 0;
    if(n%2) {
        for(var i=1; i<n+1; i++) {
            if(i%2) {
                result += i
            }
        }
    } else {
        for(var i=1; i<n+1; i++){
            if(!(i%2)) {
                result += i*i
            }
        }
    }
    return result;
}