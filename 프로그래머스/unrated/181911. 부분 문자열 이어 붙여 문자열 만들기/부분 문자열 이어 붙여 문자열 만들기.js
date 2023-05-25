function solution(my_strings, parts) {
    return my_strings.map((a,i)=> a.slice(...parts[i]).concat(a.slice(parts[i][1], parts[i][1]+1))).join('');
}