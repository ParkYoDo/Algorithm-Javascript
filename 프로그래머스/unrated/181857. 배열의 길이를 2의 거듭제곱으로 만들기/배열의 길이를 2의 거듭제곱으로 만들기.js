function solution(arr) {
    var count = 1;
    while(arr.length>count) {
        count *= 2;
    }
    return Array(count).fill(0).map((a,i)=>arr[i]?arr[i]:a);
}