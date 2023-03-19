function solution(box, n) {
    return box.map((a)=>parseInt(a/n)).reduce((acc,cur)=>acc*cur,1);
}