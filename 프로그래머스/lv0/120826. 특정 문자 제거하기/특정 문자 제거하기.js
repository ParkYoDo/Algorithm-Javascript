function solution(my_string, letter) {
    var answer = '';
    
    const index = my_string.split('').filter((a)=>a!==letter).join('');
    
    
    
    return index;
}