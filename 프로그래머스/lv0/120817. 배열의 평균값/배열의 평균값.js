function solution(numbers) {
    var answer = numbers.reduce((acc,cur)=> {return acc+cur},0)/numbers.length;
    return answer;
}