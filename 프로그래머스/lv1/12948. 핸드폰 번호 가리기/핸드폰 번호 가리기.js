function solution(s) {
        return '*'.repeat([...s].slice(0,-4).length)+[...s].slice(-4).join('');
   

}