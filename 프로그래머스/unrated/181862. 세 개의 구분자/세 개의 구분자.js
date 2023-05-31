function solution(myStr) {
    var result =  myStr.replaceAll('a',' ').replaceAll('b', ' ').replaceAll('c', ' ').split(' ').filter((a)=>a);
    return result.length? result : ['EMPTY'] ;
}