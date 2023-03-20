function solution(array, n) {
    var value = Math.min(...array.map((a)=>Math.abs(a-n)));
    return Math.min(...array.filter((a)=>Math.abs(a-n)===value))
}