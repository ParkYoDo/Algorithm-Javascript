function solution(q, r, code) {
    return [...code].filter((a,i)=>i%q===r).join('');
}