function solution(quiz) {
    const result = [];
    
    for(var i = 0; i<quiz.length; i++) {
        console.log(quiz[i].split(' '))
        const [a,b,c,d,e] = quiz[i].split(' ');
        if(b === '-'){
            if(Number(a) - Number(c) === Number(e)) {
                result.push('O');
            } else result.push('X');
        } 
        if(b === '+'){
            if(Number(a) + Number(c) ===Number(e)) {
                result.push('O')   
            } else result.push('X')
        } 
    }
    return result;
}