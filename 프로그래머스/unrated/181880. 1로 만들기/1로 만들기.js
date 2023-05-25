function solution(num_list) {
    var result = 0;
    for(var i=0; i<num_list.length; i++){
        var count = 0;
        while(num_list[i]!==1) {
            if(num_list[i]%2) {
                num_list[i] = (num_list[i] -1)/2
                count += 1;
            } else {
                num_list[i] = num_list[i]/2
                count += 1;
            }
        }
        result += count;
    }
    return result;
}