function solution(my_string) {
    
    var number = my_string.split(' ').filter((a)=>Number(a)).map((a)=>Number(a));
    var sign = my_string.split(' ').filter((a)=>!Number(a));
    
    return number.reduce((acc,cur,idx)=>
        sign[idx-1]==='-' ? acc-cur:acc+cur,0)
    
}
