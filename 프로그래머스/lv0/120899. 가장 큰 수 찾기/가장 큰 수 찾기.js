function solution(array) {
    var number = [...array].sort((a,b)=>b-a)[0];
    return [number, array.indexOf(number)];
}