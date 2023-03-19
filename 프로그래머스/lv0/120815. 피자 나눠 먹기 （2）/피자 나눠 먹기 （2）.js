function solution(n) {
    var answer = 0;
    var lcm =1;
    while(true) {
        if(lcm%6===0 && lcm%n===0) {
            break;
        }
        lcm++;
    }
    return lcm/6;
}