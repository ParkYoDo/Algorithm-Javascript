function solution(my_string) {
    var result = '';
    for(var i=0; i<my_string.length; i++) {
        if(my_string[i] !==' ') {
                if(my_string[i-1]===' ') {
                 result += ' ' + my_string[i]       
                } else {
                    result += my_string[i]       
                }
            }
        }
    return result.split(' ').filter((a)=>a);
}