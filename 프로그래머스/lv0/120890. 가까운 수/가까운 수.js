function solution(array, n) {
    return array.reduce((acc,cur)=>Math.abs(acc-n)>Math.abs(cur-n)?cur:Math.abs(acc-n)===Math.abs(cur-n)?Math.min(acc,cur):acc)
}