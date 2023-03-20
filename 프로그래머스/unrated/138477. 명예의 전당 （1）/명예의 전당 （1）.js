function solution(k, score) {
    return score.map((a,i)=>Number(...score.slice(0,i+1).sort((a,b)=>b-a).slice(0,k).slice(-1)));
}