function solution(s) {
    return s.split(' ').map((a)=>a.slice(0,1).toUpperCase()+a.slice(1).toLowerCase()).join(' ');
}