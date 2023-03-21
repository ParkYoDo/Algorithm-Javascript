function solution(arr){
    return arr.filter((a,i)=>arr[i]!=arr[i+1]);
}