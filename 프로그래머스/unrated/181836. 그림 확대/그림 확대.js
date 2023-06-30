function solution(picture, k) {
    var result =[];
    var a =picture.map((a)=>[...a].map((b)=>b.repeat(k)).join(''));
    for(var i=0; i<a.length; i++) {
        for(var j=0; j<k; j++){
            result.push(a[i]);
        }        
    }
    return result;
}