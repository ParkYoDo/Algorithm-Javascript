function solution(t, p) {
    var array =[];
    for(var i=0; i<t.length-p.length +1; i++){
        array.push(t.slice(i,i+p.length));
    }
    return array.filter((a)=>Number(a)<=Number(p)).length;
}