function solution(polynomial) {
    const A = polynomial.split(' + ').filter((a)=>a.includes('x'))
    const B = polynomial.split(' + ').filter((a)=>!a.includes('x'))
    let AA = A.map((a)=>a.replace('x','')).map((a)=>a?Number(a):1).reduce((a,b)=>a+b,0);
    const BB = B.map((a)=>Number(a)).reduce((a,b)=>a+b,0);
    
    if(AA && BB) {
        if(AA === 1) {
            return `x + ${BB}`    
        }
        return `${AA}x + ${BB}`    
    } else if (AA && !BB) {
        if(AA === 1) {
            return 'x'
        } else return `${AA}x`    
    } else if (!AA && BB) {
        return `${BB}`    
    }
    
}