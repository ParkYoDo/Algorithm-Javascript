function solution(left, right) {
    var result = 0;
    for(var i =left; i<=right; i++) {
        var num = 0;
        for(var j=1; j<=i; j++ ) {
            if(!(i%j)) {
                num += 1;
            }
        }
        if(num%2) {
                result -= i;
            } else {
                result += i;
            }
    }
    return result;
}