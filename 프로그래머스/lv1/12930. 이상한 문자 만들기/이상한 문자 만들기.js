function solution(s) {
    
    return s.split(' ').map((a)=>[...a].map((b,i)=>i%2===0?b.toUpperCase():b.toLowerCase()).join('')).join(' ')
}