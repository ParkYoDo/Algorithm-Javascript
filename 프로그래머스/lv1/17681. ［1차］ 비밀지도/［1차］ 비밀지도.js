function solution(n, arr1, arr2) {
    var newArr1 = arr1.map((a)=>a.toString(2).length!==n?'0'.repeat(n-a.toString(2).length)+a.toString(2):a.toString(2)).join('').split('');
    var newArr2 = arr2.map((a)=>a.toString(2).length!==n?'0'.repeat(n-a.toString(2).length)+a.toString(2):a.toString(2)).join('').split('');
    var mergeArr = newArr1.map((a,i)=>Number(a)+Number(newArr2[i])===2?1:Number(a)+Number(newArr2[i])).map((a)=>a===1?'#':' ');
    var result =[];
    while(mergeArr.length) {
        result.push(mergeArr.splice(0,n));
    }
    return result.map((a)=>a.join(''));
}