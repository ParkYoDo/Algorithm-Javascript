function solution(num_list, n) {
    var array =[];
    
    while(num_list.length/n) {
        array.push(num_list.splice(0,n));
    }
    

    return array;
}