function solution(numbers) {
    var array = numbers.sort((a,b)=>b-a)
    var result = Math.max(array[0]*array[1],array[array.length-1]*array[array.length-2])
    
    return result;
}