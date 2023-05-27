function solution(my_string, m, c) {
    var array = [];
    for(var i=0; i<my_string.length/m; i++) {
        array.push(my_string.slice(i*m,i*m+m))
    }
    return array.map((a)=>a[c-1]).join('');
}