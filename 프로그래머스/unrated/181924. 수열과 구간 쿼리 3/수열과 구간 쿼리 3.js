function solution(arr, queries) {
    queries.forEach(([index1,index2])=>{
        [arr[index1], arr[index2]] = [arr[index2],arr[index1]];
    })
    return arr;
}