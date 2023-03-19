function solution(emergency) {
    var array = [...emergency];
    var sortedArray = emergency.sort((a,b)=>b-a);
    
    var answer = array.map((a)=>(sortedArray.indexOf(a)+1));

    return answer;
}