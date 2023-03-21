function solution(chicken) {
    var result=0;
    while(true){
        result += parseInt(chicken/10);
        chicken = chicken%10 + parseInt(chicken/10);
        if(chicken<10) {
            break;
        }
    }
    return result;
}