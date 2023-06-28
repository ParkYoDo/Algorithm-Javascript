function solution(arr) {
    var stk = [];
    
    for(var i=0 ;i<arr.length; i++) {
        if(!stk.length) {
            stk.push(arr[i]);
        }
        else if(stk.length && stk[stk.length-1] === arr[i]) {
            stk.pop();
        } else {
            stk.push(arr[i]);
        }
    }
    return stk.length ? stk : [-1];
}

    // var i=0;
    
    // while(i<arr.length) {
    //     if(!stk.length) {
    //         stk.push(arr[i]);
    //         i++;
    //     }
    //     if(stk.length && stk[stk.length-1] === arr[i]) {
    //         stk.pop();
    //         i++;
    //     } else {
    //         stk.push(arr[i]);
    //         i++
    //     }
    // }