function solution(s) {
    if((s.length===4||s.length===6)){
        return [...s].filter((a)=>Number(a)>=0&&Number(a)<=9).join('')===s?true:false;
    } else return false;
}