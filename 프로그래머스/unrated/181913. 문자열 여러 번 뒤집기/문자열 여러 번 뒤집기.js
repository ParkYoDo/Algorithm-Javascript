function solution(my_string, queries) {
    const result = [...my_string];
    
    queries.forEach((element)=> {
        const [from, to] = element;
        const reverse = result.slice(from, to+1).reverse();
        
        result.splice(from, to-from +1 ,...reverse);
    })
    return result.join('');
}