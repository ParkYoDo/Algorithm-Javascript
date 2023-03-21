function solution(num) {
    var count =0;
    while((num!==1 && count<=500)) {
        if( num%2 ===0){
            num= num/2;
            count = count+1;
        } else {
            num = num*3+1;
            count = count+1;
        }
    }
    
    return count>500?-1:count;
}