function solution(n) {
    var i = 1;
    var result = [];

    while(result.length !== n) {
        if(!(i%3) || i.toString().includes('3')) {
            i++;
        } else {
        result.push(i);
        i++;
        }
    }
    
    return result[result.length-1];
}