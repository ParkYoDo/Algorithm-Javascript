function solution(rsp) {
    const object={2:0, 0:5, 5:2}
    return [...rsp].map((a)=>object[a]).join('');
}