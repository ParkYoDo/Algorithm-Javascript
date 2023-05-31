function solution(myStr) {
    // var result =  myStr.replaceAll('a',' ').replaceAll('b', ' ').replaceAll('c', ' ').split(' ').filter((a)=>a);
    // return result.length? result : ['EMPTY'] ;
    var result = myStr.split(/[abc]/).filter((a)=>a);
    return result.length? result : ['EMPTY'] ;
    
}