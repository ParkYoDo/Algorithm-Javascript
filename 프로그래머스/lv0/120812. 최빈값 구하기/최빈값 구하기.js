function solution(array) {
    const result = {};
    
    if(array.length === 1) {
        return array[0];
    } else {
        for(var i=0; i<array.length; i++) {
            if(result[array[i]]) {
                result[array[i]] += 1
            } else {
                result[array[i]] = 1
            }
         }
        let 최빈값 = Object.values(result).sort((a,b)=>b-a);
        최빈값 = 최빈값[0] === 최빈값[1] ? -1 : 최빈값[0];
        if(최빈값 === -1) {
            return -1;
        }
        const keyResult = Object.keys(result);
        return Number(keyResult.find((a)=>result[a] === 최빈값))
    }
}