function solution(my_str, n) {
    return [...my_str].map((a,i)=>(i+1)%n===0?a+',':a).join('').split(',').filter((a)=>a!=='');
}