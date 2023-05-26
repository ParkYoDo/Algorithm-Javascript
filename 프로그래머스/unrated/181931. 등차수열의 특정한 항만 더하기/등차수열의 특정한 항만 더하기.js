function solution(b, d, included) {
    var result = []
    
    for ( var i =0; i<included.length; i++){
        result.push(b+i*d)
    }
    return result.filter((a,i)=>included[i]).reduce((a,b)=>a+b,0);
}