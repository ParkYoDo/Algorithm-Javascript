function solution(arr, queries) {
    queries.forEach((a)=>{
        const [index1, index2] = a;
        [arr[index1], arr[index2]] = [arr[index2],arr[index1]];
    })
    return arr;
}