function solution(numLog) {
    var answer = '';
    for(var i=0; i<numLog.length; i++) {
        if(numLog[i+1]-numLog[i]>=1 && numLog[i+1]-numLog[i]<10) {
            answer += 'w'.repeat(Math.abs(numLog[i+1]-numLog[i]));
        } else if (numLog[i+1]-numLog[i]<=-1 && numLog[i+1]-numLog[i]>-10) {
            answer += 's'.repeat(Math.abs(numLog[i+1]-numLog[i]));
        } else if(numLog[i+1]-numLog[i]===10) {
            answer += 'd';
        } else if (numLog[i+1]-numLog[i]===-10) {
            answer += 'a';
        }
    }
    return answer;
}