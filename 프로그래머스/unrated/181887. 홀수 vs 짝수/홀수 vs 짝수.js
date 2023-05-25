function solution(num_list) {
    var odd = [];
    var even = [];
    
    for(var i=0; i<num_list.length; i++){
        i%2?even.push(num_list[i]):odd.push(num_list[i])
    }
    var oddSum = odd.reduce((a,b)=> a+b,0)
    var evenSum = even.reduce((a,b)=> a+b,0)
    
    return Math.max(oddSum, evenSum);
}