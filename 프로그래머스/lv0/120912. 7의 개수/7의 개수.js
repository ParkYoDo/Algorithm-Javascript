function solution(array) {
    
    return array.map((a)=> [...a.toString()].filter((b)=>b==='7').length).reduce((acc,cur)=>acc+cur,0)
}