function solution(start, end) {
    return Array(start-end+1).fill(null).map((a,i)=>start-i);
}