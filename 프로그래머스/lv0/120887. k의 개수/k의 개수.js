function solution(i, j, k) {
    var count =0;
    for(i; i<=j;i++) {
    count += [...i.toString()].filter((a)=>Number(a)===k).length;
    }
    return count;
}