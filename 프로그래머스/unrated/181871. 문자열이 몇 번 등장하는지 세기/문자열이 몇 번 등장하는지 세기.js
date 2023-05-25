function solution(myString, pat) {
    var result = 0;
    for(var i=0; i<myString.length; i++) {
        myString.slice(i, i+pat.length) === pat && result++
    }
    return result;
}