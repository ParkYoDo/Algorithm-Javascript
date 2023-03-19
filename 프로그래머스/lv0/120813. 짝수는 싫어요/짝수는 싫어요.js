function solution(n) {
    var array = [];
   for(var i=n; i>=0; i--) {
       i%2===1 &&array.unshift(i);
   }
    return array;
}