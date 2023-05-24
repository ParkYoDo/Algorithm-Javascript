function solution(num_list) {
    var sum = num_list.reduce((a,b)=>a+b,0);
    var mul = num_list.reduce((a,b)=>a*b,1)
    return mul<Math.pow(sum,2)?1:0;
}