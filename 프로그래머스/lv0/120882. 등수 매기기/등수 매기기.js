function solution(score) {
    var mediumArray = score.map((a)=>(a.reduce((acc,cur)=>acc+cur,0))/2);
    var sortedArray = [...mediumArray].sort((a,b)=>b-a);
    return mediumArray.map((a)=>sortedArray.indexOf(a)+1);
}