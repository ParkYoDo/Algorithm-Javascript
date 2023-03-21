function solution(n) {
    var i = 1;
    var j = 1;
    while(i*j<n) {
        i=i*++j
    }
    return j;
}