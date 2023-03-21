function solution(n) {
    var array=[];
    while(n>0){
        array.push(n%3);
        n = parseInt(n/3);
    }
    
    return array.reduce((acc,cur,idx)=>acc+cur*Math.pow(3,array.length-(idx+1)),0);
}