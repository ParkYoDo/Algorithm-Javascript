function solution(arr, n) {
    if(arr.length%2) {
        return arr.map((a,i)=>!(i%2)?a+n:a)
    } else return arr.map((a,i)=>(i%2)?a+n:a)
}