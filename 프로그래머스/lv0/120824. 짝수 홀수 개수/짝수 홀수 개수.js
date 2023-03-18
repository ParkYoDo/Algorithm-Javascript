function solution(num_list) {
    
    var a=0;
    var b=0;
    num_list.map((c)=> c%2===0?a++:b++);
    
    
    return [a,b];
}