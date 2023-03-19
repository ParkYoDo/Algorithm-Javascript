function solution(order) {
    return [...order.toString()].filter((a)=>Number(a)&&Number(a)%3===0).length;
}