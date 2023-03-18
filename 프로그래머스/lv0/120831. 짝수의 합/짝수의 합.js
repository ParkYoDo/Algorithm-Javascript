function solution(n) {
  var array = [];
    var i = n;
    for(i;i>=0; i--) {
        if(i%2===0)
            array.push(i);
        
    } 
    return array.reduce((acc,cur)=>acc+cur,0);
    
}