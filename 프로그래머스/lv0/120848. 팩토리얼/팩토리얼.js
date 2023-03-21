function solution(n) {
    var result =1;
    if(n===1) return 1;
    for(var i =1;result<n;i++){
        result = result*i;
    }
    return result>n?i-2:i-1;
}