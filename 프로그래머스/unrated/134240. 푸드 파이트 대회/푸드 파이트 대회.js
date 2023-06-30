function solution(food) {
    var result = '';
    for(var i=0; i<food.length; i++ ) {
        const count = parseInt(food[i]/2);
        if(count !== 0) {
            result += i.toString().repeat(count);
        }
    }
    return result + '0'+ [...result].reverse().join('')
}