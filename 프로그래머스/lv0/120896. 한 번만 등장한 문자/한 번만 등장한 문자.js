function solution(s) {
    return [...s].filter((a)=>!s.replace(a,'').includes(a)).sort().join('')
}