function solution(arr, flag) {
    var result = [];
    flag.forEach((a,i)=> {
        if(a) {
            Array(arr[i]*2).fill(null).forEach((a)=>result.push(arr[i]))
        } else {
            Array(arr[i]).fill(null).forEach((a)=>result.pop())
        }
    })
    return result;
}