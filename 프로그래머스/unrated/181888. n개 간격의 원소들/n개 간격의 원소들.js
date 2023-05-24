function solution(num_list, n) {
    return num_list.filter((a,i)=>!(i%n));
}