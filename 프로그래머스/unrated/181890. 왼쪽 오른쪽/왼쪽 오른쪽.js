function solution(str_list) {
    const index = str_list.findIndex((a)=>a==='l' || a==='r');
    if(str_list[index] === 'r') {
        return str_list.slice(index+1);
    } else return str_list.slice(0,index)
}