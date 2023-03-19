function solution(s) {
    return s.split(' ').map((a)=>Number(a.slice(0,1))?a.toLowerCase():a.slice(0,1).toUpperCase()+a.slice(1).toLowerCase()).join(' ');
}