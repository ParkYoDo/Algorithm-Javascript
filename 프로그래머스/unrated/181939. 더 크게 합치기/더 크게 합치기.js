function solution(a, b) {
    var case1 = Number(a.toString()+b.toString());
    var case2 = Number(b.toString()+a.toString());
    return case1>case2?case1:case2
}