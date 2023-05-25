function solution(my_string, indices) {
    var result = [...my_string]
    for(var i=0; i<indices.length; i++) {
        result[indices[i]] = ''
    }
    return result.filter((a)=>a).join('');
}