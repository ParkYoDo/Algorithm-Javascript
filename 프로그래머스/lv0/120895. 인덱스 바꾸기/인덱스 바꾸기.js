function solution(my_string, num1, num2) {
    var array= [...my_string];
    return array.map((a,i)=>i===num1?array[num2]:i===num2?array[num1]:a).join('');
}