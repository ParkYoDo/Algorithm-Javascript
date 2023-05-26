function solution(my_string, s, e) {
    const sliceWord = my_string.slice(s,e+1);
    return my_string.replace(sliceWord, [...sliceWord].reverse().join(''))
}