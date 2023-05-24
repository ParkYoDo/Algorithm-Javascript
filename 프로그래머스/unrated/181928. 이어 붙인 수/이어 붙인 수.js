function solution(num_list) {
    var odd = []
    var even = []
    for(var i=0; i<num_list.length; i++) {
        if(num_list[i]%2) {
            odd.push(num_list[i]);
        } else even.push(num_list[i]);
    }
    return Number(odd.join('')) + Number(even.join(''))
}