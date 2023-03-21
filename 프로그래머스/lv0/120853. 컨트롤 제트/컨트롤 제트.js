function solution(s) {
    var array = s.split(' ');
    return array.filter((a,i)=>array[i+1]!=='Z'&&a!=='Z').reduce((acc,cur)=>acc+Number(cur),0);
}