function solution(start, end) {
    return Array(end-start+1).fill(null).map((_,i)=>start+i);
}