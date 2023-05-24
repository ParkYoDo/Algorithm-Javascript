function solution(myString, pat) {
    var newString = [...myString].map((a)=>a==='A'?'B':'A').join('')
    return newString.includes(pat)?1:0;
}