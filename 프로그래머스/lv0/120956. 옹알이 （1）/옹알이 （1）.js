function solution(babbling) {
    var words = ['aya', 'ye', 'woo', 'ma'];
    
    for(var i=0; i<babbling.length; i++) {
        for(var j=0; j<words.length; j++) {
            babbling[i] = babbling[i].replaceAll(words[j], '*')
        }
    }
    return babbling.filter((a)=>a.replaceAll('*','')==='').length;
}