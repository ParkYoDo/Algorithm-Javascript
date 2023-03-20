function solution(s) {
    var Upper = [...s].filter((a)=>a===a.toUpperCase()).sort().reverse();
    var Lower = [...s].filter((a)=>a===a.toLowerCase()).sort().reverse();
    return Lower.concat(Upper).join('');
}