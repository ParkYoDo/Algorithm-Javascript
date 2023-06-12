function solution(num, total) {
    if(num%2) {
        var array = Array(num).fill(null).map((a,i)=> (total/num)-parseInt(num/2)+i);
        return array;
    } else {
        var array = Array(num).fill(null).map((a,i)=> parseInt(total/num)-(num/2)+1+i);
        return array;
    }
}