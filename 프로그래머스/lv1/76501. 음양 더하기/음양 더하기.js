function solution(absolutes, signs) {
    return absolutes.map((a,i)=>signs[i]?a:-a).reduce((acc,cur)=>acc+cur,0);
}