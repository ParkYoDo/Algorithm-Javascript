function solution(my_string) {
    var string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    
    return string.split('').map((a)=>[...my_string].filter((b)=>b===a).length);
}