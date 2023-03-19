function solution(s1, s2) {

    return s1.filter((a)=>s2.find((b)=> a===b)).length;
}