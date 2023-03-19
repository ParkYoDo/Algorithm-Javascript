function solution(s){
    var countP = [...s].filter((a)=>a.toLowerCase()==='p').length;
    var countY = [...s].filter((a)=>a.toLowerCase()==='y').length;

    
    return countP===countY?true:false
}