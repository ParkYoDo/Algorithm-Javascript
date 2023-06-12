function solution(arr, queries) {
    queries.forEach(([s,e,k],i)=> {
        for(s; s<=e; s++) {
            if(s/k === parseInt(s/k)) {
                arr[s]++;
            }
        }
    })
    return arr;
}