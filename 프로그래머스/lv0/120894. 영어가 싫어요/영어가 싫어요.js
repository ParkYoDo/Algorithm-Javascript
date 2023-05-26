function solution(numbers) {
    var num = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine" ];
    
    for(var i=0; i<num.length; i++){
        numbers = numbers.replaceAll(num[i], num.findIndex((a)=>a===num[i]))
    }
    return Number(numbers);
}