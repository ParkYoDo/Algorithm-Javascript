function solution(n) {
    var answer = 0;
 
        for (var index =1; index<=n; index++) {
            if(n%index===0) {
                answer++;
            }
        }
    
    
    return answer;
}