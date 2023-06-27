function solution(strArr) {
    var result = {};
    var array = strArr.map((a)=>a.length.toString());
    array.forEach((a)=> {
        if(result.hasOwnProperty(a)) {
            result[a] +=1;
        }
        else result[a] = 1;
    })
    return Math.max(...Object.values(result));
}