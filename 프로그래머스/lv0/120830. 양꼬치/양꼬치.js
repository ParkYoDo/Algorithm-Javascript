function solution(n, k) {
    
    var serviceCount = parseInt(n/10); 
    
    var answer = 12000*n + 2000*(k-serviceCount);
    return answer;
}