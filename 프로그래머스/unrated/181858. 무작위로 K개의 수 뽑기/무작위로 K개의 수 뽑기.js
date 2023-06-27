function solution(arr, k) {
    var answer = [];
    for(var i=0; i<arr.length; i++) {
        if(i===0 ||!answer.includes(arr[i])) {
            answer.push(arr[i]);  
        } 
    }
    
    if(answer.length === k) {
        return answer;
    } 
    else if(answer.length>k){
       return  answer.slice(0,k);
    } else {
        const array =  Array(k-answer.length).fill(-1);
        return answer.concat(array)
    }
}