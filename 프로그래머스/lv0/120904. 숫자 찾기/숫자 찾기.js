function solution(num, k) {
    const index= [...num.toString()].findIndex((a)=> Number(a)===k)+1;
    return index?index:-1;
}