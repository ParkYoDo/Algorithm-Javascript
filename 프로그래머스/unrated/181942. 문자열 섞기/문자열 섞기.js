function solution(str1, str2) {
    var result = '';
    for(var i=0; i<str1.length; i++) {
        result += str1[i];
        result += str2[i];
    }
    return result;
}