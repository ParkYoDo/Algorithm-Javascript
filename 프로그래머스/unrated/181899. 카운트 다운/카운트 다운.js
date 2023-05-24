function solution(start, end) {
    return Array(start-end+1).fill(null).map((_,i)=>start-i);
}