function solution(arr){
    var array = [];
    for(var i=0; i<arr.length; i++){
        array[array.length-1] !==arr[i] && array.push(arr[i])
    }
    return array;
}