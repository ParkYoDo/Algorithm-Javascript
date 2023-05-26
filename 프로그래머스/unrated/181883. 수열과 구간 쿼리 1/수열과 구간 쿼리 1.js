function solution(arr, queries) {
    for(var i=0; i<queries.length; i++){
        const [index1, index2] = queries[i];
        arr = arr.map((a,i)=> i>=index1 && i<=index2 ? a+1:a)
    }
    return arr;
}