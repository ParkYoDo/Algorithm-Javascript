function solution(arr) {
    var stk = [];
    var i=0;
    while(i<arr.length) {
        if(!stk.length) {
            stk.push(arr[i]);
            i++;
        }
        if(stk.length && stk[stk.length-1] < arr[i]) {
            stk.push(arr[i]);
            i++; 
        } else {
            stk.pop();
        }
    }
    return stk;
}