function solution(my_string) {
    var mo= ['a','e','i','o','u'];
    var answer = my_string.split('').filter((a)=>!mo.includes(a)).join('');
    return answer;
}