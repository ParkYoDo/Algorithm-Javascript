function solution(array) {
    var centerIndex = parseInt(array.length/2)+1;
    var answer = array.sort((a,b)=>a-b)[centerIndex-1]
    return answer;
}