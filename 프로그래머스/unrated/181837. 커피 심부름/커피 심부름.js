function solution(order) {
    return order.reduce((a,b)=>{
        if(b.includes('cafelatte')) {
            return a + 5000    
        } else return a + 4500;   
    }, 0)
}