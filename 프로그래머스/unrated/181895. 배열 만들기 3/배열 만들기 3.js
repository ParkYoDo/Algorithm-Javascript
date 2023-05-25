function solution(arr, intervals) {
    return intervals.map((a,i)=>arr.slice(...a).concat(arr[a[1]])).flat()
}