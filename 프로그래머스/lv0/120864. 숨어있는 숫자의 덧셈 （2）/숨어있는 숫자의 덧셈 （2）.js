function solution(my_string) {
    
    return [...my_string].map((a)=> Number(a+1)?Number(a):',').join('').split(',').filter((a)=>Number(a)).reduce((acc,cur)=>Number(acc)+Number(cur),0);
}