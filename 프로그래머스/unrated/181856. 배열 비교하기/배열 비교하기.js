function solution(arr1, arr2) {
    if(arr1.length!==arr2.length) {
        return Math.max(arr1.length, arr2.length)===arr1.length?1:-1
    } else {
        var sumArr1 = Math.max(arr1.reduce((a,b)=>a+b,0));
        var sumArr2 = Math.max(arr2.reduce((a,b)=>a+b,0));
        return sumArr1>sumArr2?1:sumArr1===sumArr2?0:-1
    }
}