function solution(arr) {
    let result = [arr];
    
    while(JSON.stringify(result[result.length-1]) !== JSON.stringify(result[result.length-2])) {
        result.push(result[result.length-1].map((a)=>{
            if(!(a%2) && a>=50 ) {
                return a/2;
            }
            if(a%2 && a<50) {
                return a*2 +1;
            }
            return a;
        }))
    }
    return result.length-2;
}