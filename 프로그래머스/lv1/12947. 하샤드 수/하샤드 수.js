function solution(x) {
    var sum = x.toString().split('').reduce((acc,cur)=> acc+ Number(cur),0)
    return x%sum ===0?true:false ;
}