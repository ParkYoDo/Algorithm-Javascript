function solution(myString) {
    return [...myString].map((a)=>a<'l'?'l':a).join('')
}