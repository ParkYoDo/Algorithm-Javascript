function solution(arr, queries) {
    for(var i=0; i<queries.length; i++) {
        const [a,b] = queries[i];
        const array = [...arr];
        arr[a] = array[b];
        arr[b] = array[a];
    }
    return arr
}