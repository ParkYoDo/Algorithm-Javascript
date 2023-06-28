function solution(rank, attendance) {
    const result = rank.filter((a,i)=>attendance[i]).sort((a,b)=>a>b?1:-1).slice(0,3).map((b)=>rank.indexOf(b));
    return 10000*result[0] + 100*result[1] + result[2];
    
}