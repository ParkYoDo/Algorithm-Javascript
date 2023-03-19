function solution(my_string) {
    
    return [...my_string].filter((a)=>Number(a)).reduce((acc,cur)=>acc+Number(cur),0)
}